import { useState } from 'react';
import IconButton from './components/buttons/iconButton';
import PrimaryButton from './components/buttons/primaryButton';
import BasicForm from './components/forms/basicForm';
import FormWithValidation from './components/forms/formWithValidation';
import FlexGridExample from './components/layout/flexGridExample';
import SimpleCard from './components/layout/simpleCard';
import SideBar from './components/navigation/sideBar';
import TopNavBar from './components/navigation/topNavBar';
import HeadingExample from './components/typography/headingExample';
import TextStyleExample from './components/typography/textStyleExample';

function App() {
  const [component, setComponent] = useState('');

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Tailwind Component Showcase</h1>

      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={() => setComponent('typography')} className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded shadow">Typography</button>
        <button onClick={() => setComponent('button')} className="px-4 py-2 bg-green-100 hover:bg-green-200 rounded shadow">Buttons</button>
        <button onClick={() => setComponent('form')} className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded shadow">Forms</button>
        <button onClick={() => setComponent('layout')} className="px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded shadow">Layouts</button>
        <button onClick={() => setComponent('navigation')} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded shadow">Navigation</button>
      </div>

      <div className="border p-6 rounded bg-white shadow space-y-8">
        {component === 'typography' && (
          <>
            <HeadingExample />
            <TextStyleExample />
          </>
        )}
        {component === 'button' && (
          <>
            <PrimaryButton />
            <IconButton />
          </>
        )}
        {component === 'form' && (
          <>
            <BasicForm />
            <FormWithValidation />
          </>
        )}
        {component === 'layout' && (
          <>
            <SimpleCard />
            <FlexGridExample />
          </>
        )}
        {component === 'navigation' && (
          <>
            <TopNavBar />
            <SideBar />
          </>
        )}
        {!component && <p className="text-gray-500 text-center">👆 카테고리를 선택하세요.</p>}
      </div>
    </div>
  );
}

export default App;
