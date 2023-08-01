import {Button} from '@/components/ui/button';
import {Inter} from 'next/font/google';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push('/register');
    }, [router]);
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
        </main>
    );
}
