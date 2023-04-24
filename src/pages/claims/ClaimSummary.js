//import { useState } from 'react'
//import Avatar from "../../components/Avatar"
//import { useCollection } from '../../hooks/useCollection'
//import { useFirestore } from "../../hooks/useFirestore"
//import { useHistory } from 'react-router-dom'
//import { useAuthContext } from "../../hooks/useAuthContext"
//import Select from 'react-select'

// styles
import './Claim.css'

export default function ClaimSummary({ claim }) {
  //const { deleteDocument } = useFirestore('claims')
  //const { updateDocument, response } = useFirestore('claims')
  //const { user } = useAuthContext()
  //const { documents } = useCollection('users')
  //const [users, setUsers] = useState([])
  //const history = useHistory()

  // const [claimName, setClaimName] = claim.claimName
  // const [claimDetails, setClaimDetails] = claim.claimDetails
  // const [assignedAdjuster, setAssignedAdjuster] = claim.assignedAdjuster
  // const [claimNumber, setClaimNumber] = claim.claimNumber
  // const [insuredName, setInsuredName] = claim.insuredName
  // const [insuredPhone, setInsuredPhone] = claim.insuredPhone
  // const [insuredEmail, setInsuredEmail] = claim.insuredEmail
  // const [insuredMailingAddress, setInsuredMailingAddress] = claim.insuredMailingAddress
  // const [lossLocation, setLossLocaton] = claim.lossLocation
  // const [lossDate, setLossDate] = claim.lossDate
  // const [lossType, setLossType] = claim.lossType
  // const [insuranceCompany, setInsuranceCompany] = claim.insuranceCompany
  // const [insuranceAdjusterName, setInsuranceAdjusterName] = claim.insuranceAdjusterName
  // const [insuranceAdjusterPhone, setInsuranceAdjusterPhone] = claim.insuranceAdjusterPhone
  // const [insuranceAdjusterEmail, setInsuranceAdjusterEmail] = claim.insuranceAdjusterEmail
  // const [insuranceAdjusterCompany, setInsuranceAdjusterCompany] = claim.insuranceAdjusterCompany
  // const [policyNumber, setPolicyNumber] = claim.policyNumber
  // const [policyStartDate, setPolicyStartDate] = claim.policyStartDate
  // const [policyEndDate, setPolicyEndDate] = claim.policyEndDate
  // const [policyDeductible, setPolicyDeductible] = claim.policyDeductible

  // const [formError, setFormError] = useState(null)

  // const handleClick = () => {
  //   deleteDocument(claim.id)
  //   history.push('/')
  // }

  // const handleUpdate = async (e) => {
  //   e.preventDefault();

  //   await updateDocument(claim.id, {
  //     claim,
  //   })
  //   // if (!response.error) {
  //   //   setNewComment('')
  //   // }
  // }

  return (
    <div>
      <div className="claim-summary">
        <h2 className="page-title">{claim.claimName}</h2>
        <p className="loss-date">
          Claim created on {claim.claimDate.toDate().toDateString()}
        </p>
        <p className="details">
          {claim.claimDetails}
        </p>
        <h4>Claim assigned to:</h4>
        <div className="assigned-users">
          {claim.assignedAdjuster.map(user => (
            <div key={user.id}>
              <p>{user.label}</p>
              {/* <Avatar src={user.photoURL} /> */}
            </div>
          ))}
        </div>

        <hr/>
        <h4>Loss Information</h4>
        <p className="loss-date"> Loss Date: {claim.lossDate} </p>
        <p className="loss-date"> Loss Type: {claim.lossType} </p>
        <p className="loss-date"> Loss Location: {claim.lossLocation} </p>
        
        <hr/>
        <h4>Insured's Information</h4>
        <p className="loss-date"> Insured's Name: {claim.insuredName} </p>
        <p className="loss-date"> Insured's Phone: {claim.insuredPhone} </p>
        <p className="loss-date"> Insured's Email: {claim.insuredEmail} </p>
        <p className="loss-date"> Insured's Mailing Address: {claim.insuredMailingAddress} </p>

        <hr/>
        <h4>Insurance Information</h4>
        <p className="loss-date"> Insurance Company: {claim.insuranceCompany} </p>
        <p className="loss-date"> Policy Number: {claim.policyNumber} </p>
        <p className="loss-date"> Policy Start Date: {claim.policyStartDate} </p>
        <p className="loss-date"> Policy End Date: {claim.policyEndDate} </p>
        
        <hr/>
        <h4>Adjuster's Information</h4>
        <p className="loss-date"> Adjuster's Name: {claim.insuranceAdjusterName} </p>
        <p className="loss-date"> Adjuster's Phone: {claim.insuranceAdjusterPhone} </p>
        <p className="loss-date"> Adjuster's Email: {claim.insuranceAdjusterEmail} </p>

        <button className="btn">Edit Claim</button>
      </div>


      {/* <div className="claim-summary">
        <h2 className="page-title">Loss Information</h2>
        <table>
          <tr>
            <td>Loss Date</td>
            <td>{claim.claimDate}</td>
          </tr>
          <tr>
            <td>Loss Type</td>
            <td>{claim.lossType}</td>
          </tr>
          <tr>
            <td>Loss Location</td>
            <td>{claim.lossLocation}</td>
          </tr>
        </table>
      </div> */}
    </div>

    // <div className="create-form">
    //   <h2 className="page-title">Create a new Claim</h2>
    //   <form onSubmit={handleUpdate}>
    //     <ul>
    //       <li>
    //         <input type="text" className="field-style field-split align-left" placeholder="Claim Name" onChange={(e) => setClaimName(e.target.value)} value={claim.claimName} />
    //         <input type="text" className="field-style field-split align-right" placeholder="Claim Number" onChange={(e) => setClaimNumber(e.target.value)} value={claim.claimNumber} />
    //         <textarea required className="field-style" placeholder="Claim Details" onChange={(e) => setClaimDetails(e.target.value)} value={claim.claimDetails} />
    //         <span>Assign to:</span>
    //         <Select
    //           onChange={(option) => setAssignedAdjuster(option)}
    //           options={users}
    //           isMulti
    //         />
    //       </li>
    //       <li>
    //         <input required type="date" className="field-style field-split align-left" placeholder="Loss Date" onChange={(e) => setLossDate(e.target.value)} value={claim.lossDate} />
    //         <input required type="text" className="field-style field-split align-right" placeholder="Loss Type" onChange={(e) => setLossType(e.target.value)} value={claim.lossType} />
    //         <input required type="text" name="Loss Location" className="field-style field-full align-none" placeholder="Loss Location" onChange={(e) => setLossLocaton(e.target.value)} value={claim.lossLocation} />
    //       </li>
    //       <li>
    //         <input required type="text" className="field-style field-split align-left" placeholder="Insured's Name" onChange={(e) => setInsuredName(e.target.value)} value={claim.insuredName} />
    //         <input type="number" className="field-style field-split align-right" placeholder="Insured's Phone" onChange={(e) => setInsuredPhone(e.target.value)} value={claim.insuredPhone} />
    //         <input type="email" className="field-style field-full align-none" placeholder="Insured's Email" onChange={(e) => setInsuredEmail(e.target.value)} value={claim.insuredEmail} />
    //         <input type="text" className="field-style field-full align-none" placeholder="Insured's Mailing Address" onChange={(e) => setInsuredMailingAddress(e.target.value)} value={claim.insuredMailingAddress} />
    //       </li>
    //       <li>
    //         <input type="text" className="field-style field-split align-left" placeholder="Insurance Company" onChange={(e) => setInsuranceCompany(e.target.value)} value={claim.insuranceCompany} />
    //         <input type="text" className="field-style field-split align-right" placeholder="Policy Number" onChange={(e) => setPolicyNumber(e.target.value)} value={claim.policyNumber} />
    //         <input type="date" className="field-style field-split align-left" placeholder="Policy Start Date" onChange={(e) => setPolicyStartDate(e.target.value)} value={claim.policyStartDate} />
    //         <input type="date" className="field-style field-split align-right" placeholder="Policy End Date" onChange={(e) => setPolicyEndDate(e.target.value)} value={claim.policyEndDate} />
    //         <input type="currency" className="field-style field-full align-none" placeholder="Policy Deductible" onChange={(e) => setPolicyDeductible(e.target.value)} value={claim.policyDeductible} />
    //       </li>
    //       <li>
    //         <input type="text" className="field-style field-split align-left" placeholder="Insurance Adjuster's Name" onChange={(e) => setInsuranceAdjusterName(e.target.value)} value={claim.insuranceAdjusterName} />
    //         <input type="number" className="field-style field-split align-right" placeholder="Insurance Adjuster's Phone" onChange={(e) => setInsuranceAdjusterPhone(e.target.value)} value={claim.insuranceAdjusterPhone} />
    //         <input type="email" className="field-style field-full align-none" placeholder="Insurance Adjuster's Email" onChange={(e) => setInsuranceAdjusterEmail(e.target.value)} value={claim.insuranceAdjusterEmail} />
    //         <input type="text" className="field-style field-full align-none" placeholder="Insurance Adjuster's Company" onChange={(e) => setInsuranceAdjusterCompany(e.target.value)} value={claim.insuranceAdjusterCompany} />
    //       </li>
    //       <li>
    //         <input type="submit" value="Save" />
    //       </li>
    //     </ul>


    //     {/* <button className="btn">Add New Claim</button> */}

    //     {formError && <p classNameName="error">{formError}</p>}
    //   </form>
    // </div>
  )
}