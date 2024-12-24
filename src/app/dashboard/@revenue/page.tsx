import ParallelCard from "@/components/ParallelCard";
import Link from "next/navigation";


export default function Revenue() {

  return (
    <>
      <ParallelCard>
        Revenue parallel route 
        <Link href="/dashboard/revenue/archived">
        <<<<archive>>>>>
        </Link>
        
      </ParallelCard>
    </>
  )
}
