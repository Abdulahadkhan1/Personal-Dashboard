// 1. Create static header
//    - Title
//    - Simple navigation

// 2. Add stats cards section
//    - Start with 3 basic cards
//    - Use hardcoded data initially

// 3. Add one basic chart
//    - Use Recharts (easiest charting library)
//    - Start with a simple line chart
import StatsCard from './Components/StatsCard'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-800 w-full '>
      <h1 className='text-purple-600 text-center text-3xl'>Personal Dashboard</h1>
      <nav className='text-white p-5 text-center text-xl'>
        <a href="" className='p-2'>Home</a>
        <a href="" className='p-2'>About Us</a>
        <a href="" className='p-2'>Charts</a>
      </nav>
    </div>
    <StatsCard/>
    </>
  )
}

export default App
