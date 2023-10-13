import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata = {
  title: 'DataVizTrack',
  description: 'Employee attendance visualization and management system.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
