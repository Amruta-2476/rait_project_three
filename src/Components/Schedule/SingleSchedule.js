import React from "react";

const SingleSchedule = ({ schedules }) => {
    console.log(schedules.caption)
  return (
    <>
      <div className="single-schedule first">
        <div className="inner">
          <div className="icon">
            <i className="fa fa-ambulance" />
          </div>
          <div className="single-content">
            <span>{schedules.name}</span>
            <h4>{schedules.heading}</h4>
            <p>
              {schedules.caption !== undefined ? schedules.caption : ""}

              {schedules.time_1 !== undefined ||
              schedules.time_2 !== undefined ||
              schedules.time_3 !== undefined
                ? schedules.time_1 + schedules.time_2 + schedules.time_3
                : ""}
            </p>
            <a href="#">
              LEARN MORE
              <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSchedule;
