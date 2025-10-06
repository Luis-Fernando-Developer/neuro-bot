import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputImageProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputImageButton: React.FC<ButtonInputImageProps> = ({ addNode, className, children }:ButtonInputImageProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputImageNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Image Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputImageButton;