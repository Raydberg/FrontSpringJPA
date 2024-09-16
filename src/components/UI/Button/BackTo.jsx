import { Link } from "react-router-dom"

export const BackTo = ({to}) => {
  return (
    <Link className="btn btn-outline-dark" to={`${to}`} >Back To</Link>
  )
}
