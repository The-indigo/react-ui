import './App.css';
import Datatable from "./components/datatable"
import Pagination from "./components/paginate"
import React,{ useState,useEffect } from 'react';

 function App()  {
  const [patients, setPatients]=useState({records:{profiles:[]}})
  const [query, setQuery]=useState([])
  const [loading, setLoading]=useState([true])
  const [currentPage, setCurrentPage]=useState(1)
  const [perPage]=useState(20)
  const [searchColumns, setSearchColumns]=useState(["FirstName"])

  useEffect(()=>{
    setLoading(true)
       fetch("https://api.enye.tech/v1/challenge/records").then(res=>res.json()).then(
     result=>{
       setPatients(result)
       setLoading(false)
     
     }
     
   )
  },[]);
  const indexOfLastPost=currentPage*perPage;
  const indexOfFirstPost=indexOfLastPost - perPage;
  const currentPosts=patients.records.profiles.slice(indexOfFirstPost, indexOfLastPost)
  
  const columns=currentPosts[0] && Object.keys(currentPosts[0])

 const handleOnInput=(event)=>{
    setQuery(event.target.value)
}
const search=(rows)=>{
return rows.filter((row)=>columns.some((column)=>row[column].toString().toLowerCase().indexOf(query.toString().toLowerCase()) >-1
)
);
}
const handleLoading=(value)=>{
if(value===true){
  return <h2>Loading....</h2> 
 

}
}
const handlePaginate=(value)=>{
  setCurrentPage(value)
}

const handleSearch=(value)=>{
  if(value===false){
    return <label className="search-label" htmlFor="search-input">
    <input type="text" 
    value={query} 
    id="search-input" 
    placeholder="Search for patients"
    onChange={handleOnInput}
    />           
</label>
   
  
  }
  }


    return (
       <div className="App">
         <header className="App-header"> 
         <h2 className="heading">Patients</h2>
        <div>
          
          <div className="loadings">
            {handleLoading(loading)}
            </div>

            {handleSearch(loading)}
   


            {/* {
                  columns && columns.map(column =>
                    <label>
                      <select className="category">

                        </select>
                      {column}
                    </label>
                    )
                }   */}
          <Datatable patientRecords={search(currentPosts)} />
          <div className='paginate'>
          <Pagination totalPosts={patients.records.profiles.length} 
          postPerPage={perPage}
          paginate={handlePaginate}
          />
          </div>

          </div>
        
         </header>

      </div>
      );
  

}

export default App;
