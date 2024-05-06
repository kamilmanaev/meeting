import React from "react";
import Bookmark from "./bookmark";
import Quality from "./quality";
function AllUsers(
  users,
  userCrop,
  handleTogleBookmark,
  deleteUser,
  length,
  pageSize,
  currentPage
) {
  return (
    <tbody>
      {userCrop.map((item) => (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>
            {item.qualities.map((quality) => (
              <Quality quality={quality} />
            ))}
          </td>
          <td>{item.profession.name}</td>
          <td>{item.completedMeetings}</td>
          <td>{item.rate}</td>
          <td>
            <Bookmark
              handleTogleBookmark={handleTogleBookmark}
              id={item._id}
              status={item.bookmark}
            />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteUser(item._id);
                length = users.length;
              }}
            >
              удалить
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
AllUsers.protoTypes = {
  users: ProtoTypes.array,
  userCrop: ProtoTypes.func,
  handleTogleBookmark: ProtoTypes.func,
  deleteUser: ProtoTypes.func,
  length: ProtoTypes.number,
};
export default AllUsers;
