import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return(
            <section className="container section scrollspy" id="about">
    <div className="row"></div>
      <div className="col s12 l4">
          <img src={require("../img/ha.jpg")} alt="Profile Pic" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Welcome to my humble nest!</h2>
        <h6>Oh, Hello! My name is Hà Nguyễn. I come from Hanoi, Vietnam. During my 8 years as an expat in the US, I started as a student then moved on to work in higher education. I am a highly driven individual with strong work ethics wanting to create clean, practical and intuitive applications. I am an excellent team player bolstered by my great interpersonal skills and my ability to adapt and solve problems. Oh, I also have enormous love for food, dogs, music, concerts and humans. Thank you for visiting my humble nest
        </h6>
    </div>
  </section>
  
        )
    }
}
export default AboutMe;