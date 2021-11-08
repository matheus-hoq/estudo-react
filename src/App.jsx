import Card from './components/Card';
import Item from './components/Item'

const App = () => {
  return(
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
          <Item texto='Item 1'/>
          <Item texto='Item 2'/>
          <Item texto='Item 3'/>
      </ul>
      <Card/>
    </>
    )
}

export default App;

