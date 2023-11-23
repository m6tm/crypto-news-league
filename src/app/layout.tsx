import React from "react";

export const metadata = {
  title: 'Cutomers',
  description: 'Generated by Next.js',
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
