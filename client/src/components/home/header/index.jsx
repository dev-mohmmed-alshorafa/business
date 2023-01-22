import React, { useEffect } from 'react'
import Apiservices from '../../../services/ApiServices'
import { useState } from 'react'
function Header() {
  const [header, setHeader] = useState({title:'',
des:''})
  useEffect(() => {
    Apiservices.get('/main').then((res) =>{ 
      console.log(res);
      setHeader(res.data[0])})
  }, [])
  if(!header){
    return
  }
  return (
    <section id="hero-area" className="header-area header-eight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-content">
              <h1>{header.title}</h1>
              <p>{header.des}</p>
              <div className="button">
                <a href={header.link} className="glightbox video-button">
                  <span className="btn icon-btn rounded-full">
                    <i className="lni lni-play"></i>
                  </span>
                  <span className="text">Watch Intro</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-image">
              <img src={header.img} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
