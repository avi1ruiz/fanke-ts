import { Request, Response } from "express";
import card from "models/card";

type ReqUser = {
    _id: string,
    username: string
}

export const addCard = (req: Request, res: Response) => {
    const user = <ReqUser>req.user;
    const { questionForm, answerForm } = req.body

    try {
        const newCard = new card({
            username: user.username,
            question: questionForm,
            answer: answerForm
        })

        newCard.save()

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(400).json({ state: false })
    }
}

export const findCards = (req: Request, res: Response) => {

    const user = <ReqUser>req.user;

    try {
        const cardsFind = card.find({ username: user.username }).lean

        res.status(200).json(cardsFind)
    } catch (error) {
        res.status(200).json(error)
    }

}

export const deleteCard = (req: Request, res: Response) => {
    const { _id } = req.body

    try {
        card.findByIdAndDelete(_id)

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(400).json({ state: false })
    }
}

export const updateCard = (req: Request, res: Response) => {
    const { questionForm, answerForm, _id } = req.body

    try {

        card.findByIdAndUpdate(_id,
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