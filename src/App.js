import React from "react";
import User from "./components/User";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input placeholder={"Github Handle"}></input>
          <button>Search</button>
        </form>
        <div>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
