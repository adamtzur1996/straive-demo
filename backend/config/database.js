module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'straive.c5cyakklj31s.ap-south-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'straive'),
        username: env('DATABASE_USERNAME', 'straive'),
        password: env('DATABASE_PASSWORD', 'straive123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
