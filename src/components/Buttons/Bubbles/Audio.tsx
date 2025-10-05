import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonAudioProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const AudioButton: React.FC<ButtonAudioProps> = ({ addNode, className, children }: ButtonAudioProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'AudioNode',
      position: { x: 250, y: 5 },
      data: { label: 'Audio Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default AudioButton;