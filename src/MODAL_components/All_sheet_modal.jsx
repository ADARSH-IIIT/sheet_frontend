import React from 'react'


import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';



import './All_sheet_modal.css'
import { useDispatch, useSelector } from 'react-redux';
import modal_action_fun from '../REDUX/action_function/modal_action';



const All_sheet_modal = ( ) => {


    const dispatch = useDispatch()
    const  {all_sheet_modal} = useSelector(state=>state.all_sheet_modal)

    // console.log(all_sheet_modal , "lkl");

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

                
        <Modal     open={ all_sheet_modal }  {...options} className='als-modal'>
              <Fade in={ all_sheet_modal } >
                        <div className='als-modal1'   onClick={  ()=>{  dispatch(modal_action_fun("all_sheet"  ,  false)  )   }}>  this is all sheet modal  </div>
             </Fade>
        </Modal>
    
  )
}

export default All_sheet_modal