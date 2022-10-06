import axios from 'axios'
import { FaEraser } from 'react-icons/fa'

interface CardProps {
    CardID: string,
}

export function DeleteCard({CardID}: CardProps) {

    const token = localStorage.getItem('token')

    async function handleDelete() {
        const response = await axios({
            method: 'delete',
            headers: {'token': `${token}`},
            url: `http://localhost:4000/cards/delete/${CardID}`
        })

        if(response.data.state) {
            alert("Carta eliminada")
        } else {
            alert("Hubo un problema")
        }

        window.location.reload()
    }

    return(
        <button className='btn btn-danger' onClick={() => {
            handleDelete()
        }}> <FaEraser/> </button>
    )

}