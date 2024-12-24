// it wraps parallel routes. each parallel routes is wrapped in ParallelCard component.
// btw children is just ./page.tsx
export default function LayoutParallel(
  {children, chart, revenue, stats} : {
    children: React.ReactNode;
    chart: React.ReactNode;
    revenue: React.ReactNode;
    stats: React.ReactNode;
  }
) 
{
  return (
    <div>
      <div>{children}</div>
      
{/*       parallel routes container */}
      <div style={{display: 'flex'}}>
{/*           top part: */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
              <div>{chart}</div>
              <div>{revenue}</div>
          </div>
{/*         bottom part: */}
          <div style={{display: 'flex', flex: 1}}>{stats}</div>
      </div>
    </div>
  )
}
