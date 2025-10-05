import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonImageProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const ImageButton: React.FC<ButtonImageProps> = ({ addNode, className, children }: ButtonImageProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'ImageNode',
      position: { x: 250, y: 5 },
      data: { label: 'Image Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default ImageButton;