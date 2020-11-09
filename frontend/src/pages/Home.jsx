import React from 'react'
import Accordion from '../components/Accordion/Accordion';

const Home = () => (
    <div className="page-home">
      <header className="d-flex justify-content-center bg-primary p-5 mb-5">
        <h1 className="text-white">Agile Engine - Accounting notebook</h1>
      </header>

      <main>
        <Accordion />
      </main>
    </div>
)
 
export default Home;