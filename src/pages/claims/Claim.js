import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'

// components
import ClaimComments from "./ClaimComments"
import ClaimSummary from "./ClaimSummary"

// styles
import './Claim.css'

export default function Claim() {
  const { id } = useParams()
  const { document, error } = useDocument('claims', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  console.log(document)
  return (
    <div className="claim-details">
      <ClaimSummary claim={document} />
      <ClaimComments claim={document} />
    </div>
  )
}
