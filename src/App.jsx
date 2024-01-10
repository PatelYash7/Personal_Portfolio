import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      
      <div className="bg-red-300 min-h-screen flex justify-center  items-center ">
        <button className='bg-green-300 rounded-md p-4  ' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
