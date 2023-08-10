import { getCmsData } from '@/services/getCmsData';

export default async function Home() {
  const posts = await getCmsData('posts', true);
  return (
    <main className="container mx-auto">
      <div>{JSON.stringify(posts)}</div>
    </main>
  );
}
