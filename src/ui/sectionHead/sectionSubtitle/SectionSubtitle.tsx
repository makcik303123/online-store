import style from "./sectionSubtitle.module.scss";

interface SectionSubtitleProps {
  children: string;
}

export const SectionSubtitle = ({ children }: SectionSubtitleProps) => {
  return <h3 className={style.subtitle}>{children}</h3>;
};
