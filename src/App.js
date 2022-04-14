import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos/Todos";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Todos />
      <Header />
      <Products />
    </div>
  );
}

export default App;
