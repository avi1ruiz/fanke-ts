import { Navigate } from "react-router-dom";
import { AddCard } from "../components/user/add";
import { ListCards } from "../components/user/list";
import { Logout } from "../components/user/logout";

export function UserPage() {

    if (localStorage.getItem('token')) {
        return (
            <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-4">
                    <div>
                        <h3 className="float-md-start mb-0">Bienvenido</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <AddCard/>
                            <Logout/>
                        </nav>
                    </div>
                </header>
                <main className="px-4">
                    <ListCards/>
                </main>
            </div>
        )
    } else {
        return (
            <Navigate replace to="/" />
        )
    }

}