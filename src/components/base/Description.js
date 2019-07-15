import React from "react";
import moment from "moment";
import {Capitalize} from "../../utils/Capitalize";

import {faStar, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

import {Button} from "./Button";

const parseDescription = description => {
  description = Capitalize(description);

  return description.length > 100 ? (
    <div>{`${description.substring(0, 100)}...`}</div>
  ) : (
    <p>{description}</p>
  );
};

export const Description = ({repository}) => {
  const {
    name,
    description,
    created_at,
    owner,
    stargazers_count,
    open_issues,
  } = repository;

  return (
    <div className="repository__description">
      <div>
        <h3>{name}</h3>
        {parseDescription(description)}
        <p className="muted">
          Submitted {moment(created_at).fromNow()} by {owner.login}
        </p>

        <Button label={stargazers_count} title="Stars" icon={faStar} />
        <Button label={open_issues} title="Issues" icon={faExclamationCircle} />
      </div>
    </div>
  );
};
