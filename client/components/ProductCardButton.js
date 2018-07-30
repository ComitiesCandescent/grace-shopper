import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { Button, Icon } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <Button type="button"
        className="ui button active"
        onClick={this.props.handleClick} animated='vertical'>
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    )
  }
}

export default withAlert(App)