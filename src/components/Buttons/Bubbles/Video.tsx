import React from 'react';
import  type { Node } from 'reactflow';

interface ButtonVideoProps {
  addNode: (node: Node) => void;
  className?: string;
  children?: React.ReactNode;
}

const VideoButton: React.FC<ButtonVideoProps> = ({ addNode, className, children }: ButtonVideoProps) => {
  const handleAddNode = () => {
    const id = (Math.random() * 1000).toFixed(0);
    addNode({
      id,
      type: 'VideoNode',
      position: { x: 250, y: 5 },
      data: { label: 'Video Node' },
    });
  };
  return (
    <button onClick={handleAddNode} className={className} children={children}>
      
    </button>
  );
};
export default VideoButton;