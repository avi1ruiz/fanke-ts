import axios from 'axios'

interface CardProps {
    CardID: string,
}

export function DeleteCard({CardID}: CardProps) {

    async function handleDelete() {
        const response = await axios({
            method: 'delete',
            headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2JjNDQwM2I2ZTg2NWI1OGQ2NDk2NCIsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE2NjQ5MTc4MzAsImV4cCI6MTY2NDkyMTQzMH0.GILxDNDdPL7vCE1PWEj0mXDvfcteMzHGV4hwDPNN404'},
            url: `http://localhost:4000/cards/delete/${CardID}`
        })

        if(response.data.state) {
            alert("Carta eliminada")
        } else {
            alert("Hubo un problema")
        }
    }

    return(
        <button onClick={() => {
            handleDelete()
        }}>Eliminar</button>
    )

}