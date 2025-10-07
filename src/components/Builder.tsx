import { useCallback, useState } from "react";
import * as React from "react";
import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	Background,
	// applyNodeChanges,
	applyEdgeChanges,
	useNodesState,
} from "reactflow";
import type {Edge, Node, Connection,  EdgeChange} from "@reactflow/core";
import "reactflow/dist/style.css";
import TextNode from "./Blocks/Nodes/Bubbles/TextNode";
import NumberNode from "./Blocks/Nodes/Bubbles/NumberNode";
import IncorporateNode from "./Blocks/Nodes/Bubbles/IncorporateNode";
import AudioNode from "./Blocks/Nodes/Bubbles/AudioNode";
import ImageNode from "./Blocks/Nodes/Bubbles/ImageNode";
import VideoNode from "./Blocks/Nodes/Bubbles/VideoNode";
import InputTextNode from "./Blocks/Nodes/Inputs/InputTextNode";
import DocumentNode from "./Blocks/Nodes/Bubbles/DocumentNode";
import InputNumberNode from "./Blocks/Nodes/Inputs/InputNumberNode";
import InputImageNode from "./Blocks/Nodes/Inputs/InputImageNode";
import InputMailNode from "./Blocks/Nodes/Inputs/InputEmailNode";
import InputPhoneNode from "./Blocks/Nodes/Inputs/InputPhoneNode";


interface BuilderProps {
	className?: string;
	onSetHandler: (handler: (type: string) => void ) => void;
};

const Builder = ({ className, onSetHandler }: BuilderProps) => {
	const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);


	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[]
	);


	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[]
	);

	const handleNodesChange = (id: string, newData: any) => {
		setNodes((nds) =>
			nds.map((node) =>
				node.id === id ? {...node, data: {...node.data, ...newData}}
				: node
			) 
		);
	};

	const nodeTypes = React.useMemo(() => ({

		textNode: TextNode,
		numberNode: NumberNode,
		videoNode: VideoNode,
		imageNode: ImageNode,
		audioNode: AudioNode,
		documentNode: DocumentNode,
		incorporateNode: IncorporateNode,

		inputTextNode: InputTextNode,
		inputNumberNode: InputNumberNode,
		inputMailNode: InputMailNode,
		inputPhoneNode: InputPhoneNode,
		inputImageNode: InputImageNode,
	}), []);

	const handleAddNode =  (type: string) => {
		const id = `${type}-${Date.now()}`;
		const newNode: Node = {
			id,
			type:
				type === "text" ? "textNode"
					: type === "number" ? "numberNode"
					: type === "audio" ? "audioNode"
					: type === "image" ? "imageNode"
					: type === "video" ? "videoNode"
					: type === "document" ? "documentNode"
					: type === "incorporate" ? "incorporateNode"
					: type === "inputText" ? "inputTextNode"
					: type === "inputNumber" ? "inputNumberNode"
					: type === "inputMail" ? "inputMailNode"
					: type === "inputPhone" ? "inputPhoneNode"

					// : "InputImage",
					: "inputImage",
			position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 50 },
			data: {
				label: type,
				onchange: handleNodesChange,
			},
		};
		setNodes((nds) => [...nds, newNode]);
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
