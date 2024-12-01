import { Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import { Container } from "../components/Container";

export function Nav() {
  return (
    <Container>
      <nav className="">
        <ul className="w-[210px]">
          <li>
            <Link to="/Recipe-generator">Главная страница</Link>
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
  );
}
