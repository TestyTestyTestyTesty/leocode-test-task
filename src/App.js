import React, { Component } from "react";
import UsersList from "./components/UsersList";
import "./sass/App.scss";

const URL = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  state = {
    users: [],
    filter: "",
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        this.setState({ users: json, isLoading: false });
      });
  }
  handleFiltering = filter => {
    this.setState(() => ({
      filter
    }));
  };

  render() {
    const users = this.state.users.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="app">
        <h1>Users list</h1>
        <input
          placeholder="Search by first name or last name"
          onChange={event => {this.handleFiltering(event.target.value);}}
        />
        <UsersList users={users} />
      </div>
    );
  }
}

export default App;
