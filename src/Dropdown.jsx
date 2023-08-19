import React, { useState } from "react";

const Countries = [
  {
    name: "India",
    value: "IN",
    states: ["Delhi", "Mumbai"]
  },
  {
    name: "Pakistan",
    value: "PK",
    states: ["Islamabad", "Lahore"]
  },
  {
    name: "Bangaladesh",
    value: "BAN",
    states: ["Dhaka"]
  }
];
const Dropdown = () => {
  const [city, setCity] = useState();

  return (
    <>
      <select
        onChange={(e) => {
          setCity(e.target.selectedIndex);
        }}
      >
        {Countries.map((city, index) => {
          return (
            <option value={city.name} key={index}>
              {city.name}
            </option>
          );
        })}
      </select>

      {city > -1 && (
        <select>
          {Countries[city].states.map((state) => {
            return <option>{state}</option>;
          })}
        </select>
      )}
    </>
  );
};

export default Dropdown;
