const initialState = {
    appName: 'Motic',
    isLogin: true,
    loggedUser: null,
    initialNowPlaying: [], 
    initialGenre: [], 
    initialCommingSoon: [],
    detailMovie: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_INITIAL_VALUE':
        return { ...state, ...payload }

    case 'SET_DETAIL_MOVIE': 
        return {...state, detailMovie : {...payload}}
    
    case 'SET_EMPTY_DETAIL_MOVIE': 
        return {...state, detailMovie : {}}
    default:
        return state
    }
}
