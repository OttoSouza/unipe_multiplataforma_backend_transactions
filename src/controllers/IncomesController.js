const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    try {
      const incomes = await connection("incomes").select("*");
      return response.status(200).json(incomes);
    } catch {
      return response.status(400).json({ err: "Nao existem dados" });
    }
  },
  async create(request, response) {
    const { name, value } = request.body;
    const incomes = await connection("incomes").insert({
      name,
      value,
    });
    return response.status(201).json(incomes);
  },

  async update(request, response) {
    const { name, value } = request.body;
    const { id } = request.params;
    try {
      const incomes = await connection("incomes").where("id", id).update({
        name,
        value,
      });
      return response.status(200).json(incomes);
    } catch (error) {
      return response.status(400).json({ err: "Nao existem dados" });
    }
  },

  async getById(request, response) {
    const { id } = request.params;
    try {
      const income = await connection("incomes").where("id", id).first();
      if (!income)
        return response.status(400).json({ message: "Income doesn't exists" });

      return response.status(200).json(income);
    } catch {
      return response.status(400).json({ err: "Nao existem dados" });
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      await connection("incomes").delete().where({ id: id });

      return response.status(200).json({ message: "Success deleted" });
    } catch {
      return response.status(400).json({ err: "Doesn't exist" });
    }
  },
};
