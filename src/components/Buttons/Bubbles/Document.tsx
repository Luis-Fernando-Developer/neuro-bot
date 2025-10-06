import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonDocumentProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const DocumentButton: React.FC<ButtonDocumentProps> = ({ addNode, className, children }: ButtonDocumentProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'DocumentNode',
      position: { x: 250, y: 5 },
      data: { label: 'Document Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default DocumentButton;