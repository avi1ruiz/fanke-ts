import { useNavigate } from "react-router-dom";

export function Logout() {

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <button onClick={(e) => {
                e.preventDefault();
                handleLogout()
            }}>Logout</button>
        </>
    )
}