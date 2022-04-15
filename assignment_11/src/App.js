import React from 'react';

import DemoForm from './components/DemoForm';
import RefsDemo from './components/RefsDemo';

const App = () => {
  return (
    <div>
      <h2>Form using Class Based State: </h2>
      <DemoForm />
      <h2>Form using Refs: </h2>
      <RefsDemo />
    </div>
  );
};

export default App;
