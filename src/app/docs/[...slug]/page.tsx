export default function Docs({params}: {
    params: {
        slug: string[],
    }
}) {

    return(
        <div>
            Docs page. 
            {
                params.slug.length === 2 && <div>reading the feature  {params.slug[0]} and its concept named: {params.slug[1]}</div>            
            }
            {
                params.slug.length === 1 && <div>we found the feature {params.slug[0]}</div>
            }
            
        </div>
    )
}