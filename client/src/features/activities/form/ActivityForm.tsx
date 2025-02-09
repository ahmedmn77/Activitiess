import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import Activity from "../../../app/Models/activity";

interface Props {
    activity: Activity | undefined
    closeForm: () => void

}

function ActivityForm({activity,closeForm}: Props) {
  return (
      <Segment clearing>
          <Form>
              <Form.Input placeholder='Title' />
              <Form.Input placeholder='Description' />
              <Form.Input placeholder='Category' />
              <Form.Input placeholder='Date' />
              <Form.Input placeholder='City' />
              <Form.Input placeholder='Venue' />
              <Button floated='right' positive type='submit' content='Submit' />
              <Button floated='right' onClick={closeForm} type='button' content='Cancel' />
          </Form>
      </Segment>
  );
}

export default ActivityForm;