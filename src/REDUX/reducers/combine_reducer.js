import { combineReducers } from 'redux'
import slide_auth_red_fun from './slide_auth_red_fun'
import set_my_info_reducer from './set_my_info_reducer'
import log_in_reducer from './is_loggedin_reducer'
import  { all_sheet_modal_reducer_function, create_sheet_modal_reducer_function, my_sheet_modal_reducer_function, open_sheet_modal_reducer_function, profile_modal_reducer_function } from './modal_reducer_function'
// import profile_modal_reducer_function from './profile_modal_reducer_function'


const allreducer = combineReducers(
    {  slide_auth : slide_auth_red_fun ,  myinfo : set_my_info_reducer , isloggedin : log_in_reducer , profile_modal : profile_modal_reducer_function , create_sheet_modal : create_sheet_modal_reducer_function , all_sheet_modal : all_sheet_modal_reducer_function , my_sheet_modal : my_sheet_modal_reducer_function , open_sheet_modal : open_sheet_modal_reducer_function }
)

export default allreducer