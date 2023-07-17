import SpeakerCard from "../Speaker/SpeakerCard";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Speaker = () => {
    const scrollLeft = () => {
        document.querySelector('.carousel').scrollBy(-300, 0);
    }
    const scrollRight = () => {
        document.querySelector('.carousel').scrollBy(355, 0);
    }
    return (
        <div className="relative bg-[#eff7f6]" id="speaker">
            <div className="text-center pt-6 text-4xl font-bold">Speakers</div>
            <div className="absolute top-[50%] left-1 z-[1]" >
                <button className="p-2 m-2 rounded-full bg-white" onClick={scrollLeft}><BsChevronLeft /></button>
            </div>
            <div className="absolute top-[50%] right-1 z-[1]">
                <button className="p-2 m-2 rounded-full bg-white" onClick={scrollRight}><BsChevronRight /></button>
            </div>
            <div id="content" className="carousel flex item-center justify-start overflow-x-auto scroll-smooth pl-4">
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
                <div>
                    <SpeakerCard />
                </div>
            </div>
        </div>
    )
}

export default Speaker;