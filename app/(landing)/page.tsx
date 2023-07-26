import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sign-in">
                    <Button variant="default" size="lg">Sign in</Button>
                </Link>
                <Link href="/sign-up">
                    <Button variant="default" size="lg">Sign up</Button>
                </Link>
            </div>
        </div>

    )
}

export default LandingPage;