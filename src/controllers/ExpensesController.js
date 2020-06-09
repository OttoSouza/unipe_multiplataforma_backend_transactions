const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    try {
      const expenses = await connection("expenses").select("*");
      return response.status(200).json(expenses);
    } catch {
      return response.status(400).json({ err: "There're no expenses!" });
    }
  },
  async create(request, response) {
    const { name, value } = request.body;
    try {
      const expenses = await connection("expenses").insert({
        name,
        value,
      });
      return response.status(204).json(expenses);
    } catch (error) {
      return response.status(400).json({ err: "Put a name and value!" });
    }
  },

  async update(request, response) {
    const { name, value } = request.body;
    const { id } = request.params;
    try {
      const expenses = await connection("expenses").where("id", id).update({
        name,
        value,
      });
      return response.status(204).json(expenses);
    } catch (error) {
      return response.status(400).json({ err: "Expenses doesn't exist" });
    }
  },

  async getById(request, response) {
    const { id } = request.params;
    try {
      const expenses = await connection("expenses").where("id", id).first();
      if (!expenses)
        return response
          .status(400)
          .json({ message: "Expenses doesn't exists" });

      return response.status(200).json(expenses);
    } catch {
      return response.status(400).json({ err: "Expenses doesn't exist" });
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      await connection("expenses").delete().where({ id: id });
      return response.status(200).json({ message: "Success deleted" });
    } catch {
      return response.status(400).json({ err: "Expenses doesn't exist" });
    }
  },
};
