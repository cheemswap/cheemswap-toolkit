import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://cheemswap.gitbook.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://cheemswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://cheemswap.gitbook.io/contact-us/telegram",
      },
      {
        label: "$CHEEMS",
        href: "https://cheemswap.gitbook.io/tokenomics/CHEEMS",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://cheemswap.gitbook.io/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://cheemswap.gitbook.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://cheemswap.gitbook.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/cheemswap",
      },
      {
        label: "Documentation",
        href: "https://cheemswap.gitbook.io",
      },
      {
        label: "Audits",
        href: "https://cheemswap.gitbook.io/help/faq#is-cheemswap-safe-has-cheemswap-been-audited",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/cheemsswapdoge",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/cheemswap",
      },
      {
        label: "Announcements",
        href: "https://t.me/CheemswapAnn",
      },
    ],
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/cheemswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/cheemswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
