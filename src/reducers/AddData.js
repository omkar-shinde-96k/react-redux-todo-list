let DataArray = [];
let id = 0;
const AddTodoData = (state = [], action) => {
    switch (action.type) {
        case "ADD": {
            console.log("add rub");
            let add = { id, ...action.payload }
            DataArray.push(add);
            console.log("one data added", DataArray);
            id++
            return DataArray
        }

        case "DELETE": {
            DataArray = DataArray.filter((curr) => {
                return curr.id !== action.payload
            })
            console.log("one data removed", DataArray);
            return DataArray;
        }

        case 'ISCOMPLETE': {
            DataArray = DataArray.map((curr) => {
                if (curr.id == action.payload) {
                    console.log(curr);
                    curr.isComplete = !curr.isComplete;
                }
                return curr
            })
            return DataArray;
        }

        case 'UPDATETODO': {
            console.log("update rubn");
            DataArray = DataArray.map((curr) => {
                if (curr.id == action.payload.id) {
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