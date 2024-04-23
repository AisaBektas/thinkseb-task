"use client";
import { IExtraInfo, ITestimonials } from "@/data/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ThirdCard.module.scss";

interface ThirdCardProps {
  id: string;
  title: string;
  extraInfo?: IExtraInfo[];
  testimonials?: ITestimonials[];
}

const ThirdCard = ({ title, extraInfo, testimonials, id }: ThirdCardProps) => {
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
      <p className={styles.index}>0{id}</p>
      <div className={styles.body}>
        <div className={styles.introduction}>
          <p className={styles.title}>
            {title}
            <br />
            <span className={styles.yellow}>Objective</span>
          </p>
          {isVisible && (
            <div className={styles.iconsContainer}>
              <div className={styles.firstPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#c1c1c1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#c1c1c1"
                    fill="#c1c1c1"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
              <div className={styles.secondPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#c1c1c1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#c1c1c1"
                    fill="#c1c1c1"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
              <div className={styles.thirdPlus}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="#c1c1c1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3915 38.7837V19.3919M19.3915 19.3919V0.000187337M19.3915 19.3919H-0.000300944M19.3915 19.3919L38.7832 19.3919"
                    stroke="#c1c1c1"
                    fill="#c1c1c1"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
            </div>
          )}
          <div className={styles.extraInfo}>
            {extraInfo?.map((info: IExtraInfo) => (
              <p key={info.id}>{info.text}</p>
            ))}
          </div>
        </div>
        <div className={styles.testimonialContainer}>
          {testimonials?.map((testimonial: ITestimonials) => (
            <div key={testimonial.id}>
              <p className={styles.comment}>{testimonial.comment}</p>
              <div className={styles.author}>
                <div>
                  <Image
                    src={testimonial.author.profilePicture}
                    alt={testimonial.author.firstName}
                    height={52}
                    width={52}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className={styles.name}>
                    {testimonial.author.firstName +
                      testimonial.author.lastName[0]}
                  </p>
                  <p className={styles.position}>
                    {testimonial.author.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.slideContainer}>
            <div className={styles.iconContainer}>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6H1M1 6L6.33333 1M1 6L6.33333 11"
                  stroke="#FFCD00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div style={{ display: "flex" }}>
              <p className={styles.current}>01</p>
              <p className={styles.total}>/03</p>
            </div>
            <div className={styles.iconContainer}>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6H14M14 6L8.66667 1M14 6L8.66667 11"
                  stroke="#FFCD00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdCard;
