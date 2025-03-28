import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="card-cta">
				<div className="flex flex-col gap-6 max-w-lg">
					<h2>Get Interview Ready With AI-Powered Practice & Feedback</h2>
					<p className="text-lg">
						Practice with real interview questions & get instant feedback
					</p>
					<Button asChild className="btn-primary max-sm:w-full">
						<Link href="/interview">Start an Inteview</Link>
					</Button>
				</div>
				<img
					src="/robot.png"
					alt="robot"
					width={400}
					height={400}
					className="max-sm:hidden"
				/>
			</section>
			<section className="flex flex-col gap-6 mt-8">
				<h2>Your interviews</h2>
				<div className="interviews-section">
					{dummyInterviews.map((interview) => (
						<InterviewCard {...interview} key={interview.id} />
					))}
				</div>
			</section>
			<section className="flex flex-col gap-6 mt-8">
				<h2>Take an Interview</h2>
				<div className="interviews-section">
					{dummyInterviews.map((interview) => (
						<InterviewCard {...interview} key={interview.id} />
					))}
					{/* <p>You haven&apos;t taken any inteviews yet</p> */}
				</div>
			</section>
		</>
	);
}
