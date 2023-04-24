import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFirestore } from "../../hooks/useFirestore"

// styles
import './Claim.css'

function EditClaim(claim) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { updateDocument, response } = useFirestore('claims')
  //const [updatedClaim, updateClaim] = useState('')

  const [claimDetails, setClaimDetails] = useState(claim.claim.claimDetails)
  const [claimNumber, setClaimNumber] = useState(claim.claim.claimNumber)
  const [insuredName, setInsuredName] = useState(claim.claim.insuredName)
  const [insuredPhone, setInsuredPhone] = useState(claim.claim.insuredPhone)
  const [insuredEmail, setInsuredEmail] = useState(claim.claim.insuredEmail)
  const [insuredMailingAddress, setInsuredMailingAddress] = useState(claim.claim.insuredMailingAddress)
  const [lossLocation, setLossLocaton] = useState(claim.claim.lossLocation)
  const [lossDate, setLossDate] = useState(claim.claim.lossDate)
  const [lossType, setLossType] = useState(claim.claim.lossType)
  const [insuranceCompany, setInsuranceCompany] = useState(claim.claim.insuranceCompany)
  const [insuranceAdjusterName, setInsuranceAdjusterName] = useState(claim.claim.insuranceAdjusterName)
  const [insuranceAdjusterPhone, setInsuranceAdjusterPhone] = useState(claim.claim.insuranceAdjusterPhone)
  const [insuranceAdjusterEmail, setInsuranceAdjusterEmail] = useState(claim.claim.insuranceAdjusterEmail)
  const [insuranceAdjusterCompany, setInsuranceAdjusterCompany] = useState(claim.claim.insuranceAdjusterCompany)
  const [policyNumber, setPolicyNumber] = useState(claim.claim.policyNumber)
  const [policyStartDate, setPolicyStartDate] = useState(claim.claim.policyStartDate)
  const [policyEndDate, setPolicyEndDate] = useState(claim.claim.policyEndDate)
  const [policyDeductible, setPolicyDeductible] = useState(claim.claim.policyDeductible)

  const handleSubmit = async (e) => {

    const updatedClaim = {
      claimNumber: claimNumber,
      claimDetails: claimDetails,
      insuredName: insuredName,
      insuredPhone: insuredPhone,
      insuredEmail: insuredEmail,
      insuredMailingAddress: insuredMailingAddress,
      lossLocation: lossLocation,
      lossDate: lossDate,
      lossType: lossType,
      insuranceCompany: insuranceCompany,
      insuranceAdjusterName: insuranceAdjusterName,
      insuranceAdjusterPhone: insuranceAdjusterPhone,
      insuranceAdjusterEmail: insuranceAdjusterEmail,
      insuranceAdjusterCompany: insuranceAdjusterCompany,
      policyNumber: policyNumber,
      policyStartDate: policyStartDate,
      policyEndDate: policyEndDate,
      policyDeductible: policyDeductible
    }

    e.preventDefault();

    await updateDocument(claim.claim.id, updatedClaim)
    handleClose()
    if (!response.error) {
      console.log(response.error)
    }
  }

  return (
    <>

      <Button variant="primary" onClick={handleShow}>
        Edit Claim
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {claim.claim.claimName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <input type="text" className="field-style field-split align-right" placeholder="Claim Number" value={claimNumber} onChange={(e) => setClaimNumber(e.target.value)} />
              <textarea required className="field-style" placeholder="Claim Details" value={claimDetails} onChange={(e) => setClaimDetails(e.target.value)} />
            </li>
            <hr />
            <h4>Loss Information</h4>
            <li>
              <input required type="date" className="field-style field-split align-left" placeholder="Loss Date" value={lossDate} onChange={(e) => setLossDate(e.target.value)} />
              <input required type="text" className="field-style field-split align-right" placeholder="Loss Type" value={lossType} onChange={(e) => setLossType(e.target.value)} />
              <input required type="text" name="Loss Location" className="field-style field-full align-none" value={lossLocation} placeholder="Loss Location" onChange={(e) => setLossLocaton(e.target.value)} />
            </li>
            <hr />
            <h4>Insured's Information</h4>
            <li>
              <input required type="text" className="field-style field-split align-left" placeholder="Insured's Name" value={insuredName} onChange={(e) => setInsuredName(e.target.value)} />
              <input type="number" className="field-style field-split align-right" placeholder="Insured's Phone" value={insuredPhone} onChange={(e) => setInsuredPhone(e.target.value)} />
              <input type="email" className="field-style field-full align-none" placeholder="Insured's Email" value={insuredEmail} onChange={(e) => setInsuredEmail(e.target.value)} />
              <input type="text" className="field-style field-full align-none" placeholder="Insured's Mailing Address" value={insuredMailingAddress} onChange={(e) => setInsuredMailingAddress(e.target.value)} />
            </li>
            <hr />
            <h4>Insurance Information</h4>
            <li>
              <input type="text" className="field-style field-split align-left" placeholder="Insurance Company" value={insuranceCompany} onChange={(e) => setInsuranceCompany(e.target.value)} />
              <input type="text" className="field-style field-split align-right" placeholder="Policy Number" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
              <input type="date" className="field-style field-split align-left" placeholder="Policy Start Date" value={policyStartDate} onChange={(e) => setPolicyStartDate(e.target.value)} />
              <input type="date" className="field-style field-split align-right" placeholder="Policy End Date" value={policyEndDate} onChange={(e) => setPolicyEndDate(e.target.value)} />
              <input type="currency" className="field-style field-full align-none" placeholder="Policy Deductible" value={policyDeductible} onChange={(e) => setPolicyDeductible(e.target.value)} />
            </li>
            <hr />
            <h4>Adjuster's Information</h4>
            <li>
              <input type="text" className="field-style field-split align-left" placeholder="Insurance Adjuster's Name" value={insuranceAdjusterName} onChange={(e) => setInsuranceAdjusterName(e.target.value)} />
              <input type="number" className="field-style field-split align-right" placeholder="Insurance Adjuster's Phone" value={insuranceAdjusterPhone} onChange={(e) => setInsuranceAdjusterPhone(e.target.value)} />
              <input type="email" className="field-style field-full align-none" placeholder="Insurance Adjuster's Email" value={insuranceAdjusterEmail} onChange={(e) => setInsuranceAdjusterEmail(e.target.value)} />
              <input type="text" className="field-style field-full align-none" placeholder="Insurance Adjuster's Company" value={insuranceAdjusterCompany} onChange={(e) => setInsuranceAdjusterCompany(e.target.value)} />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditClaim;