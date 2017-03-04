import React from 'react'

class DevelopmentTool extends React.Component {
  render () {
    let tools = this.props.tools.map((tool) => {
      return (
        <span className='label label-primary margin-right'>
          {tool}
        </span>
      )
    })
    return (
      <div className='technologies'>
        {tools}
      </div>
    )
  }
}

export default DevelopmentTool
