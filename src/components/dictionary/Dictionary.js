import Definitions from "./Definitions"
import { useState, useEffect } from 'react'


const Dictionary = () => {
  const [dictionaryData, setDictionaryData] = useState([])

  useEffect(() => {
    fetch("/definitions")
     .then(res => res.json())
     .then(setDictionaryData)
     .catch(err => alert(err))
  }, []);

  const mappedDefinitions = dictionaryData.map(def => <Definitions {...def} key={def.id} />);

  return (
    <div className="dictionary-container">
      <div className="dictionary-header">
        <h1>optometry a-z</h1>
      <div className="def-search-container">
        <input 
          className="def-search" 
        // value={}
          placeholder="Search"
        // onChange={handleSearch}>    
            >
        </input>
      </div>
         
      <div className="def-filter-container">
        <label>
        {/* <select onChange={handleFilter}> */}
          <select className="def-filter">
            <option value="">Filter by Category</option>
            <option value="">All</option>
            <option value="">Abnormalities</option>
            <option value="">Anatomy</option>
            <option value="">Drugs</option>
            <option value="">Exams</option>
            <option value="">Diseases and Syndromes</option>
            <option value="">Infections and Irritations</option>
            <option value="">Vision Impairments</option>
          </select>
        </label>
      </div>

        </div>
        {mappedDefinitions}
      </div>
    )
  }
  
  export default Dictionary