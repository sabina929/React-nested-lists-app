import './App.scss';

import NestedListsContextProvider from './context/NestedListsContext'
import Templates from './components/Templates'

function App() {
  return (
    <NestedListsContextProvider>
      <main className="app">
        <Templates/>
      </main>

    </NestedListsContextProvider>
  );
}

export default App;
