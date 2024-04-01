/// <reference types="vite/client" />
interface IUserInfoType {
  userEmail?: string
  userPw?: string
  userName?: string
  userNickName?: string
  userPhone?: string
  userVerifyNum?: string
  newPw?: string
}

interface IUserInfoEditType {
  status: number
  memberId: string
  memberName: string
  memberNickName: string
  memberPhone: string
}

interface IResponseType {
  status: number
  tokens: {
    accessToken: string
    refreshToken: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

interface IResponseErrorType {
  status?: number
  state?: number
}

interface ISaveImgFile {
  imgFile: File | null
  imgSrc: string | undefined
}

interface POST_TYPE {
  blind: boolean
  boardId: number
  categoryName: string
  content: string
  deleteCheck: boolean
  districtName: string
  endTime: string
  imageUrl: string
  memberId: string
  memberName: string
  memberNickName: string
  myBoard: boolean
  phone: string
  price: number
  registerDate: string
  startTime: string
  title: string
  transactionStatus: string | null
  viewCount: number
  wishCount: number
  likeBoard: boolean
}

interface POST_TYPE_INFO extends POST_TYPE {
  memberRole: string
}

interface SearchValueTypes {
  title: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  district: string[]
  category: string
  chkDate: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any
}

interface IMainListPayload {
  districtNames?: string
  categoryName?: string
  startTime?: string
  endTime?: string
  title?: string
}

interface ValueStateType {
  categoryValue: string
  districtValue: string[]
  startTimeValue: string
  endTimeValue: string
  startDate: string
  endDate: string
  searchTextValue: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any
}

interface CheckValueStateType {
  categoryOpen: boolean
  districtOpen: boolean
  districtSelect: boolean
  timeChange: boolean
  startDateChange: boolean
  endDateChange: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any
}

interface ICategories {
  category: string
  name: string
  icon: ReactElement
}

interface CommentTypes {
  children: CommentTypes[]
  commentContent: string
  commentId: number
  commentRegisterDate: string
  commentUpDate: string
  deleteCheck: boolean
  memberId: string
  memberNickname: string
  myComment: boolean
  title: string
}

interface QuestionTypes {
  answerTitle: string
  answerContent: string
}

interface StyleProps {
  screen: string
}

interface QuestionPostType {
  questionTitle: string
  questionContent: string
  questionCategory: string
}

interface QuestionGetTypes {
  answerId: number
  questionCategory: string
  questionContent: string
  questionId: number
  questionProcess: string
  questionRegisterDate: string
  questionTitle: string
  questionUpdateDate: string
}

interface QuestionAnswerTypes {
  answerContent: string
  answerRegisterDate: string
  answerTitle: string
  memberName: string
}

//삭제예정
interface IModalProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  content: string[]
  isConfirm: boolean
  navigateOption?: string
  confirmFn?: () => void
}

interface ITimeSelectorProps {
  isTimeChange: boolean
  setIsTimeChange: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>
  timeSelectorOpen: boolean
  setTimeSelectorOpen: React.Dispatch<React.SetStateAction<boolean>>
  timeTemp?: string
}

interface IWishlistType {
  boardId: number
  title: string
  memberName: string
  categoryName: string
  districtName: string
  registerDate: string
  startTime: string
  endTime: string
  imageUrl: string
  transactionStatus: string
  price: number
  viewCount: number
  wishCount: number
}

interface CustomDateInputProps {
  value: string
  onClick: () => void
}

interface IInfinityScrollProps {
  payload: SearchValueTypes | IMainListPayload
  page: number
  setPostList: React.Dispatch<React.SetStateAction<POST_TYPE[]>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

interface IModalPayload {
  isModalOpen: boolean
  isConfirm: boolean
  content: string[]
  navigateOption?: string | number
  confirmAction?: () => void
}

interface IWritePostData {
  categoryName: string
  content: string
  districtName: string
  endTime: string
  imageUrl: string
  price: number
  startTime: string
  title: string
}

interface IWriteProps {
  postData: IWritePostData
  setPostData: React.Dispatch<React.SetStateAction<IWritePostData>>
  pageName: string
  submitData: (formData: FormData) => Promise<void>
}

interface IWriteInputsProps {
  postData: IWritePostData
  setPostData: React.Dispatch<React.SetStateAction<IWritePostData>>
}
