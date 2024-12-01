"use server";

import Spinner from "../_components/Spinner";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You Must be Logged in");
  // console.log(formData);

  const nationalID = formData.get("nationalId");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
  //   throw new Error("Please provide valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session?.user?.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
}
