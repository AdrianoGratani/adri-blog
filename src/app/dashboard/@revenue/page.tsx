import ParallelCard from "@/components/ParallelCard";
import Link from "next/link";


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
