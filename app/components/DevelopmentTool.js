import React from 'react'

class DevelopmentTool extends React.Component {
  render () {
    let tools = this.props.tools.map((tool) => {
      return (
        <i className={tool} style={{color: this.props.color, margin: 1}} />
      )
    })
    return (
      <div>
        {tools}
      </div>
    )
  }
}

export default DevelopmentTool
