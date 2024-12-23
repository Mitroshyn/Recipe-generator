import React from "react";
import { Container } from "../components/Container";
import "./Header.css";
import { SearchRecipes } from "../components/SearchRecipes";

function Header() {
  return (
    <header className="header bg-headerColor">
      <Container>
        <div className="flex items-center w-full gap-3">
          <div className="header-recipes text-2xl text-white xs:w-[210px]">Рецепты</div>
          <SearchRecipes />
        </div>
      </Container>
    </header>
  );
}
export default Header;
