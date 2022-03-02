import { PageContent, PageSection } from '@/components/layout/pages';
import { Button } from '@/components/ui/button/button';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

const Auth = () => {
  const { status } = useSession();
  return (
    <PageSection>
      <PageContent>
        <div className="flex h-[80vh] items-center mx-4">
          <div className="text-center m-auto">
            {status !== 'authenticated' && (
              <>
                <p className="text-md font-bold text-gray-500">
                  Please sign up/login
                </p>
                <p className="text-sm text-gray-400">
                  Register or log in to share your referral code with your
                  friends and enjoy the benefits!
                </p>
                <Button className="w-full mt-4 mb-4 bg-[#4267B2] hover:bg-[#4267B2] text-[#fff] hover:text-gray-400">
                  Continue with Facebook
                </Button>
                <Button
                  onClick={() =>
                    signIn('google', {
                      callbackUrl: 'http://localhost:3000/account',
                    })
                  }
                  className="w-full mb-4 bg-[#fff] text-[#000] hover:bg-[#fff] hover:text-gray-400"
                >
                  Continue with Google
                </Button>
                <Button
                  onClick={() =>
                    signIn('github', {
                      callbackUrl: 'http://localhost:3000/account',
                    })
                  }
                  className="w-full bg-[#000] text-[#fff] hover:bg-[#000] hover:text-gray-400"
                >
                  Continue with Github
                </Button>
              </>
            )}
            {status === 'authenticated' && (
              <>
                <p className="text-md font-bold text-gray-500">
                  You already logged in
                </p>
              </>
            )}
          </div>
        </div>
      </PageContent>
    </PageSection>
  );
};

export default Auth;
