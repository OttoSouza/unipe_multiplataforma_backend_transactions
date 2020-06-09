exports.up = function (knex) {
  return knex.schema.createTable("incomes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.float("value").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("incomes");
};
