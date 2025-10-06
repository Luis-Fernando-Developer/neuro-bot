import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import { FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";

const DocumentNode: React.FC<NodeProps> = ({ data }: NodeProps) => {
	return (
		<Card className=" flex flex-col min-w-[170px] max-w-[170px] border-0 rounded-sm space-x-0 space-y-0 gap-2 py-2.5 px-3.5 items-center bg-gray-800 shadow-accent">
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

			<CardHeader className=" w-full p-0 m-0  flex items-center justify-center">
				<div className="flex flex-col w-full">
					<CardTitle className="flex items-center pl-1 gap-1 justify-start w-full border border-gray-400/20 rounded">
						<FileDown className="w-3 h-3 text-blue-700" />
						<p className="text-white font-normal bg-gray-400/20 pl-1.5 py-1 w-full h-full rounded-xs rounded-l-none ">
							{data.label}
						</p>
					</CardTitle>
				</div>
			</CardHeader>

			<CardContent className="p-0 gap-0 space-x-0 space-y-0 flex w-full">
				<div className="text-lg flex flex-col w-full items-center justify-center">
					<div className="border border-gray-400/20 rounded-sm w-full">
						<Button className="p-0 w-full">Documento</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default DocumentNode;
