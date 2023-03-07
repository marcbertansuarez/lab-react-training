import React, {useState} from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {

    const countries = [...new Set(profiles.map((profile) => profile.country))]
    const [country, setNewCountry] = useState(null)

    const handleNewCountry = (countrySelected) => {
        setNewCountry((prev) => prev === countrySelected ? null : countrySelected);
    }
  return (
    <>
    <div>
        {countries.map((elem) => {
            return (
                <button className={elem === country ? 'active' : '' } key={elem} onClick={() => handleNewCountry(elem)}>{elem}</button>
            )
        })}
    </div>
    <div className="facebook">
      {profiles.map((elem) => {
        return (
          <div className= {`facebook-individual ${elem.country === country ? 'selected' : ''}`}>
            <img src={elem.img} alt={elem.firstName} />
            <div>
              <h4>First name: {elem.firstName}</h4>
              <h4>Last name: {elem.lastName}</h4>
              <h4>Country: {elem.country}</h4>
              <h4>Type: {elem.isStudent ? 'Student' : 'Teacher'}</h4>
            </div>
         </div>
        );
      })}
    </div>
    </>
  );
};

export default FaceBook;
