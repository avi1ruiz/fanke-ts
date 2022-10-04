import { addCard, deleteCard, findCards, updateCard } from '../controllers/cards.controllers'
import { Router } from 'express'
import passport from 'passport'

const router: Router = Router()

router.get('/cards/all', passport.authenticate('jwt'), findCards)

router.post('/cards/add', passport.authenticate('jwt'), addCard)

router.delete('/cards/delete/:id', passport.authenticate('jwt'), deleteCard)

router.put('/cards/update/:id', passport.authenticate('jwt'), updateCard)

export default router