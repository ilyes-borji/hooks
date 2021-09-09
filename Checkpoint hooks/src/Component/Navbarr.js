import React from 'react'
import {Button,Nav, Container,InputGroup,Form,FormControl ,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating'
const Navbarr = ({name,setName,setRatingSearch,ratingSearch}) => {
    return (
        <div>
     {/* <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <p>Bonjour</p>
  </Container>
</Navbar> */}
{/* <Navbar className="bg-light justify-content-between">

  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
</Navbar> */}
<>
  <Navbar bg="dark" variant="dark" className="justify-content-md-center"> 
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    {/* <Nav className="mr-auto">
    
    </Nav> */}
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <Button variant="outline-info">Search</Button>
     <Rating rate={ratingSearch} setRate={setRatingSearch}/>
    </Form>
  </Navbar>
  
 
</>





        </div>
    )
}

export default Navbarr
