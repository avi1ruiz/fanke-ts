import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteCard } from "./delete";
import { UpdateCard } from "./update";

interface Card {
    question: string,
    answer: string,
    _id: string
}

export function ListCards() {

    const token = localStorage.getItem('token')

    const [cards, setCards] = useState<Card[]>([]);

    async function getCards() {
        const response = await axios({
            method: 'get',
            headers: { 'token': `${token}` },
            url: 'http://localhost:4000/cards/all'
        })
        setCards(response.data)
    }

    useEffect(() => {
        getCards()
    })

    return (
        <>
            {
                cards.map(card => {
                    return (<div key={card._id}>
                        <h1>{card.question}</h1>
                        <p>{card.answer}</p>
                        <div>
                            <DeleteCard CardID={card._id}/>
                            <UpdateCard CardID={card._id}/>
                        </div>
                    </div>)
                })
            }
        </>
    )

}