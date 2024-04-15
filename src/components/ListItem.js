import React from 'react';

const ListItem = React.memo(({ item }) => {
  console.log(`Rendering ListItem for item ${item.id}`);
  return <li>{item.name}</li>;
});

export default ListItem;


// ListItem is a component which is memoised version of the component which may not render as long as if its props remain the same.