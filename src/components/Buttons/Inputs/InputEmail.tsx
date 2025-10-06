import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputMailProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputMailButton: React.FC<ButtonInputMailProps> = ({ addNode, className, children }:ButtonInputMailProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputMailNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Mail Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputMailButton;