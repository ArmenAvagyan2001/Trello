import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//  <React.StrictMode>
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// </React.StrictMode>,
//   document.getElementById("root")
// )


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
</React.StrictMode>,
);
