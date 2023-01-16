import Form from "../components/Form";
//import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import EditContact from "../components/EditContact";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import { contactReducer } from "./redux/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "../redux/contactReducer";
import { ToastContainer } from "react-toastify";
import AddPost from "../components/AddContact";

const store = createStore(contactReducer, composeWithDevTools());
export function Home() {
  return(<div className="App">
  <ToastContainer />
  
  <Provider store={store}>
  
  <Routes>
  <Route  path="/" element={<Form />} />
  <Route path="/add" element={<AddPost/>} />
  <Route path="/edit/:id" element={<EditContact />} />
  </Routes>
  
  </Provider>
</div>)}