import { Login } from "./components/auth/login";
import { Register } from "./components/auth/register";
import { AddCard } from "./components/cards/add";
import { ListCards } from "./components/cards/list";

function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <AddCard />
      <ListCards />
    </div>
  )
}

export default App;
