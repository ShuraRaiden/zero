export interface ContactFormInput {
  email: string;
  message: string;
}

export interface SectionData {
  id: string;
  title: string;
  label: string;
  subtitle?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
