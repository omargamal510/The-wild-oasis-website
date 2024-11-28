import { NextResponse } from "next/server";

// const x = true;

// export function middleware(request) {
//   console.log(request);

//   if (x) {
//     return NextResponse.redirect(new URL("/", request.url));
//   } else {
//     return NextResponse.redirect(new URL("/account", request.url));
//   }
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"], // add more ..
};

/* Auth.js config


import { auth } from "@/app/_lib/auth";

 export const middleware = auth;

*/
