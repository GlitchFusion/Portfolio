import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

const Contact = () => {
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle");
	const [toast, setToast] = useState(null);
	// toast = { type: "success" | "error", message: string }

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
			{/* Toast Popup */}
			{toast && (
				<Toast
					type={toast.type}
					message={toast.message}
					onClose={() => setToast(null)}
				/>
			)}

			<section
				id="contact"
				className="w-full py-24 px-6 bg-bg-dark text-text-dark"
			>
				<div className="max-w-3xl mx-auto">
					{/* Header */}
					<div className="mb-12 text-center">
						<h2 className="font-brand text-4xl sm:text-5xl tracking-wide">
							Let’s Get in <span className="text-accent">Touch</span>
						</h2>
						<p className="mt-4 text-text-muted">
							Have a question, idea, or opportunity? Drop me a message.
						</p>
					</div>

					{/* Form */}
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="
              flex flex-col gap-6
              bg-bg-surface
              border border-border
              rounded-xl
              p-8 sm:p-10
            "
					>
						<input type="text" name="website" className="hidden" />

						<div>
							<label className="block text-sm mb-2 text-text-muted">Name</label>
							<input
								type="text"
								name="name"
								required
								className="w-full px-4 py-3 bg-bg-dark border border-border rounded-md"
							/>
						</div>

						<div>
							<label className="block text-sm mb-2 text-text-muted">
								Email
							</label>
							<input
								type="email"
								name="email"
								required
								className="w-full px-4 py-3 bg-bg-dark border border-border rounded-md"
							/>
						</div>

						<div>
							<label className="block text-sm mb-2 text-text-muted">
								Message
							</label>
							<textarea
								name="message"
								rows="5"
								required
								className="w-full px-4 py-3 bg-bg-dark border border-border rounded-md resize-none"
							/>
						</div>

						<button
							type="submit"
							disabled={status === "sending"}
							className="
                mt-4 px-6 py-3
                bg-accent text-white
                rounded-md
                transition
                hover:bg-accent/90
                disabled:opacity-60
              "
						>
							{status === "sending" ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
