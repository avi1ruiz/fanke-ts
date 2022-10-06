import {FaEdit} from 'react-icons/fa'
import axios from 'axios'
import { Modal, Box } from '@mui/material';
import { useState } from 'react';

interface CardProps {
    CardID: string,
}


function UpdateForm({ CardID }: CardProps) {

    const token = localStorage.getItem('token')
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    async function handleUpdate() {
        const response = await axios({
            method: 'put',
            headers: { 'token': `${token}` },
            url: `http://localhost:4000/cards/update/${CardID}`,
            data: {
                questionForm: question,
                answerForm: answer
            }
        })

        if (response.data.state) {
            alert('Tarjeta actualizada')
        }
        window.location.reload()

    }

    return (
        <>
            <form>

                <label>Pregunta</label>
                <textarea name="questionForm" cols={30} rows={5} placeholder="Pregunta" onChange={(e) => setQuestion(e.target.value)}></textarea>
                <label>Respuesta</label>
                <textarea name="answerForm" cols={30} rows={10} onChange={(e) => setAnswer(e.target.value)}></textarea>

                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    handleUpdate()
                }} >Agregar</button>

            </form>
        </>
    )
}

export function UpdateCard({ CardID }: CardProps) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button className='btn btn-info' onClick={() => handleOpen()}> <FaEdit/> </button>
            <Modal open={open} onClose={handleClose}>
                <Box>
                    <UpdateForm CardID={CardID} />
                </Box>
            </Modal>
        </div>
    )

}