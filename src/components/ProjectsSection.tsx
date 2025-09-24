import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const categoryLabels = {
	AI: "AI",
	Web: "Web",
	Frontend: "Frontend",
	Analytics: "Analytics",
};

const ProjectsSection = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("All");

	// Each project is a separate object, with a category
	const projects = [
		// --- AI Projects ---
		{
			id: 1,
			title: "Human Scream Detection",
			description:
				"Mobile app using ML/DL to detect human screams in real-time and alert police with location. Achieved 90% accuracy using SVM-based classifier.",
			technologies: ["Python", "Machine Learning", "Deep Learning", "SVM"],
			category: "AI",
			status: "Live",
			metrics: { accuracy: "90%", safety: "Public" },
		},
		{
			id: 2,
			title: "Plastic Classification",
			description:
				"ML solution in Python to classify plastic types for waste sorting. Includes data preprocessing, EDA, and model evaluation.",
			technologies: ["Python", "Machine Learning", "EDA"],
			category: "AI",
			status: "Live",
			metrics: { precision: "High", recall: "High" },
		},
		{
			id: 3,
			title: "Twitter Sentiment Analysis",
			description:
				"Sentiment classification from Twitter data (74,000+ tweets) using ML models. Tackled informal language and class imbalance.",
			technologies: ["Python", "NLP", "Machine Learning"],
			category: "AI",
			status: "Live",
			metrics: { tweets: "74K+", insights: "Actionable" },
		},

		// --- Web/Full-Stack Projects ---
		{
			id: 4,
			title: "FarmTech",
			description:
				"Full-stack web app for direct farmer-to-customer sales. Removes middlemen, increases farmer profit, and provides market info.",
			technologies: [
				"Node.js",
				"Express",
				"MongoDB",
				"HTML",
				"CSS",
				"JavaScript",
			],
			category: "Web",
			status: "Live",
			metrics: { farmers: "Direct", platform: "End-to-End" },
		},
		{
			id: 5,
			title: "MERN School Management System",
			description:
				"Role-based school management system (admin, teacher, student) with dashboards and responsive UI.",
			technologies: ["MongoDB", "Express", "React", "Node.js"],
			category: "Web",
			status: "Live",
			metrics: { roles: "Multi", system: "Complete" },
		},

		// --- Frontend Projects ---
		{
			id: 6,
			title: "Green Cycle Hub",
			description:
				"Sustainable e-commerce platform with Razorpay integration, admin dashboard, and optimized workflows (15% less overhead).",
			technologies: ["React", "JavaScript", "Razorpay", "CSS", "UX Design"],
			category: "Frontend",
			status: "Live",
			metrics: { overhead: "-15%", payment: "Secure" },
		},

		// --- Analytics/Data Projects ---
		{
			id: 7,
			title: "Nifty Bank Stock Analysis Dashboard",
			description:
				"Excel Power Query & DAX dashboard for financial data analysis, volatility zones, and dynamic business insights.",
			technologies: ["Excel", "Power Query", "DAX", "Finance"],
			category: "Analytics",
			status: "Live",
			metrics: { data: "Financial", insights: "Actionable" },
		},
	];

	// Get unique categories for filter buttons
	const categories = [
		"All",
		...Array.from(new Set(projects.map((p) => categoryLabels[p.category] || p.category))),
	];

	// Filter projects based on selected category
	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((p) => (categoryLabels[p.category] || p.category) === selectedCategory);

	return (
		<section id="projects" className="py-20 px-6 bg-gradient-stadium">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-8">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-ice-white mb-6">
						Trophy <span className="text-electric-cyan">Cabinet</span>
					</h2>
					<div className="pitch-line">
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A showcase of digital victories - each project a testament to precision, innovation, and
							technical excellence.
						</p>
					</div>
				</div>

				{/* Category Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? "default" : "outline"}
							className={`text-sm ${
								selectedCategory === category
									? "bg-electric-cyan text-pitch-black"
									: "text-electric-cyan border-electric-cyan/50"
							}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</Button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{filteredProjects.map((project) => (
						<Card
							key={project.id}
							className="bg-deep-charcoal/70 border-slate-gray backdrop-blur-sm trophy-rotation cursor-pointer group relative overflow-hidden"
						>
							<div className="absolute inset-0 floodlight opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<CardHeader className="relative z-10">
								<div className="flex justify-between items-start mb-4">
									<div>
										<CardTitle className="font-display text-xl text-ice-white group-hover:text-electric-cyan transition-colors duration-300">
											{project.title}
										</CardTitle>
										<Badge
											variant="secondary"
											className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 mt-2"
										>
											{categoryLabels[project.category] || project.category}
										</Badge>
									</div>
									<Badge
										variant={
											project.status === "Live" ? "default" : "secondary"
										}
										className={
											project.status === "Live"
												? "bg-green-500/20 text-green-400 border-green-400/30"
												: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
										}
									>
										{project.status}
									</Badge>
								</div>
							</CardHeader>
							<CardContent className="relative z-10">
								<p className="text-muted-foreground mb-6 leading-relaxed">
									{project.description}
								</p>
								<div className="grid grid-cols-3 gap-4 mb-6">
									{project.metrics &&
										Object.entries(project.metrics).map(([key, value]) => (
											<div key={key} className="text-center">
												<div className="text-lg font-display font-bold text-electric-cyan hologram-text">
													{value}
												</div>
												<div className="text-xs text-muted-foreground uppercase tracking-wider">
													{key}
												</div>
											</div>
										))}
								</div>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, index) => (
										<Badge
											key={index}
											variant="outline"
											className="border-muted-blue/50 text-muted-foreground hover:border-electric-cyan/50 hover:text-electric-cyan transition-all duration-300 text-xs"
										>
											{tech}
										</Badge>
									))}
								</div>
								{/* Add your live/source links here if available */}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
