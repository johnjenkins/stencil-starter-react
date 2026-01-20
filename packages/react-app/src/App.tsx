import { useState } from 'react';
import { ExampleInput } from '@example/stencil-lib-react';

function App() {
  const [basicValue, setBasicValue] = useState('');

  return (
    <div className="container">
      <h1>Stencil + React Integration</h1>

      <section>
        <ExampleInput
          value={basicValue}
          placeholder="Type something..."
          onExampleChange={(event) => setBasicValue(event.detail)}
        >
          <span slot="label">Basic Input</span>
          <span slot="helper">Current value: {basicValue}</span>
        </ExampleInput>
      </section>
    </div>
  );
}

export default App;
