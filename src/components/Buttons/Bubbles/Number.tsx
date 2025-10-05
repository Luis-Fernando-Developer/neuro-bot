import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonNumberProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const NumberButton: React.FC<ButtonNumberProps> = ({ addNode, className, children }: ButtonNumberProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'numberNode',
      position: { x: 250, y: 5 },
      data: { label: 'Number Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default NumberButton;