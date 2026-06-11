import { useAuth } from "@/lib/auth"
import { Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Account() {
  const { user, loading, signOut } = useAuth()

  if (loading) return null
  if (!user) return <Navigate to="/login" replace />

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl tracking-tight">
            My Account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted/50 p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Member since</span>
              <span className="font-medium">
                {new Date(user.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-emerald-600">Verified</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={signOut}>Sign Out</Button>
        </CardContent>
      </Card>
    </div>
  )
}
