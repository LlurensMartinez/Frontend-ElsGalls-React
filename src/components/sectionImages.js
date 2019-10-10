import React from 'react';
import SwiftSlider from 'react-swift-slider'

const sectionImages = () => {
  
  const data =  [
    {'id':'1','src':'/images/foto1.jpg'},
    {'id':'2','src':'/images/foto2.jpg'},
    {'id':'3','src':'/images/foto3.jpg'},
  ];

  return (
    <section className="imagesContainer">
      <SwiftSlider data={data} weight={900} height={500} showDots={false}/>
    </section>
  );
};

export default sectionImages;