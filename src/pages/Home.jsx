import Form from "../components/Form";
import { Routes,Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore} from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "../redux/contactReducer";
import { ToastContainer } from "react-toastify";
import EditContact from "../components/EditContact";
import AddPost from "../components/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";


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