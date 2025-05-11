import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import GoogleLogin from "../components/GoogleLogin";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-red-700 mb-6">Zaloguj się do BookPack</h2>

        {/* Logowanie przez Google */}
        <div className="mb-4">
          <GoogleLogin />
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">lub</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Logowanie email/hasło */}
        <div className="mb-6">
          <LoginForm />
        </div>

        {/* Rejestracja */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Nie masz konta?</p>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
