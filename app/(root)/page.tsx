import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
	getInterviewsByUserId,
	getLatestInterviews,
} from "@/lib/actions/general.action";
import Link from "next/link";

async function Home() {
	const user = await getCurrentUser();

	const [userInterviews, allInterviews] = await Promise.all([
		await getInterviewsByUserId(user?.id!),
		await getLatestInterviews({ userId: user?.id! }),
	]);

	const hasPassesdInterviews = userInterviews?.length! > 0;
	const hasUpcomingInterviews = allInterviews?.length! > 0;

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
					{hasPassesdInterviews ? (
						userInterviews?.map((interview) => (
							<InterviewCard
								key={interview.id}
								userId={user?.id}
								interviewId={interview.id}
								role={interview.role}
								techstack={interview.techstack}
								type={interview.type}
								createdAt={interview.createdAt}
							/>
						))
					) : (
						<p>You haven&apos;t taken any inteviews yet</p>
					)}
				</div>
			</section>
			<section className="flex flex-col gap-6 mt-8">
				<h2>Take an Interview</h2>
				<div className="interviews-section">
					{hasUpcomingInterviews ? (
						allInterviews?.map((interview) => (
							<InterviewCard
								key={interview.id}
								userId={user?.id}
								interviewId={interview.id}
								role={interview.role}
								techstack={interview.techstack}
								type={interview.type}
								createdAt={interview.createdAt}
							/>
						))
					) : (
						<p>There are no new interviews available</p>
					)}
				</div>
			</section>
		</>
	);
}

export default Home;
