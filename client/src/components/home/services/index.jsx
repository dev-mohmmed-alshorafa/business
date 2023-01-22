import React, { useEffect, useState } from 'react'
import Apiservices from '../../../services/ApiServices'

function Services() {
  const [services, setServices] = useState([])
  useEffect(() => {
    Apiservices.get('/services').then((res) =>{ 
      console.log(res.data);
      setServices(res.data)})
  }, [])
  return (
    <section id="services" className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Services</h6>
                <h2 className="fw-bold">Our Best Services</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            services.map((e,i)=>{
             return <div key={i} className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon">
                  <i className={e.img}></i>
                </div>
                <div className="service-content">
                  <h4>{e.title}</h4>
                  <p>
                   {e.des}
                  </p>
                </div>
              </div>
            </div>
            })
          }
         
         
         
         
          
          
        </div>
      </div>
    </section>
  )
}

export default Services
