import React, { useState, useEffect } from 'react';
import { Button, Items } from '@/styles/components/Extensions/SlashMenu';

const CommandList = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [props.items]);

  const onKeyDown = event => {
    if (event.key === 'ArrowUp') {
      upHandler();
      return true;
    }

    if (event.key === 'ArrowDown') {
      downHandler();
      return true;
    }

    if (event.key === 'Enter') {
      enterHandler();
      return true;
    }

    return false;
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  const selectItem = index => {
    const item = props.items[index];

    if (item) {
      props.command(item);
    }
  };

  const { items } = props;
  return (
    <Items>
      {items.map((item, index) => {
        return (
          <Button
            className={`item ${index === selectedIndex ? 'is-selected' : ''}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item.element || item.title}
          </Button>
        );
      })}
    </Items>
  );
};

export default CommandList;
