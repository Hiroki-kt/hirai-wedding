import { format, resolve } from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
class FormProps {
  attend?: boolean
  name?: string
  kana?: string
  zip_code?: number
  state?: string
  city?: string
  address?: string
  building?: string
  phone?: string
  email?: string
  allergies?: string
  dislike?: string
  message?: string
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('api/route.ts')
  const props = JSON.parse(req.body) as FormProps
  console.log(props)
  const url = `https://api.notion.com/v1/pages/`
  try {
    const body = {
      parent: { database_id: 'e26e5645b5a94279b7539f12f6c074a9' },
      properties: format_properties(props),
    }
    console.log(body)
    // console.log(process.env.NOTION_API_KEY)
    // console.log(url)
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(body),
    })

    const data = await result.json()
    console.log(data)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ data })
    resolve()
  } catch (error) {
    console.error(error)
    return res.status(500).end()
  }
}

const format_text = (text: string | undefined) => {
  text = text || ''
  return [{ type: 'text', text: { content: text } }]
}

const format_properties = (props: FormProps) => {
  console.log(props.zip_code)
  return {
    Name: {
      type: 'title',
      title: format_text(props.name),
    },
    Kana: {
      type: 'rich_text',
      rich_text: format_text(props.kana),
    },
    ZipCode: {
      type: 'number',
      number: Number(props.zip_code) || 1234567,
    },
    State: {
      type: 'rich_text',
      rich_text: format_text(props.state),
    },
    City: {
      type: 'rich_text',
      rich_text: format_text(props.city),
    },
    Address: {
      type: 'rich_text',
      rich_text: format_text(props.address),
    },
    Building: {
      type: 'rich_text',
      rich_text: format_text(props.building),
    },
    Phone: {
      type: 'phone_number',
      phone_number: props.phone || '09012345678',
    },
    Mail: {
      type: 'email',
      email: props.email || 'test@test.com',
    },
    Allergies: {
      type: 'rich_text',
      rich_text: format_text(props.allergies),
    },
    Dislike: {
      type: 'rich_text',
      rich_text: format_text(props.dislike),
    },
    Message: {
      type: 'rich_text',
      rich_text: format_text(props.message),
    },
    Attend: {
      type: 'checkbox',
      checkbox: props.attend,
    },
  }
}
