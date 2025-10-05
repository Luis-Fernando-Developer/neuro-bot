import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonIncorporateProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const IncorporateButton: React.FC<ButtonIncorporateProps> = ({ addNode, className, children }: ButtonIncorporateProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'IncorporateNode',
      position: { x: 250, y: 5 },
      data: { label: 'Incorporate Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default IncorporateButton;