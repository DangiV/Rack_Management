import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Manager from '../Pages/Manager/Manager';
import Singin from '../Pages/Authentication/Singin';
import Singup from '../Pages/Authentication/Singup';
import { Provider } from 'react-redux';
import Store from '../Services/Redux/Store/Store';
import GuestRoute from '../Component/Common/GuestRoute/GuestRoute';
import PrivateRoute from '../Component/Common/PrivateRoute/PrivateRoute';

import Roll from '../Pages/Roll/Roll';
import Rollpermission from '../Pages/Rollpermission/Rollpermission';
import Roleedite from '../Pages/Roleedite/Roleedite';
import Salesman from '../Pages/Salesman/Salesman';
import Transport from '../Pages/Transport/Transport';
import Profile from '../Pages/Profile/Profile';
import Setting from '../Pages/Setting/Setting';
import Oderlist from '../Pages/Oderlist/Oderlist';

export default function Routing() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            {/* Guest user route */}
            <Route path='/' element={<GuestRoute> <Singin /></GuestRoute>} />
            <Route path='/singup' element={<Singup />} />
            {/* <Route path='/' element={<Singin />} /> */}

            <Route path='/dashboard' element={<PrivateRoute> <Index /> </PrivateRoute>} />
            <Route path='/manager' element={<PrivateRoute> <Manager /> </PrivateRoute>} />

            {/* nizam sir code  */}

            <Route exact path='/Salesman' element={<Salesman />} />     
            <Route exact path='/Transport' element={<Transport />} />
            <Route exact path='/Roll' element={<Roll />} />
            <Route exact path='/Rollpermission' element={<Rollpermission />} />
            <Route exact path='/Roleedit' element={<Roleedite />} />
            <Route exact path='/Profile' element={<Profile />} />
            <Route exact path='/Setting' element={<Setting />} />
            <Route exact path='/Oderlist' element={<Oderlist />} />

          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}
