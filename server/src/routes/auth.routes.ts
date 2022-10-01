import { login, register } from '../controllers/auth.controllers';
import { Router } from 'express'
import passport from 'passport'

const router: Router = Router();

router.post('/auth/login', passport.authenticate('local'), login)

router.post('/auth/register', register)

export default router;