import React from "react";
import classNames from "classnames/bind";
import style from "./Select.scss";

const cx = classNames.bind(style);

export default function Select({ ...props }) {
   return (
      <div className="select-container">
         <select className={cx("select")} {...props}>
            <option className={cx("option")} value="">
               Select an option
            </option>
            <option className={cx("option")} value="1">
               1
            </option>
            <option className={cx("option")} value="2">
               2
            </option>
         </select>
         <span className="custom-arrow"></span>
      </div>
   );
}
