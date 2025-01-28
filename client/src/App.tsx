
import React, { useState, useEffect } from 'react'
import './App.css'
import { ducks } from './demo'
import DuckItem from './duckItem'
import axios from 'axios'

function App() {
    const [Activities, setActivities] = useState([])   

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data)
            })
    },[])

  return (
      <div>
          <h1> Reactivities </h1> 
          <ul>
              {Activities.map((activity: any) => (
                  <li key={activity.id}>
                      {activity.title}
                  </li>
              ))}
          </ul>
          {/*{ducks.map(duck => (*/}
          {/*    <DuckItem key={ duck.name } duck={duck} />*/}
          {/*)) }*/}
      </div>
  )
}

export default App
