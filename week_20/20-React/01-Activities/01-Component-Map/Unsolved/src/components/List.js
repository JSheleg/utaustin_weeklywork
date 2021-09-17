import React from 'react';

function List({groceries}) {
  return (
    <ul className="list-group">
      {groceries.map((item) => 
      <li key = {item.id}> {item.name}</li>)}
    </ul>
  );
}

export default List;
