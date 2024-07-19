import { Stack, Checkbox, Button, Typography } from '@mui/material'

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import EmailIcon from '@mui/icons-material/Email'
import PublicIcon from '@mui/icons-material/Public'
import PlaceIcon from '@mui/icons-material/Place'
import PinDropIcon from '@mui/icons-material/PinDrop'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import NoMealsIcon from '@mui/icons-material/NoMeals'
import ChatIcon from '@mui/icons-material/Chat'

import { useForm, Controller } from 'react-hook-form'
import { FC, useEffect, useState } from 'react'
import DefaultFormInput from './DefaultFormInput'
import FormToggleButton from '@/FormToggleButton'
import FullScreenDialog from '@/FormCompleteDialog'
import FormRadioButton from '@/FormRadioButton'

type Props = {
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
}

interface FormValues {
  attend: boolean
  firstname: string
  lastname: string
  firstname_kana: string
  lastname_kana: string
  zip_code: number | undefined
  state: string
  city: string
  address: string
  building: string
  phone: string
  email: string
  allergies: string
  dislike: string
  second_party: boolean
  message: string
  is_line_add: string
}

const InvitationForm: FC<Props> = ({ setStep }) => {
  // const router = useRouter()
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const { tk } = router.query
  // }, [router.isReady])
  const [open, setOpen] = useState(false)
  const [attend, setAttend] = useState<number | undefined>(undefined)
  const [secondParty, setSecondParty] = useState<number | undefined>(undefined)
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [agree, setAgree] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      attend: undefined,
      firstname: '',
      lastname: '',
      firstname_kana: '',
      lastname_kana: '',
      zip_code: undefined,
      state: '',
      city: '',
      address: '',
      building: '',
      phone: '',
      email: '',
      allergies: '',
      dislike: '',
      second_party: undefined,
      message: '',
    },
  })

  const sendForm = async (data: FormValues) => {
    setIsLoading(true)
    // const check = await auth.signUp(data.email, data.password)
    console.log(data)

    const res = await fetch('/api/route/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    console.log(res)

    const check = { success: true, message: 'success' }
    if (check?.success) {
      setOpen(true)
      setIsLoading(false)
    } else {
      alert(check?.message)
      setIsLoading(false)
    }
  }

  const handleDialogClose = () => {
    setOpen(false)
  }

  const updateZipcodeSub = () => {
    const zip_code = getValues('zip_code')
    console.log(zip_code)
    const zipCodeString = zip_code?.toString()
    if (zipCodeString?.length === 7) {
      try {
        const url =
          'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zip_code
        console.log(url)
        fetch(url, { method: 'GET' })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setValue('state', data.results[0].address1)
            setValue('city', data.results[0].address2)
            setValue('address', data.results[0].address3)
          })
          .catch((err) => console.log(err))
      } catch {
        alert('住所の取得に失敗しました。')
      }
    } else {
      console.log('no zip code')
    }
  }

  return (
    <Stack
      component="form"
      // onSubmit={handleSubmit(sendForm)}
      alignItems="center"
      // sx={{ background: '#FFF' }}
      // width={{ xs: 'calc(100% - 32px)', sm: '450px' }}
      p={{ xs: 2, sm: 5 }}
    >
      <FullScreenDialog
        open={open}
        setOpen={setOpen}
        attend={getValues('attend')}
      />

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: '#504C74', marginBottom: '20px' }}
      >
        ご出欠を選択してください。
      </Typography>

      <Controller
        name="attend"
        control={control}
        // rules={{ required: '出欠を選択してください。' }}
        render={({ field }) => (
          <FormToggleButton
            state={field.value}
            setAttend={setAttend}
            onChange={(e) => {
              field.onChange(e)
              console.log(attend)
            }}
            titleList={['ご出席', 'ご欠席']}
            // error={!!errors.attend}
            // helperText={errors.attend && errors.attend.message}
          />
        )}
      />

      {attend && (
        <>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#504C74', marginBottom: '20px' }}
          >
            ご芳名を入力してください
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: '100%', justifyContent: 'space' }}
          >
            <Controller
              name="lastname"
              control={control}
              rules={{ required: '姓を入力してください。' }}
              render={({ field }) => (
                <DefaultFormInput
                  placeholder="姓"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  startAdornment={<EmojiEmotionsIcon />}
                  error={!!errors.lastname}
                  helperText={errors.lastname && errors.lastname.message}
                />
              )}
            />
            <Controller
              name="firstname"
              control={control}
              rules={{ required: '名を入力してください。' }}
              render={({ field }) => (
                <DefaultFormInput
                  placeholder="名"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  startAdornment={<EmojiEmotionsIcon />}
                  error={!!errors.firstname}
                  helperText={errors.firstname && errors.firstname.message}
                />
              )}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ width: '100%', justifyContent: 'space' }}
          >
            <Controller
              name="lastname_kana"
              control={control}
              rules={{ required: '姓のふりがなを記述してください。' }}
              render={({ field }) => (
                <DefaultFormInput
                  placeholder="せい"
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e)
                  }}
                  startAdornment={<EmojiEmotionsIcon />}
                  error={!!errors.lastname_kana}
                  helperText={
                    errors.lastname_kana && errors.lastname_kana.message
                  }
                />
              )}
            />
            <Controller
              name="firstname_kana"
              control={control}
              rules={{ required: '姓のふりがなを記述してください。' }}
              render={({ field }) => (
                <DefaultFormInput
                  placeholder="めい"
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e)
                  }}
                  startAdornment={<EmojiEmotionsIcon />}
                  error={!!errors.firstname_kana}
                  helperText={
                    errors.firstname_kana && errors.firstname_kana.message
                  }
                />
              )}
            />
          </Stack>

          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#504C74', marginBottom: '20px' }}
          >
            ご住所を入力してください
          </Typography>

          <Controller
            name="zip_code"
            control={control}
            rules={{
              required: '郵便番号(ハイフンなし)を入力してください',
            }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="郵便番号"
                type="number"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e)
                  updateZipcodeSub()
                }}
                startAdornment={<PlaceIcon />}
                error={!!errors.zip_code}
                helperText={errors.zip_code && errors.zip_code.message}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            rules={{ required: '都道府県を記入してください。' }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="都道府県"
                type="text"
                value={field.value}
                onChange={field.onChange}
                startAdornment={<PublicIcon />}
                error={!!errors.state}
                helperText={errors.state && errors.state.message}
              />
            )}
          />

          <Controller
            name="city"
            control={control}
            rules={{ required: '市区町村を記入してください。' }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="市区町村"
                type="text"
                value={field.value}
                onChange={field.onChange}
                startAdornment={<PublicIcon />}
                error={!!errors.city}
                helperText={errors.city && errors.city.message}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            rules={{ required: '住所の続きを記入してください。' }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="住所"
                type="text"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e)
                }}
                startAdornment={<PinDropIcon />}
                error={!!errors.address}
                helperText={errors.address && errors.address.message}
              />
            )}
          />

          <Controller
            name="building"
            control={control}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="建物"
                type="text"
                value={field.value}
                onChange={field.onChange}
                startAdornment={<HomeIcon />}
              />
            )}
          />

          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#504C74', marginBottom: '20px' }}
          >
            ご連作先を入力してください
          </Typography>

          <Controller
            name="phone"
            control={control}
            rules={{ required: '電話番号を記入してください。' }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="電話番号"
                type="phone"
                value={field.value}
                onChange={field.onChange}
                startAdornment={<PhoneIcon />}
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: 'メールアドレスを記入してください。' }}
            render={({ field }) => (
              <DefaultFormInput
                placeholder="メールアドレス"
                type="email"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e)
                }}
                startAdornment={<EmailIcon />}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
            )}
          />

          {attend === 1 && (
            <>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: '#504C74', marginBottom: '20px' }}
              >
                出席予定の方は、以下の3項目についてお知らせください。
              </Typography>

              <Stack className="w-full bg-yellow-50">
                <div className="w-[90%] m-auto py-5 flex flex-col items-start">
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: '#504C74',
                      marginBottom: '20px',
                    }}
                  >
                    1. アレルギーがある食材があれば入力してください
                  </Typography>
                  <Controller
                    name="allergies"
                    control={control}
                    render={({ field }) => (
                      <DefaultFormInput
                        placeholder="アレルギー"
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        startAdornment={<NoMealsIcon />}
                      />
                    )}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: '#504C74',
                      marginBottom: '20px',
                    }}
                  >
                    2. 二次会を開催予定です。ご参加の意思をお知らせください。
                  </Typography>
                  <Controller
                    name="second_party"
                    control={control}
                    // rules={{ required: '出欠を選択してください。' }}
                    render={({ field }) => (
                      <FormToggleButton
                        state={field.value}
                        setAttend={setSecondParty}
                        onChange={(e) => {
                          field.onChange(e)
                          console.log(secondParty)
                        }}
                        titleList={['ご参加予定', 'ご参加予定なし']}
                        // error={!!errors.attend}
                        // helperText={errors.attend && errors.attend.message}
                      />
                    )}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: '#504C74',
                      marginBottom: '20px',
                    }}
                  >
                    公式LINEアカウントにて、リマインドやお知らせを行います。ぜひ、下記のリンクから友達追加をお願いします。
                  </Typography>
                  <a
                    href="https://lin.ee/WJjoDxF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-3 border-2 border-green-500 rounded-lg text-white bg-green-400 hover:bg-green-600 mb-10"
                  >
                    LINE友達追加
                  </a>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: '#504C74',
                      marginBottom: '20px',
                    }}
                  >
                    3.上記公式ラインの登録の状況をお知らせください。
                  </Typography>
                  <Controller
                    name="is_line_add"
                    control={control}
                    render={({ field }) => (
                      <FormRadioButton
                        state={field.value}
                        onChange={(e) => {
                          field.onChange(e)
                          console.log('change is line add')
                        }}
                        selectedList={['登録済み', '登録予定', '登録しない']}
                        // error={!!errors.attend}
                        // helperText={errors.attend && errors.attend.message}
                      />
                    )}
                  />
                </div>
              </Stack>
            </>
          )}
          <>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#504C74',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            >
              新郎・新婦へ一言メッセージをお願いします。
            </Typography>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <DefaultFormInput
                  placeholder="メッセージ"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  startAdornment={<ChatIcon />}
                />
              )}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'orange',
                marginTop: '40px',
                marginBottom: '20px',
              }}
            >
              ※ 確認画面は出ません <br />
              一度確認いただきまして、問題なければチェックを入れて送信してください。
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Checkbox
                checked={agree}
                onChange={() => setAgree(!agree)}
                sx={{ color: '#504C74' }}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: '#504C74' }}
              >
                上記の内容で送信します。
              </Typography>
            </Stack>

            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(sendForm)}
              disabled={isLoading || agree === false}
              sx={{
                width: '100%',
                height: '65px',
                fontSize: '20px',
                borderRadius: '10px',
                fontWeight: 'bold',
              }}
            >
              {isLoading ? '送信中...' : '送信'}
            </Button>
            {!isValid && (
              <div className="text-red-600 mt-2">未入力の項目があります。</div>
            )}
            {errors.zip_code && (
              <div className="text-red-600 mt-2">
                郵便番号部分がおかしいです。
                <br />
                7桁の数字で入力してください。
                <br />
                例：〒8600001
              </div>
            )}
          </>
        </>
      )}
    </Stack>
  )
}

export default InvitationForm
