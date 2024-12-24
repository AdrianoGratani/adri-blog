import Link from "next/link";
import ParallelCard from "@/components/ParallelCard":

export default function ArchivedRevenue() {

  return (
    <div>
      <ParallelCard>
        Archived Revenue Page
        <Link href="/dashboard">Revenue default page</Link>
      </ParallelCard>
    </div>
  )
}
