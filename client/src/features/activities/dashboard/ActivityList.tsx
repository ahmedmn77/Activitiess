import { Button, Item, ItemHeader, List, ListItem, Segment } from "semantic-ui-react";
import Activity from "../../../app/Models/activity";

interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void;
}

function ActivityList({ activities, selectActivity }: Props) {
  return (
      <Segment>
          <Item.Group divided>
              {activities.map(activity => (
                  <Item key={activity.id}>
                      <Item.Content>
                          <ItemHeader as='a'>{activity.title}</ItemHeader>
                          <Item.Meta>{activity.date}</Item.Meta>
                          <Item.Description>
                              <div>{activity.description}</div>
                              <div>{activity.city}, {activity.venue}</div>
                          </Item.Description>
                          <Item.Extra>
                              <Button onClick={()=>selectActivity(activity.id)} floated='right' content='view' color='blue' />
                          </Item.Extra>
                      </Item.Content>
                  </Item>
              ))}
          </Item.Group>
      </Segment>
  );
}

export default ActivityList;