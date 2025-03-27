import { Film } from "lucide-react";

export default function CategoryItem(){
    return(
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
            <Film />
                <span>nome da categoria</span>
            </div>

            <div>...</div>

        </div>
    )
}