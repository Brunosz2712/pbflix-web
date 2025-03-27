import NavBar from "@/components/nav-bar";

export default function DashboardPage(){
    return(
        <>
        <NavBar active="inicio"/>        

        <main className="flex justify-center text-red-600">
            <div className="bg-slate-950 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">Inicio</h2>
            </div>
        </main>
        </>
    )
}