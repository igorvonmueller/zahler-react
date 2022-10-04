import { useState } from 'react';
import './App.css';

function App() {
    
    const [Nummer, setNummer] = useState(0);

    function Vergrossern () {
        setNummer (Nummer + 1)
    }
    function Einschranken () {
        setNummer (Nummer - 1)
    }
    function Null () {
        setNummer (Nummer / Nummer - 1)
    }
    return (
        <div>
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
        </div>
        <div className='borda'>
        <p>{Nummer}</p>
        <button onClick={Vergrossern}>Mehr</button>
        <button onClick={Einschranken}>Weniger</button>
        <button onClick={Null}>Null</button>
        </div>
        </div>
)
};
export default App;