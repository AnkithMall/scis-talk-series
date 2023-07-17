import { ImLocation2 } from 'react-icons/im'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {BsCalendarDate} from 'react-icons/bs'
const ScheduleCardComponent = () => (
    <div className="talk w-full p-4 rounded-lg bg-gray-50 my-3">
        <div className="eventtitle flex">
            <div className='text-left text-2xl font-bold cursor-pointer'>
                Event 1 
            </div>
            <div className='pl-2 pt-1'>
                <span class="bg-green-100 text-green-800  text-xs font-medium mr-3 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                    <button>
                        Speaker
                    </button>
                </span>
            </div>
        </div>
        <div className="eventDescription">Event description</div>
        <div className="eventDetails">
            <div className='flex'>
                <BsCalendarDate />
                <span className='ml-2 text-sm'>
                    Date
                </span>
            </div>
            <div className='flex'>
                <AiOutlineFieldTime />
                <span className='ml-2 text-sm'>
                    Time
                </span>
            </div>
            <div className='flex'>
                <ImLocation2 />
                <span className='ml-2 text-sm'>
                    Location
                </span>
            </div>
        </div>
    </div>
);

export default ScheduleCardComponent;