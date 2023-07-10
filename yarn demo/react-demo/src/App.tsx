import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navigation} from "./Navigation.tsx";
import {Routing} from "./Routing.tsx";

function App() {

  return (
    <>
        <Navigation />
        <Routing />
    </>
  )
}

export default App
