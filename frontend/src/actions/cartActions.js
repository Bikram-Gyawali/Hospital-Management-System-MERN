import {ADD_TO_CART} from '../constants/cartConstants'
import axios from 'axios'

export const addToCart= (id, qty)=>async( dispatch, getState)=>{
    const {data}= await axios.get(`http://localhost:5000/api/medic/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: data.name,
            id: data._id,
            image: data.image,
            cost: data.cost,
            weight: data.weight,
            aka: data.aka,
            qty
    }})

    await localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}