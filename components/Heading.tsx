import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}


const Heading = ({

    title,
    description,
    icon,
    iconColor = "text-violet-500",
    bgColor = "bg-violet-500/10",
    

} : HeadingProps) => {
    return(
        <div>
            Heading Component
        </div>

    )
}

export default Heading;