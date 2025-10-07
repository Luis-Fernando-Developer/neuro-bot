import React from "react";
import { Handle, Position, type Node } from "reactflow";

type NodeBlockDataProps = {
 id: string;
 data: any;
 children: React.ReactNode[];
 label: string;
};

type BlockNodeProps = Node<NodeBlockDataProps>

const BlockNode = ({id, data}: BlockNodeProps ) => {
	const handleDrop = (event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.setData("targetBlockId", id);
	};

	const handleDragOver = (event: React.DragEvent) => {
		event.preventDefault();
	};

	return (
		<div
			className="p-4 bg-gray-100 rounded-md border-2 border-gray-300"
			onDrop={handleDrop}
			onDrag={handleDragOver}
		>
			<h3>{data.label || `Block #${id}`}</h3>
			<div>
				{data.children?.map((child: any) => (
					<div key={child.id} className="p-2 bg-white rounded-md border shadow-sm">
						{child.type === "text" && <p>Text node</p>}
						{child.type === "number" && <p>Text node</p>}
					</div>
				))}
			</div>

			<Handle type="target" position={Position.Top} />
			<Handle type="target" position={Position.Bottom} />
		</div>
	);
};

export default BlockNode;
