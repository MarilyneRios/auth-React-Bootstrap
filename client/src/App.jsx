import Header from './components/Header';
//styles
import './App.css'
//test bootstrap
import Button from 'react-bootstrap/Button';
import { BsArrowThroughHeartFill } from "react-icons/bs";

function App() {
  return (
    <div>
    <Header/>
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh', gap: '20px' }}>
      <h1 className='display-1 text-center'>App test</h1>
      <Button variant="outline-primary">Primary</Button>
      <BsArrowThroughHeartFill color='red' size='25' />
    </div>
    </div>
  )
}

export default App;