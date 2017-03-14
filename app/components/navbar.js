import React from 'react'
import Footer from './Footer'
import {Link} from 'react-router'
import { Grid, Image, Container, Icon, Button, Label, Menu} from 'semantic-ui-react'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <Menu secondary style={{backgroundColor: 'transparent', position: 'fixed', height: '5vh', border: 'none'}} attached='top'>
          <Menu.Item style={{border: 'none'}}>
            <Link to='/'><h4 className='brand'> Yi Sheng </h4></Link>
          </Menu.Item>

        </Menu>

        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default NavBar
