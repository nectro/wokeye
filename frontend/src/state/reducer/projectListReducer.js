var initState = []

const projectListReducer = (state = initState, action) => {
    switch(action.type){
        case 'set_projects_list':
            const Projects = action.payload 
            return Projects
        default:
            return state
    }
}

export default projectListReducer