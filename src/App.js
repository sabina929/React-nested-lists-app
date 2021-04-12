import './App.scss';

import NestedListsContextProvider from './context/NestedListsContext'
import Templates from './components/Templates'

function App() {
  return (
    <NestedListsContextProvider>
      <main className="App">
        <Templates/>
      </main>

    </NestedListsContextProvider>
  );
}

export default App;
