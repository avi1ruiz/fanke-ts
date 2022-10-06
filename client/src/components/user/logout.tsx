import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from 'react-icons/fa'

export function Logout() {

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <button className="btn btn-warning" onClick={(e) => {
                e.preventDefault();
                handleLogout()
            }}> <FaArrowCircleRight/> </button>
        </>
    )
}