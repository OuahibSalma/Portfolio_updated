
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="flex flex-col items-center rounded-md"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="text-xs mt-1">
        {theme === 'dark' ? t('navbar.theme.light') : t('navbar.theme.dark')}
      </span>
    </Button>
  );
};

export default ThemeToggle;
