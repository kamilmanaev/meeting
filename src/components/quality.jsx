import React from "react";
import PropTypes from "prop-types";
function Quality({ quality }) {
  return (
    <span className={`badge bg-${quality.color}`} key={quality._id}>
      {quality.name}
    </span>
  );
}
Quality.propTypes = {
  quality: PropTypes.object,
};
export default Quality;
