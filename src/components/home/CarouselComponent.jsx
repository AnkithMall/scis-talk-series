
const CarouselComponent = (props) => {
  if (props.data.length === 0) {
    return <div>loading...</div>
  }

  return (
    <div id="home" className="flex overflow-x-auto scroll-smooth">
      <div className="flex items-center w-full h-[300px] sm:h-[550px] bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-[url('/asset/pexels-alex-knight-2599244.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="ml-10">
          <div className="text-lg sm:text-3xl text-white font-bold">
            {props.data[0].attributes.topic}
          </div>
          <div className="text-sm sm:text-xl text-white">
            {new Date(props.data[0].attributes.date).toLocaleString('en-US',{day: 'numeric', month: 'long'}) + ' | ' + props.data[0].attributes.speaker}
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-[300px] sm:h-[550px] bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-[url('/asset/pexels-pavel-danilyuk-8438922.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="ml-10">
          <div className="text-lg sm:text-3xl text-white font-bold">
            {props.data[1].attributes.topic}
          </div>
          <div className="text-sm sm:text-xl text-white">
            {new Date(props.data[1].attributes.date).toLocaleString('en-US',{day: 'numeric', month: 'long'}) + ' | ' + props.data[0].attributes.speaker}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselComponent;