import Link from "next/link"


export default function Home() {

    return (
        <div>
        welcome here home page
        
        <Link href="/blog">goto Blog</Link>
        <Link href="/about">go to About</Link>
        <Link href="/products">got to prods</Link>
        </div>
    )
}