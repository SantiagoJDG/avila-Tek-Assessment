import pg, { Client } from 'pg';

const getConnection = async() => {
    
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'santiago',
        password: 'Abcd1234',
        database: 'avila_tek_store'
    }); 

    await client.connect();

    return client;
}

export default getConnection