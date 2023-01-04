import React from 'react'
import Slither from '../../Analysis/Slither'
import Mythril from '../../Analysis/Mythril'

function Result() {
  return (
    <div><h1>The result of your smart contract analysis is here:</h1>
    <Slither/>
    <Mythril/>
    </div>
  )
}

export default Result