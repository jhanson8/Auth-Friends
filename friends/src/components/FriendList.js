import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        // res.data.data;
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friends => (
          <div>{friends.name}</div>
        ))}
      </div>
    );
  }
}

export default FriendList;
