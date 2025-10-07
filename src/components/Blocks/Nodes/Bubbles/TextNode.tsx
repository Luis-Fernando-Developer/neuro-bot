import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import { Copy, Play, Trash2, Type } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Textarea } from "../../../ui/textarea";
import { Input } from "../../../ui/input";
import { ButtonGroup, ButtonGroupSeparator } from "../../../ui/button-group";

const TextNode: React.FC<NodeProps> = ({ id, data, selected }: NodeProps) => {

	const [editing, setEditing] = useState(false);
	const [text, setText] = useState(data.message || "");

	const handleDuplicate = () => data.onDuplicate?.(id);
	const handleDelete = () => data.OnDelete?.(id);
	const handleTest = () => data.onTest?.(id);

	const saveText = () => {
		setEditing(false);
		data.onChange?.(id, {message: text});
	};


	return (
		<Card
			// onFocus={toggleMenu}
			className={` ${
				selected ? "border border-blue-600" : "border border-red-600"
			} relative flex flex-col min-w-[170px] max-w-[170px] border-0 rounded-sm space-x-0 space-y-0 gap-2 py-2.5 px-3.5 items-center bg-gray-800 shadow-accent`}
		>
			<Handle
				type="target"
				position={Position.Left}
				className="!bg-green-400 !w-3 !h-3"
			/>
			<Handle
				type="source"
				position={Position.Right}
				className="!bg-green-400 !w-3 !h-3"
			/>

			{selected && (
				<div className="absolute -top-7 right-0 w-full h-6 flex justify-end">
					<ButtonGroup className="h-full flex p-0 ">
						<Button
							onClick={(e) => {
								e.stopPropagation();
								handleTest();
							}}
							className="text-blue-400 h-full rounded-sm"
						>
							<Play />
						</Button>
						<ButtonGroupSeparator className="bg-gray-600 h-full " />
						<Button
							onClick={(e) => {
								e.stopPropagation();
								handleDuplicate();
							}}
							className="text-white h-full rounded-none"
						>
							<Copy />
						</Button>
						<ButtonGroupSeparator className="bg-gray-600 h-full" />
						<Button
							onClick={(e) => {
								e.stopPropagation();
								handleDelete();
							}}
							className="text-red-400 h-full rounded-sm"
						>
							<Trash2 />
						</Button>
					</ButtonGroup>
				</div>
			)}

			<CardHeader className=" w-full p-0 m-0  flex items-center justify-center">
				<div className="flex flex-col w-full">
					<CardTitle className="flex items-center pl-1 gap-1 justify-start w-full border border-gray-400/20 rounded">
						<Type className="w-3 h-3 text-blue-700" />
						<p className="text-white font-normal bg-gray-400/20 pl-1.5 py-1 w-full h-full rounded-xs rounded-l-none ">
							Mensagem
						</p>
					</CardTitle>
				</div>
			</CardHeader>

			<CardContent className="p-0 w-full">
				{editing ? (
					<Textarea
						value={text}
						onChange={(e) => setText(e.target.value)}
						onBlur={saveText}
						className="w-full p-2 text-white rounded-sm"
						autoFocus
					/>
				) : (
					<Input
						className="w-full text-white"
						onClick={() => setEditing}
						placeholder="Digite algo..."
					/>
					// <Input className="w-full justify-start text-left" aria-placeholder="digite algo"
					// onClick={() => (handleClick(), setEditing(true))}>{text} ></Input>
				)}
			</CardContent>

			{/* <CardContent className="p-0 gap-0 space-x-0 space-y-0 flex w-full">
				<div className="text-lg flex flex-col w-full items-center justify-center">
					<div className="border border-gray-400/20 rounded-sm w-full">
						<Button className="p-0 w-full">Texto</Button>
					</div>
				</div>
			</CardContent> */}
		</Card>
	);
};

export default TextNode;
