"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect("/login?error=Invalid credentials");
    }

    revalidatePath("/", "layout");
    redirect("/search");
}

export async function signup(formData: FormData) {
    console.log("Signup action started"); // DEBUG
    const supabase = createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        options: {
            data: {
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                phone: formData.get("phone"),
                birth_date: formData.get("birth_date"),
                user_type: "professional", // Default to professional for this form
                profession: formData.get("profession"), // Kept for reference or future use
            }
        }
    };

    console.log("Sending data to Supabase:", data.email); // DEBUG

    const { data: authData, error } = await supabase.auth.signUp(data);

    if (error) {
        console.error("Supabase Signup Error:", error.message); // DEBUG
        redirect("/register?error=" + encodeURIComponent(error.message));
    }

    // Additional steps for Professionals
    if (authData.user && data.options.data.user_type === 'professional') {
        const professionName = data.options.data.profession as string;

        // 1. Create Professional Record
        const { data: proData, error: proError } = await supabase
            .from('professionals')
            .insert({
                profile_id: authData.user.id,
                company_name: `${data.options.data.last_name} ${data.options.data.first_name}`, // Default name
                bio: "Új szakember a ProFinderen.",
                city: "Budapest", // Default for MVP
                approval_status: 'approved' // Auto-approve for MVP/Demo
            })
            .select()
            .single();

        if (proError) {
            console.error("Failed to create professional record:", proError);
        } else if (proData && professionName) {
            // 2. Lookup Trade ID
            const { data: tradeData } = await supabase
                .from('trades')
                .select('id')
                .eq('name_hu', professionName)
                .single();

            if (tradeData) {
                // 3. Link Professional to Trade
                const { error: linkError } = await supabase
                    .from('professional_trades')
                    .insert({
                        professional_id: proData.id,
                        trade_id: tradeData.id
                    });

                if (linkError) console.error("Failed to link trade:", linkError);
            }
        }
    }

    console.log("Signup successful, redirecting..."); // DEBUG

    revalidatePath("/", "layout");
    redirect("/search?welcome=true");
}
