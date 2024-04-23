import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isMounted, finishLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.the}>
        <svg
          width="151"
          height="52"
          viewBox="0 0 151 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4973 10.8926H20.4277V10.823L20.4973 10.8926Z"
            fill="#FFCD00"
          />
          <path
            d="M10.5277 0.919678L20.4267 10.823H0.637695V0.919678H10.5277Z"
            fill="#FFCD00"
          />
          <path
            d="M90.6087 32.4557V51.3925H80.7354V32.4557H50.0991L40.2258 22.569V10.8927H20.4974L20.4277 10.8229V0.84082H50.0991V22.569H80.7354L90.6087 32.4557Z"
            fill="#FFCD00"
          />
          <path
            d="M20.4277 10.8933H20.4974L30.3268 20.7178V51.4446H20.4277V10.8933Z"
            fill="#FFCD00"
          />
          <path
            d="M20.4973 10.8926H20.4277V10.823L20.4973 10.8926Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 41.4985V51.3927H110.398L100.506 41.4985V31.0996H110.398V41.4985H150.985Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 0.84082H110.398V10.735H150.985V0.84082Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 21.2032V31.0989H110.398L100.506 21.2032V10.7346H110.398V21.2032H150.985Z"
            fill="#FFCD00"
          />
          <path
            d="M50.0979 32.4551H40.2246V51.3919H50.0979V32.4551Z"
            fill="#FFCD00"
          />
          <path
            d="M90.6087 0.919434H80.7354V22.5688H90.6087V0.919434Z"
            fill="#FFCD00"
          />
        </svg>
      </div>
      <div className={styles.i}>
        <svg
          width="26"
          height="130"
          viewBox="0 0 26 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7608 51.4434H0.664062V129.086H25.7608V51.4434Z"
            fill="#FFCD00"
          />
          <path
            d="M25.7608 0.84082V51.444L0.664062 26.3364V0.84082H25.7608Z"
            fill="#FFCD00"
          />
        </svg>
      </div>
      <div className={styles.n}>
        <svg
          width="181"
          height="130"
          viewBox="0 0 181 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.7242 25.95H26.6274V129.087H51.7242V25.95Z"
            fill="#FFCD00"
          />
          <path
            d="M154.644 25.9499V129.087H129.547V25.9499H51.7271V0.84082H129.547L154.644 25.9499Z"
            fill="#FFCD00"
          />
        </svg>
      </div>
      <div className={styles.fin}>
        <svg
          width="333"
          height="130"
          viewBox="0 0 333 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128.988 0.84082H26.0708V25.9484H128.988V0.84082Z"
            fill="#FFCD00"
          />
          <path
            d="M26.0704 89.1084H0.973633V129.087H26.0704V89.1084Z"
            fill="#FFCD00"
          />
          <path
            d="M26.0704 25.95V63.9993H103.89V89.1084H26.0704L0.973633 63.9993V25.95H26.0704Z"
            fill="#FFCD00"
          />
          <path
            d="M229.376 25.95H204.279V129.087H229.376V25.95Z"
            fill="#FFCD00"
          />
          <path
            d="M332.293 25.9499V129.087H307.196V25.9499H229.376V0.84082H307.196L332.293 25.9499Z"
            fill="#FFCD00"
          />
          <path
            d="M179.181 51.4434H154.084V129.086H179.181V51.4434Z"
            fill="#FFCD00"
          />
          <path
            d="M179.181 0.84082V51.444L154.084 26.3364V0.84082H179.181Z"
            fill="#FFCD00"
          />
        </svg>
      </div>
      <div className={styles.push}></div>
    </div>
  );
};

export default SplashScreen;
