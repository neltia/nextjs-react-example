import { useState } from 'react';
import AxiosPostViewer from './components/AxiosPostViewer';
import ConditionalRender from './components/ConditionalRender';
import Counter from './components/Counter';
import ExampleStaticUI from './components/ExampleStaticUI';
import GreetingWithProps from './components/GreetingWithProps';
import InputHandler from './components/InputHandler';
import NameList from './components/NameList';
import UseEffectClock from './components/UseEffectClock';

function App() {
  const [example, setExample] = useState('StaticUI');

  const renderExample = () => {
    switch (example) {
      case 'StaticUI': return <ExampleStaticUI />;
      case 'Props': return <GreetingWithProps />;
      case 'Counter': return <Counter />;
      case 'List': return <NameList />;
      case 'Input': return <InputHandler />;
      case 'Conditional': return <ConditionalRender isLoggedIn={true} />;
      case 'Effect': return <UseEffectClock />;
      case 'Axios': return <AxiosPostViewer />;
      default: return <div>Select an example</div>;
    }
  };

  return (
    <div>
      <h1>TSX Example App</h1>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setExample('StaticUI')}>01 - Static UI</button>
        <button onClick={() => setExample('Props')}>02 - Props</button>
        <button onClick={() => setExample('Counter')}>03 - Counter</button>
        <button onClick={() => setExample('List')}>04 - List</button>
        <button onClick={() => setExample('Input')}>05 - Input</button>
        <button onClick={() => setExample('Conditional')}>06 - Conditional</button>
        <button onClick={() => setExample('Effect')}>07 - useEffect</button>
        <button onClick={() => setExample('Axios')}>08 - Axios</button>
      </div>
      {renderExample()}
    </div>
  );
}

export default App;