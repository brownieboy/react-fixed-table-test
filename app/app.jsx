'use strict';

import React from 'react';
import FixedDataTable from 'fixed-data-table';
import {es6BindAll} from "es6bindall";

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

// import ListOfComponents from './components/ListOfComponents.jsx';

class MainApp extends React.Component {
  constructor(props) {
  	super(props);
  	// In ES6 class syntax, React no longer automagically binds your
  	// methods to the component object, so DIY (if they're likely to
  	// used as callbacks only?)
    es6BindAll(this, ["rowGetter"]);
  }
  rowGetter(rowIndex) {
    return this.props.rows[rowIndex];
  }
	render() {
    return (
       <Table
          rowHeight={50}
          rowGetter={this.rowGetter}
          rowsCount={this.props.rows.length}
          width={5000}
          height={5000}
          headerHeight={50}>
          <Column
            label="Col 1"
            width={3000}
            dataKey={0}
          />
          <Column
            label="Col 2"
            width={2000}
            dataKey={1}
          />
        </Table>
		)
	}
}

var rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3']
];


React.render(<MainApp rows={rows} />, document.body);




