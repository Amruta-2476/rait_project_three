import React from 'react'
import SingleFun from './SingleFun'

const FunFact = () => {
    const funfacts = {
        funfact1: {
            icon: 'icofont-home',
            count: 3468,
            title: "Hospital Rooms",
        },
        funfact2: {
            icon: 'icofont-user-alt-3',
            count: 557,
            title: "Specialist Doctors",
        },
        funfact3: {
            icon: 'icofont-simple-smile',
            count: 4379,
            title: "Happy Patients",
        },
        funfact4: {
            icon: 'icofont-table',
            count: 32,
            title: "Years of Experience",
        },

    }
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                          <SingleFun funfacts={funfacts.funfact1} />
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <SingleFun funfacts={funfacts.funfact2} />
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <SingleFun funfacts={funfacts.funfact3} />
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <SingleFun funfacts={funfacts.funfact4} />
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FunFact
