import useSidebar from '@src/hooks/useSidebar'
import { RootState } from '@src/store/config'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { styled } from 'styled-components'

const Overlay = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 833px)',
  })
  const { isModalOpen } = useSelector((state: RootState) => state.modal)
  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
  const { closeSidebar } = useSidebar()

  return (
    <>
      {isSidebarOpen && isMobile && (
        <Container
          onClick={() => {
            closeSidebar()
          }}
        ></Container>
      )}
      {isModalOpen && <Container></Container>}
    </>
  )
}

const Container = styled.div`
  position: fixed;
  background-color: rgba(79, 77, 77, 0.2);
  inset: 0;
  z-index: 80;
`

export default Overlay
