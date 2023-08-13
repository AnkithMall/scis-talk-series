import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_STRAPI_URL;
const Gallery = (props) => {

    if (props.data.length === 0) {
        return <div className="mx-auto my-5 flex justify-center">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }

    const [pic, setPic] = useState(API_BASE_URL + props.data[0].attributes.formats.large.url);
    // console.log(props.data[0].attributes.formats)
    const handleClick = (event) => {
        let imglink = event.target.getAttribute("src");
        setPic(imglink);
    }

    return (
        <>
            <div className="grid gap-4 bg-[#a2d2ff]" id="gallery">
                <div className="text-center font-bold text-4xl pt-6">Gallery</div>
                <div className="grid grid-cols-3 mb-9 h-[170px] sm:h-[350px] lg:h-[530px]">
                    <div className="m-7 col-span-2 ">
                        <a href={pic}><img className="aspect-video w-full rounded-lg shadow-[rgba(0,0,0,0.25)_0px_14px_28px,rgba(0,0,0,0.22)_0px_10px_10px] cursor-pointer" src={pic} alt="" /></a>
                    </div>
                    <div className="col-span-1 h-[95%] sm:h-[99.9%] overflow-y-scroll ">
                        <div className="flex flex-col ">
                            {
                                props.data.map((item, idx) => (
                                    <div className="m-5" key={idx}>
                                        <img
                                            className="h-auto max-w-full rounded-lg cursor-pointer ease-in-out duration-200 hover:scale-105 hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]"
                                            src={API_BASE_URL + item.attributes.formats.large.url}
                                            alt=""
                                            onClick={handleClick} />
                                    </div>
                                ))
                            }
                            {/* <div className="m-5">
                                <img 
                                    className="h-auto max-w-full rounded-lg cursor-pointer ease-in-out duration-200 hover:scale-105 hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]" 
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" 
                                    alt=""
                                    onClick={handleClick} />
                            </div>
                            <div className="m-5">
                                <img 
                                    className="h-auto max-w-full rounded-lg cursor-pointer ease-in-out duration-200 hover:scale-105 hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]" 
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" 
                                    alt=""
                                    onClick={handleClick} />
                            </div>
                            <div className="m-5">
                                <img 
                                    className="h-auto max-w-full rounded-lg cursor-pointer ease-in-out duration-200 hover:scale-105 hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]" 
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" 
                                    alt="" 
                                    onClick={handleClick} />
                            </div>
                            <div className="m-5">
                                <img 
                                    className="h-auto max-w-full rounded-lg cursor-pointer ease-in-out duration-200 hover:scale-105 hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]" 
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" 
                                    alt=""
                                    onClick={handleClick} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery;