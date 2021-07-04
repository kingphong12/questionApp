import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormGroup, CInputRadio, CLabel, CRow } from '@coreui/react'

function ListTest(props) {

  const { testList, handleChange } = props

  const [values, setValues] = useState([])

  const handleOnChange = (item) => {
    // handleChange(item)
    const target = item.target
    // console.log(item.target.value)
    const answer = {
      name: target.name,
      value: target.value
    }

    const newValues = [...values]
    console.log("newvalues", newValues)
    console.log("values", values)
    const valueIndex = values.findIndex(aitem => aitem.name === target.name)
    if (valueIndex === -1) {
      console.log(item.target)
      newValues.splice(0, 1, answer)
      console.log("NewValues1", newValues)
      setValues(newValues)
      console.log("values1", values)
    } else {
      newValues.splice(valueIndex, 1, answer)
      console.log("2", newValues)
      setValues(newValues)
    }

  }

  return (
    <CCard>
      {testList.map((item, idx) => {

        const { A, B, C, D } = item.answer
        return (
          <div key={idx}>
            <CCardHeader style={{ fontWeight: "700" }}>
              Câu {item.id}: {item.question}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id={`${item.question}${A}`} name={item.question} value={A} onClick={(item) => handleOnChange(item)} />
                    <CLabel variant="custom-checkbox" htmlFor={`${item.question}${A}`}>{A}</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id={`${item.question}${B}`} name={item.question} value={B} onClick={(item) => handleOnChange(item)} />
                    <CLabel variant="custom-checkbox" htmlFor={`${item.question}${B}`}>{B}</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id={`${item.question}${C}`} name={item.question} value={C} onClick={(item) => handleOnChange(item)} />
                    <CLabel variant="custom-checkbox" htmlFor={`${item.question}${C}`}>{C}</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id={`${item.question}${D}`} name={item.question} value={D} onClick={(item) => handleOnChange(item)} />
                    <CLabel variant="custom-checkbox" htmlFor={`${item.question}${D}`}>{D}</CLabel>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </div>
        )
      })}


    </CCard>
  )
}

export default ListTest
