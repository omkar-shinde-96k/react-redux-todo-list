let DataArray = [];
let id = 0;
const AddTodoData = (state = [], action) => {
    switch (action.type) {
        case "ADD": {
            let add = { id, ...action.payload }
            DataArray.push(add);
            console.log("one data added", DataArray);
            id++
            return DataArray
        }

        case "DELETE": {
            DataArray = DataArray.filter((curr, index) => {
                return index !== action.payload
            })
            console.log("one data removed", DataArray);
            return DataArray;
        }

        case 'ISCOMPLETE': {
            DataArray = DataArray.map((curr, index) => {
                if (index == action.payload) {
                    console.log(curr);
                    curr.isComplete = !curr.isComplete;
                }
                return curr
            })
            return DataArray;
        }

        case 'UPDATETODO': {
            console.log("update", action.payload.index);
            DataArray = DataArray.map((curr, index) => {
                if (index == action.payload.index) {
                    curr = action.payload
                }
                return curr
            })
            return DataArray;
        }

        default: return state;
    }
}

export default AddTodoData;