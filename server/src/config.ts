import { config } from 'dotenv'

config()

const envs = {
    SERVER_PORT: process.env.SERVER_PORT || 4000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27018',
    SESSION_SECRET: process.env.SESSION_SECRET || 'secret',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
}

export default envs;