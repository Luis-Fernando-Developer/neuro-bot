import React, { useCallback, useState } from "react";
import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	Background,
	applyNodeChanges,
	applyEdgeChanges,
	
} from "reactflow";

import type {Edge, Node, Connection, NodeChange, EdgeChange} from "@reactflow/core";
import "reactflow/dist/style.css";

import TextNode from "./Blocks/Nodes/TextNode";
import TextButton from "./Buttons/Bubbles/Text";

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

interface BuilderProps {
	className?: string;
};

const Builder = ({ className }: BuilderProps) => {


	const [nodes, setNodes] = useState<Node[]>(initialNodes);
	const [edges, setEdges] = useState<Edge[]>(initialEdges);

	const addNode = (node: Node) => {
		setNodes((nds) => [...nds, node]);
	};

	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[]
	);

	const onNodesChange = useCallback(
		(changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);

	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[]
	);

	const nodeTypes = {
		textNode: TextNode,
	};

	return (
		<div className={className}>

			<div className=" w-full h-screen ">
				<ReactFlow
					className=" "
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					fitView
				>
					<div className="relative flex p-2  h-full ">
						<MiniMap />
						<Background />
						<Controls position="top-right" popover="auto" className=" absolute -right-48  w-fit h-fit" />
						
						{/* <div className=" top-2 left-2 w-fit flex flex-col gap-1 z-10 border border-blue-900 p-2 rounded-xl bg-fuchsia-950 hover:cursor-default">
							<TextButton addNode={addNode}  className=' h-12 items-center justify-center flex border border-gray-900 p-3 bg-white rounded-xl hover:cursor-pointer'>
								Texto
							</TextButton>
						</div> */}
					</div>
				</ReactFlow>

			</div>
		</div>
	)
};

export default Builder;
