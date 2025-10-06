import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputArquiveProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputArquiveButton: React.FC<ButtonInputArquiveProps> = ({ addNode, className, children }:ButtonInputArquiveProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputArquiveNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Arquive Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputArquiveButton;