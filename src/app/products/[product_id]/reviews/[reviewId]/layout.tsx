import React from "react"

export default function NestedLayoutReviews(
    { children }: {
        children: React.ReactNode;
    }
) {
    return (
        <>
            <h2 style={{
                backgroundColor: 'blue'
            }}>blue color:
            layout. this is inside ./reviews/layout.tsx, this layout is only for ./review DYNAMIC PAGES NOT FOR PRODUCT DYNAMIC PAGES.
                below is the children param from ./page.tsx
            </h2>
            <h1 style={{
                backgroundColor: 'blue'
            }}>
                this layout replaces the root layout!!!
            </h1>
            <div style={{
                backgroundColor: 'blue'
            }}>

            {children}
            </div>
        </>
    )
}