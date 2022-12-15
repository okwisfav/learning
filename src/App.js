import React from 'react'
import ControlledInputs from './setup/1-controlled-inputs';
import ErrorExample from './setup/1-error-example';
import MultipleReturns from './setup/1-multiple-returns';
import UseEffectBasics from './setup/1-useEffect-basics';
import ShortCircuit from './setup/2-short-circuit';
import UseEffectCleanup from './setup/2-useEffect-cleanup';
import ShowHide from './setup/3-show-hide';
import UseEffectFetchData from './setup/3-useEffect-fetch-data';
import UseStateCounter from './setup/5-useState-counter';
import Usestate from './setup/Usestate';
import UseStateObject from './setup/UseStateObject';

function App() {
  return (
    <div className='container'>
        <ControlledInputs/>
    </div>
  );
}

export default App