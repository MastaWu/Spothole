import React from "react";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import HoleList from "./HoleList";
import { withStyles } from "material-ui/styles";
import MapContainer from "../container/MapContainer";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    height: "600px",
    padding: "15px"
  },
  row: {
    height: "600px"
  },
  tableWrapper: {
    overflowX: "auto",
    height: "100%"
  }
};

const Dashboard = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={6}>
          <Grow in={true}>
            <Paper className={classes.paper}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Hole Type</TableCell>
                      <TableCell numeric>Latitude</TableCell>
                      <TableCell numeric>Longitude</TableCell>
                      <TableCell numeric>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.holes.map((hole, index) => {
                      return <HoleList hole={hole} key={index} />;
                    })}
                  </TableBody>
                </Table>
              </div>
            </Paper>
          </Grow>
        </Grid>

        <Grid item xs={6}>
          <Grow in={true}>
            <MapContainer />
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Dashboard);
