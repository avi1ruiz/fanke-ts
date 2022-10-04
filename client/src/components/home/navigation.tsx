import { Box, Modal } from "@mui/material"
import { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";
import './navigation.css'

function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={() => handleOpen()}>Login</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className="modalBox">
                    <h1>Inicio de Sesión</h1>
                    <Login />
                </Box>
            </Modal>
        </div>
    );
}

function RegisterModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={() => handleOpen()}>Register</button>
            <Modal open={open} onClose={handleClose}>
                <Box className="modalBox">
                    <h1>Registro de Usuario</h1>
                    <Register />
                </Box>
            </Modal>
        </div>
    )

}


export function NavBar() {

    return (
        <nav>
            <h1 className="navBrand">ANKI-TS</h1>

            <ul className="navList">
                <li>About</li>
                <li><LoginModal /></li>
                <li><RegisterModal /></li>
            </ul>
        </nav>
    )

}