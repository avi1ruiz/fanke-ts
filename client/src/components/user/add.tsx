import { Modal, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react"
import { FaPlus } from 'react-icons/fa'

export function AddForm() {

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

        window.location.reload()

    }


    return (
        <>
            <form>

                <div className="form-group">
                    <label>Pregunta</label>
                    <textarea className="form-control" name="questionForm" cols={30} rows={2} placeholder="Pregunta" onChange={(e) => setQuestionForm(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Respuesta</label>
                    <textarea className="form-control" name="answerForm" cols={30} rows={5} onChange={(e) => setAnswerForm(e.target.value)}></textarea>
                </div>


                <button className="btn btn-success rounded-pill mt-2" type="submit" onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }} > <FaPlus /> </button>

            </form>
        </>
    )

}

export function AddCard() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button className="btn btn-success" onClick={() => handleOpen()}>Agregar una Carta</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className="modalBox" >
                    <AddForm />
                </Box>
            </Modal>
        </div>
    )
}