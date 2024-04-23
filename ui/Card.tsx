"use client";
import Image from "next/image";
import styles from "./Card.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import FourthCard from "@/ui/FourthCard";
import ThirdCard from "@/ui/ThirdCard";
import { IExtraInfo, IImage, ITestimonials } from "@/data/data";

interface CardProps {
  id: string;
  i: number;
  title: string;
  description?: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  images?: IImage[];
  testimonials?: ITestimonials[];
  extraInfo?: IExtraInfo[];
  question?: string;
}

const Card = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  id,
  images,
  testimonials,
  extraInfo,
  question,
}: CardProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: color,
          scale,
          bottom: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {(id === "2" || id === "1") && (
          <div
            className={styles.body}
            style={{ flexDirection: id === "2" ? "row-reverse" : "row" }}
          >
            <div style={{ margin: 0, padding: 0 }}>
              <p>0{id}</p>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.description}>
                <p className={styles.subtitle}>For employers</p>
                <p className={styles.text}>{description}</p>
              </div>
              <div className={styles.footer}>
                <p className={styles.subtitle}>Use The INFIN’s insights to</p>
                <div>
                  <p className={styles.text}>
                    Determine the individual contribution and ROI of every
                    employee
                  </p>
                  <p className={styles.text}>
                    Identify underperformers and better utilize employee
                    strengths
                  </p>
                </div>
                <div>
                  <p className={styles.text}>
                    Improve team dynamics and company culture
                  </p>
                  <p className={styles.text}>
                    Invest with better alignment of ROI, labor spend, and
                    business objectives
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                {images && <Image fill src={images[0].src} alt="image" />}
                <div className={styles.buttonContainer}>
                  <p
                    style={{
                      backgroundColor: id === "2" ? "#121212" : "#ffcd00",
                      color: id === "2" ? "#ffffff" : "#121212",
                    }}
                  >
                    {id === "2"
                      ? "   The Infin for individuals"
                      : "   The Infin for business"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {id === "3" && (
          <ThirdCard
            title={title}
            id={id}
            testimonials={testimonials}
            extraInfo={extraInfo}
          />
        )}
        {id === "4" && (
          <FourthCard
            title={title}
            id={id}
            images={images}
            question={question}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Card;
