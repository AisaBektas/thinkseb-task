import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "../public/footer-logo.png";
import thinkSebLogo from "../public/thinkseb-logo.png";
import Image from "next/image";

export interface ILink {
  id: string;
  link: string;
  name: string;
}

interface IFooterLinks {
  id: string;
  title: string;
  links: ILink[];
}

const footerLinks: IFooterLinks[] = [
  {
    id: "1",
    title: "Pages",
    links: [
      { id: "1", link: "/", name: "Home" },
      { id: "2", link: "/for-businesses", name: "For Businesses" },
      { id: "3", link: "/for-individuals", name: "For Individuals" },
      { id: "4", link: "/blog", name: "Blog" },
      { id: "5", link: "/marketing-efforts", name: "Marketing Efforts" },
    ],
  },
  {
    id: "2",
    title: "For Business",
    links: [
      { id: "1", link: "/", name: "Labellink1" },
      { id: "2", link: "/", name: "Labellink2" },
      { id: "3", link: "/", name: "Labellink3" },
    ],
  },
  {
    id: "3",
    title: "For Individuals",
    links: [
      { id: "1", link: "/", name: "Labellink1" },
      { id: "2", link: "/", name: "Labellink2" },
      { id: "3", link: "/", name: "Labellink3" },
    ],
  },
  {
    id: "4",
    title: "Contact",
    links: [
      { id: "1", link: "tel:4212720427", name: "421-272-0427" },
      { id: "2", link: "mailto:info@theinfin.com", name: "info@theinfin.com" },
    ],
  },
  {
    id: "5",
    title: "Social Media",
    links: [
      { id: "1", link: "/", name: "Instagram" },
      { id: "2", link: "/", name: "Linkedin" },
      { id: "3", link: "/", name: "Facebook" },
      { id: "4", link: "/", name: "Twitter" },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.firstRow}>
        <p className={styles.text}>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </p>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className={styles.footerLinkContainer}>
            <p className={styles.title}>{footerLink.title}</p>
            {footerLink.links.map((link) => (
              <Link key={link.id} href={link.link} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={logo}
            alt="The Infin Logo"
            title="The Infin Logo"
            height={242}
            className={styles.mainLogo}
          />
        </Link>
        <div className={styles.privacy}>
          <Image src={thinkSebLogo} alt="ThinkSeb Logo" title="ThinkSeb Logo" />
          <p>
            &copy; 2024 &bull; Curated by
            <span className={styles.name}>ThinkSeb</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
