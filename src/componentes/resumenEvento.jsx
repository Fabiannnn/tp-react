import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export class ResumenEvento extends Component {
  render() {
    return (
      <List style={{ backgroundColor: "lightgrey" }}>
        <ListItem
          button
          component={Link}
          to={{
            pathname: `/detalleEvento/${this.props.evento.id}`,
            state: this.props.evento
          }}
        >
          <ListItemText
            primary={this.props.evento.nombre}
            secondary={this.props.evento.lugar}
          />
          <FontAwesomeIcon icon="clock" />
          {this.props.evento.fechaInicio}
        </ListItem>
        <Divider />
      </List>
    );
  }
}
