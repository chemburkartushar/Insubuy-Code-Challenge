import React from "react";
import { postQuote, getQuotes } from "../service/api/quotes";
class quoteForm extends React.Component {
  constructor() {
    super();
    this.state = { policyMax: "50" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ policyMax: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(data);
    postQuote(data);
  };

  render() {
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Policy Maximum
            <br />
            <select value={this.state.policyMax} onChange={this.handleChange}>
              <option value="50">50,000</option>
              <option value="100">100,000</option>
              <option value="250">250,000</option>
              <option value="500">500,000</option>
            </select>
          </label>
          <label>
            Age
            <br />
            <input id="age" name="age" type="text" value={this.state.age} />
          </label>
          <br />
          <label>
            Travel Dates (mm/dd/yyyy)
            <br />
            <input
              id="startDate"
              name="startDate"
              type="text"
              value={this.state.startDate}
            />
            <input
              id="endDate"
              name="endDate"
              type="text"
              value={this.state.endDate}
            />
          </label>
          <br />
          <label>
            Citizenship <br />
            <input
              id="citizenShip"
              name="citizenShip"
              type="text"
              value={this.state.citizenShip}
            />
          </label>
          <label>
            Mailing State <br />
            <input
              id="mailingState"
              name="mailingState"
              type="text"
              value={this.state.mailingState}
            />
          </label>
          <br />
          <input type="submit" value="Get Quotes" />
        </form>
      </div>
    );
  }
}

export default quoteForm;
