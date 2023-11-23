import React from "react";
import type { Metadata } from 'next'
import { config } from 'dotenv'
import './globals.css'

config()

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: process.env.DEFAULT_DESCRIPTION,
}

export default function Layout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <>
          {props.children}
        </>
      </body>
    </html>
  )
}
