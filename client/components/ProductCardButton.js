import React from 'react'
import {withAlert} from 'react-alert'
import {Button, Icon} from 'semantic-ui-react'

const ProductCardButton = props => {
  return (
    <Button
      animated
      onClick={() => {
        props.alert.success(
          <div
            style={{
              border: `0.5px solid green`,
              borderRadius: `5px`,
              backgroundColor: `white`,
              padding: `5px`,
              fontColor: `#49fcff`,
              alignContent: `center`
            }}
          >
            <a>{props.name} </a>
            <Icon name="arrow right" /> <Icon name="shop" />
          </div>
        )
        props.handleClick()
      }}
    >
      <Button.Content hidden>Add</Button.Content>
      <Button.Content visible>
        <i className="shop icon" />
      </Button.Content>
    </Button>
  )
}

export default withAlert(ProductCardButton)
