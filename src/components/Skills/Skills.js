import Carousel from 'react-multi-carousel';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';
import {useState} from "react";

export const Skills = () => {


    const [skillsData, setSkillsData] = useState([
        {name: 'Angular', progress: 90},
        {name: 'SpringBoot', progress: 80},
        {name: 'CSS', progress: 70},
        {name: 'JavaScript', progress: 70},
        {name: 'React', progress: 60},
        {name: 'Node.js', progress: 70},
        {name: 'SQL', progress: 90},
        {name: 'Java', progress: 70},
        {name: 'Ionic', progress: 60},
        {name: 'Flutter', progress: 50}

    ]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem
                                Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true}
                                      className="owl-carousel owl-theme skill-slider">
                                {skillsData.map((skill, index) => (
                                    <div key={index} className="carousel-progress ">
                                        <CircularProgressbar value={skill.progress}
                                                             text={`${skill.name} (${skill.progress}%)`}
                                                             styles={{
                                                                 path: {
                                                                     stroke: `rgb(3, 168, 253)`,
                                                                     strokeLinecap: 'round',
                                                                 },
                                                                 trail: {
                                                                     stroke: '#ffffff',
                                                                 },
                                                                 text: {
                                                                     fill: '#00eaff',
                                                                     fontSize: '10px',
                                                                 },
                                                             }}
                                            // Add the style prop to set the percentage CSS variable
                                                             style={{"--percentage": skill.progress || 0}}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}