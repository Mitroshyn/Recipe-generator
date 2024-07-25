import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-recipes text-2xl">Рецепты</div>
        <div className="header-popular-recipes text-2xl">
          Популярные рецепты
        </div>
      </div>
    </header>
  );
}
export default Header;
