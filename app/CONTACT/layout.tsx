import { MarketingLayout } from '#components/layout'



export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout children={undefined}>{props.children}</MarketingLayout>
}
