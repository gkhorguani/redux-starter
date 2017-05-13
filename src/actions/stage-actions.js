export const addRequestToStage = (stageType, request) => ({
  type: "ADD_TO_STAGE",
  payload: { type: stageType, req: request }
});

export const saveRequest = (type, req) => ({
  type: "SAVE_REQUEST",
  payload: {
    type: type,
    req: req
  }
});

export const deleteRequest = (type, index) => ({
  type: "DELETE_REQUEST",
  payload: {
    type: type,
    index: index
  }
});

export const swapRequests = (type, id) => ({
  type: "SWAP_REQUESTS",
  payload: {
    type: type,
    id: id
  }
});

export const filterRequests = (type, key) => ({
  type: "FILTER_REQUESTS",
  payload: {
    type: type,
    key: key
  }
});
