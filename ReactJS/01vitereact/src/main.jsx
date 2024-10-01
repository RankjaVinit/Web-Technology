import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1> Text by MyApp </h1>
  )
}

const link = (
  <a href='https://google.com' target='_blank'> Google </a>
)

const link2 = React.createElement(
    'a',
    {
      href: 'https://google.com',
      target: '_blank'
    },
    'Google By React.'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {link}  
    <MyApp/>
    {link2}
  </React.StrictMode>
  // link
)
