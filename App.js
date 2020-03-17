import React from "react";
import "./styles.css";

const intialState = {
  name: "",
  password: ""
};
class App extends React.Component {
  state = intialState;
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  validate = () => {
    let users = [
      { name: "abi", password: "1234" },
      { name: "pank", password: "123" },
      { name: "frank", password: "fra" },
      { name: "rama", password: "ram" },
      { name: "shan", password: "sha" },
      { name: "prak", password: "pra" },
      { name: "nancy", password: "nan" },
      { name: "suji", password: "suj" },
      { name: "tresa", password: "tre" },
      { name: "naomi", password: "nao" }
    ];
    if (!this.state.name) {
      alert("Name cannot be blank");
    } else {
      const hasAdmin = users.some(user => user.name === this.state.name);
      if (!hasAdmin) {
        alert("Invalid UserName");
      }
    }
    if (!this.state.password) {
      alert("Password cannot be blank");
    } else {
      const hasAdmins = users.some(
        user => user.password === this.state.password
      );
      if (!hasAdmins) {
        alert("Invalid Password");
      }
    }
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isvalid = this.validate();
    if (isvalid) {
       console.log(this.state);
      this.setState(intialState);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            name="name"
            placeholder="Enter Username"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default App;
