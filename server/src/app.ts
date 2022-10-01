// IMPORTS
import express, { Application, application } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'

import envs from './config'
import authRoutes from './routes/auth.routes'
import './libs/passport'
// CONFIGURACIONES

const app: Application = express();

app.set("port", envs.SERVER_PORT)


// MIDDLEWARES

app.use(morgan('dev'))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session());

// RUTAS

app.use(authRoutes)

// EXPORTAR EXPRESS
export default app;