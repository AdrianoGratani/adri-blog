"use client";   // to use the reset prop and trigger a state you mst switch from server to client.
// press the try again until rr() gets 0

import { notFound } from "next/navigation"
function rr(n: number) return Math.floor(Math.random() * n); // let's trigger an error to display ./error.tsx route

export default function ReviewDetailID(
    {params} : {params: {
        product_id: string,
        reviewId: string,
    }}
) {
    if(parseInt(params.reviewId)> 1000) { notFound(); } // custom not found page after 1000th product parse
    // npm run build  && npm run start to see the server logs about the error.

    
    const r= rr(2);  if(r===1) throw new Error('there is an error in this page!!! so the page displayed is error.tsx.'); // introuce the error randomly
    
    return(
        <div>
            review details for the product
            <div>this is the product with id: {params.product_id}</div>
            <div>this is ther review number: {params.reviewId}</div>
            <div>this review page is a dynamic route nested inside dynamic route products</div>
        </div>
    )
}
