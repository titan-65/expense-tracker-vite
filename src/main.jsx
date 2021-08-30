import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './paper-kit.min.css'
import App from './App'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATO_API_KEY}`
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
      </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
