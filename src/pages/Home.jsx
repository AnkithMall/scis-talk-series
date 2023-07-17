import Header from '../components/Header' ;
import Footer from '../components/Footer';
import About from '../components/home/About';
import CarouselComponent from '../components/home/CarouselComponent';
import Gallery from '../components/home/Gallery';
import Schedule from '../components/home/Schedule';
import Speaker from '../components/home/Speaker';

const Home = () => (
    <>
        <Header/>
            <CarouselComponent/>
            <About/>
            <Speaker/>
            <Schedule/>
            <Gallery/>
        <Footer/>
    </>
)

export default Home ;