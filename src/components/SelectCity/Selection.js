import { useEffect, useState } from "react";
import { getCountries } from "../../data/country";
const Selection = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    useEffect(() => {
        setCountries(getCountries);
    });
    return (
        <div>
            {/* 1st Dropdown  */}
            <select
                value={country}
                onChange={(e) => {
                    console.log(e.target.value);
                    setCountry(e.target.value);
                }}
            >
                {countries.map((item, index) => {
                    return <option value={index}>{item.name}</option>;
                })}
            </select>
            {/* 2nd Dropdown  */}
            <select value={country}>
                {countries[country].cities.map((item, i) => {
                    return <option value={i}>{item}</option>;
                })}
            </select>
        </div>
    );
};

export default Selection;
