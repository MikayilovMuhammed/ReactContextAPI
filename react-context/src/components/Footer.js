import React from "react";
import { useProductContext } from "../context/Products";

function Footer() {
  const [{ setState, state }] = useProductContext();
  return (
    <button
      onClick={() => {
        setState(!state);
      }}
    >
      Footer
    </button>
  );
}

export default Footer;
