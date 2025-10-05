import { useCallback, useState } from "react";
import * as React from "react";
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
import NumberNode from "./Blocks/Nodes/NumberNode";
import IncorporateNode from "./Blocks/Nodes/IncorporateNode";
import AudioNode from "./Blocks/Nodes/AudioNode";
import ImageNode from "./Blocks/Nodes/ImageNode";
import VideoNode from "./Blocks/Nodes/VideoNode";

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

interface BuilderProps {
	className?: string;
	onSetHandler: (handler: (type: string) => void ) => void;
};

const Builder = ({ className, onSetHandler }: BuilderProps) => {
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
		numberNode: NumberNode,
		videoNode: VideoNode,
		imageNode: ImageNode,
		audioNode: AudioNode,
		incorporateNode: IncorporateNode,
	};

	const handleAddNode =  (type: string) => {
		const id = `${type}-${Date.now()}`;
		const newNode: Node = {
			id,
			type:
				type === "text"
					? "textNode"
					: type === "number"
					? "numberNode"
					: type === "audio"
					? "audioNode"
					: type === "image"
					? "imageNode"
					: type === "video"
					? "videoNode"
					: "incorporateNode",
			position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 50 },
			data: {
				label:
					type === "text"
						? "textNode"
						: type === "number"
						? "numberNode"
						: type === "audio"
						? "audioNode"
						: type === "image"
						? "imageNode"
						: type === "video"
						? "videoNode"
						: "incorporateNode",
			},
		};
		addNode(newNode);
	};

	React.useEffect(() => {
		onSetHandler(handleAddNode);
	}, []);

	return (
		<div className={className}>

			<div className=" w-full h-screen ">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					fitView
				>
						<MiniMap />
						<Background />
						<Controls position="top-right" popover="auto" className=" absolute -right-48  w-fit h-fit" />
				</ReactFlow>
			</div>
		</div>
	)
};

export default Builder;
