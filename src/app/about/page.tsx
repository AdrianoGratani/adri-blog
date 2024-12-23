export const metadata = {
    title: "Frontend Nextjs adriano gratani dev",
    description: "if I didn't write this, the des would have been inherited from the root layout."
}


export default function About() {

    return (
        <div>
            About page
            this page has metadata with same key as the layout
            <br/> metadata in page has always the precedence
        </div>
    )
}