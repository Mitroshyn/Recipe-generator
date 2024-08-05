import { Container } from "../components/Container";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="flex justify-between w-full">
          <div className="header-recipes text-2xl">Рецепты</div>
          <div className="header-popular-recipes text-2xl">
            Популярные рецепты
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header;
