import { useState } from 'react'

import PhoneDirectory from './Page/PhoneDirectory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneDirectory/> 
    </>
  )
}

export default App
