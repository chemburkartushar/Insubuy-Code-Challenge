import React from "react";
import ReactTable from "react-table";
import { getQuotes } from "../service/api/quotes";
import "react-table/react-table.css";
import matchSorter from "match-sorter";

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
          return {
            Header: val,
            accessor: val,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: [val] }),
            filterAll: true
          };
        });
        this.setState({ quotes: values.quotes, columns });
      }
    });
  }
  render() {
    return (
      <ReactTable
        data={this.state.quotes}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={this.state.columns}
      />
    );
  }
}

export default results;
