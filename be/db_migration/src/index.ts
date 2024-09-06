import { Client } from "pg";
import { readFileSync } from "fs";

const client = new Client({
	connectionString: process.env.DB_URL,
});

const schemaQuery = readFileSync("./sql/schema.sql", "utf-8");
const seedQuery = readFileSync("./sql/seed.sql", "utf-8");

export async function handler() {
	try {
		await client.connect();
		console.log("Connected");

		await client.query(schemaQuery);
		console.log("Schema query complete");

		await client.query(seedQuery);
		console.log("Seed query complete");

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
