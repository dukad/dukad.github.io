import React from 'react';
import { useState, useEffect } from 'react'
import bass from './images/bass.jpg';
import tanzania from './images/Tanzania.jpg';
import relax from './images/relax.jpg';
import science from './images/sciencecenter.jpg';
import snowshoe from './images/Snowshoe.JPG';

class IntroductionPage extends React.Component {
  render() {
    return (
    <header className="Page">
    <div>
      {this.Introduction()}
    </div>
    <div>
      {this.Photo()}
    </div>
  </header>
  )
};


Photo() {
    // return a slideshow of photos, styling them and changing photos
    let photos = [bass, tanzania, relax, science, snowshoe] // generic list of photos
  
    //reorder the images randomly, and only do it once
    useEffect(() => {
      photos = this.PhotoShuffle(photos)
    }, []);
  
    // now that the array is shuffled, start indexing the array at 0, and iterate through the array
    const [photoIndex, setPhotoIndex] = useState(0)
  
    // async iterate through array
    useEffect(() => {
      // increment the index, and when done with photos are done (length -1), return to 0
      const nextPhoto = () => {
        setPhotoIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      };
      const intervalId = setInterval(nextPhoto, 5000);// periodically call the nextPhoto function to change the photo
      return () => clearInterval(intervalId); // cleanup
    }, [photos]);
  
    // return an image element indexed properly
    return (
      <img src= {photos[photoIndex]} className = "PhotoofMe" alt = "Photo of Kaden Du" />
    )
  }
  
  PhotoShuffle(array) {
    // shuffle an array of photos
    let shuffledArray = array 
    // shuffle array
    for (let i = shuffledArray.length - 1; i > 0; i--) { // iterate from the back through the array
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // now swap two elements
    }
  
    return shuffledArray
  }
  
  Introduction() {
    return (
      <div className="Introduction">
        <h1>Howdy, I'm Kaden</h1>
        <h2>I do ECE @ Northeastern, and sometimes music stuff too. </h2>
        <p>This site is a work in progress, so while there's not a ton here, check out my <a href='https://www.linkedin.com/in/kadendu/'>LinkedIn.</a> </p>
      </div>
    )
  }



}


  
export default IntroductionPage;