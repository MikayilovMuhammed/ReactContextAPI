import React from "react";
import { useProductContext } from "../context/Products";

function Users() {
  const [{ user }] = useProductContext();

  return (
    <div>
      {user?.map(({ name }) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default Users;
