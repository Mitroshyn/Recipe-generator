import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import { Nav } from "./Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
    </BrowserRouter>
  );
}

export default App;
