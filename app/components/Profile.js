import React from 'react'

class Profile extends React.Component {
  render () {
    return (
      <div className='row small-grey'>
        <div className='col-md-10' style={{paddingTop: 20}}>
          <div className='col-md-10 col-md-offset-1 col-sm-9'>
            <div className='col-md-9'>
              <h1>Lee Yi Sheng</h1>
              <h4 style={{color: 'grey', marginTop: 0}}>Full Stack Developer</h4>
            </div>
            <div className='container-fluid'>
              <img src='http://i.imgur.com/4d6GT2X.jpg' className='col-md-2 image' />
            </div>
          </div>
        </div>
        <div className='col-md-12 yellow' />
        <div className='col-md-10 col-md-offset-1 col-sm-9' >
          <div className='col-md-4'>
            <h3>About Me</h3>
            <p>Birth: 15/05/1990</p>
            <p>Nationality: Malaysian/Singapore PR</p>
            <p>Email: yisheng@yishenglee.com</p>
            <p>Phone Number: +65 8742-3688</p>
            <p>Website: http://yishenglee.com</p>
            <p>Github: @yisheng90</p>
          </div>
          <div className='col-md-6' style={{borderTop: '2px solid black', marginTop: 30}} >
            <br />
            <p>I started coding in 2016 for my job assignment. I then learned coding full-time for 3-months in General Assembly, Singapore. I am now a junior full-stack developer fluent in JavaScript and Ruby, back-end frameworks Node.js, Rails, Express.js, and experienced modern front-end frameworks React.js and Socket.io.</p>
            <br />
            <p>I spent my free time learning new skills, playing sports and solving problems with friends. I hope to continue crafting innovative solutions to touch every life.</p>
          </div>
        </div>
        <div className='col-md-10 col-md-offset-1 col-sm-9' >
          <div className='col-md-4'>
            <h3>Skills</h3>
          </div>
          <div className='col-md-6' style={{borderTop: '2px solid black', marginTop: 30}} />
          <div className='col-md-10 col-sm-9'>
            <h1>Graph</h1>
          </div>
        </div>

        <div className='col-md-12 grey' >
          <div className='col-md-10 col-md-offset-1 col-sm-9' style={{paddingLeft: 0, paddingTop: 20}}>
            <div className='col-md-4'>
              <span className='h3' style={{backgroundColor: 'white', color: 'black'}}>Experience</span>
            </div>
            <div className='col-md-6' style={{borderTop: '2px solid black', marginTop: 15}} />

            <div className='col-md-10  col-sm-9' style={{paddingLeft: 0}}>
              <h4 className='col-md-2 margin-bottom'>Hyflux Ltd</h4>
              <div className='col-md-10'>
                <h4 className='h5 col-md-3 margin-bottom' style={{backgroundColor: 'white', color: 'black'}}>Jul 2015 - Nov 2016</h4>
              </div>
              <div className='col-md-12' >
                Operation & Maintenance Engineer
              </div>
              <div className='col-md-12' >
                <br />
                <p>Responsible for chemical planning as well as daily operations monitoring in order to ensure continuous and safe operation of the plant along with compliance with PUB requirements.</p>

                <p>Developed an simulation estimating production rate and product quality to facilitate better prodution planning. (Excel & Visual Basic)</p>
              </div>
            </div>

            <div className='col-md-10  col-sm-9' style={{paddingLeft: 0}}>
              <h4 className='col-md-5 margin-bottom'>ExxonMobil (Asia Pacific) Pte Ltd</h4>
              <div className='col-md-6'>
                <h4 className='h5 col-md-6 margin-bottom text-center' style={{backgroundColor: 'white', color: 'black'}}>Aug 2013 - Feb 2014</h4>
              </div>
              <div className='col-md-12' >
                Process Engineer Intern
              </div>
              <div className='col-md-12' >
                <br />
                <p>Developed a regression model for crude oil distillation rates based on economies of scale that was used across the company for crude oil production predictive analysis</p>
              </div>
            </div>
          </div>
          <div className='col-md-10 col-md-offset-1 col-sm-9' style={{paddingLeft: 0, paddingTop: 20}}>
            <div className='col-md-4'>
              <span className='h3' style={{backgroundColor: 'white', color: 'black'}}>Education</span>
            </div>
            <div className='col-md-6' style={{borderTop: '2px solid black', marginTop: 15}} />
            <div className='col-md-10  col-sm-9' style={{paddingLeft: 0}}>
              <h4 className='col-md-5 margin-bottom'>General Assembly, Singapore</h4>
              <div className='col-md-6'>
                <h4 className='h5 col-md-6 margin-bottom text-center' style={{backgroundColor: 'white', color: 'black'}}>Dec 2016 - March 2017</h4>
              </div>
              <div className='col-md-12' >
                12 weeks Web Development Immersive Bootcamp
              </div>
              <div className='col-md-12' >
                <br />
                <p>Developed 4 projects across 12 weeks using framworks such as Node.js, Rails, React.js, Socket.io, and jQuery.</p>
              </div>
            </div>

            <div className='col-md-10  col-sm-9' style={{paddingLeft: 0}}>
              <h4 className='col-md-5 margin-bottom'>Nanyang Technological University</h4>
              <div className='col-md-6'>
                <h4 className='h5 col-md-6 margin-bottom text-center' style={{backgroundColor: 'white', color: 'black'}}>Aug 2011 - May 2015</h4>
              </div>
              <div className='col-md-12' >
                Bachelor of Engineering (B.Eng.) 2nd Upper Honored in Chemical and Biomolecular Engineering
              </div>
              <div className='col-md-12' >
                <br />
                <p>Awarded an NTU College Scholarship.</p>
                <p>Participated in a 6 month student exchange program at the National Taiwan University in Taiwan.</p>
              </div>

            </div>
          </div>
          <br />
          <br />

        </div>

      </div>

    )
  }
}

export default Profile
