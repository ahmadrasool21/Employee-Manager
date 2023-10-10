import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function Users() {
  let { title, description } = useContext(UserContext); // HERE I DESTUCT THE GLOBAL STATES....
  return (
    <div>
      title is: {title}
      <br />
      description is :{description}
    </div>
  );
}
