import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean | null>(null);

  React.useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    document.documentElement.classList.toggle("dark");
    const dark = document.documentElement.classList.contains("dark");
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    setIsDark(dark);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0 rounded-full text-foreground"
      disabled={isDark === null}
      onClick={toggle}
      aria-label={
        isDark === null ? "Loading theme toggle" : isDark ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {isDark === null ? (
        <span className="size-4 shrink-0" aria-hidden />
      ) : isDark ? (
        <Sun aria-hidden />
      ) : (
        <Moon aria-hidden />
      )}
    </Button>
  );
}
