import { Button } from '@mui/material'

type Props = {
  state: boolean
  onChange: (value: boolean) => void
  setAttend: (value: number) => void
  titleList: string[]
  error?: boolean
  helperText?: string
}

const FormToggleButton = (props: Props) => {
  const { state, onChange, setAttend, titleList, error, helperText } = props
  const onClickTrue = () => {
    onChange(true)
    setAttend(1)
  }
  const onClickFalse = () => {
    onChange(false)
    setAttend(2)
  }

  console.log(error, state)
  return (
    <>
      <div className="w-full grow items-center justify-between mb-5">
        <div className="inline-flex w-full max-w-xl flex-row justify-end gap-4">
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (state
                ? 'bg-[#1976d2] border-[#1976d2] text-white'
                : 'bg-none text-[#777777] border-[#777777]')
            }
            onClick={onClickTrue}
          >
            {/* <AiOutlineCheck className={state ? 'inline-block' : 'hidden'} /> */}
            {titleList[0]}
          </button>
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (!state && state !== undefined
                ? 'bg-[#1976d2] border-#1976d2] text-white'
                : 'bg-none text-[#777777] border-[#777777]')
            }
            onClick={onClickFalse}
          >
            {/* <AiOutlineCheck className={!state ? 'inline-block' : 'hidden'} /> */}
            {titleList[1]}
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{helperText}</div>
        )}
      </div>
    </>
  )
}

export default FormToggleButton
