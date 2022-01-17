export type GuideProps = {
  id: number;
  name: string;
  position: () => void;
};

export type CarouselGuideProps = {
  name: string;
  guide: GuideProps[];
};
