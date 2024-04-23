import firstImage from "../public/first.png";
import secondImage from "../public/second.png";
import woman from "../public/woman.png";
import man from "../public/man.png";
import authorOne from "../public/author-one.png";
import authorTwo from "../public/author-two.png";
import { StaticImageData } from "next/image";

export interface IImage {
  id: string;
  src: StaticImageData;
}

export interface IExtraInfo {
  id: string;
  text: string;
}

export interface IAuthor {
  id: string;
  profilePicture: StaticImageData;
  firstName: string;
  lastName: string;
  position: string;
}

export interface ITestimonials {
  id: string;
  comment: string;
  author: IAuthor;
}

interface IProjects {
  id: string;
  title: string;
  description?: string;
  images?: IImage[];
  color: string;
  question?: string;
  extraInfo?: IExtraInfo[];
  testimonials?: ITestimonials[];
}

export const projects: IProjects[] = [
  {
    id: "1",
    title: "The Insufficient Status Quo for Businesses",
    description:
      "It’s hard to evaluate individual contributions in a team environment because some employees are more visible. Similarly, some employees may take more credit than others. Meanwhile, the ones who are actually driving the company’s success may be flying completely under the radar. And then, employers have to decide on bonuses and promotions based on limited information and often with resentment from the employees. It’s frustrating.",
    images: [{ id: "1", src: firstImage }],
    color: "#ffffff",
  },
  {
    id: "2",
    title: "Fairness and Objective Data for Individuals",
    description:
      "It’s hard to evaluate individual contributions in a team environment because some employees are more visible. Similarly, some employees may take more credit than others. Meanwhile, the ones who are actually driving the company’s success may be flying completely under the radar. And then, employers have to decide on bonuses and promotions based on limited information and often with resentment from the employees. It’s frustrating.",
    images: [{ id: "1", src: secondImage }],
    color: "#e8e8e8",
  },
  {
    id: "3",
    title: "Fairness and ",
    extraInfo: [
      {
        id: "1",
        text: "The INFIN’s data is an objective, flexible, dynamic, and real-time alternative to the limited and speculative information normally available to employers and individuals.",
      },
      {
        id: "2",
        text: "The old maxim of “knowledge is power” applies here for both employers and employees. Don’t let individual performance and recognition be lost in the cloud of office politics. The INFIN gives a voice to each individual and a fuller picture to the employer.",
      },
    ],
    testimonials: [
      {
        id: "1",
        comment:
          "“[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding each other's contributions. The INFIN provided us with a transparent and fair system for acknowledging the hard work and dedication of our colleagues and a way to willingly discuss weaknesses as individuals and as a team.”",
        author: {
          id: "1",
          firstName: "Carla",
          lastName: "M",
          position: "Business Change Manager at DRGinvest",
          profilePicture: authorOne,
        },
      },
      {
        id: "2",
        comment:
          "“We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!”",
        author: {
          id: "2",
          firstName: "Tyler",
          lastName: "H",
          position: "CEO of Nuclear Holding Group",
          profilePicture: authorTwo,
        },
      },
    ],
    color: "#121212",
  },
  {
    id: "4",
    title: "Ready to get started",
    question: "What can The INFIN do for you?",
    images: [
      { id: "1", src: woman },
      { id: "2", src: man },
    ],
    color: "#ffcd00",
  },
];
