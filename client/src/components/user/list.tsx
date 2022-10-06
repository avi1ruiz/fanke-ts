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
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container">
            <div className="row row-cols-4">
                {
                    cards.map(card => {
                        return (
                            <div key={card._id} className="col-md-4 d-flex justify-content-center">
                                <div className="card" style={{ width: "15rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{card.question}</h5>
                                        <p className="card-text">{card.answer}</p>
                                        <div className="btn-group">
                                            <DeleteCard CardID={card._id} />
                                            <UpdateCard CardID={card._id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

}