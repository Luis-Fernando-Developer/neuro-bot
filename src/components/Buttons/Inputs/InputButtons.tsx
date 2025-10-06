import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputButtonsProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputButtonsButton: React.FC<ButtonInputButtonsProps> = ({ addNode, className, children }:ButtonInputButtonsProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputButtonsNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Buttons Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputButtonsButton;