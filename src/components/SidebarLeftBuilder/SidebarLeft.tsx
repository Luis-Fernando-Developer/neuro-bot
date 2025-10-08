import { AtSign, CalendarArrowUp, ChevronLeft, ChevronRight, Code, CreditCard, FileDown, FileUp, Film, Globe, Hash, HashIcon, Headphones, Image,  Phone, SquareCheckBig, StarIcon, Type } from "lucide-react";
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
						!isOpenSidebar ? " w-[270px] h-full" : " w-14 h-full"
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

						{/* container group buttons Bubbles */}
						<div className="gap-2 flex flex-col">
							<h2
								className={`text-gray-400 uppercase my-2 ${
									!isOpenSidebar ? "flex" : "hidden"
								}`}
							>
								Bubbles
							</h2>
							<div
								className={` gap-1 items-center justify-center ${
									!isOpenSidebar
										? "gap-2 top-0 grid grid-cols-2 "
										: " grid grid-cols-1 top-10 gap-2 relative left-0"
								}`}
							>
								{/* Button Text */}
								<button
									onClick={() => onAddNode?.("textNode")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<Type
											className={`${!isOpenSidebar ? "w-4 h-4" : "w-6 h-6"} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Texto
										</span>
									</div>
								</button>
								{/* Button Number */}
								<button
									onClick={() => onAddNode?.("number")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Número
										</span>
									</div>
								</button>
								{/* Button Audio */}
								<button
									onClick={() => onAddNode?.("audio")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Audio
										</span>
									</div>
								</button>
								{/* Button Image */}
								<button
									onClick={() => onAddNode?.("image")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Imagem
										</span>
									</div>
								</button>
								{/* Button Video */}
								<button
									onClick={() => onAddNode?.("video")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Video
										</span>
									</div>
								</button>
								{/* Button Document */}
								<button
									onClick={() => onAddNode?.("document")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<FileDown
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Arquivo
										</span>
									</div>
								</button>
								{/* Button Incorporate */}
								<button
									onClick={() => onAddNode?.("incorporate")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-blue-700`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Incorporar
										</span>
									</div>
								</button>
							</div>
						</div>

						{/*container group buttons Inputs  */}
						<div className="gap-2 flex flex-col">
							<h2
								className={`text-gray-400 uppercase my-2 ${
									!isOpenSidebar ? "flex" : "hidden"
								}`}
							>
								Inputs
							</h2>
							<div
								className={` gap-1 items-center justify-center ${
									!isOpenSidebar
										? "gap-2 top-0 grid grid-cols-2 "
										: " grid grid-cols-1 top-10 gap-2 relative left-0"
								}`}
							>
								{/* Button InputTextNode */}
								<button
									onClick={() => onAddNode?.("inputText")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<Type
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Text Input
										</span>
									</div>
								</button>

								{/* Button InputNumberNode */}
								<button
									onClick={() => onAddNode?.("inputNumber")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<HashIcon
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Número
										</span>
									</div>
								</button>

								{/* Button InputEmailNode */}
								<button
									onClick={() => onAddNode?.("inputMail")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<AtSign
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Email
										</span>
									</div>
								</button>

								{/* Button InputPhoneNode */}
								<button
									onClick={() => onAddNode?.("inputPhone")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<Phone
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Telefone
										</span>
									</div>
								</button>

								{/* Button InputImageNode */}
								<button
									onClick={() => onAddNode?.("inputImage")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Imagem
										</span>
									</div>
								</button>

								{/* Button InputVideoNode */}
								<button
									onClick={() => onAddNode?.("inputVideo")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Video
										</span>
									</div>
								</button>

								{/* Button InputAudioNode */}
								<button
									onClick={() => onAddNode?.("inputAudio")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
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
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Audio
										</span>
									</div>
								</button>

								{/* Button InputArquiveNode */}
								<button
									onClick={() => onAddNode?.("inputArquive")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<FileUp
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Arquivo
										</span>
									</div>
								</button>

								{/* Button InputDateNode */}
								<button
									onClick={() => onAddNode?.("inputDate")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<CalendarArrowUp
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Data
										</span>
									</div>
								</button>

								{/* Button InputWebSiteNode */}
								<button
									onClick={() => onAddNode?.("inputLinkWeb")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<Globe
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											WebSite
										</span>
									</div>
								</button>

								{/* Button InputPaymentNode */}
								<button
									onClick={() => onAddNode?.("inputPayment")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<CreditCard
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Pagamento
										</span>
									</div>
								</button>

								{/* Button InputButtonsNode */}
								<button
									onClick={() => onAddNode?.("inputButtons")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<SquareCheckBig
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Botão
										</span>
									</div>
								</button>

								{/* Button InputAssessmentNode */}
								<button
									onClick={() => onAddNode?.("inputAssessment")}
									className={`${
										!isOpenSidebar
											? " px-2 flex-1 justify-start gap-1"
											: "w-8 h-8 p-0 justify-center"
									} text-white bg-fuchsia-950/0 hover:bg-blue-700/50 rounded-lg border border-white/50 flex items-center p-1 text-sm font-medium hover:cursor-pointer transition-all duration-300`}
								>
									<div
										className={`${
											!isOpenSidebar ? "text-sm font-bold" : "text-base font-bold"
										} flex items-center justify-start gap-1`}
									>
										<StarIcon
											className={`${
												!isOpenSidebar
													? "w-4 h-4"
													: "w-6 h-6 flex item-center justify-center"
											} text-orange-400`}
										/>
										<span className={`${!isOpenSidebar ? " flex" : "hidden"}`}>
											Avaliação
										</span>
									</div>
								</button>


							</div>
						</div>

						{/* container group buttons Condition  */}
						<div className="gap-2 flex flex-col">
							<h2
								className={`text-gray-400 uppercase my-2 ${
									!isOpenSidebar ? "flex" : "hidden"
								}`}
							>
								Condition
							</h2>
							<div
								className={` gap-1 items-center justify-center ${
									!isOpenSidebar
										? "gap-2 top-0 grid grid-cols-2 "
										: " grid grid-cols-1 top-10 gap-2 relative left-0"
								}`}
							></div>
						</div>

						{/* container group buttons Integration  */}
						<div className="gap-2 flex flex-col">
							<h2
								className={`text-gray-400 uppercase my-2 ${
									!isOpenSidebar ? "flex" : "hidden"
								}`}
							>
								Integration
							</h2>
							<div
								className={` gap-1 items-center justify-center ${
									!isOpenSidebar
										? "gap-2 top-0 grid grid-cols-2 "
										: " grid grid-cols-1 top-10 gap-2 relative left-0"
								}`}
							></div>
						</div>

					</div>
				</div>
			</div>
		);
};