import { ProfileClient } from "@/components/profile-client";
import { demoMovies } from "@/lib/data";

export default function ProfilePage() {
  return <ProfileClient movies={demoMovies.slice(0, 4)} />;
}