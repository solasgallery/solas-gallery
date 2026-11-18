import type { Metadata } from 'next'
import CaptureForm from './CaptureForm'

// In-person QR sign-up (staff hand visitors the QR code). Not for search.
export const metadata: Metadata = {
  title: { absolute: 'Stay in touch | Solas Gallery — Salado, TX' },
  robots: { index: false, follow: false },
}

export default function CapturePage() {
  return <CaptureForm />
}
