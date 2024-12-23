export default function ProductLayout(
    {children}: {
        children: React.ReactNode;
    }
) {


    return <div style={{
        backgroundColor: 'red'
    }}>
        THIS IS LAYOUT FOR PRODUCTS, AND ALL THE CHILDREN
        RED COLOR
        {children}
    </div>
}