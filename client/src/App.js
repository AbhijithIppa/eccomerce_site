import RootLayout from "./RootLayout";
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./components/home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Categ_seeds from "./components/categ_seeds/Categ_seeds";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Productdetails from "./components/productdetails/Productdetails";
import Profile from "./components/profile/Profile";
import SideMenu from "./components/side_menu/SideMenu";
import User from "./User";
import WishList from "./components/wishlist/WishList";

function App() {

  const routerobj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/',
          element:<Header></Header>
        },
        {
          path:"/categ_seeds",
          element:<Categ_seeds></Categ_seeds>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        }
      ]
    },
    {
      path:"user/",
      element:<User></User>,
      children:[
        {
          path:"",
          element:<Profile></Profile>
        },
        
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={routerobj}></RouterProvider>
    </div>
  );
}

export default App;
