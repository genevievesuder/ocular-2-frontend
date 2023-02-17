import Definitions from "./Definitions"
import { useState, useEffect } from 'react'


const Dictionary = () => {
  const [dictionaryData, setDictionaryData] = useState([])
  const [searchDefs, setSearchDefs] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")

  useEffect(() => {
    fetch("/definitions")
     .then(res => res.json())
     .then(setDictionaryData)
     .catch(err => alert(err))
  }, []);

  const filteredDefs = dictionaryData.filter(def => def.term.toLowerCase().includes(searchDefs.toLowerCase()) || def.definition.toLowerCase().includes(searchDefs.toLowerCase()) || def.category.toLowerCase().includes(searchDefs.toLowerCase()));

  const categoryFilteredDefs = filteredDefs.filter(def => categoryFilter === "All" || def.category === categoryFilter)
  
  const mappedandFilteredDefinitions = categoryFilteredDefs.map(def => <Definitions {...def} key={def.id} />);

  const handleSearch = (e) => {
    setSearchDefs(e.target.value);
  }

  const handleFilter = (e) => {
    setCategoryFilter(e.target.value);
}

  return (
    <div className="dictionary-container">
      <div className="dictionary-header">
        <h1>optometry a-z</h1>
      <div className="def-search-container">
      <strong style={{ float: 'right'}}>Search by Keyword</strong><br/>
        <input 
          className="def-search" 
          value={searchDefs}
          placeholder="Search"
          onChange={handleSearch}    
        />
      </div> 
      <div className="def-filter-container">
        <label>
          <strong style={{ float: 'left'}}>Filter by category</strong>
          <select onChange={handleFilter} className="def-filter">
            {/* <option value="">Filter by Category</option> */}
            <option value="All">All</option>
            <option value="Abnormalities">Abnormalities</option>
            <option value="Anatomy">Anatomy</option>
            <option value="Drugs">Drugs</option>
            <option value="Exams">Exams</option>
            <option value="Diseases and Syndromes">Diseases and Syndromes</option>
            <option value="Infections & Irritations">Infections and Irritations</option>
            <option value="Vision Impairments">Vision Impairments</option>
          </select>
        </label>
      </div>

        </div>
        {mappedandFilteredDefinitions}
      </div>
    )
  }
  
  export default Dictionary