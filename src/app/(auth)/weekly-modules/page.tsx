// filepath: /Users/connorbarbaccia/weact/src/app/(auth)/weekly-modules/page.tsx
import { redirect } from "next/navigation";

export default function WeeklyModulesIndex() {
  // Redirect to the Weekly Modules dashboard
  redirect("/weekly-modules/dashboard");
}
