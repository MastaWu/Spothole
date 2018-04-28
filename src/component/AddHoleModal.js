import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Modal from "material-ui/Modal";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
});

const AddHoleModal = props => {
  const { classes } = props;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.paper}>
        <Typography variant="title" id="modal-title">
          Text in a modal
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(AddHoleModal);
