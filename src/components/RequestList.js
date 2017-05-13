import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import RequestForm from "../components/RequestForm";

class RequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formVisibleStart: false,
      formVisibleEnd: false,
      editMode: false,

      id: "",
      title: "",
      author: "",
      date: ""
    };

    this.showAddRequestForm = this.showAddRequestForm.bind(this);
    this.setValue = this.setValue.bind(this);
    this.editRequest = this.editRequest.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  setValue(type, value) {
    switch (type) {
      case "title":
        this.setState({ title: value });
        break;
      case "author":
        this.setState({ author: value });
        break;
      case "date":
        this.setState({ date: value });
        break;
      default:
        break;
    }
  }

  editRequest(type = "", req = {}, clear = false) {
    this.setState({ id: !clear ? req.id : "" });
    this.setState({ title: !clear ? req.title : "" });
    this.setState({ author: !clear ? req.author : "" });
    this.setState({ date: !clear ? req.date : "" });
  }

  handleSave() {
    this.props.onSave(this.state, this.props.type);
    this.editRequest("", {}, true);
    this.setState({ editMode: false });
  }

  handleAdd() {
    this.props.onAdd(this.state, this.props.type);
    this.editRequest("", {}, true);
  }

  handleEdit(type, request) {
    this.editRequest(this.props.type, request);
    this.setState({ editMode: true });
  }

  handleDelete(type, index) {
    this.props.deleteRequest(type, index);
  }

  showAddRequestForm(type) {
    this.setState({ formVisible: true });
  }

  render() {
    return (
      <div className="requestsTable">
        <div>
          {this.props.type === "start" &&
            <Button
              onClick={() => this.showAddRequestForm()}
              bsStyle={"success"}
            >
              Add Start Request
            </Button>}

          <div>
            {(this.state.formVisible ||
              (this.props.type === "end" && this.state.editMode)) &&
              <RequestForm
                {...this.state}
                setValue={this.setValue}
                onAdd={this.handleAdd}
                onSave={this.handleSave}
                type="start"
              />}
          </div>
        </div>

        <Table striped bordered condensed hover className="list-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.requests.map((r, i) => {
              return (
                <tr key={i}>
                  <td>{r.title}</td>
                  <td>{r.author}</td>
                  <td>{r.date}</td>
                  <td>
                    {this.props.type === "start" &&
                      <Button
                        bsStyle="info"
                        href="#"
                        onClick={e => {
                          this.props.swapRequests(this.props.type, r.id);
                        }}
                      >
                        Move to End stage
                      </Button>}

                    {" "}
                    <Button
                      bsStyle="info"
                      href="#"
                      onClick={e => {
                        this.handleEdit(this.props.type, r);
                      }}
                    >
                      Edit
                    </Button>
                    {" "}
                    <Button
                      bsStyle="danger"
                      href="#"
                      onClick={e => {
                        this.handleDelete(this.props.type, i);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

RequestList.propTypes = {
  requests: PropTypes.array.isRequired,
  onAdd: PropTypes.func
};

export default RequestList;
