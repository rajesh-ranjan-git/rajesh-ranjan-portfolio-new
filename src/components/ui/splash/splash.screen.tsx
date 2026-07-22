import splashStyles from "@/animations/splash.module.css";
import { SplashScreenProps } from "@/types/props/splash.props.types";
import SplashLoader from "@/components/ui/splash/splash.loader";

export default function SplashScreen({
  loadingText = "Loading...",
  backgroundColor = "#040b14",
  className = "",
}: SplashScreenProps) {
  return (
    <div
      className={`z-100 relative h-screen w-screen ${className}`}
      style={{ backgroundColor }}
    >
      <div
        className={`w-full h-full overflow-hidden ${splashStyles.splash_screen}`}
      >
        <SplashLoader loadingText={loadingText} />
      </div>
    </div>
  );
}
