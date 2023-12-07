import Header from './Header';
// import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';
import { Footer } from './Footer';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
    <div className='min-w-[100vh] flex flex-col '>
      <nav className='min-w-[100vh] justify-between items-center'>
      <Header/>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
    </>

      
  
  )
}

export default AppLayout;