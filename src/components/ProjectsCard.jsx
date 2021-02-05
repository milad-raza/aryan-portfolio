// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

// import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   root: {
//     width: 350,
//     height: 350,
//     backgroundColor: "#fffffe",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 14,
//   },
//   image:{
//     objectFit: "contain",
//     width: 350,
//     height: 200,
//     margin: "0px !important",
//     padding: "0px !important",
//   }
// });

// export default function ResumeTimeline(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//       <CardMedia
//           className={classes.image}
//           image={props.image}
//           title={props.title}
//         />
//         {/* <img src={props.image} className={classes.image} alt={props.title} /> */}
//         <h1>{props.title}</h1>
//       </CardContent>
//     </Card>
//   );
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles({
  
//   root: {
//     marginTop: "6%",
//     transition: "transform 1s",
//     "- webkit - transition": "transform 1s",
//     "-moz-transition": "transform 1s",
//     "-ms-transition": "transform 1s",
//     minWidth: 400,
//     height: 360,
//     border: "4px solid #9989ff",
//     backgroundColor: "#f0f0f0",
//     '&:hover': {
//       border: "4px solid #998900",
//       transform: "scale(1.1)"
//     },
//   },
//   media: {
//     height: 180,
//     width: "100%",
//     transition: "all 1s ease",
//     "- webkit - transition": "all 1s ease",
//     "-moz-transition": "all 1s ease",
//     "-ms-transition": "all 1s ease",
//     objectFit: "contain",
//   },
//   link: {
//     '&:hover': {
//       color: "#EF7C8E"
//     },
//   },
//   links: {
//     textDecoration: "none",
//   },
// });

// export default function ResumeCard(props) {
//   const classes = useStyles();

//   return(
//     <Card>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.image}
//           title={props.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="h6" color="#ffffff">
//             <b>{props.title}</b>
//           </Typography>
//           <Typography variant="body1" color="textSecondary" component="p">
//             <b>{props.details}</b>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <a href={props.visit} target="_blank" rel="noreferrer" className={classes.links} >
//         <Button color="primary">
//             <b className={classes.link}>Visit {props.title}</b>
//         </Button>
//         </a>
//       </CardActions>
//         </Card>
//   )
 
// }


import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {FaGithub} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'

const ProjectCard = (props) => {
  return (
    <MDBCol style={{ maxWidth: "25rem",marginBottom: "30px"}}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={props.image}
          waves style={{height: "200px",objectFit: "cover", width: "100%"}}/>
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText style={{height: "170px"}}>{props.details}</MDBCardText>
          <MDBBtn target="_blank" href={props.visit} style={{ width: "117.5px", height: "58px"}}><AiFillEye size={18} /> View</MDBBtn>
          <MDBBtn target="_blank" href={props.github} style={{ width: "117.5px", height: "58px"}}><FaGithub size={18} /> Github</MDBBtn>

        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ProjectCard;