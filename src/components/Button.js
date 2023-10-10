import React from "react";

function Button(props) {
  return (
    <button className={props.classNames} onClick={props.onclick}>
      {props.children}
    </button>
  );
}

export default Button;
