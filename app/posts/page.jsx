import { Image } from 'next/image';
import Link from 'next/link';

export default function Page() {
  const slug = "jk";

  return (
    <div>
      <h1>Contact Page</h1>
      <Link href={`/posts/${slug}`}>
        <button>Go to Hello World Post</button>
      </Link>
    </div>
  );
}
