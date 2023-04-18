import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'

// styles
import './ClaimList.css'

export default function claimList({ claims }) {
  console.log(claims)

  return (
    <div className="claim-list">
      {claims.length === 0 && <p>No claims yet!</p>}
      {claims.map(claim => (
        <Link to={`/claims/${claim.id}`} key={claim.id}>
          <h4>{claim.claimName}</h4>
          <p>Created on {claim.claimDate.toDate().toDateString()}</p>
          <hr/>
          <p>{claim.claimDetails}</p>
          <div className="assigned-to">
            <p><strong>Assigned to:</strong></p>
            <ul>
              {claim.assignedAdjuster.map(user => (
                <li key={user.label}>
                  <p>{user.label}</p>
                  {/* <Avatar src={user.photoURL} /> */}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
