import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = ({ usersList, loading, userStyle }) => {
  let style;
  userStyle ? (style = gridStyle) : (style = listStyle);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="cards-container" style={style}>
          {usersList.map((user) => (
            <UserItem key={user.login.uuid} userStyle={userStyle} user={user} />
          ))}
        </div>
      </>
    );
  }
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "2rem",
  width: "inherit",
};
const listStyle = {
  display: "list-item",
  marginBottom: "20px",
  listStyleType: "none",
};

export default Users;
