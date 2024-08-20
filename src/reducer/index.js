import { combineReducers } from "redux";
import authReducer from '../slice/authSlice'
import loadingbarSlice from "../slice/loadingbarSlice";

const rootReducer = combineReducers({
    auth: authReducer,




    loadingBar: loadingbarSlice,
})

export default rootReducer