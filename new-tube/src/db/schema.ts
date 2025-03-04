import {
	pgTable,
	text,
	timestamp,
	uniqueIndex,
	uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable(
	"users",
	{
		id: uuid("id").defaultRandom().primaryKey(),
		clerkId: text("clerk_id").notNull().unique(),
		name: text("name").notNull(),
		imageUrl: text("image_url").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)],
);
