import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// components
import ClaimList from '../../components/ClaimList'
import ClaimFilter from './ClaimFilter'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('claims')
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }
  
  const claims = documents ? documents.filter(document => {
    switch(filter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedAdjuster.forEach(u => {
          if(u.id === user.uid) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'Ed Rosenthal':
      case 'Jack':
      case 'Gary':
      case 'Ed Porter':
        let assignedTo = false
        document.assignedAdjuster.forEach(u => {
          if(u.id === filter) {
            assignedTo = true
          }
        })
        return assignedTo
      default:
        return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ClaimFilter changeFilter={changeFilter} />}
      {claims && <ClaimList claims={claims} />}
    </div>
  )
}
