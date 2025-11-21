
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='Error'>
        <h1>404 Site not found </h1>
        <p> The requested page does not exist to return go back press <Link to={'/'}>Here</Link></p>
    </div>
  )
}

export default Error