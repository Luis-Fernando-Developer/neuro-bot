import { useCallback, useEffect, useMemo} from "react";
// import * as React from "react";
import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,

	// Connection,
	// Edge,
	// applyNodeChanges,
	// applyEdgeChanges,
} from "reactflow";
import type { Edge, Node, Connection, EdgeChange } from "@reactflow/core";
import "reactflow/dist/style.css";
import BlockNode from "./Blocks/BlockNode";


// import TextNode from "./Blocks/Nodes/Bubbles/TextNode";
// import NumberNode from "./Blocks/Nodes/Bubbles/NumberNode";
// import IncorporateNode from "./Blocks/Nodes/Bubbles/IncorporateNode";
// import AudioNode from "./Blocks/Nodes/Bubbles/AudioNode";
// import ImageNode from "./Blocks/Nodes/Bubbles/ImageNode";
// import VideoNode from "./Blocks/Nodes/Bubbles/VideoNode";
// import InputTextNode from "./Blocks/Nodes/Inputs/InputTextNode";
// import DocumentNode from "./Blocks/Nodes/Bubbles/DocumentNode";
// import InputNumberNode from "./Blocks/Nodes/Inputs/InputNumberNode";
// import InputImageNode from "./Blocks/Nodes/Inputs/InputImageNode";
// import InputMailNode from "./Blocks/Nodes/Inputs/InputEmailNode";
// import InputPhoneNode from "./Blocks/Nodes/Inputs/InputPhoneNode";

// interface BuilderProps {
// 	className?: string;
// 	onSetHandler: (handler: (type: string) => void) => void;
// }

type BuilderProps = {
	onSetHandler?: (handler: (type: string) => void ) => void;
	className?: string;
}

type NodeData = {
	label: string;
	children?: any[];
	addNode?: (type: string, parentId?: string) => void;
	deleteNode?: (id: string) => void;
	duplicateNode?: (id: string) => void;
}

