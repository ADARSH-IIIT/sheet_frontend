import { combineReducers } from 'redux'
import slide_auth_red_fun from './slide_auth_red_fun'


const allreducer = combineReducers(
    {  slide_auth : slide_auth_red_fun  }
)

export default allreducer