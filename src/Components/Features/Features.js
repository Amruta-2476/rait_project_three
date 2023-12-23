import React from 'react'
import SingleFeature from './SingleFeature'

const Features = () => {
  const features = {
    feature1: {
      key:1,
      icon: 'icofont-ambulance-cross',
      title:"Emergency Help",
      caption: " Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    feature2: {
      key:2,
      icon: 'icofont-medical-sign-alt',
      title:"Enriched Pharmecy",
      caption: "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    feature3: {
      key:3,
      icon: 'icofont-stethoscope',
      title:"Medical Treatment",
      caption: "  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
  }
  return (
    <>
      <section className="Feautes section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <SingleFeature features={features.feature1}/>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
               <SingleFeature features={features.feature2}/>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
               <SingleFeature features={features.feature3}/>
                {/* End Single features */}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Features
