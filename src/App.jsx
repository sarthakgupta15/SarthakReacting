import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b] = useState(1); //a takes value 1, and b is updater
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/*       
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button>
       */}
      <Products age = "25" data={{age:20, name:"Sarthak"}}/>  
    </div> //above line jsx curly brackets wrap data object
  )
}

export default App