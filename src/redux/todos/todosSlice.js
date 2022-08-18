import {createSlice, current, nanoid} from "@reduxjs/toolkit";

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
        ],
        filteredItems: ''
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
        filterTodos: {
            reducer: (state, action) => {
                let items = current(state).items.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()) );
                state.filteredItems = action.payload !== '' ? items : '';
            }
        },
        deleteTodo: {
            reducer: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload )
                if (state.filteredItems)
                state.filteredItems = state.filteredItems.filter(item => item.id !== action.payload )
            }
        }
    }

})

export const {addTodo, filterTodos, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;
