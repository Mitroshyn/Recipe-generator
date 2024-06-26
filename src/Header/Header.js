import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-recipes">Рецепты</div>
        <div className="header-popular-recipes">Популярные рецепты</div>
      </div>
    </header>
  );
}
export default Header;
