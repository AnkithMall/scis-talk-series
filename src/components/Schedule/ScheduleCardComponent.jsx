import { ImLocation2 } from 'react-icons/im'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import FeedbackModal from './feedback/FeedbackModal';
import { useState } from 'react';

const ScheduleCardComponent = (props) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className={`talk w-full p-4 rounded-lg bg-gray-50 my-3 transition-max-height duration-300 ${showFullDescription ? 'max-h-full' : 'max-h-100'}`}>
            <div className="eventtitle flex flex-col lg:flex-row">
                <div className='text-left text-2xl font-bold'>
                    {props.data.attributes.topic}
                </div>
                <div className='pl-2 pt-1'>
                    <span className="bg-green-100 text-green-800  text-xs font-medium mr-3 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                        <button>
                            {props.data.attributes.speaker}
                        </button>
                    </span>
                </div>
            </div>
            <div className={`eventDescription transition delay-100 ${showFullDescription ?? 'truncate'}`}>
                
                {showFullDescription
                    ? props.data.attributes.description
                    : props.data.attributes.description.slice(0, 400) + '... '}
                    <br/>
                <button className='text-blue-500 hover:text-blue-700 focus:outline-none' onClick={toggleDescription}>
                    {showFullDescription ? 'Read Less' : 'Read More'}
                </button>
            </div>
            <div className="eventDetails">
                <div className='flex py-2'>

                    <BsCalendarDate className='w-5 h-5' />
                    <span className='ml-2 text-sm'>
                        {props.data.attributes.date}
                    </span>
                </div>
                <div className='flex py-2'>
                    <AiOutlineFieldTime className='w-5 h-5' />
                    <span className='ml-2 text-sm'>
                        {props.data.attributes.time}
                    </span>
                </div>
                <div className='flex py-2'>
                    <ImLocation2 className='w-5 h-5' />
                    <span className='ml-2 text-sm'>
                        {props.data.attributes.location}
                    </span>
                </div>
                {/* <div className='mt-3'>
                <button 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Register
                </button>
            </div> */}
                {
                    props.past ? (<FeedbackModal talkId={props.data.id} topic={props.data.attributes.topic} />) : <></>
                }
                {/* {console.log(props.data.id,"=>",props.data.attributes.topic)} */}
            </div>
        </div>
    )
};

export default ScheduleCardComponent;