let id = 0;
const AddTodoData = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      let add = { id, ...action.payload };
      // state.push(add);
      state = [...state, add]
      id++;
      return state;
    }

    case "DELETE": {
      state = state.filter((curr) => {
        return curr.id !== action.payload;
      });
      return state;
    }

    case "ISCOMPLETE": {
      state = state.map((curr) => {
        if (curr.id === action.payload) {
          curr.isComplete = !curr.isComplete;
        }
        return curr;
      });
      return state;
    }

    case "UPDATETODO": {
      state = state.map((curr) => {
        if (curr.id === action.payload.id) {
          curr = action.payload;
        }
        return curr;
      });
      return state;
    }

    default:
      return state;
  }
};

export default AddTodoData;
