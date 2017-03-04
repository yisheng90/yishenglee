import React from 'react'
import Projects from '../assets/project.json'
import { Link } from 'react-router'

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
    let projectList = Projects.map((project) => {
      let image = {
        backgroundImage: 'url(' + project.previewImage + ')'
      }

      if (this.state.hoverItem && project.name === this.state.hoverItem.name) {
        return (

          <div className='col-lg-5 col-lg-offset-1 col-md-6' style={{padding: '20px 20px'}}>
            <Link to={project.name}>
              <div className='col-lg-12 col-md-12 image-wrapper' onMouseOver={(e, item) => this.handleMouseOver(e, project)} onMouseOut={(e, item) => this.handleMouseOut(e, project)}style={image} >
                <div className='text-center image-hover'>
                  <h1 className='col-md-12'>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          </div>

        )
      } else {
        return (
          <div className='col-lg-5  col-lg-offset-1 col-md-6' style={{padding: '20px 20px'}}>
            <div className='col-lg-12 col-md-12 image-wrapper' onMouseOver={(e, item) => this.handleMouseOver(e, project)} style={image} />
          </div>
        )
      }
    })
    return (
      <div className='container-fluid grey'>
        <div className='col-lg-10 col-md-9 col-sm-8'>
          {projectList}
        </div>
      </div>

    )
  }
}

export default ProjectList
