import { Navigate } from "react-router-dom";
import { AddCard } from "../components/user/add";
import { ListCards } from "../components/user/list";
import { Logout } from "../components/user/logout";

export function UserPage() {

    if (localStorage.getItem('token')) {
        return (
            <>
                <Logout />
                <AddCard />
                <ListCards />
            </>
        )
    } else {
        return (
            <Navigate replace to="/" />
        )
    }

}