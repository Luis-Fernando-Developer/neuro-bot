import React from 'react';
// import  type { Node } from 'reactflow';

interface ButtonTextProps {
  onAddNode: (type: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const TextButton: React.FC<ButtonTextProps> = ({ onAddNode, className, children } ) => {
  const handleClick = () => {
    onAddNode("textNode");
  };
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
export default TextButton;