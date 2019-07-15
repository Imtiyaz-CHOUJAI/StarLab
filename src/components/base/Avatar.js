import React from "react";

export const Avatar = ({url}) => {
  return (
    <div className="repository__avatar">
      <img src={url} alt="Avatar" />
    </div>
  );
};
