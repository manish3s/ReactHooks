import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEpmloyeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
        <Routes>
        <Route exact path="/" element={<ListEmployeeComponent/>} />
         <Route path="/employees" element={<ListEmployeeComponent/>} />
         <Route exact path="/add-employee" element={<AddEmployeeComponent/>} />
         <Route exact path="/edit-employee/:id" element={<AddEmployeeComponent/>} />
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;



// import './App.css';
// import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
// import { FooterComponent } from './components/FooterComponent';
// import HeaderComponent from './components/HeaderComponent';
// import ListEpmloyeeComponent from './components/ListEpmloyeeComponent';
// import AddEmployeeComponent from './components/AddEmployeeComponent';

// function App() {
//   return (
//     <div>
//       <Router>
//       <HeaderComponent />
//       <div className='container'>
//         <Routes>
//         <Route exact path="/" element={<ListEpmloyeeComponent/>} />
//         <Route path="/employees" element={<ListEpmloyeeComponent/>} />
//         <Route exact path="/add-employee" element={<AddEmployeeComponent/>} />
//         <Route exact path="/edit-employee/:id" element={<AddEmployeeComponent/>} />
//         </Routes>
//       </div>
//       <FooterComponent />
//       </Router>
//     </div>
//   );
// }

// export default App;
