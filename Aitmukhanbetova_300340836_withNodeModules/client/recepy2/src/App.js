import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom';
import MainTable from './components/table';
import FaEdit from './components/faedit';



function App() {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route exact path="/home" element={<MainTable />} />
                    <Route exact path="/edit/:id" element={<FaEdit />} />
                </Routes>
            </Router>

        </div>

    );
}

export default App;
