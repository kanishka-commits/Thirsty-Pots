import React, { useState, useRef } from 'react';
import Icon from "./components/addicon.png";
import "./Add.css";
import Card from './Card'; // Assuming you import your Card here

const Add = () => {
  const [plantvalue,setPlantvalue]=useState("Aloevera");
  const [list,setList]=useState([]);
  const [popup, setPopup] = useState(false);
  const [imageURL, setImageURL] = useState(null); // to store uploaded image
  const popupRef = useRef(null);

  const toggle = () => {
    setPopup(!popup);
  };

  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setPopup(false);
    }
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    setList([...list,e.target.elements.value]);
    //I'm here, I want to add the values in the list, bt here I want to see what's e.target.elements.value
    console.log(e.target.elements.value);
    // console.log(list);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl); // Save image URL
      setPopup(false); // Close popup after upload (optional)
    }
  };

  return (
    <div className="add">
      <h1>
        Add a plant friend
        <button onClick={toggle} className="icon">
          <img src={Icon} alt="Add Icon" />
        </button>
      </h1>

      {popup && (
  <div className="popup-overlay" onClick={handleOverlayClick}>
    <div className="popup" ref={popupRef}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="plantname">Plant Name:</label>
        <input type="text" id="plantname" name="plantname" value={plantvalue} required placeholder='Aloevera' 
        onChange={
          (e)=>{
            // console.log(e);
            setPlantvalue(e.target.value);
          }
          }/>
{/* 
        <label htmlFor="fileInput">Choose your Plant:</label>
        <input type="file" id="fileInput" accept="image/*" onChange={handleImageUpload} required /> */}

        <button type="submit">Add Plant</button>
      </form>
    </div>
  </div>
)}

      {/* Show card with uploaded image */}
      {imageURL && (
        <Card
          plantname="Aloe Vera"
          watertime="Every 3 days"
          image={imageURL}
        />
      )}
    </div>
  );
};

export default Add;
