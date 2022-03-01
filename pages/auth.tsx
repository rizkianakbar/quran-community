import { PageContent, PageSection } from '@/components/layout/pages';
import { Button } from '@/components/ui/button/button';

const Auth = () => {
  return (
    <PageSection>
      <PageContent>
        {/* center vertically */}
        <div className="flex h-[80vh] items-center mx-4">
          <div className="text-center m-auto">
            <p className="text-md font-bold text-gray-500">
              Please sign up/login
            </p>
            <p className="text-sm text-gray-400">
              Register or log in to share your referral code with your friends
              and enjoy the benefits!
            </p>
            <Button className="w-full mt-4 mb-4 bg-[#4267B2] hover:bg-[#4267B2] text-[#fff] hover:text-gray-400">
              Continue with Facebook
            </Button>
            <Button className="w-full mb-4 bg-[#fff] text-[#000] hover:bg-[#fff] hover:text-gray-400">
              Continue with Google
            </Button>
            <Button className="w-full bg-[#000] text-[#fff] hover:bg-[#000] hover:text-gray-400">
              Continue with Github
            </Button>
          </div>
        </div>
      </PageContent>
    </PageSection>
  );
};

export default Auth;
