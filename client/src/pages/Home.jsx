import React from 'react'
import Nav from './../components/home/nav'
import Header from './../components/home/header'
import About from './../components/home/About'
import Services from './../components/home/services'
import Blog from './../components/home/blog'
import Contact from './../components/home/contact'
import Footer from './../components/home/footer'
function Home() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
        <a href="#" className="scroll-top btn-hover">
          <i className="lni lni-chevron-up"></i>
        </a>
    </div>
  )
}

export default Home
