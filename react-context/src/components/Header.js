import React from "react";
import { useProductContext } from "../context/Products";

function Header() {
  const [{ state, user }] = useProductContext();

  return (
    <h1
      onClick={() => {
        console.log("state", state);
      }}
    >
      {user[0]?.name}
    </h1>
  );
}

export default Header;
