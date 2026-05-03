// Service Areas content is covered on the Contact page.
// This route redirects there.
import { redirect } from "next/navigation";

export default function ServiceAreasPage() {
  redirect("/contact-us");
}
