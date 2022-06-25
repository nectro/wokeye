var initState = []

const taskListReducer = (state = initState, action) => {
    switch(action.type){
        case 'set_tasks_list':
            const tasks = action.payload 
            return tasks
        default:
            return state
    }
}

export default taskListReducer