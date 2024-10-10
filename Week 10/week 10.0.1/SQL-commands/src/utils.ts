import { Client } from 'pg';
require("dotenv").config();

export async function getClient() {
    const client = new Client(process.env.DATABASE_URL);
    await client.connect();
    return client;
}