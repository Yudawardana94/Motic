const initialState = {
    appName: 'Motic',
    isLogin: false,
    loggedUser: null,
    initialNowPlaying: [], 
    initialGenre: [], 
    initialCommingSoon: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_INITIAL_VALUE':
        return { ...state, ...payload }

    default:
        return state
    }
}
