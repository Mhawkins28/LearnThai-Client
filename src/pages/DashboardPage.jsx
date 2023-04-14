import {useState, React} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const GridContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; 
  gap: 1em 1em; 
  grid-template-areas: 
    "tracker tracker tracker"
    "goal goal resources"
    "toDo notes resources"
    "toDo notes resources"
    "toDo flashcards cal"
    "toDo flashcards cal";
  height: 90vh;
  margin: 2em;
  
.tracker { 
  grid-area: tracker; 
  border: 1px solid black; 
}
.goal { 
  grid-area: goal; 
  border: 1px solid black
}
.cal { 
  grid-area: cal; 
  border: 1px solid black
}
.toDo { 
  grid-area: toDo; 
  border: 1px solid black
}
.flashcards { 
  grid-area: flashcards; 
  border: 1px solid black
}
.resources { 
  grid-area: resources; 
  border: 1px solid black
}
.notes { 
  grid-area: notes;
  border: 1px solid blue; 
  background: #393994;
  }
`

const DashboardPage = () => {


  return (
    <PageContainer>
      <GridContainer>
        <div className="tracker">Tracker</div>
        <div className="goal">Daily goal</div>
        <div className="cal">Calender</div>
        <div className="toDo">To Do list</div>
        <Link to="/flashcards" className="flashcards">Flashcards</Link>
        <Link to="/resources" className="resources">resources</Link>
        <div className="notes"></div>
      </GridContainer>
    </PageContainer>
  )
}

export default DashboardPage

