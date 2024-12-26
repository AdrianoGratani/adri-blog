import Link from "next/link";

export default function F2() {

  return (
    <div>
      This is the page for folder two inside the folder one
      <Link href="../f1">Click this link to go back to folder one throu intercepted route</Link>
    </div>
  )
}
