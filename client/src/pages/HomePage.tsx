import { Brand } from "../components/home/main"
import { Header } from "../components/home/header"
import { Footer } from "../components/home/footer"

export function HomePage() {
    return(
        <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header/>
            <Brand />
            <Footer/>
        </div>
    )
}