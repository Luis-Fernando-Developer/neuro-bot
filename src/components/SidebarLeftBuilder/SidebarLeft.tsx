import { ChevronLeft, ChevronRight, Code, Film, Hash, Headphones, Image, MessageSquare } from "lucide-react";
import { useState } from "react"

interface SidebarProps {
  className?: string;
  onAddNode?: (node: any) => void;
}

export default function Sidebar({className, onAddNode} : SidebarProps) {
  const [isOpenSidebar, setOpenSidebar] = useState(true);

  return (
			<div className={className}>
				<div
					className={`relative  ${
						!isOpenSidebar ? " w-[240px] h-full" : " w-14 h-full"
					} 
        transition-all duration-300`}
				>
					<button
						onClick={() => setOpenSidebar(!isOpenSidebar)}
						className=" absolute top-3 -right-0 bg-transparent w-8  p-0 h-8 flex items-center justify-center text-gray-400 font-bold hover:cursor-pointer"
					>
						{!isOpenSidebar ? <ChevronLeft /> : <ChevronRight />}
					</button>

					<div className="w-full h-full p-3 flex flex-col gap-3">
						<div
							className={` ${
								!isOpenSidebar ? "flex flex-col gap-3" : "hidden"
							} text-white`}
						>
							<h2 className={`${!isOpenSidebar ? "flex" : "hidden"}`}>Neuro Bot</h2>
							<p className={`${!isOpenSidebar ? "flex" : "hidden"}`}>
								Arraste blocos para o canvas
							</p>
						</div>
						<div className="w-full text-gray-500 text-lg font-semibold ">Bubbles</div>
						<div
							className={` gap-1 items-center justify-center ${
								!isOpenSidebar
									? "gap-2 top-0 grid grid-cols-2 "
									: " grid grid-cols-1 top-10 gap-2 relative left-0"
							}`}
						>
							{/* Button Text */}
							<button
								onClick={() => onAddNode("text")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<MessageSquare
										className={`${!isOpenSidebar ? "w-4 h-4" : "w-6 h-6"}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>Texto</span>
								</div>
							</button>

							{/* Button Number */}
							<button
								onClick={() => onAddNode("number")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<Hash
										className={`${
											!isOpenSidebar
												? "w-4 h-4"
												: "w-6 h-6 flex item-center justify-center"
										}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
										Número
									</span>
								</div>
							</button>

							{/* Button Audio */}
							<button
								onClick={() => onAddNode("audio")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<Headphones
										className={`${
											!isOpenSidebar
												? "w-4 h-4"
												: "w-6 h-6 flex item-center justify-center"
										}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
										Audio
									</span>
								</div>
							</button>

							{/* Button Image */}
							<button
								onClick={() => onAddNode("image")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<Image
										className={`${
											!isOpenSidebar
												? "w-4 h-4"
												: "w-6 h-6 flex item-center justify-center"
										}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
										Imagem
									</span>
								</div>
							</button>

							{/* Button Video */}
							<button
								onClick={() => onAddNode("video")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<Film
										className={`${
											!isOpenSidebar
												? "w-4 h-4"
												: "w-6 h-6 flex item-center justify-center"
										}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
										Video
									</span>
								</div>
							</button>

							{/* Button Incorporate */}
							<button
								onClick={() => onAddNode("pica")}
								className={`${
									!isOpenSidebar
										? " px-2 flex-1 justify-start gap-1"
										: "w-8 h-8 p-0 justify-center"
								} bg-blue-700 hover:bg-blue-700/50  text-white rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
							>
								<div
									className={`${
										!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
									} flex items-center justify-start gap-1`}
								>
									<Code
										className={`${
											!isOpenSidebar
												? "w-4 h-4"
												: "w-6 h-6 flex item-center justify-center"
										}`}
									/>
									<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
										Incorporar
									</span>
								</div>
							</button>

						</div>
						<div className="w-full text-gray-500 text-lg font-semibold ">Inputs</div>
						<div className="w-full text-gray-500 text-lg font-semibold ">Logics</div>
						<div className="w-full text-gray-500 text-lg font-semibold ">Integrations</div>
					</div>
				</div>
			</div>
		);
};