import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export default function Draggable({id, top, left, children, zIndex}) {
  const {attributes, listeners, setNodeRef, transform, active} = useDraggable({
    id: id,
  });


  const style = {
    top,
    left,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    zIndex: transform ? 1000 : zIndex,
    position: 'absolute'
  };

  
  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {children(listeners)}
    </div>
  );
}