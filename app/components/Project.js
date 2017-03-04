import React from 'react'
import Projects from '../assets/project.json'
import DevelopmentTool from './DevelopmentTool'
import Markdown from 'react-remarkable'
import {Link} from 'react-router'

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
      <div className='row small-grey'>
        <div className='col-md-10' style={{padding: 20}}>
          <div className='col-md-10 col-md-offset-1 col-sm-9'>
            <br />
            <h2>{this.state.project.name}</h2>
            <div>
              <span className='margin-right'> {this.state.duration}</span>
              <a href={this.state.project.repoName} className='fa fa-github margin-right' style={{fontSize: 20}} aria-hidden='true' />
              <a href={this.state.project.deployedUrl} className='label label-success margin-right' aria-hidden='true' >Live</a>
            </div>
            <DevelopmentTool tools={this.state.project.devTool} />

          </div>
        </div>
        <div className='col-md-12 col-sm-12 col-xs-12 yellow' />
        <div className='col-md-10' style={{padding: 10}}>
          <div className='row' style={{margin: 10}}>
            <div className='col-md-10 col-md-offset-1 col-sm-9 info'>
              <Markdown source={description} options={{html: true}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
