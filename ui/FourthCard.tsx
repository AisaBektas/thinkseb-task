"use client";
import Image from "next/image";
import styles from "./FourthCard.module.scss";
import { useEffect, useRef, useState } from "react";
import { IImage } from "@/data/data";

interface FourthCardProps {
  id: string;
  question?: string;
  title: string;
  images?: IImage[];
}

const FourthCard = ({ question, id, title, images }: FourthCardProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on component mount
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.content} ref={elementRef}>
      <div className={styles.smallColumn}>
        {images && (
          <Image src={images[0].src} alt="woman" width={223} height={223} />
        )}
        {isVisible && (
          <div className={styles.iconsColumnContainer}>
            <div className={styles.firstPlus}>
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="#6B6B6B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                  stroke="#6B6B6B"
                  fill="#6B6B6B"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className={styles.iconsRowContainer}>
              <div className={styles.secondPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className={styles.thirdPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className={styles.fourthPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.main}>
        <p className={styles.index}>0{id}</p>
        <div className={styles.body}>
          <p className={styles.question}>{question}</p>
          <p className={styles.title}>{title}</p>
          <button className={styles.button}>Schedule a live demo</button>
        </div>
      </div>
      <div
        className={styles.smallColumn}
        style={{
          alignItems: "flex-end",
        }}
      >
        {!isVisible && <div></div>}
        {isVisible && (
          <div className={styles.iconsColumnContainer}>
            <div className={styles.iconsRowContainer}>
              <div className={styles.firstPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className={styles.secondPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className={styles.thirdPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#6B6B6B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#6B6B6B"
                    fill="#6B6B6B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
            <div className={`${styles.alignRight} ${styles.fourthPlus}`}>
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="#6B6B6B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                  stroke="#6B6B6B"
                  fill="#6B6B6B"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
        )}

        {images && (
          <Image src={images[1].src} alt="man" width={223} height={223} />
        )}
      </div>
    </div>
  );
};

export default FourthCard;
