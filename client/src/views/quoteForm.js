import React from "react";
import { postQuote } from "../service/api/quotes";
import "../styles/form.css";
import { withRouter } from "react-router-dom";
class quoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      policyMax: "",
      age: "",
      startDate: "",
      endDate: "",
      citizenShip: "",
      mailingState: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm = () => {
    this.setState({
      policyMax: "",
      age: "",
      startDate: "",
      endDate: "",
      citizenShip: "",
      mailingState: "",
      quotes: ""
    });
  };
  handleChange = event => {
    this.setState({ policyMax: event.target.value });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      error: "",
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = { age: this.state.age };
    console.log(this.state.age);
    console.log(this.state.startDate);
    if (new Date(this.state.startDate) < new Date(this.state.endDate)) {
      postQuote(data).then(response => {
        if (response.success) this.props.history.push("/quotes");
      });
    } else {
      this.setState({ error: "Check date" });
    }
  };

  render() {
    return (
      <div>
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
                    required
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
                    onChange={this.handleInputChange}
                    required
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
                    type="date"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    required
                  />
                  <input
                    placeholder="End Date"
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    required
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
                    pattern="[A-Za-z]+"
                    title="Numbers or special characters are not allowed"
                    value={this.state.citizenShip}
                    onChange={this.handleInputChange}
                    required
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
                    pattern="[A-Za-z]+"
                    title="Numbers or special characters are not allowed"
                    value={this.state.mailingState}
                    onChange={this.handleInputChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Get Quotes" id="submit" />
                </td>
              </tr>
              <tr>
                <td>
                  <div>{this.state.error}</div>
                  <button onClick={this.resetForm}>Reset</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default withRouter(quoteForm);
