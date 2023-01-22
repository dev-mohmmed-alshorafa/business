import React, { useEffect } from 'react'
import Apiservices from '../../../services/ApiServices'
import { useState } from 'react'

function About() {
  const [about, setAbout] = useState([])
  const [ib,setI]=useState(0)
  useEffect(() => {
    Apiservices.get('/about').then((res) =>{ 
      setAbout(res.data)
    })
  }, [])
  return (
    <section className="about-area about-five">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image-five">
              <svg
                className="shape"
                width="106"
                height="134"
                viewBox="0 0 106 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="132" r="1.66667" fill="#DADADA" />
              </svg>
              <img src="assets/images/about/about-img1.jpg" alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-five-content">
              <h6 className="small-title text-lg">About Us</h6>
              <h2 className="main-title fw-bold">
                Our team comes with the experience and knowledge
              </h2>
              <div className="about-five-tab">
                
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {about.map((e,i)=> <button key={i}
                    onClick={()=>setI(i)}
                      className="nav-link active"
                      style={{background:i===ib?"var(--primary)":"#ffff",color:i!==ib?"var(--primary)":"#ffff"}}
                      id="nav-who-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-who"
                      type="button"
                      role="tab"
                      aria-controls="nav-who"
                      aria-selected="true"
                    >
                      {e.title}
                    </button>)}
                   
                  
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div 
                    className="tab-pane fade show active"
                    id="nav-who"
                    role="tabpanel"
                    aria-labelledby="nav-who-tab"
                  >
                    <p>
                    {about.length!==0 && about[ib].des}
                    </p>
                   
                  </div>
                 
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
