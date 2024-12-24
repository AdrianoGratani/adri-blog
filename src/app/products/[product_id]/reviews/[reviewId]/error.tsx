//error .tsx is a client component
"use client"

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
