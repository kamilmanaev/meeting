import React from "react";
import Bookmark from "./bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";
function AllUsers({
  handleTogleBookmark,
  deleteUser,
  id,
  profession,
  completedmeetings,
  rate,
  bookmark,
  name,
  qualities,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Quality key={quality._id} quality={quality} />
        ))}
      </td>
      <td>{profession}</td>
      <td>{completedmeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark
          handleTogleBookmark={handleTogleBookmark}
          id={id}
          status={bookmark}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteUser(id);
          }}
        >
          удалить
        </button>
      </td>
    </tr>
  );
}
AllUsers.propTypes = {
  handleTogleBookmark: PropTypes.func,
  deleteUser: PropTypes.func,
  id: PropTypes.string,
  profession: PropTypes.string,
  completedmeetings: PropTypes.number,
  rate: PropTypes.number,
  bookmark: PropTypes.bool,
  name: PropTypes.string,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};
export default AllUsers;
