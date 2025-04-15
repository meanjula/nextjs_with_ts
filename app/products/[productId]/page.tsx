import React from 'react'

//dynamic routing
async function page({ params }: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId
    return (
        <div className='text-white'>
            product page {productId}
        </div>
    )
}

export default page
