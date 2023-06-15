import RootLayout from "./RootLayout";
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./components/home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Categ_seeds from "./components/categ_seeds/Categ_seeds";
import Header from "./components/header/Header";
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
        }
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
