import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import Image from '../../public/img/passord-generator';
import './style.css'
import Card from './cards.js'




class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectInfo: [
                {
                    name: "Password-Generator",
                    heroku: "",
                    github: "https://iamha1.github.io/password-generator/",
                    image: require("../img/password-generator-project.jpg"),
                },
                {
                    name: "Burger-For-Life",
                    heroku: "http://peaceful-ravine-27804.herokuapp.com/",
                    github: "https://iamha1.github.io/burger-forlife/",
                    image: require("../img/burger_devoured.jpg"),
                },
                {
                    name: "Password-Generator",
                    heroku: "",
                    github: "https://iamha1.github.io/weather-on-the-go",
                    image: require("../img/weather-on-the-go-1.jpg"),
                }
            ]
        }
    }

    handleCard = () => {
        this.state.projectInfo.map((info) => {
            console.log(info);
            return <Card
                name={info.name}

            />
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h2 style={{ textAlign: "center" }}> Solo Projects </h2>
                    <Grid>
                        <Cell col={4}>


                            {this.state.projectInfo.map((info) => {
                                console.log(info);
                                return <Card
                                    name={info.name}
                                    heroku={info.heroku}
                                    github={info.github}
                                    image={info.image}
                                
                                />
                            })}

                            {/* <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand className="link1" > </CardTitle>
                                <CardText>
                                    Generating a random passord.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(../../public/img/password-generator-project.jpg) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>

                <div>
                    <h2 style={{ textAlign: "center" }}> Group Projects </h2>
                    <Grid>
                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: `url(${Image})` }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                </CardText>
                                <CardActions border>
                                    <Button colored><a href="https://iamha1.github.io/password-generator/" target="_blank"> Demo </a> </Button>
                                    <Button colored><a href="https://github.com/iamha1/password-generator/" target="_blank"> GitHub </a> </Button>
                                </CardActions>
                            </Card> */}
                        </Cell>

                    </Grid>
                </div>

            </div>







        )
    }
}
export default Projects;