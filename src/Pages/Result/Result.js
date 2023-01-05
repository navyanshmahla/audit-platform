import React from 'react'
import Slither from '../../Analysis/Slither'
import Mythril from '../../Analysis/Mythril'

function Result() {
  const token = localStorage.getItem('access_token')
  if(token == null){
    window.location.replace('http://localhost:3000/login')
  }
  return (
    <div><h1>The result of your smart contract analysis is here:</h1>
    <Slither/><br/>
    <Mythril/>
    </div>
  )
}

export default Result