import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('postgres', 'postgres', 'kozak1488', {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false
//   });

//   import { Sequelize } from 'sequelize';


// export const sequelize = new Sequelize('database_24_10', 'database_24_10_user', 'OwfCX0mNX9Gl6bwkIBPPjgXNjLOFoA7c', {
//   host: 'dpg-cks1f9mnfb1c73eo9du0-a.oregon-postgres.render.com',
//   // host: 'dpg-cks1f9mnfb1c73eo9du0-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

// export const sequelize = new Sequelize('database_24_01', 'database_24_01_user', '7jMDla7q6hWKQP3CrIb4aA5UBFQOgPgB', {
//   host: 'dpg-cmone5un7f5s73d8ummg-a.oregon-postgres.render.com',
//   // host: 'dpg-cmone5un7f5s73d8ummg-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// export const sequelize = new Sequelize('mydatabase_27kd', 'mydatabase_27kd_user', 'RjN6wPs0H75Oz7DuOBU7aqxcoslMwcO8', {
//   host: 'dpg-coolt8v79t8c73f66d40-a.oregon-postgres.render.com',
//   host: 'dpg-coolt8v79t8c73f66d40-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

export const sequelize = new Sequelize('database_px2t', 'database_px2t_user', 'cI4I7HWCXsr8jZNfP4xMJQTb1oohnrvL', {
  // host: 'dpg-cqkcr4g8fa8c73ckmsi0-a.oregon-postgres.render.com',
  host: 'dpg-cqkcr4g8fa8c73ckmsi0-a',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  dialect: 'postgres',
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}