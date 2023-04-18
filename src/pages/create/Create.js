import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router'
import Select from 'react-select'

// styles
import './Create.css'

// const categories = [
//   { value: 'development', label: 'Development' },
//   { value: 'design', label: 'Design' },
//   { value: 'sales', label: 'Sales' },
//   { value: 'marketing', label: 'Marketing' },
// ]

export default function Create() {
  const history = useHistory()
  const { addDocument, response } = useFirestore('claims')
  const { user } = useAuthContext()
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])

  // form field values
  const [claimName, setClaimName] = useState('')
  const [claimDetails, setClaimDetails] = useState('')
  const [assignedAdjuster, setAssignedAdjuster] = useState([])
  const [claimNumber, setClaimNumber] = useState('')
  const [insuredName, setInsuredName] = useState('')
  const [insuredPhone, setInsuredPhone] = useState('')
  const [insuredEmail, setInsuredEmail] = useState('')
  const [insuredMailingAddress, setInsuredMailingAddress] = useState('')
  const [lossLocation, setLossLocaton] = useState('')
  const [lossDate, setLossDate] = useState('')
  const [lossType, setLossType] = useState('')
  const [insuranceCompany, setInsuranceCompany] = useState('')
  //const [insuranceCompanyDetails, setInsuranceCompanyDetails] = useState('')
  const [insuranceAdjusterName, setInsuranceAdjusterName] = useState('')
  const [insuranceAdjusterPhone, setInsuranceAdjusterPhone] = useState('')
  const [insuranceAdjusterEmail, setInsuranceAdjusterEmail] = useState('')
  const [insuranceAdjusterCompany, setInsuranceAdjusterCompany] = useState('')
  const [policyNumber, setPolicyNumber] = useState('')
  const [policyStartDate, setPolicyStartDate] = useState('')
  const [policyEndDate, setPolicyEndDate] = useState('')
  const [policyDeductible, setPolicyDeductible] = useState('')
  //const [policyAmounts, setPolicyAmounts] = useState([])
  //const [contactInformation, setContactInformation] = useState([])
  //const [claimComments, setClaimComments] = useState([])
  //const [claimCreatedBy, setClaimCreatedBy] = useState('')
  // const [creationDate, setCreationDate] = useState('')

  const [formError, setFormError] = useState(null)

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(documents.map(user => {
        return { value: { ...user, id: user.id }, label: user.displayName }
      }))
    }
  }, [documents])

  const handleSubmit = async (e) => {

    e.preventDefault()
    setFormError(null)

    if (!claimName) {
      setFormError('Please assign a name to the claim')
      return
    }

    if (assignedAdjuster.length < 1) {
      setFormError('Please assign the claim to at least 1 adjuster')
      return
    }

    // const claimAdjusterList = assignedAdjuster.map(u => {
    //   return {
    //     displayName: u.value.displayName,
    //     photoURL: u.value.photoURL,
    //     id: u.value.id
    //   }
    // })

    const claimCreatedBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    // const contactInformation = {
    //   contactName,
    //   cell,
    //   work,
    //   fax,
    //   email
    // }

    // const policyAmounts = {
    //   dwelling,
    //   contents,
    //   ALE,
    //   mold,
    //   deductible
    // }

    const claim = {
      claimDate: timestamp.fromDate(new Date()),
      claimName,
      claimDetails,
      assignedAdjuster,
      claimNumber,
      insuredName,
      insuredPhone,
      insuredEmail,
      insuredMailingAddress,
      lossLocation,
      lossDate,
      lossType,
      insuranceCompany,
      insuranceAdjusterName,
      insuranceAdjusterPhone,
      insuranceAdjusterEmail,
      insuranceAdjusterCompany,
      policyNumber,
      policyStartDate,
      policyEndDate,
      policyDeductible,
      contactInformation: [],
      claimComments: [],
      claimCreatedBy
    }

    console.log("Handle Submit")
    console.log(claim)

    await addDocument(claim)
    if (!response.error) {
      console.log("Pushing")
      history.push('/')
    }
  }

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Claim</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="text" className="field-style field-split align-left" placeholder="Claim Name" onChange={(e) => setClaimName(e.target.value)} value={claimName} />
            <input type="text" className="field-style field-split align-right" placeholder="Claim Number" onChange={(e) => setClaimNumber(e.target.value)} value={claimNumber} />
            <textarea required className="field-style" placeholder="Claim Details" onChange={(e) => setClaimDetails(e.target.value)} value={claimDetails} />
            <span>Assign to:</span>
            <Select
              onChange={(option) => setAssignedAdjuster(option)}
              options={users}
              isMulti
            />
          </li>
          <li>
            <input required type="date" className="field-style field-split align-left" placeholder="Loss Date" onChange={(e) => setLossDate(e.target.value)} value={lossDate} />
            <input required type="text" className="field-style field-split align-right" placeholder="Loss Type" onChange={(e) => setLossType(e.target.value)} value={lossType} />
            <input required type="text" name="Loss Location" className="field-style field-full align-none" placeholder="Loss Location" onChange={(e) => setLossLocaton(e.target.value)} value={lossLocation} />
          </li>
          <li>
            <input required type="text" className="field-style field-split align-left" placeholder="Insured's Name" onChange={(e) => setInsuredName(e.target.value)} value={insuredName} />
            <input type="number" className="field-style field-split align-right" placeholder="Insured's Phone" onChange={(e) => setInsuredPhone(e.target.value)} value={insuredPhone} />
            <input type="email" className="field-style field-full align-none" placeholder="Insured's Email" onChange={(e) => setInsuredEmail(e.target.value)} value={insuredEmail} />
            <input type="text" className="field-style field-full align-none" placeholder="Insured's Mailing Address" onChange={(e) => setInsuredMailingAddress(e.target.value)} value={insuredMailingAddress} />
          </li>
          <li>
            <input type="text" className="field-style field-split align-left" placeholder="Insurance Company" onChange={(e) => setInsuranceCompany(e.target.value)} value={insuranceCompany} />
            <input type="text" className="field-style field-split align-right" placeholder="Policy Number" onChange={(e) => setPolicyNumber(e.target.value)} value={policyNumber} />
            <input type="date" className="field-style field-split align-left" placeholder="Policy Start Date" onChange={(e) => setPolicyStartDate(e.target.value)} value={policyStartDate} />
            <input type="date" className="field-style field-split align-right" placeholder="Policy End Date" onChange={(e) => setPolicyEndDate(e.target.value)} value={policyEndDate} />
            <input type="currency" className="field-style field-full align-none" placeholder="Policy Deductible" onChange={(e) => setPolicyDeductible(e.target.value)} value={policyDeductible} />
          </li>
          <li>
            <input type="text" className="field-style field-split align-left" placeholder="Insurance Adjuster's Name" onChange={(e) => setInsuranceAdjusterName(e.target.value)} value={insuranceAdjusterName} />
            <input type="number" className="field-style field-split align-right" placeholder="Insurance Adjuster's Phone" onChange={(e) => setInsuranceAdjusterPhone(e.target.value)} value={insuranceAdjusterPhone} />
            <input type="email" className="field-style field-full align-none" placeholder="Insurance Adjuster's Email" onChange={(e) => setInsuranceAdjusterEmail(e.target.value)} value={insuranceAdjusterEmail} />
            <input type="text" className="field-style field-full align-none" placeholder="Insurance Adjuster's Company" onChange={(e) => setInsuranceAdjusterCompany(e.target.value)} value={insuranceAdjusterCompany} />
          </li>
          <li>
            <input type="submit" value="Add New Claim" />
          </li>
        </ul>


        {/* <button className="btn">Add New Claim</button> */}

        {formError && <p classNameName="error">{formError}</p>}
      </form>
    </div>
  )
}
