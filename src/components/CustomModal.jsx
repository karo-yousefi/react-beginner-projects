import { useState, useRef } from "react"

const CustomModal = () => {

	const [showModal, setShowModal] = useState(false);
	const buttonRef = useRef();

	const close = () => {
		setShowModal(false);
	}

	return (
		<div
			className="w-full h-[100vh] flex justify-center items-start relative">
			<button
				ref={buttonRef}
				className="px-6 py-3 rounded-lg bg-blue-700 font-Montserrat text-2xl text-white mt-10"
				onClick={() => setShowModal(!showModal)}>Open</button>
				{
					showModal && <Modal body={"hello"} footer={"This is a custom footer"} close={close}/>
				}
		</div>
	)
}


const Modal = ({ id, header, body, footer, close }) => {
	return (
		<div id={id || "modal"} className="absolute w-[800px] h-[400px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-gray-800 bg-slate-400 ">
			<div className="flex flex-col justify-start items-center gap-5">
				<div className="w-full bg-gray-900 flex flex-col justify-center items-center p-3">
					<div
						className="text-3xl font-Montserrat font-bold text-red-500 cursor-pointer translate-x-[370px]"
						onClick={close}>x</div>
					<div className="text-white">{header ? header : "header"}</div>
				</div>

				<div>
					<div>{body ? body : "body"}</div>
				</div>
				
				<div>
					<div>{footer ? footer : "footer"}</div>
				</div>
			</div>
		</div>
	)
}

export default CustomModal;