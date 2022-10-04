import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import card from "../models/card";

type ReqUser = {
    _id: string,
    username: string
}

async function getDataUser(token: string): Promise<ReqUser> {
    const data = <ReqUser> await jwt.verify(token, 'secret')
    return {
        username: data.username,
        _id: data._id
    }
}


export const addCard = async (req: Request, res: Response) => {

    const {username} = await getDataUser(req.header('token') as string)
    const { questionForm, answerForm } = req.body

    try {
        const newCard = new card({
            username: username,
            question: questionForm,
            answer: answerForm
        })

        newCard.save()

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(400).json({ state: false })
    }
}

export const findCards = async (req: Request, res: Response) => {

    const {username} = await getDataUser(req.header('token') as string)

    try {
        const cards = await card.find({ username: username }).lean()

        res.status(200).json(cards)
    } catch (error) {
        res.status(200).json(error)
    }

}

export const deleteCard = (req: Request, res: Response) => {
    const { id } = req.params

    try {
        card.findByIdAndDelete(id)

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(400).json({ state: false })
    }
}

export const updateCard = (req: Request, res: Response) => {
    const { questionForm, answerForm } = req.body
    const { id } = req.params;

    try {

        card.findByIdAndUpdate(id,
            {
                question: questionForm,
                answer: answerForm
            }
        )

        res.status(200).json({state: true})

    } catch (error) {
        res.status(400).json(error)
    }
}