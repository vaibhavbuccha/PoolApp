import {Client, Account, Databases} from 'appwrite';

const client = new Client()

client.setEndpoint(process.env.REACT_APP_ENDPOINT).setProject(process.env.REACT_APP_PROJECT_KEY)

export const account = new Account(client);

// Database
export const databases = new Databases(client, process.env.REACT_APP_DB_KEY)