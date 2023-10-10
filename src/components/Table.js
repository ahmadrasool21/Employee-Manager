import React from "react";
import Button from "./Button";
import "../styles/index.css";

export default function Table(props) {
  const id = props.id;
  const username = props.username;
  const email = props.email;
  const address = props.address;
  return (
    <div>
      <table>
        <tr>
          <td className="wid">{id}</td>
          <br />
          <td className="wid">{username}</td>
          <td className="wid">{email}</td>
          <td className="wid">{address}</td>
          <td className="widActions">
            <Button classNames={"update"} onclick={props.onClickUpdate}>
              Update
            </Button>
            <Button classNames={"delete"} onclick={props.onClickDelete}>
              Delete
            </Button>
            <Button classNames={"view"} onclick={props.onclickView}>
              View
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
