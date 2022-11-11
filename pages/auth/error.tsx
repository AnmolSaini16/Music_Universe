import React, { useEffect } from "react";

const error = () => {
  useEffect(() => {
    window.location.replace("/");
  });
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default error;
