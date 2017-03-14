import React from 'react'
import { Grid, Image, Container, Icon, Button} from 'semantic-ui-react'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Yi Sheng',
      email: null,
      content: 'Hello'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleNameChange (e) {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  handleEmailChange (e) {
    console.log(e.target.value)
    this.setState({
      email: e.target.value
    })
  }
  handleContentChange (e) {
    console.log(e.target.value)
    this.setState({
      content: e.target.value
    })
  }
  handleClick () {
    console.log('here')
    window.location.href = 'mailto:yisheng@yishenglee.com?subject=Enquiry for ' + this.state.name + '&body=' + this.state.content
  }
  render () {
    return (
      <div className='header'style={{backgroundColor:'#b0bec5'}}>
      <Grid  stackable container>
        <Grid.Column className='header'>
          <h1>Let's keep in touch</h1>
          <form action='https://formspree.io/yisheng@yishenglee.com' method='POST'>
            <div className='form-group'>
              <label for='name'>Name</label>
              <input type='string' className='form-control' name='name' id='name' placeholder='Name' onChange={(e) => this.handleNameChange(e)} />
            </div>
            <div className='form-group'>
              <label for='email'>Email</label>
              <input type='email' className='form-control' name='_replyto' id='email' placeholder='Email' onChange={(e) => this.handleEmailChange(e)} />
            </div>
            <div className='form-group'>
              <label for='comtent'>Content</label>
              <textarea type='text' rows='5' className='form-control' name='content' id='content' placeholder='Say Hi.' onChange={(e) => this.handleContentChange(e)} />
            </div>
            <input className='btn btn-primary' type='submit' value='Send' />
          </form>
        </Grid.Column>

      </Grid>
      <br />
      <br />
      </div>
    )
  }
}

export default Footer
