// import CategoryItem from "@/components/category-item";
// import NavBar from "@/components/nav-bar";

// export default function CategoriesPage(){
//     return(
//         <>
//         <NavBar active="categorias"/>

//         <main className="flex justify-center text-red-600">
//             <div className="bg-slate-950 min-w-2/3 m-6 p-6 rounded">
//                 <h2 className="text-lg font-bold">Categorias</h2>

//                 <CategoryItem/>
//                 <CategoryItem/>
//                 <CategoryItem/>
//                 <CategoryItem/>

//             </div>
//         </main>
//         </>
//     )
// }

// import { getCategories } from "@/actions/category-actions";
// import CategoryItem from "@/components/category-item";
// import NavBar from "@/components/nav-bar";
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import Link from "next/link";

// export default async function CategoriesPage() {
//     const data: Category[] = await getCategories()

//     return (
//         <>
//             <NavBar active="categorias" />

//             <main className="flex justify-center">
//                 <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
//                     <div className="flex justify-between">
//                         <h2 className="text-lg font-bold">Categorias</h2>
//                         <Button asChild>
//                             <Link href="/categories/form">
//                                 <Plus />
//                                 nova categoria
//                             </Link>
//                         </Button>

//                     </div>

//                     {data.length == 0 ?
//                         <p>Nenhuma categoria cadastrada</p> :
//                         data.map(category => <CategoryItem key={category.id} category={category} />)
//                     }

//                 </div>
//             </main>
//         </>
//     )
// }

"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState= {
    values:{
        name: "",
        gender: "",
        icon: ""
    },
    errors:{
        name: "",
        gender: "",
        icon: ""
    }
}

export default function CategoryFormPage(){
    const [state, formAction, pending] = useActionState(createCategory, initialState)
    
    return (
        <>
           <NavBar active="categorias" />

            <main className="flex justify-center">
                <div className="bg-slate-950 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg text-red-600 font-bold">Cadastrar Filme</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        
                        <div>
                            <Input 
                                name="name" 
                                placeholder="Nome do Filme" 
                                aria-invalid={!!state?.errors.nameMovie} 
                                defaultValue={state?.values.nameMovie}
                            />
                            <span className="text-sm text-destructive">{state?.errors.nameMovie}</span>
                        </div>

                        <div>
                            <Input 
                                gender="gender" 
                                placeholder="Nome do Gênero" 
                                aria-invalid={!!state?.errors.gender} 
                                defaultValue={state?.values.gender}
                            />
                            <span className="text-sm text-destructive">{state?.errors.gender}</span>
                        </div>

                        <div>
                            <Input 
                                name="icon" 
                                placeholder="Ícone do Filme" 
                                aria-invalid={!!state?.errors.icon}
                                defaultValue={state?.values.icon}
                             />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-between">
                            <Button asChild variant={"outline"}>
                                <Link href="/categories">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}