import React from 'react'
import schedule from "../files/pdf/schedule.pdf";
const EventSchedule = () => {
    return (
        <div className='container bg-trans'>
            <h4 className="text-center content bg-trans">TechNITi'23 Event Schedule</h4>

            <div className="d-flex justify-content-center mt-1">
                <a href={schedule}>
                    <button className="btn btn-green mx-auto w-125 rounded">
                        Download Schedule
                    </button>
                </a>
            </div>
        </div>
    )
}

export default EventSchedule 