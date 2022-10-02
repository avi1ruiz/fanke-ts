import envs from '../config'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user'

type ReqUser = {
    _id: string,
    username: string
}

export const register = async (req: Request, res: Response) => {
    const { usernameForm, emailForm, passwordForm } = req.body;

    try {
        const emailFound = await User.findOne({ email: emailForm }).lean();
        if (emailFound) return res.json({ msg: 'Email ya en uso' })

        const usernameFound = await User.findOne({ username: usernameForm }).lean();
        if (usernameFound) return res.json({ msg: "Usuario ya existente" })

        const newUser = new User({
            email: emailForm,
            username: usernameForm,
            password: passwordForm
        })

        newUser.password = await newUser.encryptPassword(newUser.password)

        newUser.save()

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(400).json(error)
    }

}

export const login = (req: Request, res: Response) => {
    const user = <ReqUser>req.user;

    try {
        const token = jwt.sign({ id: user._id, username: user.username }, envs.JWT_SECRET, {
            expiresIn: "1h",
        })

        res.status(200).json(token)
    } catch (error) {
        res.status(400).json(error)
    }
    
}
