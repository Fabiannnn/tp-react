import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import { UsuarioService } from "../servicios/UsuarioService";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  color: {
    color: "white"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 78,
    height: 78,
  },
};

class NavBar extends Component {
  usuarioService = new UsuarioService();
  state = {
    left: false,
    usuario: {}
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    const { classes } = this.props;
    const sideList = (
      <div>
        <List style={{ paddingTop: 0 }}>
          <ListItem style={{ backgroundColor: "#4da6ff" }}>
            <ListItemIcon>
              {/* <FontAwesomeIcon icon="user-circle" size="5x" /> */}
              <Avatar
                alt="Sad Pepe"
                src={window.location.origin + '/images/Sad_pepe.png'}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h5" style={{ color: "white" }}>
                  {this.state.usuario.nombreUsuario}
                </Typography>
              }
              secondary={
                <Typography variant="body1" style={{ color: "white" }}>
                  {this.state.usuario.mail}
                </Typography>
              }
            />
          </ListItem>

          <ListItem button key={"Eventos interesantes"}>
            <Button onClick={() => this.props.history.push("/")}>
              <ListItemIcon>
                <FontAwesomeIcon icon="calendar-check" size="2x" />
              </ListItemIcon>
              <ListItemText primary={"Eventos interesantes"} />
            </Button>
          </ListItem>

          <ListItem button key={"Mis entradas"}>
            <Button onClick={() => this.props.history.push("/mis-entradas")}>
              <ListItemIcon>
                <FontAwesomeIcon icon="ticket-alt" size="2x" />
              </ListItemIcon>
              <ListItemText primary={"Mis entradas"} />
            </Button>
          </ListItem>
        </List>
      </div>
    );
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={this.state.left}
                onClose={this.toggleDrawer("left", false)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer("left", false)}
                  onKeyDown={this.toggleDrawer("left", false)}
                >
                  {sideList}
                </div>
              </Drawer>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <NavLink
                  to="/"
                  className={classes.color}
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "white" }}
                >
                  EventOS
                </NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }

  /* BACKEND */
  async componentWillMount() {
    try {
      const user = await this.usuarioService.getUsuario(1)
      this.setState({
        usuario: user
      })
      console.log(this.state.usuario)
    } catch (e) {
      this.errorHandler(e)
    }
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBar));
