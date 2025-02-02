
import React, { useState, useEffect } from 'react'
import './App.css'
import { ducks } from './demo'
import DuckItem from './duckItem'
import axios from 'axios'
import { Header, List, ListItem } from 'semantic-ui-react'

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
          <Header as='h2' icon='users' content='Reativities' />
          <List>
              {Activities.map((activity: any) => (
                  <ListItem key={activity.id}>
                      {activity.title}
                  </ListItem>
              ))}
          </List>
          {/*{ducks.map(duck => (*/}
          {/*    <DuckItem key={ duck.name } duck={duck} />*/}
          {/*)) }*/}
      </div>
  )
}

export default App
