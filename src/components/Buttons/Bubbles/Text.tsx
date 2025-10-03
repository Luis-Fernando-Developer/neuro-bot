import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonTextProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const TextButton: React.FC<ButtonTextProps> = ({ addNode, className, children }:ButtonTextProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'textNode',
      position: { x: 250, y: 5 },
      data: { label: 'Text Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
    </button>
  );
};
export default TextButton;