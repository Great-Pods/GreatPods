import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email'),
});

// OR ALTERNATIVELY
// export const users = sqliteTable("users", {
//	 id: integer("id").primaryKey(),
//   kindeId: text("kinde_id"),
//   firstName: text("first_name"),
//   lastName: text("last_name"),
//   email: text("email"),
// });

//sqlite3 sqlite.db
// INSERT INTO users (first_name, last_name, email) VALUES ('Jane', 'Doe', 'jane@example.com')

// CREATE TABLE users (
//     first_name TEXT,
//     last_name TEXT,
//     email TEXT
// );

//https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3
// npm install drizzle-orm better-sqlite3
// npm i -D drizzle-kit
//so i used Kinde to set up drizzle and bettersqlite3
//created a db folder with index.ts and schema.ts for the files
//schema.ts is how you create the different schemas and also incorporating types, defining schema in short
//index.ts is to set up drizzle, created a sqlite3 db called sqlite.db, overall connects drizzle and sqlite3
//using betterSqlite3Database and using migration so its available on drizzle local studio
//created drizzle.config.ts in root directory for any configs...given...by docs
//also had to change tsconfig.json to es6 because drizzle does not like es5
//ran npx drizzle-kit generate:sqlite to get the db up and running
//can run 'npx drizzle-kit studio' to see the local database
//probably can see the databse using the sqlite extension, but drizzle kit is good
//only one user inputted manually...couldnt enter users through cli command...
//but db should be set up and running