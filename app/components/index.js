import React from 'react'
// import pic from '../assets/img/personalPic.png'
import ProjectList from './ProjectList'
import Technology from './Technology'
import CV from '../assets/LeeYiSheng_cv.pdf'

class Index extends React.Component {
  render () {
    return (
      <div>
        <div className='row' style={{paddingTop: 50}}>
          <img src='http://i.imgur.com/Y1RwbRO.jpg' className='col-md-3 col-md-offset-1  col-sm-4  image' />
          <div className='col-md-5 col-sm-5'>
            <div className='brand'>
              <h3>Traveller | Volunteer | Sport Enthusiast</h3>
              <br />
              <div className='col-md-2'>
              <h1>"</h1>
              </div>
              <div className='col-md-9 col-md-offset-1'>
                <h4>I enjoy problem solving, and I hope to continue crafting innovative solutions to touch every life.</h4>
              </div>
              <div className='col-md-2 col-md-offset-10'>
              <h1>"</h1>
              </div>
            </div>
          </div>
            <div className='col-lg-12 col-md-12 col-sm-12 yellow' >


          <div className='col-lg-7 col-md-8 col-md-offset-1 col-sm-9 summary text-justify'>
            <p>Hello, I am <strong>Yi Sheng</strong> - a Singapore-based full-stack developer. I got introduced to coding through a friend, and I've never stopped since then. I wanted a career as a developer, so I went on to pick up a course at General Assembly, Singapore. I am now a junior full-stack developer fluent in JavaScript and Ruby, back-end frameworks such as Node.js, Rails, Express.js, and experienced modern front-end frameworks React.js and Socket.io.</p>

            <p>If you are intrested to know more about me, you can see here my <a href={CV}><strong>Downloadable CV</strong></a>.</p>
          </div>
              </div>
        </div>
        <div />
        <ProjectList />
        <div className='container-fluid'>
          <Technology />
        </div>
      </div>
    )
  }

}

export default Index
