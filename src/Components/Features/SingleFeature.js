import React from 'react'

const SingleFeature = ({ features }) => {
    console.log(features.caption)
  return (
    <>
      <div className={`single-features ${(features.key === 3) ? 'last':''}`}>
                  <div className="signle-icon">
                    <i className={`icofont ${features.icon}`} />
                  </div>
                  <h3>{features.title}</h3>
                  <p>
                   {features.caption}
                  </p>
                </div>
    </>
  )
}

export default SingleFeature
