import { createStore , applyMiddleware } from "redux";
import allreducer from "./reducers/combine_reducer";




const store = createStore( allreducer  )


export default store