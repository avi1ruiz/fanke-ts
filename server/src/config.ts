import { config } from 'dotenv'

config()

const envs = {
    SERVER_PORT: process.env.SERVER_PORT || 4000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27018'
}

export default envs;