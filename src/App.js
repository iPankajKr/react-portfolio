import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience: profileData.experience,
      education: profileData.education,
      skills: profileData.skills,
      interests: profileData.interests
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData}/>
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience}/>
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <Skills skills={this.state.skills}/>
          <Interests interests={this.state.interests} />
        </div>
      </div>
    )
  }
}

export default App;
