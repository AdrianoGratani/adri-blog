export default function GroupLayout(
    {children}: {
        children: React.ReactNode;
    }
) {


    return <>
        <div
            style={{
                backgroundColor: 'yellow'
            }}
            >
                ./(with-auth-layout) for nested layout grouping
            this is a group layout, only for register and login pages
            password has no access to this because former two are inside another 
            folder with this specific lauyout
            Below, you can see the  children:
        {children}
        </div>
    </>
}