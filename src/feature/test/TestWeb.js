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
              Để nâng cao chất lượng xây dụng đội ngũ cán bộ, nhân viên, đáp ứng yêu cầu nhiệm vụ
              xây dụng ngành Cơ yếu Việt nam cách mạng, chính quy, tiến thảng đến hiện đại,
              Ban Cơ yếu Chính phủ hướng dẫn các cơ quan , đơn vị việc tổ chức kiểm tra cán bộ, nhân viên năm 2021:
              Để nâng cao chất lượng xây dụng đội ngũ cán bộ, nhân viên, đáp ứng yêu cầu nhiệm vụ
              xây dụng ngành Cơ yếu Việt nam cách mạng, chính quy, tiến thảng đến hiện đại,
              Ban Cơ yếu Chính phủ hướng dẫn các cơ quan , đơn vị việc tổ chức kiểm tra cán bộ, nhân viên năm 2021:
              Để nâng cao chất lượng xây dụng đội ngũ cán bộ, nhân viên, đáp ứng yêu cầu nhiệm vụ
              xây dụng ngành Cơ yếu Việt nam cách mạng, chính quy, tiến thảng đến hiện đại,
              Ban Cơ yếu Chính phủ hướng dẫn các cơ quan , đơn vị việc tổ chức kiểm tra cán bộ, nhân viên năm 2021:
              Để nâng cao chất lượng xây dụng đội ngũ cán bộ, nhân viên, đáp ứng yêu cầu nhiệm vụ
              xây dụng ngành Cơ yếu Việt nam cách mạng, chính quy, tiến thảng đến hiện đại,
              Ban Cơ yếu Chính phủ hướng dẫn các cơ quan , đơn vị việc tổ chức kiểm tra cán bộ, nhân viên năm 2021:

              Để nâng cao chất lượng xây dụng đội ngũ cán bộ, nhân viên, đáp ứng yêu cầu nhiệm vụ
              xây dụng ngành Cơ yếu Việt nam cách mạng, chính quy, tiến thảng đến hiện đại,
              Ban Cơ yếu Chính phủ hướng dẫn các cơ quan , đơn vị việc tổ chức kiểm tra cán bộ, nhân viên năm 2021:
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
