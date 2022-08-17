import { Route, BrowserRouter,Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
		<Routes>
			{user && <Route path='/'  exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route exact path="/register" element={<Register/>} />
      <Route exact path="/edit/:id" element={<Edit/>} />
      <Route exact path="/view/:id"  element={<Details/>} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
