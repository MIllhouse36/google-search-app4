import React from "react"
import Card  from "react-bootstrap/Card"

export default function Cardcomp({ icon, title, children}){
  return(
    <Card className="mt-4">
      <Card.Header>
        <h3>
          <strong>
            <i className/>
          </strong>
        </h3>
      </Card.Header>
    </Card>
  )
}