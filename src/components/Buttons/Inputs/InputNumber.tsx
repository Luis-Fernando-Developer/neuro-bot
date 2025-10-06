import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputNumberProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputNumberButton: React.FC<ButtonInputNumberProps> = ({ addNode, className, children }:ButtonInputNumberProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputNumberNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Number Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputNumberButton;