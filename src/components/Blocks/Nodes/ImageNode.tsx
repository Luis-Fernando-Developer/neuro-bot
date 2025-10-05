import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import { Image } from "lucide-react";

const ImageNode: React.FC<NodeProps> = ({ data }: NodeProps) => {
  return (
    <div className="py-2 px-3 items-center border border-black rounded bg-cyan-950 shadow">
      <Handle 
        type="target"
        position={Position.Left} 
        className="!bg-green-400 !w-3 !h-3"
      />
      <div className="text-lg flex flex-col w-full gap-1 items-center justify-center">
        <div className="flex w-full rounded-sm border border-gray-200/30 pl-1 gap-2 items-center justify-start">
          <Image className="w-4 h-4 text-blue-500" />
          <p className='text-sm text-white font-semibold'>{data.label}</p>
        </div>
          <div className='border border-gray-200/30 rounded-sm p-1'>
            Image node
          </div>
      </div>
      <Handle 
        type="source"
        position={Position.Right} 
        className="!bg-green-400 !w-3 !h-3"
      />
    </div>
  );
};

export default ImageNode;