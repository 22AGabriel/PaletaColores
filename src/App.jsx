import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import FormularioColores from './components/FormularioColores';
import "./app.css"

function App() {
  return (
    <>
      <Container className='my-5'>
        <FormularioColores></FormularioColores>
      </Container>
    </>
  );
}

export default App;
