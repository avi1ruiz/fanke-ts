import axios from "axios";
import { useState } from "react"

export function AddCard() {

    const [questionForm, setQuestionForm] = useState("");
    const [answerForm, setAnswerForm] = useState("");

    async function handleSubmit() {

        const response = await axios({
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2JjNDQwM2I2ZTg2NWI1OGQ2NDk2NCIsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE2NjQ5MjI2MDUsImV4cCI6MTY2NDkyNjIwNX0.uCmdrZfRPyV_H2ZKu8t66zOAH2CQTMHGpXL4QztL0Yo'
            },
            data: {
                questionForm: questionForm,
                answerForm: answerForm
            },
            url: 'http://localhost:4000/cards/add'
        })

        console.log(response.data.state)

    }


    return (
        <>
            <form>

                <label>Pregunta</label>
                <textarea name="questionForm" cols={30} rows={5} placeholder="Pregunta" onChange={(e) => setQuestionForm(e.target.value)}></textarea>
                <label>Respuesta</label>
                <textarea name="answerForm" cols={30} rows={10} onChange={(e) => setAnswerForm(e.target.value)}></textarea>

                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }} >Agregar</button>

            </form>
        </>
    )

}