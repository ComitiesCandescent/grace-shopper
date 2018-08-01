import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { Button, Icon } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Button animated onClick={() => {
        this.props.alert.success(<div style={{
          border: `0.5px solid green`,
          borderRadius: `5px`,
          backgroundColor: `white`,
          padding: `5px`,
          fontColor: `#49fcff`,
          alignContent: `center`
        }}><a>{this.props.name}   </a><Icon name='arrow right' /> <Icon name='shop' /></div>)
        this.props.handleClick()
      }}>
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <i className="shop icon" />
        </Button.Content>
      </Button>
    )
  }
}

export default withAlert(App)
