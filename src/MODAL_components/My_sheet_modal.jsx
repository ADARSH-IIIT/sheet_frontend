import React from 'react'


import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';



import './My_sheet_modal.css'
import { useDispatch, useSelector } from 'react-redux';
import modal_action_fun from '../REDUX/action_function/modal_action';



const My_sheet_modal = ( ) => {


    const dispatch = useDispatch()
    const  { my_sheet_modal} = useSelector(state=>state.my_sheet_modal)

    // console.log(my_sheet_modal , "cccc");

    // const all_sheet_modal = false

    


    const options = { 

        "className" : 'pop' ,
        "aria-labelledby" : "modal-modal-title" ,
        "aria-describedby" : "modal-modal-description" ,
        "slotProps" : {
            "backdrop": {
            "timeout" : 500
                        }
                       } 
     }


  return (

                
        <Modal     open={ my_sheet_modal }  {...options} className='mys-modal'>
              <Fade in={ my_sheet_modal } >
                        <div className='mys-modal1'   onClick={  ()=>{  dispatch(modal_action_fun("my_sheet"  ,  false)  )   }}>  this is my sheet modal  </div>
             </Fade>
        </Modal>
    
  )
}

export default My_sheet_modal