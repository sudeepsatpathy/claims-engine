import Avatar from "../../components/Avatar"
import { useFirestore } from "../../hooks/useFirestore"
import { useHistory } from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function ClaimSummary({ claim }) {
  const { deleteDocument } = useFirestore('claims')
  const { user } = useAuthContext()
  const history = useHistory()

  const handleClick = () => {
    deleteDocument(claim.id)
    history.push('/')
  }

  return (
    <div>
      <div className="claim-summary">
        <h2 className="page-title">{claim.claimName}</h2>
        <p className="due-date">
          Claim created on {claim.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
          {claim.details}
        </p>
        <h4>Claim assigned to:</h4>
        <div className="assigned-users">
          {claim.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {user.uid === claim.createdBy.id && (
        <button className="btn" onClick={handleClick}>Mark as Complete</button>
      )}
    </div>
  )
}