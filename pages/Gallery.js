import React from 'react';
import Header from '../components/Header';
import{useState} from 'react';
import styles from './Gallery.module.css';
import Footer from '../components/Footer';

function Gallery() {
    const[showgallery, setShowgallery] = useState(false);


    const toggleGallery = () => {
        setShowgallery(!showgallery);
    };
    return (
        <div>
            <Header />
            
            <div>
                <h1>Students</h1>
            </div>
            <h3>Batch 1</h3>
             <div>
            <img src="images\Football students\one.jpeg" alt="image1" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\two.jpeg" alt="image2" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\three.jpeg" alt="image3" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\four.jpeg" alt="image4" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\five.jpeg" alt="image5" style={{ width: '175px', height: '185px' }}/>
            </div>
            <h3>Batch 2</h3>
            <div>
            <img src="images\Football students\six.jpeg" alt="image6" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\seven.jpeg" alt="image7" style={{ width: '15px', height: '185px' }}/>
            <img src="images\Football students\eight.jpeg" alt="image8" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\nine.jpeg" alt="image9" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\ten.jpeg" alt="image10" style={{ width: '175px', height: '185px' }}/>
            
            
        </div>
        <h3>Batch 3</h3>
        <div>
            <img src="images\Football students\eleven.jpeg" alt="image11" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\twelve.jpeg" alt="image12" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\thirteen.jpeg" alt="image13" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\fourteen.jpeg" alt="image14" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\fifteen.jpeg" alt="image15" style={{ width: '175px', height: '185px' }}/>
        </div>
        <h3>Batch 4</h3>
        <div>
            <img src="images\Football students\sixteen.jpeg" alt="image16" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\seventeen.jpeg" alt="image17" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\eighteen.jpeg" alt="image18" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\nineteen.jpeg" alt="image19" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\twenty.jpeg" alt="image20" style={{ width: '185px', height: '185px' }}/>

        </div>
        <h3>Batch 5</h3>
        <div>
            <img src="images\Football students\a.jpeg" alt="image21" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\b.jpeg" alt="image22" style={{ width: '175px', height: '185px' }}/>
            <img src="images\Football students\c.jpeg" alt="image23" style={{ width: '175px', height: '185px' }}/>
        </div>
        <Footer />
        </div>

        

    );
}

export default Gallery;