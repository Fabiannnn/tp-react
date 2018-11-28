import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import { withRouter } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class ResumenEntrada extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirmar = () => {
    this.props.funcionRemover(this.props.entrada.id)
    this.handleClose();
  };

  render() {
    const { fullScreen } = this.props.fullScreen;
    return (
      <MuiThemeProvider theme={theme}>
        <List style={{ backgroundColor: "lightgrey" }}>
          <ListItem>
            <ListItemText
              primary={this.props.entrada.evento.nombre}
              secondary={`${this.props.entrada.evento.fechaInicio} - [2 x ${
                this.props.entrada.evento.precioEntrada
                }]`}
            />
            <Button
              size="medium"
              id="devolverEntrada"
              color="inherit"
              variant="fab"
              onClick={this.handleClickOpen}
            >
              <FontAwesomeIcon icon="undo" />
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"So re gato, insirio queri devolvi la entrada?"}
              </DialogTitle>
              <div>
                <img
                  src={window.location.origin + "/images/Dialog.jpg"}
                  alt="Cuatrimestre"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <DialogContent>
                <DialogContentText />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancelar
                </Button>
                <Button onClick={this.handleConfirmar} color="primary" autoFocus>
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>
          </ListItem>
          <Divider />
        </List>
      </MuiThemeProvider>
    );
  }
}

ResumenEntrada.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResumenEntrada);
