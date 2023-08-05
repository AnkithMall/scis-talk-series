import { useEffect, useState } from "react";
import ScheduleCardComponent from '../Schedule/ScheduleCardComponent'

// const retrieve = async () => ( await fetch('http://localhost:1337/api/talks'))

const Schedule = (props) => {
    const [tongle, setTongle] = useState(1);
    const [upcomingTalks, setUpcomingTalks] = useState([]);
    const [pastTalks, setPastTalks] = useState([]);

    useEffect(() => {
        const getUpcomingEvents = () => {
            const currentDate = new Date();
            // console.log('current date => ',currentDate)
            const upcomingEvents = props.data.filter((event) => {
                const eventDate = new Date(event.attributes.date);
                //   console.log('event date =>',eventDate)
                // console.log('return =>', eventDate >= currentDate)

                return (eventDate >= currentDate);
            });
            // console.log('upcoming event => ',upcomingEvents)

            return upcomingEvents.sort((a, b) => new Date(a.attributes.date) - new Date(b.attributes.date));
        };
        setUpcomingTalks(getUpcomingEvents);

        const getPastEvents = () => {
            const currentDate = new Date();
            // console.log('current date => ',currentDate)
            const pastEvents = props.data.filter((event) => {
                const eventDate = new Date(event.attributes.date);
                //   console.log('event date =>',eventDate)
                // console.log('return =>', eventDate >= currentDate)

                return (eventDate < currentDate);
            });
            // console.log('upcoming event => ',upcomingEvents)

            return pastEvents.sort((a, b) => new Date(a.attributes.date) - new Date(b.attributes.date)).reverse();
        };
        setPastTalks(getPastEvents);
    }, [props.data])

    return (
        <div id="schedule" className="bg-[#c8b6ff]">
            <div className="text-4xl text-center py-5 font-bold">Schedule</div>
            <div className="eventSchedule">
                <div className="tabs mb-4 mx-[20px] sm:mx-[100px] border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex text-sm font-medium text-center" id="myTab" >
                        <li className="mr-2" >
                            <button className={`${tongle === 1 ? 'border-[#3a0ca3]' : 'border-transparent'} inline-block bg-[#bbd0ff] p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#4361ee] w-[130px] h-[60px]`} onClick={() => setTongle(1)} id="profile-tab" >Upcoming Talks</button>
                        </li>
                        <li className="mr-2" >
                            <button className={`${tongle === 2 ? 'border-[#3a0ca3]' : 'border-transparent'} inline-block bg-[#bbd0ff] p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#4361ee] w-[130px] h-[60px]`} id="dashboard-tab" onClick={() => setTongle(2)}>Past Talks</button>
                        </li>
                    </ul>

                </div>
                <div className="tabContent mx-[8%] pb-7">
                    <div className={`${tongle === 1 ? 'block' : 'hidden'} max-h-[570px] overflow-y-scroll`} id="profile" >
                        {/* {console.log(pastTalks)} */}
                        {
                            upcomingTalks.length === 0 ? (
                                <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                                    <span className="font-medium">No Upcoming Talks</span>
                                </div>) : upcomingTalks.map((talk, idx) => (
                                    <ScheduleCardComponent key={idx} data={talk} />
                                ))
                        }
                    </div>
                    <div className={`${tongle === 2 ? 'block' : 'hidden'} max-h-[500px] overflow-y-scroll`} id="dashboard">
                        {/* <ScheduleCardComponent/> */}
                        {
                            pastTalks.map((talk, idx) => (
                                <ScheduleCardComponent key={idx} data={talk} past={true} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;