import axios from 'axios'
import {REACT_APP_APIKEY} from '@env'

const tmdb = 'https://api.themoviedb.org/'
const apikey = REACT_APP_APIKEY

console.log(REACT_APP_APIKEY, 'ini apikeynya')

export function getinitialData () {
    console.log('masuk sini')
    return async (dispatch) => {
        console.log('terus disini')
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