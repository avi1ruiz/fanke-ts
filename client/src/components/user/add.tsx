import axios from "axios";
import { useState } from "react"

export function AddCard() {

    const token = localStorage.getItem('token')
    const [questionForm, setQuestionForm] = useState("");
    const [answerForm, setAnswerForm] = useState("");

    async function handleSubmit() {

        const response = await axios({
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'token': `${token}`
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