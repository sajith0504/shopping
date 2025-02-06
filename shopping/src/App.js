import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './component/Login/Signup';
import Admin from './component/Admin/Admin'
import AddNewProduct from './component/Product/Prodectadd';
import Prodectdisplay from './component/Product/Prodectdisplay';
import Category from './component/Category/Category'
import AddNewCategory from './component/Category/AddNewCategory'
import AddNewAttribute from './component/Attributes/AddNewAttribute'
import Attributes from './component/Attributes/Attributes'
import Users from './component/Users/Users';
import AddNewUser from './component/Users/AddNewUser';
import Roles from './component/Roles/Roles';
import AddNewRole from './component/Roles/AddNewRole';
import OrderDetails from './component/Orders/OrderDetails';
import OrderList from './component/Orders/OrderList';
import OrderTrack from './component/Orders/OrderTrack';
import AddDistributor from './component/Distributor/AddDistributor';
import Distributor from './component/Distributor/Distributor';
import ViewAdmins from './component/AdminPage/ViewAdmins';
import AddAdmin from './component/AdminPage/AddAdmin';
import AddRetailer from './component/Retailer/AddRetailer';
import ViewRetailer from './component/Retailer/ViewRetailer';
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">
      
      <Router>
       <Routes>
        <Route path='/' element={ <Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/addproduct' element={<AddNewProduct/>}></Route>
        <Route path='/productdisplay' element={<Prodectdisplay/>}></Route>
        <Route path='/category' element={<Category/>}/>
        <Route path='/adc' element={<AddNewCategory/>}/>
        <Route path='/addnewattribute' element={<AddNewAttribute/>}/>
        <Route path='/attribute' element={<Attributes/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/addnewuser' element={<AddNewUser/>}/>
        <Route path='/roles' element={<Roles/>}/>
        <Route path='/addnewrole' element={<AddNewRole/>}/>
        <Route path='/orderdetail' element={<OrderDetails/>}/>
        <Route path='/orderlist' element={<OrderList/>}/>
        <Route path='/ordertrack' element={<OrderTrack/>}/>
        <Route path='/adddistributor' element={<AddDistributor/>}/>
        <Route path='/distributor' element={<Distributor/>}/>
        <Route path='/viewadmin' element={<ViewAdmins/>}/>
        <Route path='/addadmin' element={<AddAdmin/>}/>
        <Route path='/addretailer' element={<AddRetailer/>}/>
        <Route path='/retailer' element={<ViewRetailer/>}/>
        <Route path='/home' element={<Home/>}/>
        
        
       </Routes>
      </Router>
      
      
   
    </div>
  );
}

export default App;
