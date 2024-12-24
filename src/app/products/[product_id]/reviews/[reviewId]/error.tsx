//error .tsx is a client component
"use client"

// when error in ./review/id occurs, automatically wrap the whole segment and its nested children in a React ERror Boundary
export default function ErrorBoundary(
  {error, reset}: { error: Error, reset: ()=> void }
) {
  return (
    <>
      This si Error page for products/id/review/id...
      
      {error}

      <button onClick={reset}>Try again maybe is not serious. in that case you can use the reset prop for error boundaries</button>
    </>
  )
}
