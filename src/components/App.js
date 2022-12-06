import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <Header />
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName=<FontAwesomeIcon className="html-icon" icon={faHtml5} />
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName=<FontAwesomeIcon className="css-icon" icon={faCss3Alt} />
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName=<FontAwesomeIcon className="js-icon" icon={faJs} />
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
