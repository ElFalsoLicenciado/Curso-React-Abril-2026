import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
        <div className='bg-amber-400'>
            <div>
                <h1>Este es un layout</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    </>
  )
}
