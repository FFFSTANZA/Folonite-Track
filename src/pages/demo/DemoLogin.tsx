import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { demoAuthKeys } from "@/lib/demo";

export default function DemoLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@folonite.in");
  const [password, setPassword] = useState("demo@123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      const uid = sessionStorage.getItem(demoAuthKeys().current);
      if (uid) navigate("/demo", { replace: true });
    } catch { }
  }, [navigate]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <div className="mb-6">
            <span className="text-3xl font-serif font-medium tracking-tight text-foreground">Folonite</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">Demo Login</h2>
          <p className="mt-3 text-[17px] leading-[1.6] text-muted-foreground">
            Use the prefilled credentials or tweak them to simulate sign-in.
          </p>
        </div>

        <div className="space-y-6">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setError("");
              if (email.trim().toLowerCase() === "demo@folonite.in" && password === "demo@123") {
                try {
                  const keys = demoAuthKeys();
                  const user = { id: "demo-user", name: "Demo User", email: "demo@folonite.in", role: "admin" };
                  sessionStorage.setItem(keys.current, user.id);
                  sessionStorage.setItem(keys.auth, JSON.stringify(user));
                  try { localStorage.removeItem(keys.current); localStorage.removeItem(keys.auth); } catch { }
                } catch { }
                navigate("/demo", { replace: true });
              } else {
                setError("Invalid demo credentials");
              }
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                className="h-11 rounded-xl bg-muted/30 px-4 transition-all focus:bg-background focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 rounded-xl bg-muted/30 px-4 pr-10 transition-all focus:bg-background focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 flex h-full w-10 items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all hover:opacity-90"
            >
              Sign in to Demo
            </Button>
          </form>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {currentYear} Folonite Demo. Experience the platform risk-free.
        </p>
      </div>
    </div>
  );
}
