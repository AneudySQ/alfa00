import React from 'react';
import Footer from '../Footer';
import Toprestaurantes from '../Toprestaurantes';
import VideoPortada from '../VideoPortada';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
        |   <Navbar />
            <VideoPortada />
            <Toprestaurantes />
            <Footer />
        </>
    );
}
export default Home;