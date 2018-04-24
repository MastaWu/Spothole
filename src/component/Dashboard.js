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
import { withStyles } from "material-ui/styles";

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
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell numeric>Calories</TableCell>
                      <TableCell numeric>Fat (g)</TableCell>
                      <TableCell numeric>Carbs (g)</TableCell>
                      <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </div>
            </Paper>
          </Grow>
        </Grid>

        <Grid item xs={6}>
          <Grow in={true}>
            <Paper className={classes.paper}>Test</Paper>
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Dashboard);
