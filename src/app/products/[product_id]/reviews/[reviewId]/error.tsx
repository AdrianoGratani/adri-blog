//error .tsx is a client component
"use client"

// when error in ./review/id occurs, automatically wrap the whole segment and its nested children in a React ERror Boundary
export default function ErrorBoundary(
  {error}: { error: Error }
) {
  return (
    <>
      This si Error page for products/id/review/id...
      {error}
    </>
  )
}
