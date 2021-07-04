import React, { useEffect, useState } from 'react'
import { CButton, CCol, CContainer, CPagination, CRow } from '@coreui/react'
import ListTest from './ListTest'

const testList = [
  {
    id: 1,
    question: "Ngày thành lập đoàn là ngày nào?",
    answer: {
      A: "10/02/1971",
      B: "10/02/1972",
      C: "10/02/1973",
      D: "10/02/1974"
    }
  },
  {
    id: 2,
    question: "Ngày thành lập quân đội là ngày nào?",
    answer: {
      A: "10/02/1975",
      B: "10/02/1976",
      C: "10/02/19sdf77",
      D: "10/02/b1978"
    }
  },
  {
    id: 3,
    question: "Ngày quốc tế thiếu nhi vào ngày nào?",
    answer: {
      A: "10/02/19b79",
      B: "10/02/1910",
      C: "10/02/1911",
      D: "10/02/1b912"
    }
  },
  {
    id: 4,
    question: "Ngày quốc tế lao động vào ngày nào",
    answer: {
      A: "10/02/1n980",
      B: "10/02/19b81",
      C: "10/02/19c82",
      D: "10/02/19n83"
    }
  },
  {
    id: 5,
    question: "Ngày thành lập công an nhân dân vào ngày nào?",
    answer: {
      A: "10/02/19b80",
      B: "10/02/1m981",
      C: "10/02/19n82",
      D: "10/02/19m83"
    }
  },
  {
    id: 6,
    question: "Ngày giải phóng thủ đô vào ngày nào",
    answer: {
      A: "10/02/19h71",
      B: "10/02/j1972",
      C: "10/02/19h73",
      D: "10/02/19t74"
    }
  },
  {
    id: 7,
    question: "Ngày Bác ra đi tìm được cứu nước là ngày nào?",
    answer: {
      A: "10/02/19u75",
      B: "10/02/19e76",
      C: "10/02/19i77",
      D: "10/02/197u8"
    }
  },
  {
    id: 8,
    question: "Ngày phụ nữ việt nam là ngày nào",
    answer: {
      A: "10/02/19y79",
      B: "10/02/1j910",
      C: "10/02/1g911",
      D: "10/02/1k912"
    }
  },
  {
    id: 9,
    question: "Ngày quốc tế phụ nữ là ngày nào?",
    answer: {
      A: "10/02/19i80",
      B: "10/02/19u81",
      C: "10/02/1u982",
      D: "10/02/19n83"
    }
  },
  {
    id: 10,
    question: "Trung tâm công nghệ thông tin được thàádfs?",
    answer: {
      A: "10/02/19k80",
      B: "10/02/198n1",
      C: "10/02/198r2",
      D: "10/02/n1983"
    }
  },
]

function ContentTest() {
  const totalPost = testList.length
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(10)
  const page = Math.ceil(totalPost / totalPage)


  const indexOfLastPost = currentPage * totalPage
  const indexOfFistPost = indexOfLastPost - totalPage
  const currentPost = testList.slice(indexOfFistPost, indexOfLastPost)


  const [listValues, setListValues] = useState([])
  // console.log("1", listValues)

  useEffect(() => {

  }, [])

  const handleOnchange = (item) => {
    // const name = item.target.name
    // const values = item.target.value
    // setValue({})

    // console.log("value", value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newListValue = [...listValues]

    // newListValue.push(value)

    setListValues(newListValue)
    console.log("2", listValues)

  }

  return (

    <CRow>
      <CCol>
        {/* <form onSubmit={handleSubmit}> */}
        <ListTest testList={currentPost} handleChange={handleOnchange} />

        <CContainer>
          <CRow className="align-items-center justify-content-space-between">
            <CCol>
              <CPagination
                align="start"
                addListClass="some-class"
                activePage={currentPage}
                pages={page}
                onActivePageChange={setCurrentPage}
              />
            </CCol>
            <CCol>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <CButton type="submit" size="sm" color="primary">Hoàn thành</CButton>
              </div>
            </CCol>
          </CRow>
        </CContainer>
        {/* </form> */}
      </CCol>
    </CRow>
  )
}

export default ContentTest
