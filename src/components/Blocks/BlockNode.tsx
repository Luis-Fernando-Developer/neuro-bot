import React from "react";
import { Handle, Position, type Node } from "reactflow";
import { Button } from "../ui/button";
import { Copy, Trash2 } from "lucide-react";

type NodeBlockDataProps = {
 id: string;
 label: string;
 children: React.ReactNode[];
 addNode?: (type: string, parentNode?: string) => void;
 deleteNode?: (id: string) => void;
 duplicateNode?: (id: string) => void;
};

type BlockNodeProps = Node<NodeBlockDataProps> & {
 allNodes: Node<any>[];
};

const BlockNode = ({id, data, allNodes}: BlockNodeProps ) => {
	const handleDrop = (event: React.DragEvent) => {
		event.preventDefault();
  const type = event.dataTransfer.getData("nodeType");
		if (data.addNode && type) {
   data.addNode(type, id);
  }
	};

	const handleDragOver = (event: React.DragEvent) => {
		event.preventDefault();
	};

 const childNodes = allNodes.filter(n => n.parentNode === id);

	return (
		<div
			className="p-4 bg-gray-100 rounded-md border-2 border-gray-300"
			onDrop={handleDrop}
			onDrag={handleDragOver}
		>
			<div>
				{data.duplicateNode && (
					<Button onClick={() => data.duplicateNode(id)} className="">
						<Copy />
					</Button>
				)}
				{data.deleteNode && (
					<Button onClick={() => data.deleteNode(id)} className="">
						<Trash2 />
					</Button>
				)}
			</div>

			<div>
				{childNodes.map((child: any) => (
					<div key={child.id} className="p-2 bg-white rounded-md border shadow-sm">
						{child.type === "textNode" && <p>Text node</p>}
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
