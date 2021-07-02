import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
//import './Searchbar.css';

const Searchbar = () => {

  const [myOptions, setMyOptions] = useState([])
  const [myData, setMyData] = useState([])
  useEffect(() => {
    const fetchMedicine = async () => {
      const { data } = await axios.get('/api/medicines')
      setMyData(data)

    }
    fetchMedicine()
  }, [])
  // const getDataFromAPI = () => {
  //   console.log("Options Fetched from API")

  //   fetch('/api/medicines').then((response) => {
  //     return response.json()
  //   }).then((res) => {
  //     console.log(res.data)
  //     for (var i = 0; i < res.data.length; i++) {
  //       myOptions.push(res.data[i].name)
  //     }
  //     setMyOptions(myOptions)
  //   })
  // }
  // for (var i = 0; i < myData.length; i++) {
  //   myOptions.push(myData[i].name)
  // }



  return (
    <div id="search" >
      <div style={{ marginBottom: '3vh', color: '#00008B', padding: '0 5%' }}>
        <h3 style={{
          width: '100%', position: 'relative', display: 'inline-block', top: '40%', padding: '30px 0', textAlign: 'center'
        }} id="head">FIND  A  MEDICINE!</h3>
      </div>
      <Autocomplete
        id="srch"
        style={{
          display: 'inline-block', width: '50%', position: 'relative', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'
        }}
        freeSolo
        autoComplete
        autoHighlight
        options={myData}
        renderInput={(params) => (
          <TextField {...params}
            onChange={(event) => {
              setMyOptions(event.target.value)
            }}
            variant="outlined"
            label="Search Box"

          />

        )}
      />

    </div>

  )



}


export default Searchbar;