import React, { useState } from 'react'

const Appointment = () => {

    const [formData,setFormData] = useState({
        name: '',
        email:'',
        phone: '',
        dept:'',
        doc:'',
        date:'',
        msg:''
    });
    const handleAppointmentFormSubmit = (e) =>{
        e.preventDefault();
        console.log("form submitted");
        console.log(formData);
    }
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(formData);
    }
 
    const handleDeptChange = (selected) =>{
      setFormData({
        ...formData,
        dept: selected,
      })
    }

    const handleDocChange = (selected) =>{
      setFormData({
        ...formData,
        doc: selected,
    })
  }


  return (
    <>
      <section className="appointment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <form className="form" onSubmit={handleAppointmentFormSubmit} >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" value={formData.name} type="text" placeholder="Name" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" value={formData.email} type="email" placeholder="Email" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="phone" value={formData.phone} type="text" placeholder="Phone" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                          value={formData.dept} name="dept"
                        >
                          <span className="current" >Department</span>
                          <ul className="list"  >
                            <li data-value={1} className="option selected ">
                              Department
                            </li>
                            <li data-value={2} value="Cardiac Clinic" className="option" onClick={()=>handleDeptChange('Cardiac Clinic')}>
                              Cardiac Clinic
                            </li>
                            <li data-value={3} value="Neurology" className="option" onClick={()=>handleDeptChange('Neurology')}>
                              Neurology
                            </li>
                            <li data-value={4} value="Dentistry" className="option" onClick={()=>handleDeptChange('Dentistry')}>
                              Dentistry
                            </li>
                            <li data-value={5} value="Gastroenterology" className="option" onClick={()=>handleDeptChange('Gastroenterology')}>
                              Gastroenterology
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Doctor</span>
                          <ul className="list">
                            <li data-value={1} className="option selected ">
                              Doctor
                            </li>
                            <li data-value={2} value="Dr. Akther Hossain" className="option" onClick={()=>handleDocChange('Dr. Akther Hossain')}>
                              Dr. Akther Hossain
                            </li>
                            <li data-value={3} value="Dr. Dery Alex" className="option" onClick={()=>handleDocChange('Dr. Dery Alex')}>
                              Dr. Dery Alex
                            </li>
                            <li data-value={4} value="Dr. Jovis Karon" className="option" onClick={()=>handleDocChange('Dr. Jovis Karon')}>
                              Dr. Jovis Karon
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="date" value={formData.date} type="text" placeholder="Date" id="datepicker" onChange={handleInputChange}  />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="msg"
                          placeholder="Write Your Message Here....."
                          defaultValue={""}
                          value={formData.msg}
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-12">
                      <p>( We will be confirm by an Text Message )</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="appointment-image">
                  <img src="img/contact-img.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Appointment