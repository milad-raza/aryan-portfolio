import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: 300,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#037fff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
});

export default function SkillsBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={props.image} width="36px" height="36px" alt={props.name}/>
      <h2 style={{fontFamily: "OpenSans"}}>{props.name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <h3 style={{ color: "#b8b8c7", width: 50 }}>{props.percent}%</h3>
        <BorderLinearProgress
          variant="determinate"
          value={props.percent}
          style={{ marginLeft: 20 }}
        />
      </div>
    </div>
  );
}
