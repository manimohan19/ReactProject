import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from './App'

function Cart() {
const {cartCount} = useContext(cartContext)

    const navigate = useNavigate()

    function homePage() {
        navigate("/")
    }
  return (
    <div><h1>Cart Page</h1>
    <h2>Total Items :{cartCount} </h2>
    <button onClick={homePage}>Go To Home</button>
    </div>
  )
}

export default Cart