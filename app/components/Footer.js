import React from 'react'

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
      <div className='container-fluid footer'>
        <div className='col-lg-10 col-md-10 col-md-offset-1 col-sm-10 col-xs-12'>

          <div className='col-lg-7 col-md-7 col-sm-10'>
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

          </div>
        </div>
      </div>
    )
  }
}

export default Footer
