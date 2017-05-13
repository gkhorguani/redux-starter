import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Alert
} from "react-bootstrap";

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  validateAndSubmit() {
    const { title, author, date } = this.props;
    if (title && author && date) this.props.onAdd();
    else {
      this.setState({ errorMessage: "Form is invalid" });
    }
  }

  onChangeHandler(field, value) {
    this.props.setValue(field, value);
    this.setState({ errorMessage: "" });
  }

  render() {
    return (
      <div className="requestForm">
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Title</ControlLabel>
            {" "}
            <FormControl
              type="text"
              placeholder="Request title"
              value={this.props.title}
              onChange={e => this.onChangeHandler("title", e.target.value)}
            />
          </FormGroup>
          {" "}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Author</ControlLabel>
            {" "}
            <FormControl
              type="email"
              placeholder="Request author"
              value={this.props.author}
              onChange={e => this.onChangeHandler("author", e.target.value)}
            />
          </FormGroup>{" "}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Date</ControlLabel>
            {" "}
            <FormControl
              type="email"
              placeholder="Date"
              value={this.props.date}
              onChange={e => this.onChangeHandler("date", e.target.value)}
            />
          </FormGroup>
          {" "}
          {!this.props.editMode &&
            <Button type="button" onClick={this.validateAndSubmit.bind(this)}>
              Add
            </Button>}
          {" "}
          {this.props.editMode &&
            <Button type="button" bsStyle="danger" onClick={this.props.onSave}>
              Save
            </Button>}
          {this.state.errorMessage &&
            <div>
              <Alert bsStyle="warning" className="errorMessage">
                <strong>{this.state.errorMessage}</strong>
              </Alert>
            </div>}
        </Form>
      </div>
    );
  }
}

RequestForm.propTypes = {
  type: PropTypes.string
};

export default RequestForm;
