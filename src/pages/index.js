import Head from 'next/head';
import { ProjectThumbnail } from '../components';

export default function Home() {
  const Project = [
    {
      id: 1,
      name: 'Background Color Transition',
      thumbnail: 'https://i.postimg.cc/jjT86f1T/Color-Transition-Gsap.png',
      lib: ['Gsap', 'Smooth Scroll', 'Tailwind', 'React'],
      url: 'ColorChangeOnScrollGsap',
    },
    {
      id: 2,
      name: 'Infinite Scroll',
      thumbnail: 'https://i.postimg.cc/ydyCXBjQ/Infinite-Scroll.png',
      lib: ['Js', , 'Tailwind', 'React'],
      url: 'InfiniteScroll',
    },
  ];

  return (
    <div className="min-h-screen flex  flex-col items-center justify-start bg-cream">
      <Head>
        <title>React-Gsap-SandBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center ">
        <div className="text-8xl mb-20  mt-8">Project SandBox</div>
        <div className="grid grid-cols-3 gap-4 w-full h-full">
          {Project.map((o) => (
            <ProjectThumbnail key={o.key} data={o} />
          ))}
        </div>
      </main>
    </div>
  );
}
