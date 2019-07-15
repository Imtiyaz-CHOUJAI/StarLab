import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export const Loading = () => (
  <div className="loading">
    <FontAwesomeIcon icon={faStar} spin />
  </div>
);
