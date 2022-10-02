import { NavBar } from "../components/home/navigation";
import { HomeMessage } from "../components/home/presentation";

export function HomePage() {
    return(
        <div className="container">
            <NavBar/>
            <HomeMessage/>
        </div>
    )   
}