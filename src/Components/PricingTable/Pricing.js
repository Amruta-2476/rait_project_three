import React from 'react'
import PriceService from './PriceService'

const Pricing = () => {
    const services = {
        service1: {
            icon: 'icofont-ui-cut',
            title: "Plastic Suggery",
            amount: 199,
            features: {
                feature1: {
                    name:"Lorem ipsum dolor sit",
                    status:true,
                },
                feature2: {
                    name:"Cubitur sollicitudin fentum",
                    status:true,
                },
                feature3: {
                    name:" Nullam interdum enim",
                    status:false,
                },
                feature4: {
                    name:" Donec ultricies metus",
                    status:false,
                },
                feature5: {
                    name:" Pellentesque eget nibh",
                    status:false,
                },
            }
        }
         // ,
        // service2:{

        // },
        // service3:{

        // }
    }
  return (
    <>
       <section className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Provide You The Best Treatment In Resonable Price</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Table */}
             <PriceService services={services.service1}/>
              {/* End Single Table*/}
              {/* Single Table */}
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont icofont-tooth" />
                    </div>
                    <h4 className="title">Teeth Whitening</h4>
                    <div className="price">
                      <p className="amount">
                        $299<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Lorem ipsum dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Cubitur sollicitudin fentum
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Nullam interdum enim
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close" />
                      Donec ultricies metus
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close" />
                      Pellentesque eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
              {/* Single Table */}
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont-heart-beat" />
                    </div>
                    <h4 className="title">Heart Suggery</h4>
                    <div className="price">
                      <p className="amount">
                        $399<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Lorem ipsum dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Cubitur sollicitudin fentum
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Nullam interdum enim
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Donec ultricies metus
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Pellentesque eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
            </div>
          </div>
        </section>
    </>
  )
}

export default Pricing
