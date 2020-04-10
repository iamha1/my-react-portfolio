import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: "0",
    border: "none",
    marginTop: "10%",
    marginBottom: "1%",
    height: 508,
  },
  media: {
    height: "340px",
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundImage: "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  },

  bottom: {
    justifyContent: "left",
    background: "#3F51B5",
  },
  links: {
    color: "white",
    textDecoration: "none",
    fontSize: 18,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>HA</Avatar>}
        title="Ha Nguyen"
        subheader="Web Developer"
      />
      <CardMedia
        className={classes.media}
        image="/my-react-portfolio/img/IMG_2914.jpg"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.bottom}>
        <IconButton>
          <a className={classes.links} href="tel:123-456-7890">
            <PhoneIphoneIcon className={classes.links} />
            
          </a>
        </IconButton>
        <IconButton>
          <a className={classes.links} href="mailto:nguyenthingocha2@gmail.com">
            <MailOutlineIcon /> 
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
