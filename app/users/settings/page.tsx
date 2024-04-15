import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";


export default function Setting() {
    return(
        <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Edit your profile details.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
    )
}
