import {SectionTitle} from './sectionTitle/SectionTitle.tsx'
import {SectionSubtitle} from "./sectionSubtitle/SectionSubtitle.tsx";

interface sectionHeadProps {
  title: string;
  subTitle: string;
}

export const sectionHead = ({ title, subTitle }: sectionHeadProps) => {
  return <div>
    <SectionSubtitle>{subTitle}</SectionSubtitle>
    <SectionTitle>{title}</SectionTitle>
  </div>;
};
