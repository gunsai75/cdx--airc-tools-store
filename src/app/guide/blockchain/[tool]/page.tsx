export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const tool = (await params).slug
    const { default: Post } = await import(`@/tool-user-guides/blockchain/${tool}.mdx`)
   
    return <Post />
  }
   
  export function generateStaticParams() {
    return [{ tool: 'stock' }]
  }
   
  export const dynamicParams = false