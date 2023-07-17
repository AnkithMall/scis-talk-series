import AboutCardsComponent from "../About/AboutCardsComponent";
const About = () => (
    <div className="about flex bg-[#62b1ed] w-full overflow-x-auto" id="about">
        <div className=""><AboutCardsComponent num={1}/></div>
        <div className=""><AboutCardsComponent num={2}/></div>
        <div className=""><AboutCardsComponent num={3}/></div>
        <div className=""><AboutCardsComponent num={4}/></div>
    </div>
)

export default About ;