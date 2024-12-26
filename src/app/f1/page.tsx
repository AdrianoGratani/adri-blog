import Link from "next/link";

export default function F1() {

  return(
    <div>
      this is folder at level one.
      <Link href="/f2">Go to folder at level two</Link>
    </div>
  )
  
}
