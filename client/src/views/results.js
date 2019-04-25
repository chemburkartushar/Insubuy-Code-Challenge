import React from "react";
import ReactTable from "react-table";
import { getQuotes } from "../service/api/quotes";
import "react-table/react-table.css";

class results extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      columns: []
    };
  }

  componentDidMount() {
    getQuotes().then(values => {
      if (values.quotes[0]) {
        let columns = Object.keys(values.quotes[0]).map(val => {
          return { Header: val, accessor: val };
        });
        this.setState({ quotes: values.quotes, columns });
      }
    });
  }
  render() {
    return <ReactTable data={this.state.quotes} columns={this.state.columns} />;
  }
}

export default results;
