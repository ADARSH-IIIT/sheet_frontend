import React from 'react'


import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';



import './Create_sheet_modal.css'
import { useDispatch, useSelector } from 'react-redux';
import modal_action_fun from '../REDUX/action_function/modal_action';



const Create_shet_modal = ( ) => {


    const dispatch = useDispatch()
    const  {create_sheet_modal} = useSelector(state=>state.create_sheet_modal)



    


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

                
        <Modal     open={ create_sheet_modal }  {...options} className='cns-modal'>
              <Fade in={ create_sheet_modal } >
                        <div className='cns-modal1'   onClick={  ()=>{  dispatch(modal_action_fun("create_sheet"  ,  false)  )   }}>  this is create new sheet modal  </div>
             </Fade>
        </Modal>
    
  )
}

export default Create_shet_modal