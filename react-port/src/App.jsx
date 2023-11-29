import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

function App() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if (currentPage === 'Contact'){
            return <Contact />
        }
        return <Resume />

    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className="main-page">{renderPage()}</main>
            <Footer />
        </div>
    );
}
export default App;
