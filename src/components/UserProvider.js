import React, { useState } from "react";
import UserContext from "./UserContext";
import EmployeesData from "./EmployeesData";

export default function UserProvider({ children }) {
  const [data, setdata] = useState([]);
  return (
    <UserContext.Provider value={{ data, setdata }}>
      <EmployeesData />
    </UserContext.Provider>
  );
}
