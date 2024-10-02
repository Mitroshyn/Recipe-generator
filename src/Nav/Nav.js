import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import { Container } from "../components/Container";
import Header from "../Header/Header";

export function Nav() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <nav>
          <ul>
            <li className="w-60">
              <Link to="/">Главная страница</Link>
            </li>

            <li>
              <Link to="/pancakes">Блины,оладьи</Link>
            </li>

            <li>
              <Link to="/milkshakes">Молочные коктейли</Link>
            </li>

            <li>
              <Link to="/fruitDrinks">Компоты,морсы</Link>
            </li>

            <li>
              <Link to="/softDrinks">Безалкогольные коктейли</Link>
            </li>

            <li>
              <Link to="/soups">Супы</Link>
            </li>

            <li>
              <Link to="/borsch">Борщи</Link>
            </li>

            <li>
              <Link to="/sauces">Соусы</Link>
            </li>
            <li>
              <Link to="/fruitSalads">Фруктовые салаты</Link>
            </li>
            <li>
              <Link to="/meatSalads">Мясные салаты</Link>
            </li>
            <li>
              <Link to="/vegetableSalads">Овощные салаты</Link>
            </li>
            <li>
              <Link to="/newRecipes"></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              ></Route>
            );
          })}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
