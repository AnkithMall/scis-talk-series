import { useEffect,useState } from "react";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_STRAPI_URL;
const SpeakerCard = (props) => {
        const [img,setImg] = useState('') ;
        const [name,setName] = useState('') ;
        useEffect(() => {
            setImg(API_BASE_URL+props.speaker.attributes.img.data.attributes.url) ;
            setName(props.speaker.attributes.name) ;
        },[props.speaker.attributes.img.data.attributes.url,props.speaker.attributes.name])

    return (
        <div className="relative m-7 w-[300px] h-[350px] bg-scroll bg-center bg-cover">
            {/* <div className={`card relative bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-blue-500 bg-[url(${img})] w-[300px] h-[350px] rounded-3xl m-7 bg-gray-500 bg-blend-multiply cursor-pointer`} > */}
            {/* {console.log(img)} */}
            <div className="top relative">
                <img className="w-[300px] h-[350px] rounded-3xl" src={img} alt="image" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="bottom absolute top-[70%] text-center px-5 text-xl font-bold text-white cursor-pointer">
                {props.speaker.attributes.name}
            </div>
        </div>
)}

export default SpeakerCard ;