import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as stageActions from "../actions/stage-actions";
import RequestList from "../components/RequestList";
import Filter from "../components/Filter";

const getFilteredRequests = (requests, key) => {
  return requests.filter(
    r => r.title.includes(key) || r.author.includes(key) || r.date.includes(key)
  );
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywordStarts: "",
      keywordEnds: ""
    };

    this.onAddRequestToStage = this.onAddRequestToStage.bind(this);
    this.onSaveToStage = this.onSaveToStage.bind(this);
    this.editRequest = this.editRequest.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
    this.swapRequests = this.swapRequests.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  onAddRequestToStage(request, type) {
    this.props.actions.addRequestToStage(type, {
      id: request.id,
      title: request.title,
      author: request.author,
      date: request.date
    });
  }

  onSaveToStage(request, type) {
    this.props.actions.saveRequest(type, {
      id: request.id,
      title: request.title,
      author: request.author,
      date: request.date
    });
  }

  editRequest(type, req) {
    //
  }

  deleteRequest(type, id) {
    this.props.actions.deleteRequest(type, id);
  }

  swapRequests(type, id) {
    this.props.actions.swapRequests(type, id);
  }

  applyFilter(key, type) {
    if (type === "start") this.setState({ keywordStarts: key });
    if (type === "end") this.setState({ keywordEnds: key });
  }

  clearFilter() {}

  render() {
    return (
      <div>
        <h1 className="custom-title">Stage Manager</h1>
        <div>
          <h2>Start Stage</h2>
          <Filter
            keyword={this.state.keywordStarts}
            type="start"
            applyFilter={this.applyFilter}
            clearFilter={this.clearFilter}
          />
          <RequestList
            type="start"
            requests={getFilteredRequests(
              this.props.stages.StartStage,
              this.state.keywordStarts
            )}
            onAdd={this.onAddRequestToStage}
            onSave={this.onSaveToStage}
            editRequest={this.editRequest}
            deleteRequest={this.deleteRequest}
            swapRequests={this.swapRequests}
          />
        </div>

        <div>
          <h2>End Stage</h2>
          <Filter
            keyword={this.state.keywordEnds}
            type="end"
            applyFilter={this.applyFilter}
            clearFilter={this.clearFilter}
          />
          <RequestList
            type="end"
            requests={getFilteredRequests(
              this.props.stages.EndStage,
              this.state.keywordEnds
            )}
            onSave={this.onSaveToStage}
            editRequest={this.editRequest}
            deleteRequest={this.deleteRequest}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stages: state.stageReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
