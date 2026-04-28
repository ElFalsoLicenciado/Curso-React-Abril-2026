export default function PropsComponent(props) {
  return (
    <>
        <div className='pr2-div'>
            <h1 className='h1'>Lista con props</h1>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
        </div>
    </>
  )
}
