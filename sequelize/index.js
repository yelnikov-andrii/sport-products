import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//   "db_april_2026",
//   "db_april_2026_user",
//   "0wqmsM8AmR5PfLOHcW9XURzXWBKNoRQ0",
//   {
//     host: "dpg-d7ea4lkvikkc73ekj6n0-a.oregon-postgres.render.com",
//     // host: "dpg-d7ea4lkvikkc73ekj6n0-a",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//     dialect: "postgres",
//     logging: false,
//   },
// );

export const sequelize = new Sequelize(
  "may_db_2026",
  "may_db_2026_user",
  "iRnNIPqseTod6SwJhESkfixCZOl5zGm5",
  {
    // host: "dpg-d85j7lfaqgkc73behq80-a.oregon-postgres.render.com",
    host: "dpg-d85j7lfaqgkc73behq80-a",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    dialect: "postgres",
    logging: false,
  },
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
