export default function ChildrenComponent({children}) {
  return (
    <>
        <div className='pr2-div'>
            <h1 className='h1'>Lista con children</h1> 
                {children}
        </div>
    </>
  )
}
