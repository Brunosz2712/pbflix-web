import NavBar from "@/components/nav-bar";
import Register from "@/components/register";

export default function AccountPage(){
    return(
        <>
        <NavBar active="conta"/>

        <main className="flex justify-center text-red-600">
            <div className="bg-slate-950 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">Conta</h2>
                <Register/>
            </div>
        </main>

        </>
    )
}