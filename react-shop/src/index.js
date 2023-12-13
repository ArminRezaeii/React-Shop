import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/HomeComponent/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Shop from './components/ShopComponent/Shop';
import ProductDetails, { loader as loaderProductDetails } from './components/ProductDetailsComponent/ProductDetails';
const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },

      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails />,
        loader: loaderProductDetails
      }

    ]
  }



])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
