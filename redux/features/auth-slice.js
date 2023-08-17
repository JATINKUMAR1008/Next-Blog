import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value:{
        isAuth: false,
        _id: "",
        name: "",
        user:{}
    },
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logOut: ()=>{
            return initialState
        },
        logIn: (state, action)=>{
            return{
                value:{
                    isAuth: true,
                    _id: action.payload._id,
                    name: action.payload.name,
                    user: action.payload.user
                }
            }
        }
    }
})

export const {logIn,logOut} = auth.actions
export default auth.reducer