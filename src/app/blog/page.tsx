import {Metadata} from 'next';

// for this metadata we use object instead of string through next/Metadata;
// it takes three types key: default template and absolute.
// export const metadata: Metadata = {
    // title: {
//         absolute: blog
//     }
// }

export default function Blog() {


    return (
        <div>
            my blog
        </div>
    )
}
