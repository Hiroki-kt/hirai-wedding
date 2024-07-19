import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
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

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="h-2/3">
              <img
                src="/two.png"
                alt=""
                className="w-fill h-full object-contain"
              />
            </div>
            <div className="text-center">ご回答ありがとうございました</div>
            {attend ? (
              <div className="text-center">
                披露宴でお会いできることを楽しみにしています！！！
              </div>
            ) : (
              <div className="text-center">
                今回は残念ですが、ぜひまたの機会にお会いしましょう！！！
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default FullScreenDialog
