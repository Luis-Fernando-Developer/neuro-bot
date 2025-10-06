import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputTextProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputTextButton: React.FC<ButtonInputTextProps> = ({ addNode, className, children }:ButtonInputTextProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputTextNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Text Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputTextButton;