import { React, useContext } from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";
import "../styles/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import ClipLoader from "react-spinners/ClipLoader";
// import { createContext } from "react";
import UserContext from "./UserContext";
export default function EmployeesData() {
  // const UserContext = createContext(null);
  const [isview, setisview] = useState(false);
  const [IsReadOnly, setIsReadOnly] = useState(false);
  const [employeeId, setEmployeeId] = useState();
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeCity, setEmployeeCity] = useState("");
  const [loading, setLoading] = useState(false);

  // const [x, y] = useStateV2(1);

  // useEffect(() => {
  //   console.log(x, "@value");
  // }, [x]);

  const [backdrop, setbackdrop] = useState(false);
  // const [data, setdata] = useState([]);
  let { data, setdata } = useContext(UserContext);
  // console.log(testVariable);
  const [error, seterror] = useState("");

  const replaceObjectById = (id, newObject) => {
    const prevData = [...data];
    const newArray = prevData.map((obj) => (obj.id === id ? newObject : obj));
    setdata(newArray);
  };

  const AddNewUser = (newObject) => {
    const newArray = [...data, newObject];
    setdata(newArray);
  };

  const getdata = async () => {
    console.log("get data call");
    setLoading(true);
    try {
      console.log("this is useEffect");
      const res = await axios.get("https://fakestoreapi.com/users");
      setdata(res.data);
      //   console.log(res.data, "this is response");
    } catch (error) {
      seterror(error.message);
      console.log(error.message, "this is error response");
    } finally {
      setLoading(false); // Set loading to false after the API call is complete (whether it succeeded or failed)
    }
  };

  const AddUser = () => {
    setEmployeeId();
    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeeCity("");
    setbackdrop(true);
    setIsReadOnly(false);
  };

  const viewuser = (id, email, username, address) => {
    // console.log(id, "id");
    setEmployeeId(id);
    setEmployeeName(username);
    setEmployeeEmail(email);
    setEmployeeCity(address);
    setbackdrop(true);
    setIsReadOnly(true);
    setisview(true);
  };

  const UpdateUser = (id, email, username, address) => {
    // console.log(id, "id");
    setEmployeeId(id);
    setEmployeeName(username);
    setEmployeeEmail(email);
    setEmployeeCity(address);
    setbackdrop(true);
    setIsReadOnly(true);
    setisview(false);
  };

  const handleUser = (e) => {
    e.preventDefault();
    console.log(employeeId);
    console.log(employeeEmail);
    console.log(employeeName);
    console.log(employeeCity);
    const newObj = {
      id: employeeId,
      email: employeeEmail,
      username: employeeName,
      address: {
        city: employeeCity,
      },
    };

    setbackdrop(false);
    setIsReadOnly(false);
    axios
      .post(`https://fakestoreapi.com/users/`, newObj)
      .then(function (response) {
        console.log(response, "resonse for add");
        console.log("Response for update:", newObj);
        AddNewUser(newObj);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeId);
    console.log(employeeEmail);
    console.log(employeeName);
    console.log(employeeCity);
    const newObj = {
      id: employeeId,
      email: employeeEmail,
      username: employeeName,
      address: {
        city: employeeCity,
      },
    };
    setbackdrop(false);
    setIsReadOnly(false);
    axios
      .put(`https://fakestoreapi.com/users/${employeeId}`, newObj)
      .then(function (response) {
        // console.log("Response for update:", response.data);
        replaceObjectById(employeeId, newObj);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };

  const deleteUser = (id) => {
    console.log(id, "id");
    axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then(function (response) {
        console.log("delete call");
        setdata((prev) => prev.filter((obj) => obj.id !== id));
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };
  const setback = () => {
    setbackdrop(false);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-flex">
        {/* <div class></div> */}
        <div className="main container">
          {/* <button onClick={() => y(1234)}> update value {x}</button> */}
          <div
            className={`sidebar ${
              backdrop ? "translate_open " : "translate_close"
            }`}
          >
            {/* <button onClick={() => getdata()}>get</button> */}
            <form onSubmit={IsReadOnly ? handleSubmit : handleUser}>
              <label htmlFor="userid">Employee ID:</label>
              <br />
              <input
                type="number"
                id="userid"
                name="userid"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                readOnly={IsReadOnly}
              />
              <br />
              <label htmlFor="EmployeeName">Employee Name:</label>
              <br />
              <input
                type="text"
                id="EmployeeName"
                name="EmployeeName"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                readOnly={isview}
              />
              <br />
              <label htmlFor="EmployeeEmail">Email:</label>
              <br />
              <input
                type="text"
                id="EmployeeEmail"
                name="EmployeeEmail"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                readOnly={isview}
              />
              <br />
              <label htmlFor="EmployeeCity">City:</label>
              <br />
              <input
                type="text"
                id="EmployeeCity"
                name="EmployeeCity"
                value={employeeCity}
                onChange={(e) => setEmployeeCity(e.target.value)}
                readOnly={isview}
              />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          {/* ////// */}
          <div className="employ-flex">
            {backdrop && <div className="hide-flex" onClick={setback}></div>}
            <strong>Employees List</strong>
          </div>
          ;
          <div>
            <Button classNames={"empolyer"} onclick={AddUser}>
              Add Employer
            </Button>
          </div>
          <br />
          {error && <h3>{error}</h3>}
          <table>
            <tr>
              <th className="wid">Employee ID</th>
              <th className="wid">Employee Name</th>
              <th className="wid">Employee Email</th>
              <th className="wid">City</th>
              <th className="widActions">Actions</th>
            </tr>
          </table>
          {data.map((post) => {
            const { id, email, username, address } = post;

            return (
              <Table
                id={id}
                email={email}
                username={username}
                address={address.city}
                onClickUpdate={() =>
                  UpdateUser(id, email, username, address.city)
                }
                onClickDelete={() => deleteUser(id)}
                onclickView={() => viewuser(id, email, username, address.city)}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

// export const useStateV2 = (intialValue) => {
//   let value = intialValue || null;

//   const setValue = (v) => {
//     value = v;
//   };

//   return [value, setValue];
// };
