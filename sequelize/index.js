import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//   "may_db_2026",
//   "may_db_2026_user",
//   "iRnNIPqseTod6SwJhESkfixCZOl5zGm5",
//   {
//     // host: "dpg-d85j7lfaqgkc73behq80-a.oregon-postgres.render.com",
//     host: "dpg-d85j7lfaqgkc73behq80-a",
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

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

export const sequelize = new Sequelize(
  "june_2026",
  "june_2026_user",
  "gBYk6zEHSTbUw0nhpAYjoqQYvCct0qMz",
  {
    // host: "dpg-d8rp6dnlk1mc73c6e5bg-a.oregon-postgres.render.com",
    host: "dpg-d8rp6dnlk1mc73c6e5bg-a",
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
