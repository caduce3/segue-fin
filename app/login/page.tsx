import { LogInIcon, Radar } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {

    const { userId } = await auth()
    if(userId){
        redirect("/")
    }

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-[3fr_1.5fr]">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full w-full max-w-[550px] flex-col justify-center p-8 ">
        <div className="mb-8 flex items-end ">
          <Radar size={65} className="mr-2 text-[#E2B815]" />
          <h1 className="text-4xl font-bold">Segue.fin</h1>
        </div>
        <h2 className="mb-3 text-4xl font-bold  ">Bem-vindo</h2>
        <p className="text-muted-foreground mb-8  ">
          A SegueFin é uma plataforma de gestão financeira desenvolvida para
          apoiar o movimento Segue-me. Utilizando inteligência artificial, ela
          permite que a equipe dirigente acompanhe suas movimentações
          financeiras e recebam insights personalizados, facilitando o controle
          e a organização do movimento na sua paróquia.
        </p>
        <div className="flex ">
            <SignInButton>
                <Button variant="outline">
                    <LogInIcon size={20} className="mr-2" />
                    Fazer login ou criar conta
                </Button>
            </SignInButton>
        </div>
      </div>
      {/* DIREITA */}
      <div className="relative hidden h-full w-full md:block">
        <Image src="/fundoSgm2.png" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
