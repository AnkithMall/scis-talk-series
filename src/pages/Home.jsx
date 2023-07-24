import Header from '../components/Header' ;
import Footer from '../components/Footer';
import About from '../components/home/About';
import CarouselComponent from '../components/home/CarouselComponent';
import Gallery from '../components/home/Gallery';
import Schedule from '../components/home/Schedule';
import Speaker from '../components/home/Speaker';
import { useState,useEffect } from 'react';

const Home = () => {
    const [data,setData] = useState([]) ;
    const [gallery,setGallery] = useState([]) ;
    useEffect(()=>{
        const fetchData = async () => {
            await fetch('http://localhost:1337/api/gallery?populate=images').then(res => res.json()).then(json => setGallery(json.data.attributes.images.data)) ;
        } 
        fetchData() ;
    },[])
    
    
    useEffect(()=>{
        const fetchTalks = async () => {
            const fetchData = await fetch('http://localhost:1337/api/talks') ;
            const jsonData = await fetchData.json() ;
            setData(jsonData.data) ;
        }
        fetchTalks();
    },[]);
return (
    <>
        <Header/>
            <CarouselComponent data={data}/>
            <About/>
            <Speaker/>
            <Schedule data={data}/>
            <Gallery data={gallery}/>
        <Footer/>
    </>
)}

export default Home ;