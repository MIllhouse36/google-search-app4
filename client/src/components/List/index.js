import React from "react";
// import ListGroup  from "react-bootstrap/ListGroup";


// export const List = ({ children }) => <ListGroup as="ul">{children}</ListGroup>;

// export function ListItem({ children }) {
//   return <ListGroup.Item as="li">{children}</ListGroup.Item>;
// }

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

