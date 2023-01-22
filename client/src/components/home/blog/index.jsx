import React from 'react'
import { useEffect } from 'react'
import Apiservices from '../../../services/ApiServices'
import { useState } from 'react'

function Blog() {
  const [blog,setBlog]=useState([])
  useEffect(()=>{
    Apiservices.get('/blog').then(res=>setBlog(res.data))
  },[])
  return (
    <div id="blog" className="latest-news-area section" style={{background: "#e1e1e1"}}>
    <div className="section-title-five">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <h6>latest news</h6>
              <h2 className="fw-bold">Latest News & Blog</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {
          blog.map((e,i)=><div className="col-lg-4 col-md-6 col-12">
          <div className="single-news">
            <div className="image">
              <a href="javascript:void(0)"><img className="thumb" src={e.img1} alt="Blog" /></a>
              <div className="meta-details">
                <img className="thumb" src={e.img2} alt="Author" />
                <span>BY {e.name}</span>
              </div>
            </div>
            <div className="content-body">
              <h4 className="title">
                <a href="javascript:void(0)"> {e.title} </a>
              </h4>
              <p>
                {e.des}
              </p>
            </div>
          </div>
        </div>)
        }
        
      
      </div>
    </div>
  </div>
  )
}

export default Blog
