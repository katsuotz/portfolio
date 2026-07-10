import EditorialShell from '@/components/home/editorial-shell'
import Showcase from '@/components/home/showcase'

export default function Showcases() {
  return (
    <EditorialShell route="showcase" showBackToTop>
      <Showcase />
    </EditorialShell>
  )
}
