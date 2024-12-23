import { notFound } from "next/navigation"

export default function ReviewDetailID(
    {params} : {params: {
        product_id: string,
        reviewId: string,
    }}
) {

    // custom not found page 
    if(parseInt(params.reviewId)> 1000) {
        notFound();
    }
 
    return(
        <div>
            review details for the product
            <div>this is the product with id: {params.product_id}</div>
            <div>this is ther review number: {params.reviewId}</div>
            <div>this review page is a dynamic route nested inside dynamic route products</div>
        </div>
    )
}