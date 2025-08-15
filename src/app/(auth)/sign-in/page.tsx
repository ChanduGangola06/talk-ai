import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const session= await auth.api.gtSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/');
    }

    return <SignInView />
}

export default Page;