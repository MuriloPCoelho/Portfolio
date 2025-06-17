import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[url(/public/bg-login--light.png)] dark:bg-[url(/public/bg-login--dark.png)] bg-no-repeat bg-cover bg-center">
      <form>
        <div className="flex items-center flex-col gap-8">
          <Avatar className="size-20">
            <AvatarFallback className="text-2xl">MP</AvatarFallback>
          </Avatar>
          <Input />
        </div>
      </form>
    </div>
  );
};

export default Login;
