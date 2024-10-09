// write a function to create a users table in your database.
import { Client } from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new PostgreSQL client using environment variables
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT ? Number(process.env.PGPORT) : undefined,
    ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,  // Optional SSL handling
});


// Create query
async function createUsersTable() {
    try {
        await client.connect();  // Ensure client connection is established
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Table created successfully:", result);
    } catch (error) {
        console.error("Error creating table:", error);
    } finally {
        await client.end(); // Close the client connection
    }
}

// Insert query
async function insertData(username:string, email:string, password:string) {
    try {
        await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log(`Insertion successful ${res}`); // Output insertion result
    } catch (error) {
        console.error('Error during the insertion:', error);
    }finally{
        await client.end(); // Close the client connection
    }
}

async function getUsers(email:string){
    try{
        await client.connect();
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(query, values);

        if(result.rows.length > 0){
            console.log("User found : ", result.rows[0]); // output user data
            return result.rows[0]; // return the user data
        }
        else{
            console.log('No user found with the given email.');
            return null; // return null if no user was found
        }
    }
    catch(err){
        console.log(`Error during fetching user : ${err}`);
        throw err; // rethrow or handle error appropriately
    }
    finally{
        await client.end();
    }
}


// Relationships
async function createAddressTable(){
    try {
        await client.connect();
        const result = await client.query(`
            CREATE TABLE addresses(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            );`);
            console.log("Table created successfully:", result);
    } catch (error) {
        console.error("Error creating table:", error);
    } finally {
        await client.end(); // Close the client connection
    }
}


async function insertDataIntoAddressesTable(user_id:number, city:string, country:string, street:string, pincode: string){
    try {
        await client.connect();
        const insertQuery = "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)"
        const values = [user_id, city, country, street, pincode];
        const res = await client.query(insertQuery, values);
        console.log(`Insertion successful ${res}`); // Output insertion result
    } catch (error) {
        console.error('Error during the insertion:', error);
    }finally{
        await client.end();
    }
}


// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: number) {
    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}

// Example usage
// createUsersTable();
// insertData('vidit', 'vidit@example.com', 'vidit_password').catch(console.error);
// getUsers('vidit@example.com').catch(console.error);
// createAddressTable();
// insertDataIntoAddressesTable(1, 'New York', 'USA', '123 Broadway St', '10001');
getUserDetailsWithAddress(1);