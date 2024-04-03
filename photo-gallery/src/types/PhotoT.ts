export type PhotoT = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  blurImage: string | undefined;
  likes: number;
  userInfo: {
    name: string;
    userImage: string;
    date: string;
  };
  imageInfo: {
    city: string | null;
    country: string | null;
  };
};
