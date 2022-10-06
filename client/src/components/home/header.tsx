import { Box, Modal } from "@mui/material"
import { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className="btn btn-info" onClick={() => handleOpen()}>Inicia Sesión</button>
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
            <button className="btn btn-info" onClick={() => handleOpen()}>Registrate!</button>
            <Modal open={open} onClose={handleClose}>
                <Box className="modalBox">
                    <h1>Registro de Usuario</h1>
                    <Register />
                </Box>
            </Modal>
        </div>
    )

}

export function Header() {

    return (
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">FANKE TS</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <RegisterModal/>
                    <LoginModal/>
                </nav>
            </div>
        </header>
    )

}