import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>

            <li>
              <Link to="/pancakes">Pancakes</Link>
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
          </ul>
        </nav>
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={route.component}></Route>;
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default Nav;
