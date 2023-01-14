import './App.css'

// @ts-ignore
import { widgetQuery } from './widget?query'
// @ts-ignore
import { widgetQuery as prettyWidgetQuery } from './widget?prettyQuery'

function App() {
  return (
    <div className="App">
      <h2>Expected:</h2>
      <pre>
{`widget {
  id
  name
  color
  company {
    id
    name
  }
}`}
      </pre>
      <pre>widget {'{'} id name color company {'{'} id name {'}'} {'}'}</pre>
      <h2>Actual:</h2>
      <pre>
        {widgetQuery}
      </pre>
      <pre>
        {prettyWidgetQuery}
      </pre>
    </div>
  )
}

export default App
