import React from "react";
import Quality from "./quality";
function QualitiesList({ qualities }) {
  return (
    <>
      {" "}
      {qualities.map((quality) => (
        <Quality key={quality._id} quality={quality} />
      ))}
    </>
  );
}

export default QualitiesList;
