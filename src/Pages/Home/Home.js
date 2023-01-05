import React from 'react'
import FileUpload from '../../Components/FileUpload/fileupload'

function Home() {
  const token = localStorage.getItem('access_token')
  if(token == null){
    window.location.replace('http://localhost:3000/login')
  }
  return (
    <div><h1>Welcome to the smart contract audit platform</h1>
    <br/><br/>
    <FileUpload/>
    </div>
  )
}

export default Home