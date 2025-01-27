import React from "react";
import siestakey from './assets/siestakey.jpg';
import clearwaterbeach from './assets/clearwater beach.jpg';
import delraybeach from './assets/delraybeach.jpg';
import destin from './assets/destin.jpg';
import fortwalton from './assets/fortwalton.jpg';
import marco from './assets/marco.jpg';
import palmbeach from './assets/palmbeach.jpg';
import sanibel from './assets/sanibel.jpg';
import santarosa from './assets/santarosa.jpg';
import stgeorge from './assets/stgeorge.jpg';
import headerImage from './assets/logo.jpg';

const beaches = [
  {
    name: "Siesta Key Beach",
    location: "Sarasota, FL",
    description: "Known for its quartz sand and turquoise waters.",
    imageUrl: siestakey,
    link: "https://www.visitsarasota.com/siesta-key-beach",
  },
  {
    name: "Clearwater Beach",
    location: "Clearwater, FL",
    description: "A vibrant beach with white sand and clear waters.",
    imageUrl: clearwaterbeach,
    link: "https://www.visitstpeteclearwater.com/profile/clearwater-beach/158016",
  },
  {
    name: "Delray Beach",
    location: "Delray, FL",
    description: "A quaint beach town with lots of charm.",
    imageUrl: delraybeach,
    link: "https://www.thepalmbeaches.com/explore-cities/delray-beach",
  },
  {
    name: "Destin Beach",
    location: "Destin, FL",
    description: "Famous for its emerald waters and fishing.",
    imageUrl: destin,
    link: "https://www.destinfwb.com/",
  },
  {
    name: "Fort Walton Beach",
    location: "Fort Walton, FL",
    description: "A quiet, family-friendly beach with clear waters.",
    imageUrl: fortwalton,
    link: "https://www.emeraldcoastfl.com/fort-walton-beach/",
  },
  {
    name: "Marco Island",
    location: "Marco, FL",
    description: "A relaxing spot for those who enjoy luxury and nature.",
    imageUrl: marco,
    link: "https://www.paradisecoast.com/",
  },
  {
    name: "Palm Beach",
    location: "Palm Beach, FL",
    description: "A popular upscale destination with pristine beaches.",
    imageUrl: palmbeach,
    link: "https://www.thepalmbeaches.com/",
  },
  {
    name: "Sanibel Island",
    location: "Sanibel, FL",
    description: "Known for its shell-filled shores and natural beauty.",
    imageUrl: sanibel,
    link: "https://sanibel-captiva.org/",
  },
  {
    name: "Santa Rosa Beach",
    location: "Santa Rosa, FL",
    description: "A picturesque spot on Florida's Emerald Coast.",
    imageUrl: santarosa,
    link: "https://www.visitsouthwalton.com/",
  },
  {
    name: "St. George Island",
    location: "St. George, FL",
    description: "A secluded beach with stunning views.",
    imageUrl: stgeorge,
    link: "https://www.floridasforgottencoast.com/st-george-island/",
  },
];

const BeachCard = ({ name, location, description, imageUrl, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="beach-card">
    <img src={imageUrl} alt={name} className="beach-image" />
    <h2 className="beach-name">{name}</h2>
    <p className="beach-location">{location}</p>
    <p className="beach-description">{description}</p>
  </a>
);

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <img src={headerImage} alt="Logo" className="header-image" />
        <h1 className="title">Best Beaches in Florida 2025</h1>
        <h2 className="title">Shamiah Bass:Z23526337</h2>
      </div>
      <div className="beach-list">
        {beaches.map((beach, index) => (
          <BeachCard
            key={index}
            name={beach.name}
            location={beach.location}
            description={beach.description}
            imageUrl={beach.imageUrl}
            link={beach.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
