import React from 'react'
// import pic from '../assets/img/personalPic.png'
import ProjectList from './ProjectList'
import Technology from './Technology'
import CV from '../assets/LeeYiSheng_cv.pdf'
import _ from 'lodash'
import { Grid, Image, Container, Icon} from 'semantic-ui-react'

class Index extends React.Component {
  render () {
    const columns = _.times(16, (i) => (
      <Grid.Column key={i}>
        Hello
      </Grid.Column>
))

    return (
      <div className='header'>
        <Grid stackable centered >
          <Grid container stackable centered verticalAlign='middle' >
            <Grid.Column width={6}>
              <Image src='http://i.imgur.com/Y1RwbRO.jpg' className='photo' />
            </Grid.Column>
            <Grid.Column width={10} left aligned>

              <h1 className='title'>Hello, I'm YiSheng</h1>
              <h3 className='title'>Traveller | Volunteer | Sport Enthusiast</h3>

              <div className='resume_portal left'>
                <a href='mailto:yisheng@yishenglee.com'><strong>yisheng@yishenglee.com</strong></a> |
                    <a href={CV}><strong> resume</strong></a>
                <br />
                <a href='https://www.linkedin.com/in/yishenglee/'><Icon name='linkedin square' /></a>
                <a href='https://medium.com/@yishenglee'> <Icon name='medium' /></a>
                <a href='https://github.com/yisheng90'> <Icon name='github' /></a>
              </div>

            </Grid.Column>
          </Grid>
          <Grid.Row className='title_header'>
            <Grid stackable container>
              <Grid.Column />
              <Grid.Column width={12}>
                <br />
                <br />
                <p className='summary'>
                  I am a Singapore based full-stack developer with a passion in digital product development.
                  I was formerly a process engineer in a local water treatment company. With the strong desire to improve myself,
                  I started to learn coding full-time at <strong>General Assembly, Singapore </strong>
                  3-months ago. I am currently the <strong>Teaching Assistance </strong>
                  for the upcomming <strong>Web Developement Immersive</strong> in <strong> General Assembly, Singapore</strong>.
                </p>

                <br />
                <p className='summary'>
                    I hope to continue crafting innovative solutions to make the world a better place for everyone.
                  </p>
                <br />
                <br />

              </Grid.Column>
            </Grid>

          </Grid.Row>

          <Grid.Row centered >
            <a href='#projects'><Icon name='chevron down' /></a>
          </Grid.Row>

        </Grid>

        <ProjectList />

      </div>

    )
  }

}

export default Index
