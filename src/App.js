import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    githubUser: [],
    followers: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/dirkknibbe").then((resp) => {
      console.log(resp.data);
      this.setState({
        ...this.state,
        githubUser: resp.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input placeholder={"Github Handle"}></input>
          <button>Search</button>
        </form>
        <div>
          <img src={this.state.githubUser.avatar_url} />
        </div>
        <div>
          <p>{this.state.githubUser.name}</p>
          <p>{`(${this.state.githubUser.login})`}</p>
          <p>Total Repos: {this.state.githubUser.public_repos}</p>
          <p>Total Followers: {this.state.githubUser.followers}</p>
        </div>
      </div>
    );
  }
}

export default App;
