import './App.scss';

import NestedListsContextProvider from './context/NestedListsContext'
import Templates from './components/Templates'
import AddTemplateButton from './components/AddTemplateButton'

function App() {
  return (
    <NestedListsContextProvider>
      <main className="app">
          <AddTemplateButton/>
          <Templates/>
      </main>

    </NestedListsContextProvider>
  );
}

export default App;
