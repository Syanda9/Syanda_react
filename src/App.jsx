import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './about'
import Service from './Services'
import MyWork from './MyWork'
import Contacts from './Contact'
import Footer from './footer'
const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contacts/>
      <Footer/>
    </div>
  )
}
export default App