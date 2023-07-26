import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
        <div>Dashboard Page</div>
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default DashboardPage;


