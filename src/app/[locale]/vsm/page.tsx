import { redirect } from "next/navigation";
export default function LegacyVsmPage({ params }: { params: Promise<{locale:string}> }) {
  return redirect("/" + "platform");
}
