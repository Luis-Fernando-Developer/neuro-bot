import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputPhoneProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputPhoneButton: React.FC<ButtonInputPhoneProps> = ({ addNode, className, children }:ButtonInputPhoneProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputPhoneNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Phone Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputPhoneButton;