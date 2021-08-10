import React from "react";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

export const List = ({ children }) => (
  <ListGroup as ="ul" >
    {children}
  </ListGroup>
)

export function ListItem({children}){
  return <ListGroupItem>{children}</ListGroupItem>
}