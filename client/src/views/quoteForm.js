import React from "react";
import { postQuote, getQuotes } from "../service/api/quotes";
import "../styles/form.css";
class quoteForm extends React.Component {
  constructor() {
    super();
    this.state = { policyMax: "" };
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
      <form onSubmit={this.handleSubmit}>
        <table id="table">
          <tbody>
            <tr>
              <td id="header">INSUBUY Travel Insurance</td>
            </tr>
            <tr>
              <td>
                Policy Maximum
                <br />
                <select
                  placeholder="Choose your policy maximum"
                  value={this.state.policyMax}
                  onChange={this.handleChange}
                >
                  <option value="50">50,000</option>
                  <option value="100">100,000</option>
                  <option value="250">250,000</option>
                  <option value="500">500,000</option>
                </select>
              </td>
              <td>
                Age
                <br />
                <input
                  placeholder="Choose your age"
                  id="age"
                  name="age"
                  type="text"
                  value={this.state.age}
                />
              </td>
            </tr>
            <tr>
              <td>
                Travel Dates (mm/dd/yyyy)
                <br />
                <input
                  placeholder="Start Date"
                  id="startDate"
                  name="startDate"
                  type="text"
                  value={this.state.startDate}
                />
                <input
                  placeholder="End Date"
                  id="endDate"
                  name="endDate"
                  type="text"
                  value={this.state.endDate}
                />
              </td>

              <td>
                Citizenship
                <br />
                <input
                  placeholder="Choose your Country of Citizenship"
                  id="citizenShip"
                  name="citizenShip"
                  type="text"
                  value={this.state.citizenShip}
                />
              </td>
            </tr>
            <tr>
              <td>
                Mailing State
                <br />
                <input
                  placeholder="Choose state"
                  id="mailingState"
                  name="mailingState"
                  type="text"
                  value={this.state.mailingState}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Get Quotes" id="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default quoteForm;
