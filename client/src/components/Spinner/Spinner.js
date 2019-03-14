import React, { Component } from "react";
import Slot from "react-slot-machine";
import API from "../../utils/API";
import SearchResturant from "../SearchResturant"

class YelpApiSearch extends Component {
  state = {
    result: [],
    location: "alameda",
    category: "italian",
    target: 1,
    times: 8,
    duration: 4000,
    turn: false
  };
  result = this.state.result;
  displayResult = (result, ind) => (
    <p>
      {result[ind].display_phone}
      <br />
      Price: {result[ind].price}
      <br />
      Rating: {result[ind].rating}
    </p>
  );
  setClicked = () => {
    this.setState({
      target: Math.floor(Math.random() * this.state.result.length),
      turn: true
    });
    console.log(this.state.target, this.state.turn);
  };
  // setClicked = id => {
  //   const result = this.state.result;
  //   const shuffle = result.filter(result => result.id === id);

  //   if (shuffle.clicked) {
  //     console.log(this.clicked);
  //   }

  //   result.sort((a, b) => {
  //     return 0.5 - Math.random();
  //   });
  // };

  componentDidMount() {
    this.searchRestaurants(this.state.location, this.state.category);
  }

  searchRestaurants = (location, category) => {
    console.log("searchRestaurants", location, category);
    API.search(location, category)
      .then(res => {
        this.setState({ result: res.data.businesses });
        console.log(this.state.result);
      })

      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRestaurants(this.state.location, this.state.category);
  };

  render() {
    return (
      <div>
        <style jsx="true">
          {`
            .slot {
              margin: auto;
              margin-top: 50px;
              text-align: center;
              font-size: 4em;
              height: 2em;
              width: 70%;
            }
            .slot-item {
              height: 100%;
              width: 100%;
            }
            p {
              font-size: 2em;
            }
          `}
        </style>
        <Slot
          className="slot"
          duration={this.state.duration}
          target={
            this.state.turn
              ? Math.floor(Math.random() * this.state.result.length)
              : 0
          }
          times={this.state.times}
        >
          {this.state.result.map((result, i) => (
            <div
              key={i}
              className="card text-center slot-item"
              style={{ width: "100%", height: "100%" }}
            >
              <a href={result.url}>{result.name}</a>
            </div>
          ))}
        </Slot>
        <br />
        {this.state.turn ? (
          this.displayResult(this.state.result, this.state.target)
        ) : (
          <p>
            <br />
            <br />
            <br />
          </p>
        )}
        <button
          style={{ margin: "1.5em 46.5em", padding: "0 3em" }}
          className="btn-small btn-primary blue accent-3"
          onClick={this.setClicked}
        >
          Shuffle
        </button>
        <SearchResturant
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default YelpApiSearch;
