import React from 'react'
import projectdata from "./data"
import Content from './Content'
const Contentdata = () => {
  return (
    <>
    <div>
        {
            projectdata.map((val)=>{
                return (
                    <Content key={val.id}
                    id={val.id}
                    que={val.que}
                    ans={val.ans}
                    />
                )
            })
        }

    </div>
    </>
  )
}

export default Contentdata