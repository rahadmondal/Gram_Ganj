import AuthLeft from "@/components/auth/AuthLeft";
import AuthRight from "@/components/auth/AuthRight";
import RegistrationForm from "@/components/auth/RegisterForm";
import { LOGIN_CONFIG, SIGNUP_CONFIG } from "@/lib/authPageConfig";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AuthLeft {...SIGNUP_CONFIG} />
      <AuthRight>
        <RegistrationForm />
      </AuthRight>
    </div>
  );
}
