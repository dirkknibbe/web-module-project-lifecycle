import React from "react";

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div className="follower">
        <img width="200px" src={follower.avatar_url} />
        <a>{follower.login}</a>
      </div>
    );
  }
}

export default Follower;
