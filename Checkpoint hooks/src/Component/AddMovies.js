import {useState} from 'react'
import {Button, Modal ,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating'



function AddMouvie({AddFilm}) {

    const[name,setName]=useState("")
    const[image,setImage]=useState("")
    const[rate, setRate]=useState(0)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmite =(e) =>{
        let newmovie ={
            name :name,
            url:image,
            id: Math.random(),
            rate:rate
        }
        AddFilm(newmovie, e)
        setName('')
        setImage('')
        handleClose()

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
       Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Movie's Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Movie's Name" value={name} onChange={
        (e)=>setName(e.target.value) } />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Url</Form.Label>
    <Form.Control type="text" placeholder="Enter your Pictcure link" value={image} onChange={
        (e)=>setImage(e.target.value) } />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Rating :</Form.Label>
  <Rating rate={rate} setRate={setRate}/>
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmite}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  export default AddMouvie