import React from 'react'

async function Page({params}: {params: {id: string}}) {
    const resolvedParams = await params;
  return (
    <div>
        <p>
            Page Route id : {resolvedParams.id}
        </p>
         </div>
  )
}

export default Page