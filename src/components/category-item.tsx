import { Film } from "lucide-react";
import CrudDropdown from "./crud-dropdown";

interface CategoryItemProps {
    category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Film />
                <span>{category.nameMovie}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    );
}
