import { Navigate, createBrowserRouter } from 'react-router-dom';



import Main from '../Layout/Main.jsx';
import Home from '../components/Home/Home.jsx';
import Login from '../components/Login/Login.jsx';
import SignUp from '../components/Sign Up/SignUp.jsx';
import Category from '../components/Home/Catagory/Category.jsx';
import NewsLayOut from '../Layout/NewsLayOut.jsx';
import News from '../components/News/News/News.jsx';
import PrivateRoute from '../routes/PrivateRoute.jsx';
import Terms from '../components/Terms/Terms.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
     
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader:({params}) => fetch(`http://localhost:7000/categories/${params.id}`)
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }

    ]
  },

  {
    path: 'news',
    element: <NewsLayOut></NewsLayOut>,
    children:[
      {
        path:':id',
        element:<PrivateRoute><News></News></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:7000/news/${params.id}`)
        
      }
    ]
  },

  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },

]);
export default router;