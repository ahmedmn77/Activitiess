
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
    const [editMode, setEditMode] = useState(false)



    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data)
            })
    }, [])

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find(x => x.id === id))
        setEditMode(false);
    }

    function HandleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string) {
        id ? handleSelectActivity(id) : HandleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }


  return (
      <>
          <NavBar openForm={handleFormOpen} />
          <Container style={{marginTop:'7em'}}>            
              <ActivityDashboard
                  activities={activities}
                  selectedActivity={selectedActivity}
                  selectActivity={handleSelectActivity}
                  cancelSelectActivity={HandleCancelSelectActivity}
                  editMode={editMode}
                  openForm={handleFormOpen}
                  closeForm={handleFormClose}
              />
          </Container>
          {/*{ducks.map(duck => (*/}
          {/*    <DuckItem key={ duck.name } duck={duck} />*/}
          {/*)) }*/}
      </>
  )
}

export default App
