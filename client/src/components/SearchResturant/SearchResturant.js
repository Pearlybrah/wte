import React from "react";

function SearchResturant(props) {
  return (
    <form
      style={{
        backgroundColor: "white",
        width: "50%",
        margin: "0 22em",
        padding: "1.25em",
        borderRadius: "10px"
      }}
    >
      <div className="form-group">
        <label htmlFor="location">Location: </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="location"
          type="text"
          className="form-control"
          placeholder="Location"
          id="location"
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="category"
          type="text"
          className="form-control"
          placeholder="Category"
          id="category"
        />
        <button
          style={{ margin: "0 17em" }}
          onClick={props.handleFormSubmit}
          className="btn btn-primary blue accent-3"
        >
          Search Restaurant
        </button>
      </div>
    </form>
  );
}

export default SearchResturant;
