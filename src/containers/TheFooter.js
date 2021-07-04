import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="justify-content-center">
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">PHÒNG NGHIÊN CỨU ỨNG DỤNG</a>
        <span className="ml-1">&copy; 2021 TRUNG TÂM CÔNG NGHỆ THÔNG TIN VÀ GIÁM SÁT AN NINH MẠNG - BAN CƠ YẾU CHÍNH PHỦ.</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
