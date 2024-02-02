import React from 'react'


import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';


import './Profile_modal.css'
import { useSelector , useDispatch} from 'react-redux';
import modal_action_fun from '../REDUX/action_function/modal_action';



const Profile_modal = (  ) => {

    const dispatch = useDispatch()

    const {my_info} = useSelector(state=>state.myinfo)

    const  {profile_modal} = useSelector(state=>state.profile_modal)

    console.log(profile_modal , "pfm");


    console.log(my_info , "ooo");



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

                
        <Modal     open={ profile_modal }  {...options} className='pf-modal'>
              <Fade in={ profile_modal } >
                        <div className='pf-modal1' onClick={()=>{ dispatch(modal_action_fun("profile"  , false)) }}>  this is profile modal  </div>
             </Fade>
        </Modal>
    
  )
}

export default Profile_modal