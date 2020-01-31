/*jshint esversion: 6 */

import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    friend: {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  add = e => {
    e.preventDefault();
    // make a POST request to the server
    // the server will "authenticate" the user based on their credentials
    // If they can be authenticated the server will return a token
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.payload);
        // this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input
            type="number"
            name="id"
            value={this.state.friend.id}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
