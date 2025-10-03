import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

const TextNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="p-4 border border-gray-300 rounded bg-white shadow">
      <Handle type="target" position={Position.Top} />
      <div className="text-lg font-semibold mb-2">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />

    </div>
  );
};

export default TextNode;