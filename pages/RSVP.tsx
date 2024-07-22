import React, { FC, useState } from 'react'

import SectionTitle from '@/SectionTitle'
import CommentWithIcon from '@/CommentWirthIcon'
import InvitationForm from '@/InvitationForm'

const PVSP = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0)
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[90%] m-auto py-5 md:w-1/2">
        {/* Title */}
        <SectionTitle icon="faClipboardUser" name="INVITATION" />
        {/* Contents1 */}
        <div className="mt-3">
          <CommentWithIcon
            type="groom"
            comment="お手数ではありますが、返信は8/29までにお願いいたします。"
            img="/hiroaki.png"
          />
        </div>
        <InvitationForm setStep={setStep} />
      </div>
    </div>
  )
}

export default PVSP
