import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function Filter() {
  const [brand, setBrand] = useState("Kia");
  const [model, setModel] = useState("K5");
  const [yearRange, setYearRange] = useState([0, 2024]);
  const [priceRange, setPriceRange] = useState([2000000, 3500000]);

  const handleSearch = () => {
    // Logic for searching with selected filters
    console.log({
      brand,
      model,
      yearRange,
      priceRange,
    });
  };

  return (
    <div className="car-search">
      <div className="search-tabs">
        <span className="tab active">Все</span>
        <span className="tab">Новые</span>
        <span className="tab">С пробегом</span>
      </div>

      <div className="search-filters">
        <div className="filter">
          <label>Выберите Марку</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="Kia">Kia</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            {/* Add more brands as needed */}
          </select>
        </div>

        <div className="filter">
          <label>Выберите Модель</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="K5">K5</option>
            <option value="X7">X7</option>
            <option value="A6">A6</option>
            {/* Add more models as needed */}
          </select>
        </div>

        <div className="filter">
          <label>Год</label>
          <input
            type="text"
            value={`${yearRange[0]} - ${yearRange[1]}`}
            readOnly
          />
        </div>

        <div className="filter">
          <label>Цена</label>
          <input
            type="text"
            value={`${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}`}
            readOnly
          />
        </div>

        <div className="search-button">
          <button className="request-btn" onClick={handleSearch}>
            <IoSearch />
            <i className="search-icon"></i> Поиск
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
