import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'DataVizTrack',
  description: 'Employee attendance visualization and management system.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
