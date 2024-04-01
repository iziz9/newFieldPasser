import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { COLORS } from '@src/globalStyles'
import { Mobile, PC } from '@src/hooks/useScreenHook'
import type { RootState } from '@src/store/config'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@src/api/userApi'
import { getCookieToken } from '@src/storage/Cookie'
import { useEffect } from 'react'
import { SET_INFO, DELETE_INFO } from '@src/store/slices/infoSlice'
import PATH from '@src/constants/pathConst'
import { HamburgerIcon } from '@src/constants/icons'
import { OPEN_SIDEBAR } from '@src/store/slices/sidebarSlice'
import useLoginState from '@src/hooks/useLoginState'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openSidebar = () => {
    dispatch(OPEN_SIDEBAR())
  }
  const authenticated = useSelector((state: RootState) => state.accessToken.authenticated)
  const userRole = useSelector((state: RootState) => state.userInfo.role)
  const refreshToken = getCookieToken()
  const { accessAfterLoginAlert, logoutHandler } = useLoginState()

  useEffect(() => {
    const fetchData = async () => {
      if (refreshToken) {
        const response = await getUserInfo()
        dispatch(SET_INFO(response?.data))
      } else if (!refreshToken) {
        dispatch(DELETE_INFO())
      }
    }
    fetchData()
  }, [refreshToken])

  return (
    <>
      <Mobile>
        <MContainer>
          <div
            className="sidebar"
            onClick={() => {
              openSidebar()
            }}
          >
            <HamburgerIcon />
          </div>
          <img src="/logo.webp" alt="logo" onClick={() => navigate(PATH.HOME)} className="logo" />
        </MContainer>
      </Mobile>
      <PC>
        <PCContainer>
          <Inner>
            <Link to={PATH.HOME} className="logo">
              <img src="/logo.webp" alt="logo" />
            </Link>
            <nav className="menu">
              <ul>
                {authenticated && userRole === '관리자' && (
                  <li>
                    <Link to={PATH.BOARD_BLIND}>게시글 관리</Link>
                  </li>
                )}
                <li>
                  <Link to={PATH.HELP}>고객센터</Link>
                </li>
                {authenticated && (
                  <li>
                    <Link to={PATH.MYPAGE}>마이페이지</Link>
                  </li>
                )}
                {!authenticated && (
                  <li>
                    <Link to={PATH.JOIN}>회원가입</Link>
                  </li>
                )}
                {authenticated && (
                  <li>
                    <Link to={PATH.ASK}>1:1 문의</Link>
                  </li>
                )}
                {authenticated ? (
                  <li>
                    <a onClick={logoutHandler}>로그아웃</a>
                  </li>
                ) : (
                  <li>
                    <Link to={PATH.LOGIN}>로그인</Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => {
                      {
                        authenticated ? navigate(PATH.WRITE_POST) : accessAfterLoginAlert()
                      }
                    }}
                  >
                    양도하기
                  </button>
                </li>
              </ul>
            </nav>
          </Inner>
        </PCContainer>
      </PC>
    </>
  )
}

const MContainer = styled.header`
  height: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  border-bottom: 1px solid ${COLORS.gray20};

  .logo {
    width: 160px;
    height: 24px;
    margin: auto auto;
    cursor: pointer;
  }

  .sidebar {
    svg {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 12px;
      left: 16px;
      cursor: pointer;
    }
  }
`

const PCContainer = styled.header`
  padding: 12px 20px;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.gray20};
`
const Inner = styled.div`
  max-width: var(--screen-pc);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .logo {
    height: 32px;

    img {
      width: 160px;
      height: 24px;
      margin: 4px 0;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    height: 32px;
    align-items: center;
    font-size: 15px;
    gap: 10px;

    button {
      width: 100px;
      height: 32px;
      font-size: 15px;
      background-color: ${COLORS.green};
      color: white;
    }

    a {
      cursor: pointer;
    }
  }
`

export default Header
