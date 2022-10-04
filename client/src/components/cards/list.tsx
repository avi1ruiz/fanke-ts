import axios from "axios";
import { useEffect, useState } from "react";

interface Card {
    question: string,
    answer: string,
    _id: string
}

export function ListCards() {

    const [cards, setCards] = useState<Card[]>([]);

    async function getCards() {
        const response = await axios({
            method: 'get',
            headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2JjNDQwM2I2ZTg2NWI1OGQ2NDk2NCIsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE2NjQ4NjU4OTAsImV4cCI6MTY2NDg2OTQ5MH0.-u-wBLEOp3VP_LRerwaYIXrMQQ7wnBnkrKLGN573f4A' },
            url: 'http://localhost:4000/cards/all'
        })
        setCards(response.data)
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <>
            {
                cards.map(card => {
                    return (<div key={card._id}>
                        <h1>{card.question}</h1>
                        <p>{card.answer}</p>
                    </div>)
                })
            }
        </>
    )

}