import splashStyles from "@/animations/splash.module.css";
import SplashLoader from "@/components/ui/splash/splash.loader";

export interface SplashScreenProps {
  loadingText?: string;
  backgroundColor?: string;
  className?: string;
}

export default function SplashScreen({
  loadingText = "Loading...",
  backgroundColor = "#040b14",
  className = "",
}: SplashScreenProps) {
  return (
    <div
      className={`z-100 relative flex h-screen w-screen items-center justify-center ${className}`}
      style={{ backgroundColor }}
    >
      <div
        className={`relative rounded-full w-full h-full overflow-hidden ${splashStyles.splash_screen}`}
      >
        <SplashLoader loadingText={loadingText} />
      </div>
    </div>
  );
}
