import React from "react";
import CardListGiven from "./cardListGiven";
import CardGridGiven from "./cardGridGiven";

const UserItem = ({ userStyle, user }) => {
  return (
    <div>
      {userStyle ? (
        <CardGridGiven userStyle={userStyle} user={user} />
      ) : (
        <CardListGiven userStyle={userStyle} user={user} />
      )}
    </div>
  );
};

export default UserItem;
