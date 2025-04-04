import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

async function Page() {
	const user = await getCurrentUser();

	return (
		<>
			<h3>Interview Generation</h3>
			{/*TODO: Add profile image prop to Agent component  */}
			<Agent userName={user?.name!} userId={user?.id} type="generate" />
		</>
	);
}

export default Page;
