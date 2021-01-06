import './App.css';
import { useState } from 'react';

function App() {
  const [myList, updateMyList] = useState([]);
  const [input, updateInput] = useState("");
  const updateArray = () => {
    if (input != "")
      updateMyList([...myList,
        input]
      );
    updateInput("");
  }
  const deleteItem = (index) => {
    alert("hi")
    const newList = [...myList];
    newList.splice(index, 1);
    updateMyList(newList);
  }
  return (
    <div className="App">
      <h1>React To Do List</h1>
      {
        myList.map((i, index) =>
          <div className="ListBox" key={index}><span>{i}</span> <span className="delete" onClick={() => deleteItem(index)}>X</span></div>
        )
      }
      <div className="entrybox">
        <input type="text" placeholder="Add List Items" value={input} onChange={e => updateInput(e.target.value)} />
        <button onClick={updateArray}>Add Item</button>
      </div>
    </div >
  );
}

export default App;
