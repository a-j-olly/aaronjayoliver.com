import { Client } from "pg";
import { readFileSync } from "fs";

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

const dropQuery = readFileSync("./src/sql/drop.sql", "utf-8");
const schemaQuery = readFileSync("./src/sql/schema.sql", "utf-8");
const seedQuery = readFileSync("./src/sql/seed.sql", "utf-8");

export async function handler() {
	try {
		await client.connect();
		console.log("Connected");

		await client.query(dropQuery);
		console.log("Drop tables query complete");

		await client.query(schemaQuery);
		console.log("Create schema query complete");

		await client.query(seedQuery);
		console.log("Seed db query complete");

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "DB migration complete" }),
		};
	} catch (err: any) {
		console.error("Database error:", err);
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: "Error updating database schema",
				error: err.message,
			}),
		};
	} finally {
		await client.end();
	}
}
