import { useState } from 'react'

import { Button } from '@mui/material'
import { Typography } from '@mui/material'

type Props = {
  state: string
  onChange: (value: string) => void
  selectedList: string[]
  error?: boolean
  helperText?: string
}

const FormRadioButton = (props: Props) => {
  const { state, onChange, selectedList, error, helperText } = props
  const [isNotLineAdd, setIsNotLineAdd] = useState(false)

  const onClickNumber = (value: string) => {
    onChange(value)
    if (value === '登録しない') {
      setIsNotLineAdd(true)
    } else {
      setIsNotLineAdd(false)
    }
  }

  const buttons = selectedList.map((item, index) => {
    console.log(item, index)
    return (
      <button
        key={index}
        type="button"
        className={
          'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
          (state === item
            ? 'bg-[#1976d2] border-#1976d2] text-white'
            : 'bg-none text-[#777777] border-[#777777]')
        }
        onClick={() => onClickNumber(item)}
      >
        {item}
      </button>
    )
  })

  console.log(error, state)
  return (
    <>
      <div className="w-full grow items-center justify-between mb-5">
        <div className="inline-flex w-full max-w-xl flex-row justify-end gap-4">
          {buttons}
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{helperText}</div>
        )}
      </div>
      {isNotLineAdd && (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            color: '#504C74',
            marginBottom: '20px',
          }}
        >
          ※「登録しない」を選択された場合には、お知らせは行いません。
        </Typography>
      )}
    </>
  )
}

export default FormRadioButton
