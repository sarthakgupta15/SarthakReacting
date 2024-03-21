import React, {useState} from 'react'

function Products({age, data}) {
  const[a,b] = useState(false);      
  return (
    <div className="text-white w-full h-screen bg-zinc-800">
        
        {/* <h1>{age}</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2> */}
        <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h4>
        <button onClick = {()=> b(!a)}>Change</button>
    </div>
  )
}

export default Products