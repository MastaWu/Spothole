import React from "react";
import { TableCell, TableRow } from "material-ui/Table";

const HoleList = props => {
  return (
    <TableRow>
      <TableCell>{props.hole.size}</TableCell>
      <TableCell numeric>{props.hole.lat}</TableCell>
      <TableCell numeric>{props.hole.lng}</TableCell>
      <TableCell>{props.hole.description}</TableCell>
    </TableRow>
  );
};

export default HoleList;
