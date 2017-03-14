import React from 'react'
import Projects from '../assets/project.json'
import DevelopmentTool from './DevelopmentTool'
import { Link } from 'react-router'
import { Grid, Image, Container, Icon, Button} from 'semantic-ui-react'

class ProjectList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverItem: null
    }
  }
  handleMouseOver (e, project) {
    console.log('Hover Project', project)
    this.setState({
      hoverItem: project
    })
  }
  handleMouseOut (e, project) {
    this.setState({
      hoverItem: null
    })
  }
  render () {
    let projects = Projects.map((project) => {
      let styles = {backgroundImage: 'url(' + project.previewImage + ')', height: 200, backgroundSize:'cover', backgroundPosition:'center', margin: '20px'}
      let hover = {backgroundColor: 'black'}
      let info = false
      if (this.state.hoverItem === project) {
        hover['opacity'] = '0.8'
        info = true
      }

      return (
        <Grid.Column onMouseOver={(e, item) => this.handleMouseOver(e, project)} style={styles}>

          {info &&
            <div id='project_hover' style={hover} />}
          {info && <div id='project_icon' >
            <Link to={'/' + project.name}> <Button inverted basic>{project.name}</Button></Link>
            <DevelopmentTool tools={project.devTool} color='white'/>
            </div>
          }

        </Grid.Column>

      )
    })
    return (
      <Grid container stackable columns={1} className='header' >

        {projects}
      </Grid>

    )
  }
}

export default ProjectList
