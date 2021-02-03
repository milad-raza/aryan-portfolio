import React,{useEffect} from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Particles from 'react-particles-js';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from "react-scroll";
import './Home.css';

export default function Home() {

	// useEffect(() => {
    //     AOS.init({
    //       duration : 200
    //     });
    //     AOS.refresh()
    // }, []);

    return (
		<div className="tittleContainer" id="home" data-aos="fade">
			<h1 className="tittle">
				<span className = "hi">
					Hi, I am&nbsp;
				</span>
				Harsimran Preet Singh
			</h1>
			<p className="tittleDes">Inquisitive, energetic computer science student skilled in leadership, with a strong foundation in math and logic. Seeking to leverage solid skills in collaboration and development as a programmer.</p>
			<Link to = "contact" smooth={true} duration={1000}  >
				<span className="tittleButton">GET STARTED</span>
			</Link>
			<Link to = "about" smooth={true} duration={1000}>
				<RiArrowDownSLine className="scrollDown" size="60px" />
			</Link>
			<Particles
				style={{ backgroundColor: "#000012" }}
				height = '100vh'

			    params={{
				    "particles": {
				        "number": {
				            "value": 220,
				            "density": {
				                "enable": false
				            }
				        },
				        "size": {
				            "value": 3,
				            "random": true
				        },
				        "move": {
				            "direction": "top",
	                        "out_mode": "out",
							"speed": "1.5"
							
				        },
				        "line_linked": {
				            "enable": false
						},
					},
					"interactivity":{
					"events": {
						"onClick": {
							"enable": true,
							"mode" : "push"
						}
						}
					}
				}}
			/>			
		</div>
    )
}