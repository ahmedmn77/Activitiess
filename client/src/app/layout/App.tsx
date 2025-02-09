
import React, { useState, useEffect } from 'react'
import './styles.css'
import { ducks } from '../../demo'
import DuckItem from '../../duckItem'
import axios from 'axios'
import { Container, Header, List, ListItem } from 'semantic-ui-react'
import Activity from '../Models/activity'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
    const [activities, setActivities] = useState<Activity[]>([]) 
    const [selectedActivity, setSelectedActivity] = useState<Activity|undefined>(undefined)

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data)
            })
    }, [])

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find(x => x.id === id))
    }

    function HandleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

  return (
      <>
          <NavBar />
          <Container style={{marginTop:'7em'}}>            
              <ActivityDashboard
                  activities={activities}
                  selectedActivity={selectedActivity}
                  selectActivity={handleSelectActivity}
                  cancelSelectActivity={HandleCancelSelectActivity}
              />
          </Container>
          {/*{ducks.map(duck => (*/}
          {/*    <DuckItem key={ duck.name } duck={duck} />*/}
          {/*)) }*/}
      </>
  )
}

export default App
