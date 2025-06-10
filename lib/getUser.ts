import { getServerSession } from "next-auth";
import dbConnect from "./dbConnect"
import { revalidatePath } from "next/cache";

export const getUser = async () => {
    dbConnect();
    const session = await getServerSession();
    const userId = session?.user?.id;
    if (!userId) {
        revalidatePath("/sign-in")
        throw new Error("User is not authorized")
    }
    return userId;
}