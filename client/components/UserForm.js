import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const UserForm = () => {
  return (
    <React.Fragment>
      <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Name'
        placeholder='Name'
        name="name"
        type="text"
        required
      />
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Street'
        placeholder='Street'
        name="street"
        type="text"
        required
      />
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='City'
        placeholder='City'
        name="city"
        type="text"
        required
      />
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='State'
        placeholder='State'
        name="state"
        type="text"
        required
      />
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Zipcode'
        placeholder='Zipcode'
        name="zipcode"
        type="text"
        required
      />
      </Form.Group>
    </Form>
      {/* <form>
        <label htmlFor="name">Name </label>
        <input name="name" type="text" required />
        <label htmlFor="address">Street </label>
        <input name="address" type="text" required />
        <label htmlFor="city">City </label>
        <input name="city" type="text" required />
        <label htmlFor="state">State </label>
        <input name="state" type="text" required />
        <label htmlFor="zipcode" type="text">
          Zip Code
        </label>
        <input name="zipcode" type="number" required />
      </form> */}
    </React.Fragment>
  )
}

export default UserForm
