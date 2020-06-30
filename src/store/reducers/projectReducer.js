const initState = {
    projects: [
        {id: '5Atkf5f7GBIBhK08fofW', title: 'One project', content: 'Blahh1' },
        {id: 'BbZPuw6SOQuuudzzXdCe', title: 'Two project', content: 'Blahh2' },
        {id: 'z9iV3rvufmVWjUTvTtVV', title: 'Three project', content: 'Blahh3' },
    ]
}

const projectReducer = (state = initState, action) => { //state i actions //3
    switch(action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default: 
            return state;
    }
}

export default projectReducer;