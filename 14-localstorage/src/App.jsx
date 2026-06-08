import React from 'react'

const App = () => {

const user = {
  username: 'Chirag',
  age: 23,
  city: 'Ahmedabad'
}

localStorage.setItem('user', JSON.stringify(user))
const usera = JSON.parse(localStorage.getItem('user'))

console.log(usera);


  return (
    <div>
      App
    </div>
  )
}

export default App




