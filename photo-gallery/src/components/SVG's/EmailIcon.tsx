type PropsT = {
  size: number;
  color: string;
};
const EmailIcon = ({ size, color }: PropsT) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 -2.5 20 20"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m18 2.291-8 7.027-8-7.037V2h16v.291ZM2 13V4.945l8 7.035 8-7.027V13H2Zm-2 2h20V0H0v15Z"
    />
  </svg>
);
export default EmailIcon;