const Builder = ({onSetHandler, className}: BuilderProps) => {
	const [nodes, setNodes, onNodesChange] = useNodesState<Node<NodeData>>([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);



	const handleAddNode = useCallback((type: string, parentId?: string) => {
		const id = (Math.random() * 1000).toFixed(0);
		const newNode = {
			id,
			type: "blockNode",
			data: {label: type},
			position: {x: 120, y: 150},
			parentNode: parentId,
			extent: "parent" as const
		};
		setNodes(nds => [...nds, newNode]);
	}, [setNodes]);

	useEffect(() => {
		if (onSetHandler) {
			onSetHandler(handleAddNode);
		}
	}, [onSetHandler, handleAddNode]);

	const handleDeletNode =  useCallback((id: string ) => {
		setNodes(nds => nds.filter(n => n.id !== id && n.parentNode !== id));
		setEdges(eds => eds.filter(e => e.source !== id && e.target !== id));
	}, [setNodes, setEdges]);

	const handleDuplicateNode = useCallback((id: string) => {
		const nodeToDuplicate = nodes.find(n => n.id === id);
		if (!nodeToDuplicate) return;

		const newId = (Math.random() * 1000).toFixed(0);
		const newNode = {
			...nodeToDuplicate,
			id: newId,
			position: {x: nodeToDuplicate.position.x + 45, y: nodeToDuplicate.position.y + 74
			}
		};
		setNodes(nds => [...nds, newNode])
	}, [nodes, setNodes]);


	// const nodeTypes = React.useMemo(
	// 	() => ({
	// 		textNode: TextNode,
	// 		numberNode: NumberNode,
	// 		videoNode: VideoNode,
	// 		imageNode: ImageNode,
	// 		audioNode: AudioNode,
	// 		documentNode: DocumentNode,
	// 		incorporateNode: IncorporateNode,
	// 		inputTextNode: InputTextNode,
	// 		inputNumberNode: InputNumberNode,
	// 		inputMailNode: InputMailNode,
	// 		inputPhoneNode: InputPhoneNode,
	// 		inputImageNode: InputImageNode,
	// 	}),
	// 	[]
	// );

	// const handleNodesChange = useCallback((id: string, newData: any) => {
	// 	setNodes((nds) =>
	// 		nds.map((node) =>
	// 			node.id === id ? { ...node, data: { ...node.data, ...newData } } : node
	// 		)
	// 	);
	// }, []);

	// const handleDelete = useCallback(
	// 	(id: string ) => {
	// 		//deleta node e filho (caso seja container)
	// 		const idsToDelete = [
	// 			id,
	// 			...nodes.filter((n) => n.parentNode === id).map((n) => n.id),
	// 		]
	// 		setNodes((nds) => nds.filter((n) => !idsToDelete.includes(n.id)))
	// 		setEdges((eds) =>
	// 			eds.filter(
	// 				(e) =>
	// 						!idsToDelete.includes(e.source) && !idsToDelete.includes(e.target)
	// 			)
	// 		);
	// 	},
	// 	[nodes]
	// 	// (id: string) => {
	// 	// 	setNodes((nds) => nds.filter((n) => n.id !== id));
	// 	// 	setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
	// 	// },
	// 	// [setNodes, setEdges]
	// );

	// const handleDuplicate = useCallback(
	// 	(id: string) => {
	// 		const node = nodes.find((n) => n.id === id);
	// 		if (!node) return;
	// 		console.log(node)

	// 		const newId = `${id}-copy-${Date.now()}`;
	// 		const duplicateNode: Node = {
	// 			...node,
	// 			id: newId,
	// 			position: {
	// 				x: node.position.x + 20,
	// 				y: node.position.y + 20,
	// 			},
	// 			data: {
	// 				...node.data,
	// 				onChange: handleNodesChange,
	// 				onDelete: handleDelete,
	// 				onDuplicate: handleDuplicate,
	// 			},
	// 		};
	// 		setNodes((nds) => [...nds, duplicateNode]);
	// 	},
	// 	[nodes, handleNodesChange,  handleDelete]
	// );

	// const handleAddNode = useCallback(
	// 	(type: string) => {
	// 		const id = `${type}-${Date.now()}`;


	// 		const nodeType =
	// 			type === "text"
	// 				? "textNode"
	// 				: type === "number"
	// 				? "numberNode"
	// 				: type === "audio"
	// 				? "audioNode"
	// 				: type === "image"
	// 				? "imageNode"
	// 				: type === "video"
	// 				? "videoNode"
	// 				: type === "document"
	// 				? "documentNode"
	// 				: type === "incorporate"
	// 				? "incorporateNode"
	// 				: type === "inputText"
	// 				? "inputTextNode"
	// 				: type === "inputNumber"
	// 				? "inputNumberNode"
	// 				: type === "inputMail"
	// 				? "inputMailNode"
	// 				: type === "inputPhone"
	// 				? "inputPhoneNode"
	// 				: "inputImage";

	// 		const newNode: Node = {
	// 			id,
	// 			type: nodeType,
	// 			position: { x: Math.random() * 99 + 8, y: Math.random() * 99 + 8 },
	// 			data: {
	// 				label: type,
	// 				onchange: handleNodesChange,
	// 				onDuplicate: handleDuplicate,
	// 				onDelete: handleDelete,
	// 			},
	// 		};
	// 		setNodes((nds) => [...nds, newNode]);
	// 	},
	// 	[handleNodesChange, handleDuplicate, handleDelete]
	// );

	const onConnect = useCallback((connection: Connection) => {
		setEdges(eds => addEdge(connection, eds));
	}, [setEdges]);


	const nodeTypes = useMemo(
		() => ({
			blockNode: (props: any) => <BlockNode {...props} allNodes={nodes} />,
		}),
		[nodes]
	);


	// const onEdgesChange = useCallback(
	// 	(changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
	// 	[]
	// );

	

	// React.useEffect(() => {
	// 	onSetHandler(handleAddNode);
	// }, [onSetHandler, handleAddNode]);


	return (
		<div className={className}>
			<ReactFlow
				nodes={nodes.map(n => ({
					...n,
					data: {
						...n.data,
						addNode: handleAddNode,
						deleteNode: handleDeletNode,
						duplicateNode: handleDuplicateNode
					}
				}))}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				fitView
			>
				<MiniMap />
				<Controls position="top-right" popover="auto" className=" absolute -right-48  w-fit h-fit"/>
				<Background />
			</ReactFlow>
		</div>
	)
};

export default Builder;
