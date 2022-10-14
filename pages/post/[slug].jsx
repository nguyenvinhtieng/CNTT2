import { useRouter } from 'next/router'
import DefaultLayout from "~/layouts/DefaultLayout"

function PostDetail() {
  const router = useRouter()
  const { slug } = router.query
  console.log("Post slug: ", slug)
  return (
    <div>PostDetail</div>
  )
}
PostDetail.Layout = DefaultLayout

export default PostDetail