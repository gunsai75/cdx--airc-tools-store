export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const tool = (await params).slug
    const { default: Post } = await import(`@/tool-user-guides/arvr/${tool}.mdx`)
   
    return <Post />
  }
   
  export function generateStaticParams() {
    return [{ tool: 'campustour' }]  
  }
   
  export const dynamicParams = false