import style from "./sectionTitle.module.scss";

interface SectionTitleProps {
  children: string;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className={style.title}>{children}</h2>;
};