import React from "react";
function Quality({ quality }) {
  return (
    <span className={`badge bg-${quality.color}`} key={quality._id}>
      {quality.name}
    </span>
  );
}
Quality.protoTypes = {
  quality: PropTypes.object,
};
export default Quality;
