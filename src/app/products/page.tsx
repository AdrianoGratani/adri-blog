import Link from "next/link"

export default function Products() {

    return (
        <div>
            <div>PRODUCTS PAGE it has the root layout not the productID layout</div>
            <div><Link href="/"></Link>product1</div>
            <div><Link href="/"></Link>product2</div>
            <div><Link href="/"></Link>product3</div>
            <Link href="/">go to home</Link>
        </div>
    )
}