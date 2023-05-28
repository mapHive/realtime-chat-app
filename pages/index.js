import dynamic from 'next/dynamic';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <AblyChatComponent />
  )
}
