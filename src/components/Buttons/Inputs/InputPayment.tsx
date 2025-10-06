import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputPaymentProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputPaymentButton: React.FC<ButtonInputPaymentProps> = ({ addNode, className, children }:ButtonInputPaymentProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputPaymentNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Payment Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputPaymentButton;