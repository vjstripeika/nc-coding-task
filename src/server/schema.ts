import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const featuresTable = sqliteTable("features_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  text: text().notNull(),
  subtext: text().notNull(),
});

export const reviewsTable = sqliteTable("reviews_table", {
  id: int().primaryKey({ autoIncrement: true }),
  author: text().notNull(),
  organization: text().notNull(),
  review: text().notNull(),
  image: text().notNull(),
});
