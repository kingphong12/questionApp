import React, { memo } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CPagination, CRow } from '@coreui/react'
import { Route, Switch, useHistory } from 'react-router-dom'

const ContentTest = React.lazy(() => import('./ContentTest'))

function TestWeb() {
  const history = useHistory()
  const handlChangePage = () => {
    history.push("/test/contenttest")
    // console.log(history)
  }

  return (
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader className="text-center">
            KIỂM TRA CÁN BỘ, NHÂN VIÊN NĂM 2021
          </CCardHeader>
          <CCardBody>
            <div style={{ padding: "1rem", lineHeight: "1.6rem" }}>
              sdfsdfasdfasfasdfasdfadsf
            </div>
          </CCardBody>

        </CCard>

        <CRow className="justify-content-end">
          <CCol >
            <CButton block color="primary" onClick={handlChangePage}>Bắt đầu</CButton>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default memo(TestWeb)
