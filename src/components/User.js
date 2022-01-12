import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <img src={user.avatar_url} />
        </div>
        <div>
          <p>{user.name}</p>
          <p>{`(${user.login})`}</p>
          <p>Total Repos: {user.public_repos}</p>
          <p>Total Followers: {user.followers}</p>
        </div>
      </div>
    );
  }
}
export default User;
