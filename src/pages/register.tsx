// based on https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/authentication/page.tsx
import {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import powarLeft from '@/images/powar_left.jpg';

import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
import {UserAuthForm} from '@/components/user-auth-form';

export const metadata: Metadata = {
    title: 'Registration',
    description: 'Registration form for the POWAR platform.',
};

export default function AuthenticationPage() {
    return (
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/login"
                className={cn(
                    buttonVariants({variant: 'ghost'}),
                    'absolute right-4 top-4 md:right-8 md:top-8'
                )}
            >
                existing user? sign in
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="relative z-20 flex items-center text-2xl font-medium">
                    {/* insert ICON for POWAR */}
                    POWAR Platform
                </div>
                <Image
                    className="z-10 absolute my-auto inset-0 p-10"
                    src={powarLeft}
                    alt="Picture of POWAR"
                />
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            Plant Observatory of Weather Adaptability and
                            Resilience
                        </p>
                    </blockquote>
                </div>
                <div className="absolute inset-0 bg-zinc-900" />
            </div>
            <div className="absolute top-5 left-5 md:top-10 md:left-10 flex items-center text-xl font-medium lg:hidden">
                {/* insert ICON for POWAR */}
                POWAR Platform
            </div>
            <div className="absolute bottom-8 left-8 lg:hidden mt-auto">
                <blockquote className="space-y-2">
                    <p className="text-lg">
                        Plant Observatory of Weather Adaptability and Resilience
                    </p>
                </blockquote>
            </div>
            <div className="p-8">
                <div className="mx-auto flex flex-col justify-center space-y-6 w-full sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create your account
                        </h1>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{' '}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
