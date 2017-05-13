import React, { Component } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value) {
    this.setState({ keyword: value });
    this.props.applyFilter(value, this.props.type);
  }

  render() {
    return (
      <div className="filterContainer">
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Filter:</ControlLabel>
            {" "}
            <FormControl
              type="text"
              placeholder="Filter by any field"
              value={this.state.keyword}
              onChange={e => {
                this.onChangeHandler(e.target.value);
              }}
            />
          </FormGroup>
          {" "}
          <Button
            bsStyle="warning"
            onClick={e => {
              this.onChangeHandler("");
            }}
          >
            Clear
          </Button>
        </Form>
      </div>
    );
  }
}

export default Filter;
