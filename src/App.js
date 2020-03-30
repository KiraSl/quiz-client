import React from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function App() {
  const codeString = `
    function foo() {
      // do stuff
    }
  `
  return (
    <div className="App">
      <Button>Quiz client</Button>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default App
