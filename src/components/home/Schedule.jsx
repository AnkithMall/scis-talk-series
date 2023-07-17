import { useState } from "react";
import ScheduleCardComponent from '../Schedule/ScheduleCardComponent'
const Schedule = () => {
    const [tongle,setTongle] = useState(1) ;

    return (
        <div id="schedule" className="bg-[#c8b6ff]">
        <div className="text-4xl text-center py-5 font-bold">Schedule</div>
        <div className="eventSchedule">
            <div className="tabs mb-4 mx-[20px] sm:mx-[100px] border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex text-sm font-medium text-center" id="myTab" >
                        <li className="mr-2" >
                            <button className={`${tongle === 1 ? 'border-[#3a0ca3]':'border-transparent'} inline-block bg-[#bbd0ff] p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#4361ee] w-[130px] h-[60px]`} onClick={()=>setTongle(1)} id="profile-tab" >Upcoming Talks</button>
                        </li>
                        <li className="mr-2" >
                            <button className={`${tongle === 2 ? 'border-[#3a0ca3]':'border-transparent'} inline-block bg-[#bbd0ff] p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#4361ee] w-[130px] h-[60px]`} id="dashboard-tab" onClick={()=>setTongle(2)}>Past Talks</button>
                        </li>
                    </ul>
                
            </div>
            <div className="tabContent mx-[8%] pb-7">
                    <div className={`${tongle === 1 ? 'block':'hidden'} max-h-[570px] overflow-y-scroll`} id="profile" >
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                        <ScheduleCardComponent/>
                    </div>
                    <div className={`${tongle === 2 ? 'block':'hidden'} max-h-[500px] overflow-y-scroll`} id="dashboard">
                        <ScheduleCardComponent/>
                    </div>
            </div>
        </div>
    </div>
)}

export default Schedule ;