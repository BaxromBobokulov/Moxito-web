import { lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Above-the-fold — eager load
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

// Below-the-fold — lazy load (loaded only when needed)
const Cocktails = lazy(() => import('./components/Cocktails.jsx'));
const About     = lazy(() => import('./components/About.jsx'));
const Art       = lazy(() => import('./components/Art.jsx'));
const Menu      = lazy(() => import('./components/Menu.jsx'));
const Contact   = lazy(() => import('./components/Contact.jsx'));

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main id="home">
            <Navbar />
            <Hero />
            <Suspense fallback={null}>
                <Cocktails />
                <About />
                <Art />
                <Menu />
                <Contact />
            </Suspense>
        </main>
    );
};

export default App;