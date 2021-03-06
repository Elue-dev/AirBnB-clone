import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import CityVenues from './pages/CityVenues/CityVenues'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue'
import Modal from './utility/Modal/Modal'
import NavBar from './utility/NavBar/NavBar'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Modal />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/venue/:vId' element={<SingleFullVenue />} />
            <Route exact path='/City/:cityName' element={<CityVenues />} />
            <Route exact path='/payment-success/:stripeToken' element={<PaymentSuccess />} />
            <Route exact path ='/' element={<Modal />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}
