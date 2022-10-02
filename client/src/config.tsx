//import { config } from 'dotenv'

//config()

const envs = {
    REGISTER_HOST: process.env.REGISTER_HOST || 'http://localhost:4000/auth/register'
}

export default envs