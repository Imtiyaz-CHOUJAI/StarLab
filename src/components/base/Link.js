import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Link = ({url, icon}) => {
  return (
    <a
      href={url}
      target="_blank"
      title="Repository Link"
      rel="noopener noreferrer"
    >
      <div className="repository__hover">
        <FontAwesomeIcon icon={icon} />
      </div>
    </a>
  );
};
