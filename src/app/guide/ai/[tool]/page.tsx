export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const tool = (await params).slug
    const { default: Post } = await import(`@/tool-user-guides/ai/${tool}.mdx`)
   
    return <Post />
  }
   
  export function generateStaticParams() {
    return [{ tool: 'eunio' }]  
  }
   
  export const dynamicParams = false