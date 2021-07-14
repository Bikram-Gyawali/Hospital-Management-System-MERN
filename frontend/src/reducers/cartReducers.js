import {ADD_TO_CART} from '../constants/cartConstants'

export const cartReducer= (state= {cartItems: []}, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item= action.payload;
            
            const existItem= state.cartItems.find((x)=> x.id === item.id)

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                        x.id=== item.id? item: x
                    )
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state
    }
}