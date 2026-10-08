import "./App.css";
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4" >Tailwind css</h1>
      <Card username="Vikas" btnText="Click me"></Card>
      <Card username="Rohan" btnText="Visit me"></Card>
      <Card username="Rohan"></Card>
    </>
  );
}

export default App;
