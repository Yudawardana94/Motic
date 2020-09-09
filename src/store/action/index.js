import axios from 'axios'
import {REACT_APP_APIKEY, REACT_APP_TMDB} from '@env'

const tmdb = REACT_APP_TMDB
const apikey = REACT_APP_APIKEY

console.log(REACT_APP_APIKEY, 'ini apikeynya')

export function getInitialData () {
    // console.log('masuk sini')
    return async (dispatch) => {
        // console.log('terus disini')
        try {
            let initialNowPlaying = await axios({
                method: 'GET',
                url: `${tmdb}3/movie/now_playing?api_key=${apikey}&language=en-US`
            })
            let initialGenre = await axios({
                method: 'GET',
                url: `${tmdb}3/genre/movie/list?api_key=${apikey}&language=en-US`
            })
            let initialCommingSoon = await axios({
                method: 'GET',
                url: `${tmdb}3/movie/upcoming?api_key=${apikey}&language=en-US`
            })
            console.log(initialGenre.data.genres.length, initialNowPlaying.data.results.length)
            dispatch({
                type: 'SET_INITIAL_VALUE',
                payload: {
                    initialNowPlaying : initialNowPlaying.data.results.splice(0,6),
                    initialGenre : initialGenre.data.genres.splice(0,6),
                    initialCommingSoon : initialCommingSoon.data.results.splice(0,6)
                }
            })
        } catch (error) {
            console.log('===============# ERROR #===============')
            console.log(error)
        }
    }
}

export function getDetailByid(id) {
    console.log('kesini')
    return async dispatch => {
        console.log('coba di get detail', tmdb, apikey, id)
        try {
            let detailData = await axios ({
                method: 'GET',
                url: `${tmdb}3/movie/${id}?api_key=${apikey}&language=en-US&append_to_response=credits`
            })
            console.log(detailData.data,'---===---')
            dispatch({
                type: 'SET_DETAIL_MOVIE',
                payload: detailData.data
            })
        } catch (error) {
            console.log('===============# ERROR #===============')
            console.log(error)
        }
    }
}

// export function setEmptyDetail(){
//     return dispatch => {
//         console.log('kosongin dulu')
//         dispatch({
//             type: 'SET_EMPTY_DETAIL_MOVIE',
//         })
//     }
// }