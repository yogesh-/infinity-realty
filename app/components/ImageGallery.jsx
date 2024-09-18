import React from "react";

// Dummy data for the gallery
const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/400/500?image=1060",
  "https://picsum.photos/500/400?image=1055",
  "https://picsum.photos/300/200?image=1020",
  "https://picsum.photos/300/400?image=1080",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/400/500?image=1060",
  "https://picsum.photos/500/400?image=1055",
  "https://picsum.photos/300/200?image=1020",
  "https://picsum.photos/300/400?image=1080",
];

// CSS for the Masonry layout using Flexbox
const styles = {
  img: {
    width: "100%",
    borderRadius: "8px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin:"8px"
  },
};

// ImageGallery component
export default function ImageGallery() {
  return <>
    <div className="bg-white">
     <p className="text-2xl text-black font-bold mx-auto block w-max pt-4 mb-4">COMMUNITIES</p>   
    <div class="mx-auto p-4 px-2 mb-2">
    <p class="text-lg text-center text-black whitespace-normal">
        We pride ourselves on providing our clients with access to the finest communities across the United Arab Emirates.
        Our extensive network of partnerships with developers allows us to offer our clients an unparalleled selection of properties to choose from, in the most sought-after communities in the region.
    </p>
</div>
    <div class="container mx-auto">
    <div class="gap-4 columns-2 md:columns-3 lg:columns-4">
    {images.map((image, i) => (        
          <img src={image} key={i} alt={`Image ${i + 1}`} style={styles.img} />
      ))}
    </div>
  </div>    
    </div>   
  </>  
}



