import * as React from 'react'

import HeroSection from '../components/heroSection'
const App = () =>{

  React.useEffect(()=>{
    document.title = "Machiavelli | Home Page"
  }, [])
  return (
    <main className='w-full h-auto'>
      <HeroSection/>

    </main>
  )
}

export default App