import React from 'react'
import SingleSchedule from './SingleSchedule'

const Schedule = () => {
  const schedules = {
    schedule1: {
      name: "Lorem Amet",
      heading: "Emergency Cases",
      caption: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
    },
    schedule2: {
      name: "Fusce Porttitor",
      heading: "Doctors Timetable",
      caption: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
    },
    schedule3: {
      name: "Donec luctus",
      heading: "Opening Hours",
      time_1: "Monday - Fridayp8.00-20.00",
      time_2: "Monday - Fridayp8.00-20.00",
      time_3: "Monday - Fridayp8.00-20.00",
    },

  }
  return (
    <>
      <section className="schedule">
          <div className="container">
            <div className="schedule-inner">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 ">
                  {/* single-schedule */}
                 <SingleSchedule schedules={schedules.schedule1}/>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* single-schedule */}
                 <SingleSchedule schedules={schedules.schedule2}/>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  {/* single-schedule */}
                 <SingleSchedule schedules={schedules.schedule3}/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Schedule
