"use client";

import React, { useState } from "react";

interface SubscribeProps {
	title?: string;
	subtitle?: string;
	buttonText?: string;
	imageSrc?: string;
	onSubscribe?: (email: string) => void;
}

export const Discount: React.FC<SubscribeProps> = ({
	title = "Subscribe & Get 10% Discount",
	subtitle = "Get E-mail updates about our latest shop and special offers.",
	buttonText = "Sign up",
	imageSrc = "/images/hero/subscribe-plant.png",
	onSubscribe,
}) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e?: React.FormEvent) => {
		e?.preventDefault();
		if (!email) return;
		onSubscribe?.(email);
		setEmail("");
	};

	return (
		<section className="overflow-hidden rounded-lg">
			<div className="bg-[#21465E] text-white rounded-lg">
				<div className="max-w-[1440px]  mx-auto px-8 sm:px-6 lg:px-8">
					<div className="relative overflow-hidden flex  items-center gap-6">
						<div className="relative z-3 flex sm:flex-row flex-col md:nowrap item-center justify-between  md:p-13.5  md:gap-45 min-w-0">
							<div>
								<h3 className="text-sm md:text-[30px] leading-9  font-semibold">
									{title}
								</h3>
								<p className="mt-2 text-[12px] md:text-lg leading-9 text-[#D9E7EA] max-w-xl">
									{subtitle}
								</p>
							</div>
							<form
								onSubmit={handleSubmit}
								className="mt-4 sm:mt-6 flex items-center"
							>
								<label
									htmlFor="subscribe-email"
									className="sr-only"
								>
									Email address
								</label>
								<input
									id="subscribe-email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your Email address"
									className="min-w-0 w-full h-[52px] sm:w-[320px] px-3 py-2 text-sm text-[#0F2A2E] bg-white/95 placeholder:text-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F0BA43]"
								/>
								<button
									type="submit"
									onClick={handleSubmit}
									className="inline-flex h-[52px] items-center justify-center whitespace-nowrap bg-[#F0BA43] hover:bg-[#e0a73a] text-[#1D1D1D] px-4 py-2  font-medium text-sm shadow"
								>
									{buttonText}
								</button>
							</form>
						</div>

						{/* Right-side image (decorative) */}

						<img
							src="/images/categories/Graphes.png"
							alt="decorative"
							className=" absolute  right-10 -top-10 h-80 "
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discount;
