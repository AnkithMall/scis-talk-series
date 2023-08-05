import SpeakerCard from "../Speaker/SpeakerCard";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useEffect } from "react";

const Speaker = () => {
    const [speakers, setSpeakers] = useState([]);
    useEffect(() => {
        const fetchTalks = async () => {
            const fetchData = await fetch('http://localhost:1337/api/speakers?populate=*');
            const jsonData = await fetchData.json();
            setSpeakers(jsonData.data);
        }
        fetchTalks();
    }, []);
    // if (speakers.length === 0) {
    //     return <div>loading...</div>
    // }
    const scrollLeft = () => {
        document.querySelector('.carousel').scrollBy(-300, 0);
    }
    const scrollRight = () => {
        document.querySelector('.carousel').scrollBy(355, 0);
    }
    return (
        <div className="relative bg-[#eff7f6]" id="speaker">
            <div className="text-center pt-6 text-4xl font-bold">Speakers</div>
            <div className="absolute top-[50%] left-1 z-[1] " >
                <button className="bg-white p-2 m-2 rounded-full" onClick={scrollLeft}><BsChevronLeft /></button>
            </div>
            <div className="absolute top-[50%] right-1 z-[1]">
                <button className="bg-white p-2 m-2 rounded-full" onClick={scrollRight}><BsChevronRight /></button>
            </div>
            <div id="content" className="carousel flex item-center justify-start overflow-x-auto scroll-smooth pl-4">
                {/* {console.log(speakers)} */}
                {
                    speakers.length === 0 ? <div className="mx-auto my-5">
                        <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> : speakers.map((item, idx) => (
                        <div key={idx}>
                            <a target="_blank" href={`http://localhost:1337${item.attributes.cv.data.attributes.url}`}>
                                <SpeakerCard key={idx} speaker={item} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Speaker;