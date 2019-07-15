import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const formatNumber = number => {
  return Math.abs(number) > 999
    ? Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k"
    : Math.sign(number) * Math.abs(number);
};

export const Button = ({label, title, icon}) => {
  label = formatNumber(label);

  return (
    <button className="btn" title={`${label} ${title}`}>
      {label} <FontAwesomeIcon icon={icon} />
    </button>
  );
};
