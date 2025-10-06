import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputDateProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputDateButton: React.FC<ButtonInputDateProps> = ({ addNode, className, children }:ButtonInputDateProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputDateNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Date Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputDateButton;