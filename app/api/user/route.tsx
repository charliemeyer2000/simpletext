"server only";

import {auth} from "@/auth"
import {NextRequest, NextResponse} from "next/server";
import {authOptions} from "@/auth";

export async function GET(req: NextRequest) {

    // see https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side
    const session = await auth();

    if (!session || !session.user) {
        return NextResponse.json(
            {error: "Unauthorized"},
            {status: 401}
        )
    }

    const {email, name} = session.user;

    // TODO: Fetch from db based on id


    return NextResponse.json({
        email: email,
        name: name,
    })
}