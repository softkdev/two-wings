/**
 * Static data for the About Us page.
 */

export type StatColor = "primary" | "secondary";

export const ABOUT_STATS = [
  { id: "projects-done", value: "60%", label: "Projects Done", color: "primary" as StatColor },
  { id: "client-satisfaction", value: "100%", label: "Client Satisfaction", color: "secondary" as StatColor },
  { id: "team-members", value: "50+", label: "Team Members", color: "primary" as StatColor },
] as const;

export const ABOUT_HERO = {
  title: "About us",
  description:
    "Welcome to a journey to make your ideas alive. In a world where tech solutions are not just tools, but extensions of your ambition.",
} as const;

export const OUR_STORY = {
  title: "Our Story",
  imageSrc: "/about-us.svg",
  paragraphs: [
    "We started with a simple belief: great digital experiences should be within reach of every business, not just the ones with the biggest budgets.",
    "Our team brings together design, development, and strategy to deliver solutions that are both beautiful and built to last. We work as an extension of your team, keeping communication clear and timelines on track.",
    "Today we help brands and organizations around the world grow online—with quality that speaks for itself and pricing that makes sense.",
  ],
} as const;

export type DriveUsIconKey = "mission" | "vision" | "promise";

export const WHAT_DRIVES_US = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "Make world-class web development accessible and affordable for everyone.",
    iconKey: "mission" as DriveUsIconKey,
    iconColor: "secondary",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "A world where every business can compete online with professional, scalable digital products.",
    iconKey: "vision" as DriveUsIconKey,
    iconColor: "primary",
  },
  {
    id: "promise",
    title: "Our Promise",
    description:
      "Quality, transparency, and client success above all else. We stand behind our work.",
    iconKey: "promise" as DriveUsIconKey,
    iconColor: "secondary",
  },
] as const;

export const OUR_VALUES = [
  {
    id: "client-centricity",
    title: "Client-Centricity",
    description:
      "We put your goals and users first. Every decision is guided by what will deliver the most value for your business.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We stay current with tools and best practices so your product is built on a solid, modern foundation.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "We work as an extension of your team. Clear communication and shared ownership drive better outcomes.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description:
      "We own our commitments. Timelines, quality, and support are not afterthoughts—they are core to how we operate.",
  },
] as const;

export const WHAT_WE_OFFER = [
  {
    id: "consultancy",
    title: "Consultancy",
    description: "Strategy and guidance to align technology with your business goals.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Modern approaches and tools to keep your product ahead of the curve.",
  },
  {
    id: "solutions",
    title: "Solutions",
    description: "End-to-end design and development tailored to your needs.",
  },
  {
    id: "support",
    title: "Support",
    description: "Ongoing maintenance and support so your product keeps performing.",
  },
] as const;

export const TEAM_MEMBERS = [
  { id: "1", name: "Daniela Smith", role: "CEO & Co-Founder", imageSrc: "/avatars/ellipse-16.svg" },
  { id: "2", name: "Alex Martin", role: "Web Developer", imageSrc: "/avatars/ellipse-16.svg" },
  { id: "3", name: "Jordan Lee", role: "UI/UX Designer", imageSrc: "/avatars/ellipse-16.svg" },
  { id: "4", name: "Sam Williams", role: "Project Lead", imageSrc: "/avatars/ellipse-16.svg" },
  { id: "5", name: "Casey Brown", role: "Frontend Developer", imageSrc: "/avatars/ellipse-16.svg" },
  { id: "6", name: "Riley Davis", role: "Backend Developer", imageSrc: "/avatars/ellipse-16.svg" },
] as const;

export const ABOUT_TESTIMONIALS = [
  {
    quote:
      "Two Wings built a professional website for our church, and their engagement from start to finish was amazing. They delivered more than we expected.",
    name: "Christiaan Steyn",
    role: "Team Leader, Jesus Revival Church",
    imageSrc: "/avatars/ellipse-16.svg",
  },
  {
    quote:
      "Their team balanced speed with precision. Communication was clear, timelines were met, and the final experience feels premium.",
    name: "Sarah Bennett",
    role: "Head of Marketing, Brightwave",
    imageSrc: "/avatars/ellipse-16.svg",
  },
  {
    quote:
      "From planning to launch, the process was collaborative and transparent. We finally have a digital presence that reflects our brand.",
    name: "Luca Moretti",
    role: "Founder, Atlas Studios",
    imageSrc: "/avatars/ellipse-16.svg",
  },
] as const;

export const ABOUT_FAQS = [
  {
    question: "What services does Two Wings offer?",
    answer:
      "We design and develop marketing websites, web apps, e-commerce experiences, and internal tools. We also provide strategy, branding, and on-going support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most marketing sites launch in 4–6 weeks. More complex dashboards or applications typically take 8–12 weeks depending on scope.",
  },
  {
    question: "What makes Two Wings different from other agencies?",
    answer:
      "We operate as a lean, remote team with enterprise-level standards. That means senior talent, fast delivery, and pricing that stays accessible.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We offer flexible retainers for improvements, new features, performance tuning, and dedicated support after launch.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and tailored to your specific needs. We provide detailed proposals after understanding your requirements. Contact us for a custom quote.",
  },
] as const;

export const ABOUT_CTA = {
  desktop: {
    title: "Ready to launch your project?",
    description:
      "High quality design. Deliverable Technology. On time and on budget.",
    primaryButtonLabel: "Get a Free Quote",
    secondaryButtonLabel: "Contact Us",
  },
  mobile: {
    title: "Let's Work Together",
    description:
      "Tell us about your project and we'll bring your ideas to life with quality design and reliable technology.",
    primaryButtonLabel: "Get Started",
  },
} as const;

export const ABOUT_CONTACT_FORM = {
  title: "Interested In Our Creative Agency?",
  description:
    "Have a project in mind or want to learn more? Send us a message and we'll get back to you as soon as possible.",
  submitLabel: "Send",
  fields: {
    fullName: "Full Name",
    email: "Email Address",
    message: "Message",
  },
} as const;

export const ABOUT_TESTIMONIALS_INTRO =
  "Real results, real impact. Here's what partners say about building with Two Wings.";

export const MEET_OUR_TEAM_INTRO =
  "We're a diverse team of designers, developers, and strategists united by a commitment to quality and client success.";

export const FAQ_INTRO =
  "Got questions? We've got answers. Find everything you need to know about working with Two Wings.";

export const FAQ_CTA_TEXT = "Still have a question?";
export const FAQ_CTA_BUTTON = "Contact Us";
