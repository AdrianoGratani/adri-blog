import { Metadata } from "next";

type PropsOuu = {
    params: {
        product_id: string
    }
}
// DYNAMIC METADATA through async:
export const generateMetadata = async ({ params }: PropsOuu): Promise<Metadata> => {

    const t = await new Promise(resolve => setTimeout(() => {
        resolve(` |product: ${params.product_id}`)
    }, 1000)
    )

    return {
        // t stands for "title"
        title: `DYn async ${t}`
    }
}

export default function ProductID(
    { params }: PropsOuu) {
    return (
        <div>
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ <br />
            PRODUCTID PAGE
            dynamic page for the product: {params.product_id}
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ <br />
            this page has DYNAMIC METADATA for each product_id
        </div>
    )
}

/*
params e' una keyword che non puoi cambiare:

{
    params: {
        product_id: "id"
    }
}

*/