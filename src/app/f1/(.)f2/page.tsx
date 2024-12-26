import Link from "next/link";

export default function F2() {

  return (
    <div>
      (.) this is the intercepted route for the f2 page.
      <Link href="../f1">Click to go back to f1. or refresh to see f2 not intercepted/Link>
    </div>
  )
}
