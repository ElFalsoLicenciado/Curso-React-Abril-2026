import { Link } from "react-router-dom";

export default function Pr1View() {
  return (
    <>
        <div>
            <Link to={'/main'} className='text-red-700 text-[0.1rem]'>GO HOME</Link>
        </div>
    </>
  )
}
