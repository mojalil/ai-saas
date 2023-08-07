import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
    const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage your account settings and set email preferences."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      ></Heading>
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
            {isPro ? (
                <div>
                    <p>You are subscribed to the Pro plan.</p>
                    <p>Thank you for your support!</p>  
                    
                </div>
            ) : (
                <div>
                    <p>You are not subscribed to the Pro plan.</p>
                    <p>Subscribe to get access to all the tools.</p>
                </div>
            )
                    }
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
