import {createSlice, nanoid} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: 1,
                name: 'Note 1',
                color: 'green',
            },
            {
                id: 2,
                name: 'Note 2',
                color: 'blue',
            },
            {
                id: 3,
                name: 'Note 3',
                color: 'yellow',
            }
        ]
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (title,color) => {
                console.log(title,color);
                return {
                    payload: {
                        id: nanoid(),
                        name: title,
                        color: color
                    }
                }
            }
        },
    }

})

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;
