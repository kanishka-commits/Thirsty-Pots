import React, { useState, useRef } from 'react';
import Icon from "./components/addicon.png";
import "./Add.css";
import Card from './Card';

const Add = () => {
  const [plantvalue, setPlantvalue] = useState("");
  const [watertime, setWatertime] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [list, setList] = useState([]);
  const [popup, setPopup] = useState(false);
  const popupRef = useRef(null);

  const toggle = () => {
    setPopup(!popup);
  };

  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setPopup(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantvalue,
      waterTime: watertime,
      image: imageURL
    };

    setList([...list, newPlant]);

    // Reset fields
    setPlantvalue("");
    setWatertime("");
    setImageURL(null);
    setPopup(false);
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
              <input
                type="text"
                id="plantname"
                name="plantname"
                value={plantvalue}
                placeholder="e.g., Aloevera"
                onChange={(e) => setPlantvalue(e.target.value)}
                required
              />

              <label htmlFor="watertime">Watering Time:</label>
              <input
                type="text"
                id="watertime"
                name="watertime"
                value={watertime}
                placeholder="e.g., Every 3 days"
                onChange={(e) => setWatertime(e.target.value)}
                required
              />

              <label htmlFor="fileInput">Upload Image:</label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />

              <button type="submit">Add Plant</button>
            </form>
          </div>
        </div>
      )}

      {/* Render all added plant cards */}
      <div className="cardclass">
        {list.map((plant, index) => (
          <Card
            key={index}
            plantname={plant.name}
            watertime={plant.waterTime}
            image={plant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Add;
