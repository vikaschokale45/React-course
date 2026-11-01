import Header from "./components/components/Header/Header";
import Footer from "./components/components/Footer/Footer";
import {Outlet} from 'react-router-dom';
export default function Layout(){
  return (
    <> 
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
