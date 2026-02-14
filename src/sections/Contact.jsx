import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

const Contact = () => {
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle");
	const [toast, setToast] = useState(null);
	const [open, setOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("sending");

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setStatus("idle");
					formRef.current.reset();
					setToast({
						type: "success",
						message: "Message sent successfully!",
					});
					setOpen(false);
				},
				() => {
					setStatus("idle");
					setToast({
						type: "error",
						message: "Failed to send message. Try again.",
					});
				},
			);
	};

	return (
		<>
			{toast && (
				<Toast
					type={toast.type}
					message={toast.message}
					onClose={() => setToast(null)}
				/>
			)}

			{/* Floating Chat Button */}
			<button
				onClick={() => setOpen(true)}
				className="
					fixed bottom-6 right-6 z-50
					w-14 h-14
					rounded-full
					bg-accent
					flex items-center justify-center
					text-white
					hover:scale-105
					transition-all duration-300
				"
			>
				<MessageCircle size={22} />
			</button>

			{/* Popup Card */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: 40, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 40, scale: 0.95 }}
						transition={{ duration: 0.3 }}
						className="
              fixed bottom-24 right-6
              w-[380px] max-w-[90vw]
              z-50
              bg-bg-surface
              border border-border
              rounded-2xl
              shadow-[0_30px_80px_rgba(0,0,0,0.7)]
              backdrop-blur-xl
            "
					>
						{/* Header */}
						<div className="flex items-center justify-between px-6 py-4 border-b border-border">
							<h3 className="text-lg font-medium">
								Get in <span className="text-accent">Touch</span>
							</h3>
							<button
								onClick={() => setOpen(false)}
								className="text-text-muted hover:text-accent transition"
							>
								<X size={18} />
							</button>
						</div>

						{/* Form */}
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-5 p-6"
						>
							<input type="text" name="website" className="hidden" />

							<input
								type="text"
								name="name"
								placeholder="Your Name"
								required
								className="px-4 py-3 bg-bg-dark border border-border rounded-lg focus:border-accent outline-none transition"
							/>

							<input
								type="email"
								name="email"
								placeholder="Your Email"
								required
								className="px-4 py-3 bg-bg-dark border border-border rounded-lg focus:border-accent outline-none transition"
							/>

							<textarea
								name="message"
								rows="4"
								placeholder="Your Message"
								required
								className="px-4 py-3 bg-bg-dark border border-border rounded-lg resize-none focus:border-accent outline-none transition"
							/>

							<button
								type="submit"
								disabled={status === "sending"}
								className="
                  mt-2 py-3
                  bg-accent
                  rounded-lg
                  text-white
                  font-medium
                  hover:shadow-[0_8px_25px_rgba(59,130,246,0.5)]
                  hover:scale-[1.02]
                  transition-all duration-300
                  disabled:opacity-60
                "
							>
								{status === "sending" ? "Sending..." : "Send Message"}
							</button>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Contact;
