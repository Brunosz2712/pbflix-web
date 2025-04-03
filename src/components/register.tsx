import Link from "next/link";

export default function Register(){
    return(
        <section>
            <h3 className="text-1xl font-bold text-red-600 flex justify-center p-3 gap-2">Não Possui Conta?<Link href="/register">Cadastre-se</Link></h3>
        </section>
    )
}