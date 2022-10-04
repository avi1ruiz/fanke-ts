import { Login } from "./components/home/login";
import { Register } from "./components/home/register";
import { AddCard } from "./components/user/add";
import { ListCards } from "./components/user/list";

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
