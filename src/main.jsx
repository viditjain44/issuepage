 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import IssueList from './components/IssueList';
// import IssueDetail from './components/IssueDetail';

// function App() {
//   return (
//     <BrowserRouter>
//     <Router>
      
//         {/* <Switch> */}
//           <Route path="/issue/:id" component={IssueDetail} />
//           <Route path="/" component={IssueList} />
//         {/* </Switch> */}
       
//     </Router>
//     </BrowserRouter>
//   );
// }

