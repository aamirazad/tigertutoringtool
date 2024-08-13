'use client'

import { useEffect, useState } from 'react'

export default function QuartzContent() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/index.html')
      .then(response => response.text())
      .then(html => {
        // Extract the body content
        const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || ''
        setContent(bodyContent)
      })
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: content }} />
}