import { Grid, GridColumn, List, ListItem } from "semantic-ui-react";
import Activity from "../../../app/Models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: Boolean;
    openForm: (id: string) => void;
    closeForm: () => void;


}



function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm }: Props) {
  return (
      <Grid>
          <GridColumn width='10'>
              <ActivityList activities={activities} selectActivity={selectActivity} />
          </GridColumn>

          <GridColumn width='6'>
              {selectedActivity && !editMode &&
                  <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                  />}
              {editMode &&
                  <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
          </GridColumn>
      </Grid>
  );
}

export default ActivityDashboard;