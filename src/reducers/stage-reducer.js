import shortid from "shortid";

const initialState = {
  StartStage: [],
  EndStage: []
};

export default function stageReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_STAGE":
      let newState = {};
      action.payload.req.id = shortid();
      newState = Object.assign({}, state, {
        StartStage: [...state.StartStage, action.payload.req]
      });
      return newState;
    case "SAVE_REQUEST":
      if (action.payload.type === "start") {
        if (state.StartStage.length > 0) {
          let updatetStartsStage = state.StartStage.map(r => {
            if (r.id === action.payload.req.id) {
              return Object.assign({}, r, {
                title: action.payload.req.title,
                author: action.payload.req.author,
                date: action.payload.req.date
              });
            }
            return r;
          });

          return Object.assign({}, state, {
            StartStage: [...updatetStartsStage]
          });
        }
      } else if (action.payload.type === "end") {
        if (state.EndStage.length > 0) {
          let updatetStartsStage = state.EndStage.map(r => {
            if (r.id === action.payload.req.id) {
              return Object.assign({}, r, {
                title: action.payload.req.title,
                author: action.payload.req.author,
                date: action.payload.req.date
              });
            }
            return r;
          });

          return Object.assign({}, state, {
            EndStage: [...updatetStartsStage]
          });
        }
      }

      return state;

    case "DELETE_REQUEST":
      if (action.payload.type === "start") {
        return Object.assign({}, state, {
          StartStage: [
            ...state.StartStage.slice(0, action.payload.index),
            ...state.StartStage.slice(action.payload.index + 1)
          ]
        });
      } else if (action.payload.type === "end") {
        return Object.assign({}, state, {
          EndStage: [
            ...state.EndStage.slice(0, action.payload.index),
            ...state.EndStage.slice(action.payload.index + 1)
          ]
        });
      }
      break;
    case "SWAP_REQUESTS":
      const item = state.StartStage.find(r => r.id === action.payload.id);
      return Object.assign({}, state, {
        StartStage: [
          ...state.StartStage.filter(r => r.id !== action.payload.id)
        ],
        EndStage: [...state.EndStage, item]
      });

    case "FILTER_REQUESTS":
      break;

    default:
      return state;
  }
}
