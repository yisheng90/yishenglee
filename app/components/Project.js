import React from 'react'
import Projects from '../assets/project.json'
import DevelopmentTool from './DevelopmentTool'
import Markdown from 'react-remarkable'
import {Link} from 'react-router'
import { Grid, Image, Container, Icon, Button, Label} from 'semantic-ui-react'

class Project extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      project: null
    }
  }
  componentWillMount () {
    this.setState({
      project: Projects.filter((p) => {
        return p.name === this.props.params.project
      })[0]
    })
  }
  componentWillUpdate () {
    this.setState({
      project: Projects.filter((p) => {
        return p.name === this.props.params.project
      })[0]
    })
  }
  render () {
    let description = require('raw-loader!../assets/' + this.state.project.markdown)
    console.log(description)
    console.log(this.state.project.markdown)

    return (
      <div className='header'>
        <Grid stackable centered >
          <Grid.Column>
            <h1>{this.state.project.name}</h1>
            <DevelopmentTool tools={this.state.project.devTool} color='black' />
          </Grid.Column>
        </Grid>
        <Grid style={{backgroundColor: '#fffb00', height: 40}} />

        <Grid stackable centered container>
          <Grid.Column>
            <Markdown source={description} options={{html: true}} />
          </Grid.Column>

        </Grid>
      </div>

    )
  }
}

export default Project
