import { Request, Response } from 'express'
import User from '../models/user'

export const register = async (req: Request, res: Response) => {
    const { usernameForm, emailForm, passwordForm } = req.body;

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
}

export const login = (req: Request, res: Response) => {
    res.status(200).json({ msg: "Login exitoso" })
}
