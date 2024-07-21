import * as React from 'react'
import Image from 'next/image'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type DialogProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  attend: boolean
}

const FullScreenDialog = (props: DialogProps) => {
  // const [open, setOpen] = React.useState(false)
  const { open, setOpen, attend } = props

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  const refleshPage = () => {
    location.reload()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Image src="/two.png" alt="aa" width={500} height={500} />
            <div className="text-xl text-center">
              ご回答ありがとうございました
            </div>
            {attend ? (
              <div className="text-xl text-center mb-5">
                披露宴でお会いできることを楽しみにしています！！！
              </div>
            ) : (
              <div className="text-xl text-center mb-5">
                今回は残念ですが、ぜひまたの機会にお会いしましょう！！！
              </div>
            )}
            <Button
              variant="contained"
              type="submit"
              onClick={refleshPage}
              sx={{
                width: '200px',
                height: '40px',
                fontSize: '18px',
                borderRadius: '10px',
              }}
            >
              閉じる
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default FullScreenDialog
