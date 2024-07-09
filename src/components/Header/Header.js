import React from "react";
import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/SearchBar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-[#fff159] fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <SearchBar />
        <div className="flex gap-3">
          <CartButton />
          <button className="text-2xl" onClick={() => [signout(), navigate("/")]}>
            ➡️
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
