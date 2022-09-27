import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import SideBar from '../../components/SideBar/SideBar';
import ProjectList from '../../components/ProjectList/ProjectList';
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";



export default function App() {

  return (
    <main className="App">
      { 
        <>
          <div className="wrapper">
            <SideBar/>
            <div className="main">
              <NavBar/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectList />}/>
                <Route path="/projects/:projectNo" element={<ProjectDetails />} />
              </Routes> 
            </div>
          </div>
          
        </>
      }
    </main>
  );
}
