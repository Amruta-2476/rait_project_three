import React from 'react'

const PriceService = ({ services }) => {
    console.log(services)
  return (
    <>
       <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <div className="icon">
                      <i className={`icofont ${services.icon}`} />
                    </div>
                    <h4 className="title">{services.title}</h4>
                    <div className="price">
                      <p className="amount">
                        ${services.amount}<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li className={`${(services.features.feature1.status) ? '' : 'cross'}`}>
                      <i className={`icofont ${(services.features.feature1.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                      {services.features.feature1.name}
                    </li>
                    <li className={`${(services.features.feature2.status) ? '' : 'cross'}`}>
                      <i className={`icofont ${(services.features.feature2.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                      {services.features.feature2.name}
                    </li>
                    <li className="cross">
                      <i className={`icofont ${(services.features.feature3.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`}/>
                      {services.features.feature3.name}
                    </li>
                    <li className={`${(services.features.feature4.status) ? '' : 'cross'}`}>
                      <i className={`icofont ${(services.features.feature4.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                      {services.features.feature4.name}
                      </li>
                      <li className={`${(services.features.feature5.status) ? '' : 'cross'}`}>
              <i className={`icofont ${(services.features.feature5.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
              {services.features.feature5.name}
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
    </>
  )
}

export default PriceService
