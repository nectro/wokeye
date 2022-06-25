export const setUser = (user) => {
    return dispatch =>{
        dispatch({
            type:"set_user",
            payload:user?{status:true,data:user}:{status:false,data:user} 
        })
    }
}

export const setProject = (projects) => {
    return dispatch => {
        dispatch({
            type:"set_projects",
            payload:projects
        })
    }
}


export const setProjectList = (projects) => {
    return dispatch => {
        dispatch({
            type:"set_projects_list",
            payload:projects
        })
    }
}