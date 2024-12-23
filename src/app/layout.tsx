import Footer from "@/components/Footer"
import {Metadata} from 'next'

// static obj for seo
//  using the Metadata next functionality,
// you have access to title best practice:
// is an obj with keys, very useful for SEO
export const metadata: Metadata = {
  title:{
    absolute: "",
    default: "Metadata{}defautl title for pages without title metadata.",
    template: " %s | AdriDev"
  },
  description: 'adriano dev nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* children is the ./app/page.tsx  */}
      <body>
        <header style={{ backgroundColor: 'lightblue' }}>
          header, in ./app/layout so it's always there in any route
          
        </header>
        {children}
        <footer style={{ backgroundColor: 'lightblue' }}>
          footer, in ./app/layout 
          so it's always there in any route
          because all page.tsx are its children param

        </footer>
        <Footer/>
      </body>
    </html>
  )
}
