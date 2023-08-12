import { 
  PageContainer, 
  Header,
  BtnContainer,
  Btn
  } from "../components/Notes/NotesElements"
import Notes from "../components/Notes/Notes"


function NotesPage() {
  return (
  <PageContainer>
    <Header />
  { /* <Notes /> 

NTS: Need to find out how I want to structure the Notes components and how I want to display them on both the dashboard and the Notes page. Wireframe it out.
  
  */}

    <BtnContainer>
      <Btn /> {/* edit button */}
      <Btn /> {/* delete button */}
    </BtnContainer>
  </PageContainer>
  )
}

export default NotesPage