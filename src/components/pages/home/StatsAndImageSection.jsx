"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Users, Briefcase, TrendingUp, Award, CalendarCheck } from "lucide-react";
import { SpecialOfferCallout } from "./SpecialOfferCallout";

const teamMembers = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1544168190-79c17527004f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDg1OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		alt: "Team member 1",
		dataAiHint: "professional portrait",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDg1OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		alt: "Team member 2",
		dataAiHint: "professional portrait",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDg1OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		alt: "Team member 3",
		dataAiHint: "professional portrait",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDg1OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		alt: "Team member 4",
		dataAiHint: "professional portrait",
	},
];

const statsData = [
	{ id: 1, value: "1M+", description: "Flights Booked Annually", icon: TrendingUp },
	{ id: 2, value: "98%", description: "Customer Satisfaction Rate", icon: Award },
	{ id: 3, value: "500+", description: "Destinations Worldwide", icon: CalendarCheck },
];

export function StatsAndImageSection() {
	return (
		<section className="py-16 md:py-24 bg-background dark:bg-slate-950">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
					{/* Left Column */}
					<div className="space-y-10">
					<h1 className="text-2xl font-bold">Our Achievements</h1>
						<div>
							<p className="text-muted-foreground leading-relaxed text-base md:text-lg">
								At FlightTicket, we offer more than just flight booking services;
								we provide an unparalleled travel planning experience tailored to
								meet your needs and exceed your expectations. Your adventure starts
								here.
							</p>
						</div>

						<div className="flex items-center space-x-4">
							<div className="flex -space-x-3">
								{teamMembers.map((member) => (
									<div
										key={member.id}
										className="relative w-11 h-11 rounded-full border-2 border-background dark:border-slate-800 ring-1 ring-border overflow-hidden"
									>
										<Image
											src={member.src}
											alt={member.alt}
											fill
											className="object-cover"
											sizes="44px"
											data-ai-hint={member.dataAiHint}
										/>
									</div>
								))}
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									Meet Our Professional Team
								</h3>
								<p className="text-xs text-muted-foreground">
									Dedicated to your seamless travel experience.
								</p>
							</div>
						</div>

						<div className="space-y-8">
							{statsData.map((stat) => {
								const IconComponent = stat.icon;
								return (
									<div
										key={stat.id}
										className="flex items-center pb-4 border-b border-border last:border-b-0"
									>
										<IconComponent className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
										<div>
											<p className="text-3xl md:text-4xl font-bold text-primary">
												{stat.value}
											</p>
											<p className="text-sm text-muted-foreground mt-0.5">
												{stat.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Right Column */}
					<div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1495202337139-e865ed70fcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MHx8fHwxNzQ4NTkyOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
							alt="Travel architecture modern"
							fill
							priority
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
							quality={85}
							data-ai-hint="travel architecture modern"
						/>

						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

						{/* Contact button */}
						<Button
							asChild
							variant="default"
							className="absolute top-6 right-6 z-20 bg-accent/80 hover:bg-accent text-accent-foreground backdrop-blur-sm rounded-full px-5 py-2.5 text-sm shadow-lg"
						>
							<Link href="/#contact-us-form-actual">
								<Phone className="h-4 w-4 mr-2" />
								Contact Us Now
							</Link>
						</Button>

						{/* Title text */}
						<div className="absolute bottom-6 left-6 z-20">
							<p className="text-white font-semibold text-lg drop-shadow-md">
								Building Your Dreams
							</p>
						</div>

						{/* Special offer callout */}
						<div className="z-30">
							<SpecialOfferCallout />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
