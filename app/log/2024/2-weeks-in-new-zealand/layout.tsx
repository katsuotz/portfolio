export const metadata = {
  title: '2 Weeks in New Zealand | Katsuotz',
  description: 'New Zealand Campervan Experience.',
  keywords: 'new zealand, campervan, travelling, backpacking, road trip'
}

export default function LogLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
      {children}
    </>
  )
}
