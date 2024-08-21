import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import { Container } from "../components/Container";

export function Nav() {
  return (
    <BrowserRouter>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/pancakes">Pancakes</Link>
            </li>

            <li>
              <Link to="/milkshakes">Milkshakes</Link>
            </li>

            <li>
              <Link to="/fruitDrinks">Компоты,морсы</Link>
            </li>

            <li>
              <Link to="/softDrinks">Безалкогольные коктейли</Link>
            </li>

            <li>
              <Link to="/soups">Soups</Link>
            </li>

            <li>
              <Link to="/borsch">Borsch</Link>
            </li>

            <li>
              <Link to="/sauces">Sauces</Link>
            </li>
            <li>
              <Link to="/fruitSalads">Fruit Salads</Link>
            </li>
            <li>
              <Link to="/meatSalads">Meat Salads</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.component}
                key={index}
              ></Route>
            );
          })}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
