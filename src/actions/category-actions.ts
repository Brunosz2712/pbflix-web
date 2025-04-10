import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/categories";

export async function getCategories() {
    const response = await fetch(API_URL);
    return await response.json();
}

interface ErrorResponse {
    field: string;
    message: string;
}

export async function createCategory(initialState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        gender: formData.get("gender"),
        icon: formData.get("icon")
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(API_URL, options);

    if (!response.ok) {
        const errors: ErrorResponse[] = await response.json();

        return {
            values: {
                name: formData.get("name"),
                gender: formData.get("gender"),
                icon: formData.get("icon"),
            },
            errors: {
                name: errors.find((error: ErrorResponse) => error.field === "name")?.message,
                gender: errors.find((error: ErrorResponse) => error.field === "gender")?.message,        
                icon: errors.find((error: ErrorResponse) => error.field === "icon")?.message,
            },
        };
    }

    redirect("/categories");
}
