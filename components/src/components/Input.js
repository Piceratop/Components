import React from "react";
import classNames from "classnames/bind";
import style from "./Input.scss";

const cx = classNames.bind(style);

export default function Input({ error, leftIcon, rightIcon, ...props }) {
   const inputClassName = cx("input", {
      "input-error": error,
   });

   return <input className={inputClassName} {...props} />;
}
