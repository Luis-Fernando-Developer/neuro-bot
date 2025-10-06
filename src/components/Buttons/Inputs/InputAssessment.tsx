import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonInputAssessmentProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const InputAssessmentButton: React.FC<ButtonInputAssessmentProps> = ({ addNode, className, children }:ButtonInputAssessmentProps ) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'inputAssessmentNode',
      position: { x: 250, y: 5 },
      data: { label: 'Input Assessment Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default InputAssessmentButton;