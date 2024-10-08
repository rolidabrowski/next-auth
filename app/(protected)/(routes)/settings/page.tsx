import { currentUser } from "@/lib/auth";
import { SettingsClient } from "@/app/(protected)/(routes)/settings/components/settings-client";

const SettingsPage = async () => {
  const user = await currentUser();
  return <SettingsClient user={user} />;
};

export default SettingsPage;
