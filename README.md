react is for the interfacaes plus rendering opt, data fetch, ROUTING
no additional packages needed
you can build build ready apps 
is easy to build to prod
no need package for routing, use file sys
is atruly full stack fw
ss and cl rendering = better seo and perf
eaasy async for d fetch
img optim in web
dev and prod build system is optimized
es6 plus features you need also react fundementals

//
ti serve node js e un ide

//
l'app is served from .next folder   is created with scripts
don't worry
node modules has all the depends. is created with script
ignore it

public serves the static asset

src is the important one for our code.
it has the new ./app folder in past v was not there
global.css has the global style
layout.tsx ui for different pages in app
page.tsx is only for localhost:3000 page

script run -> layout.tsx -> page.tsx in quant ochildren
localhost shows the Home component in page.tsx

quindi: terminal script -> package.JSON -> layout.tsx -> children is page.tsx -> localhost shows the home compoentn in home.tsx

// rsc
da react 18 to nextjs per creare server o client components
sono sc da default : posssono leggere files o d fetch
ma non possono usare hooks
hooks e per client components
cient components cannot read files o dfetch !
serve components is the one who awaits for data to show 
before rendering content on the screen.
client compoennts is for the user interactivity through hooks
a server component cannot handle user interactions

// next js routing
file system for routing: the folders and the files in your 
codebase define the URL
CONVENTION for routing:
all route inside ./app
./app/page.tsx is the ROOT of the domain
layout.tsx is necessary to render ./app/pages.tsx is create on auto

//scenario 2 we  need two routs for about and profile pages

each route has a folder inside teh ./app folder.
inside ./app/about and inside ./app/profile put the page.tsx pages.
== PUT THE FOLDERS FOR ROUTING INSIDE APP folder

//  nested routes  ./ / /
./app/blog
./app/blog/first
./app/blog/second

./first and ./second are nested routes of ./blog route-folder

METTILE DENTRO ./blog e risolvi tutto
./blog/first
./blog/second 
con il loro page.tsx


// dynamic routes   ./
for comples app you cannot have only fixed routes which means fixed folder/nestedfolder/file
you may want to generate routes dynamically based on user need-interactioons

a list of products page ./products
it has links for products 
there are three buttons for three products:
product1
product2
product3

click on product1 to go to ./products/1
click on product2 to go to ./products/2
click on product3

 to go to ./products/3

dentro ./products puoi mettere le nested routes per i tre products, OPPURE usare il dynamic routing, che si fa cosi':
metti la folder [product_id] dentro ./products, e mettic un page.tsx



####
./app continer la pagetsx per il root
dentro ./app metti le altre pagine
dentro altre cartelle ./app/pageone
etc
se vuoi fare pagine dentro altre 
metti una folder dentro l'altra
./app/pagina/nestedpage/ and so on

if you want to generate pages based on dynamic ocntent use the dynamic routin : 
./app/cars folder has many cars based on different days. so add ./app/cars/[carID] dentro ./app/cars and put the pagetsx. every car with its id will have its page generated on user interactions, and your codespace will remain clean.

there are server and client components.
they do only different things.
sc is for routing and for data fetching 
cc is for hooks and interactivity etc.

####


// route parameters
every page inside ./app receives parameters about routes as a prop named params and you must
obj destructure it to access keys

// nested dynamic routes   ./[]/[]
is same as nested routes but dynamic

// catch-all segments   [...slug]

// not-found page

// 11. flexible structure for folders and files
 
// 12. private folders _
is not in the routing  use the _ or %5F in URL

// 13. route groups ()
    for login register and pw
        for developer in your time, put all these folders in a specific ./auth folder so they can find all. easily
    (auth) so you don't need to put /auth in URL since auth only stores url for usefull pages. auth is only for the devs side


// layout  ./layout.tsx has {children}
 is shared btw pages in the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* children is the ./app/page.tsx  */}
      <header>header, in ./app/layout</header>
      <body>{children}</body>
      <footer>footer, in ./app/layout</footer>
    </html>
  )
}


// 15. nested layouts    specifically for ct routes
./app/reviews/layout.tsx

// 16. route group layout
 if you want to apply a specific layout to specif segments only
 ./(auth)/with-auth-layout stores ./login and ./register
 it has a specific ./layout for this group.


// 17. routing metadata 
 API for SEO 
generateMetadata()
usually in layout.tsx
metadata in page.tsx REPLACES metadata in layout.tsx IF SAME

dynamic meta is used for dyn routes mainly.

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

// 18. title metadata     string | obj


title is : dashboard | AdriDev.
the parent (observe 'template' kkey):

  export const metadata: Metadata = {
    title:{
      absolute: "",
      default: "Metadata{}defautl title for pages without title metadata.",
      template: " %s | AdriDev"        <<<<<<<<<<<
    },
    description: 'adriano dev nextjs',
  }

//the child:
  import { Metadata } from "next";
  export const metadata: Metadata = {
      title: "dashboard",      <<<<<<<<<<<<<
  }


// 19. navigation    UI   <Link />
