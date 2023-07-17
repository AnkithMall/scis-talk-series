
const SpeakerCard = (props) => (
    <div className="card relative bg-scroll bg-center bg-cover bg-no-repeat bg-center bg-blue-500 bg-[url('/asset/pexels-rdne-stock-project-7647946.jpg')] w-[300px] h-[350px] rounded-3xl m-7 bg-gray-500 bg-blend-multiply cursor-pointer" 
    >
        <div className="top ">
            {/* <img className="w-[200px] h-[200px] object-cover" src="/asset/pexels-rdne-stock-project-7647946.jpg" alt="image" /> */}
        </div>
        <div className="bottom absolute top-[70%] text-center px-5 text-xl font-bold text-white">
                Speaker {props.num}
        </div>
    </div>
)

export default SpeakerCard ;