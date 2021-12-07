import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Servicesd.css";
function Services() {

  return (
    <div className="services">
      <h2>OUR SERVICES</h2>
      <Carousel className="services__carousel">
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            <div><h4>Accounting</h4>
              <h6></h6>
            </div>
            <div><h4>Auditing</h4><h6></h6>  </div>
            <div><h4>Gst Registration | Filing</h4><h6></h6>  </div>

          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            
            <div><h4>TAN</h4><h6>Application</h6>  </div>
            <div><h4>Income Tax Return (ITR) FILING</h4><h6></h6>  </div>
            <div><h4>TDS Filing</h4><h6></h6>  </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            <div><h4>Partnership Deed preperation</h4><h6></h6>  </div>
            <div><h4>Firm Registration</h4><h6></h6>  </div>
            <div><h4>MSME Registration</h4><h6></h6>  </div>

          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
            <div><h4>Trade Mark</h4><h6></h6>  </div>
            <div><h4>Project Report</h4><h6></h6>  </div>
            <div><h4>15 ca/cb Filing</h4><h6></h6>  </div>

          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="services__carousalItem">
          <div><h4>PAN</h4><h6>Application / Currection</h6>  </div>
          <div><h4>Digital Signature</h4><h6></h6>  </div>
          <div><h4>Company Registration</h4><h6></h6>  </div>
          <div><h4>E-tender</h4><h6></h6>  </div>

          </div>

        </Carousel.Item>
      </Carousel>



    </div>
  )
}

export default Services
