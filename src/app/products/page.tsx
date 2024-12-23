import Link from "next/link";		
// href     replace prop to restore url to /

// link href needs dynamic id parsing
// based on updated products pages,
// these pages are dynamically listed!
// you use STRING INTERPOLATION for this.

export default function Products() {
	const productId = 100;
    return (
        <div>

            <div>PRODUCTS PAGE it has the root layout not the productID layout</div>
            <div><Link href="/products/1"></Link>product1</div>
            <div><Link href="/products/2"></Link>product2</div>
            <div><Link href="/products/3" replace></Link>product3</div>
            <div><Link href={`/products/${productId}`}></Link>product {productId}</div>
            <Link href="/">go to home</Link>
        </div>
    )
}
