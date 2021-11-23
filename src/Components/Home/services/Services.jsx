import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Services.css";
function Services() {

  return (
    <div className="services">
      <h2>OUR SERVICES</h2>
      <Carousel className="services__carousel">
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            <div><h4>Income Tax</h4>
              <h6>Quis eu reprehenderit velit aliqua</h6>
            </div>
            <div><h4>Compliance</h4><h6>Quis eu reprehenderit velit aliqua</h6>  </div>
            <div><h4>Accounting And Payroll</h4><h6>Quis eu reprehenderit velit aliqua</h6>  </div>

          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            <div><h4>Corporate Tax</h4><h6>Quis eu reprehenderit velit aliqua</h6>  </div>
            <div><h4>Registrations</h4><h6>Quis eu reprehenderit velit aliqua</h6>  </div>
            <div><h4>Goods and Services</h4><h6>Quis eu reprehenderit velit aliqua</h6>  </div>

          </div>

        </Carousel.Item>
      </Carousel>



    </div>
  )
}

export default Services
