import AboutCardsComponent from "../About/AboutCardsComponent";
const About = () => {
    let about = [
        {
            title:"Why Attend ?",
            content:"The SCIS Talk Series enables young researchers to actively participate in talks covering diverse research topics. Attendees gain insights into frontier research, improve presentation skills, and engage with ongoing studies."
        },  
        {
            title:"Who is it for ?",
            content:"The SCIS Talk Series is ideal for young researchers, budding scholars, and anyone interested in emerging trends. It welcomes students, faculty, and those seeking motivation and inspiration."
        },  
        {
            title:"Up skill yourself",
            content:"The talks offer a chance to upskill by staying updated on the latest research, refining presentation and communication abilities, and expanding knowledge through diverse perspectives."
        },  
        {
            title:"Speakers",
            content:"Top experts, leading researchers, prestigious faculty, and budding scholars form the diverse lineup of speakers. Attendees benefit from a wide range of perspectives and motivational talks."
        },    
    ]
    return(
    <div className="about flex bg-[#62b1ed] w-full overflow-x-auto" id="about">
        {
            about.map((item,idx) => {
                return (
                    <div className="" key={idx}><AboutCardsComponent about={item}/></div>
                )
            })
        }
    </div>
)}

export default About ;