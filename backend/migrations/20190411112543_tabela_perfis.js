
exports.up = function (knex, Promise) {
  return knex.schema.createTable('perfis', table => {
    table.increments('id').primary()
    table.string('nome').notNull().unique()
    table.string('rotulo').notNull()
  }).then(function () {
    return knex('perfis').insert([
      { nome: 'comum', rotulo: 'Common' },
      { nome: 'admin', rotulo: 'Administrator' },
    ])
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('perfis')
};
