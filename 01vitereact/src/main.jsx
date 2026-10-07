import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const reactElement = {
  type : 'a',
  props: {
    href:'https://google.com',
    target :'_blank'
  },
  children: 'Click me to  visit google'
}

const reactElement2 = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

const anotherUser = "vikas";

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

createRoot(document.getElementById('root')).render(
  <App></App>
)
