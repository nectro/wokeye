var initState = []

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'set_projects':
            const Projects = action.payload 
            return Projects
        default:
            return state
    }
}

export default projectReducer