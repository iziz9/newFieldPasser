import { COLORS } from '@src/globalStyles'
import { styled } from 'styled-components'
import { CloseButton, InfoIcon } from '@src/constants/icons'
import { useNavigate } from 'react-router'
import useModal from '@src/hooks/useModal'
import { useSelector } from 'react-redux'
import { RootState } from '@src/store/config'
import { Mobile, PC } from '@src/hooks/useScreenHook'

const Modal = () => {
  const { isModalOpen, isConfirm, content, navigateOption, confirmAction } = useSelector(
    (state: RootState) => state.modal
  )
  const { closeModal } = useModal()
  const navigate = useNavigate()

  if (isModalOpen)
    return (
      <>
        <Container>
          <PC>
            <PcButton
              onClick={() => {
                navigateOption && navigate(navigateOption)
                confirmAction && confirmAction()
                closeModal()
              }}
            >
              <CloseButton />
            </PcButton>
          </PC>

          <InfoIcon />
          <Content>
            {content.map((text) => {
              return <span key={text}>{text}</span>
            })}
          </Content>

          <PC>
            {isConfirm && (
              <ConfirmContainer>
                <ConfirmButton
                  onClick={() => {
                    confirmAction && confirmAction()
                    navigateOption && navigate(navigateOption)
                    closeModal()
                  }}
                >
                  확인
                </ConfirmButton>
                <ConfirmButton
                  onClick={() => {
                    closeModal()
                  }}
                >
                  취소
                </ConfirmButton>
              </ConfirmContainer>
            )}
          </PC>

          <Mobile>
            {!isConfirm ? (
              <MobileButton
                onClick={() => {
                  confirmAction && confirmAction()
                  navigateOption && navigate(navigateOption)
                  closeModal()
                }}
              >
                확인
              </MobileButton>
            ) : (
              <ConfirmContainer>
                <ConfirmButton
                  onClick={() => {
                    navigateOption && navigate(navigateOption)
                    closeModal()
                  }}
                >
                  확인
                </ConfirmButton>
                <ConfirmButton
                  onClick={() => {
                    closeModal()
                  }}
                >
                  취소
                </ConfirmButton>
              </ConfirmContainer>
            )}
          </Mobile>
        </Container>
      </>
    )
}

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80%;
  max-width: 500px;
  height: 190px;
  margin: auto;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 700;
  border: 1px solid ${COLORS.gray20};
  line-height: 23px;

  @media (min-width: 834px) {
    min-width: 500px;
    width: 50%;
    max-width: 620px;
    height: 240px;
  }

  .info {
    width: 64px;
    height: 64px;
    color: ${COLORS.gray20};
    margin: 0 auto;

    @media (max-width: 833px) {
      display: none;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  span {
    color: ${COLORS.font};
    font-size: 16px;
  }
`

const MobileButton = styled.button`
  width: 90%;
  height: 45px;
  background-color: ${COLORS.gray20};
  border-radius: 8px;
  margin: 0 auto;
  font-size: 16px;
  color: ${COLORS.gray40};
  font-weight: 700;

  &:hover {
    color: ${COLORS.font};
  }
`

const PcButton = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
`

const ConfirmContainer = styled.div`
  position: relative;
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

const ConfirmButton = styled.button`
  font-size: 16px;
  background-color: ${COLORS.gray20};
  width: 40%;
  height: 40px;
`

export default Modal
