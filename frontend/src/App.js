import './App.css';
import Chat_component from './Chat_component';
import Sidebar from './Sidebar';

function App() {
  return (
    
    <div class="container-fluid">
    

     <div class="row">
    <div class="col-4">
    <Sidebar/>
     </div>
    <div class="col-8">
    <Chat_component/>    
     </div>
     </div>
     </div>
  );
}

export default App;
