import { useRef } from 'react';
const CarouselComponent = (props) => {
  const carouselRef = useRef(null);

  if (props.data.length === 0) {
    return <div>loading...</div>
  }

  const handlePrevious = () => {
    // carouselRef.current.style.transform = `translateX(101vw)`;
    const container = document.querySelector('.carousel');
    const containerWidth = container.offsetWidth;
    container.scrollBy(-containerWidth, 0);
  };

  const handleNext = () => {
    // carouselRef.current.style.transform = `translateX(-101vw)`;
    // document.querySelector('.carousel').scrollTo({
    //   left: 0,
    //   behavior: 'smooth'
    // });;
    const container = document.querySelector('.carousel');
    const containerWidth = container.offsetWidth;
    container.scrollBy(containerWidth, 0);
  };

  return (
    <div id="home" className="flex relative w-full">
      <div ref={carouselRef} className="carousel snap-x snap-mandatory flex items-center w-[500%] h-[300px] sm:h-[550px] overflow-scroll scroll-smooth">
        {props.data.map((item, idx) => {
          return (
            <div className="snap-center snap-always flex items-center w-full bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-[url('/asset/pexels-alex-knight-2599244.jpg')] bg-gray-500 bg-blend-multiply h-full">
              <div className="ml-10 w-[100vw] ">
                <div className="text-lg sm:text-3xl text-white font-bold">
                  {item.attributes.topic}
                </div>
                <div className="text-sm sm:text-xl text-white">
                  {new Date(item.attributes.date).toLocaleString('en-US', { day: 'numeric', month: 'long' }) + ' | ' + item.attributes.speaker}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handlePrevious}
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800"
        >
          &#10094; {/* Unicode left arrow symbol */}
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handleNext}
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 ml-2"
        >
          &#10095; {/* Unicode right arrow symbol */}
        </button>
      </div>


      {/* <div className="flex items-center w-full h-[300px] sm:h-[550px] bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-[url('/asset/pexels-pavel-danilyuk-8438922.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="ml-10">
          <div className="text-lg sm:text-3xl text-white font-bold">
            {props.data[1].attributes.topic}
          </div>
          <div className="text-sm sm:text-xl text-white">
            {new Date(props.data[1].attributes.date).toLocaleString('en-US',{day: 'numeric', month: 'long'}) + ' | ' + props.data[0].attributes.speaker}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CarouselComponent;