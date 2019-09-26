import React from "react";

const UsersList = props => {
  const { users } = props;
  if (users.length > 0) {
    return (
      <div className="users">
        {users.map(user => (
          <div className="user" key={user.id}>
            <span className="user-id">{user.id}.</span>
            <span className="user-name">{user.name}</span>
            <span className="user-username">@{user.username}</span>
          </div>
        ))}
      </div>
    );
  }
  return <span>We don't have this user</span>;
};

export default UsersList;
