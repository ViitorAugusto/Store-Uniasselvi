import { LoginRegister } from "./form-login";

export default function Login () {
    return (
      <div className="flex justify-center pt-5 h-full">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-4xl font-bold text-center">
           Fazer login com o seu E-mail!
          </p>
          <LoginRegister />
        </div>
      </div>
    );
}