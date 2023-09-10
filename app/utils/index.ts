import mobile from "ismobilejs";
import { headers } from "next/headers";

export const isMobile = () => mobile(headers().get("user-agent") ?? "");
