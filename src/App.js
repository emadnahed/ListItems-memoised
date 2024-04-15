import React, { useState, useCallback, useMemo } from 'react';
import ListItem from './components/ListItem';
import './App.css';


const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  
  
  const totalItems = useMemo(() => items.length, [items]);

// Above variable is cached using useMemo hook. It will only re-calculate when the "items" array changes.

  
  const addItem = useCallback(() => {
    setItems(prevItems => [
      ...prevItems,
      { id: Math.random(), name: `Item ${prevItems.length + 1}` },
    ]);
  }, [setItems]);

  // Above function is memoised using useCallback hook.  So it won't change (and be recreated) unless one of its dependencies ("items")
  


  return (
    <div className='app'>
      <h1 style={{textAlign:"center"}}>Item List</h1>
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <button  onClick={addItem}>Add an Item</button>
      <p>Total number of items: {totalItems}</p>
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;


// This project demonstrates several key concepts:

// ListItem is memoized using React.memo to optimize rendering performance.

// addItem function is memoized using useCallback to prevent unnecessary re-renders.

// totalItems is memoized using useMemo to avoid recalculating it on every render.