export const metadata = {
  title: '2 Weeks in New Zealand | Katsuotz',
  description: 'New Zealand Campervan Experience.',
  keywords: 'new zealand, campervan, travelling, backpacking, road trip',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
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
