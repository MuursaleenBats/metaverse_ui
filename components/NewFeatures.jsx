import styles from "../styles";

const NewFeatures = ({
  title,
  imgUrl,
  subtitle
}) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img
        src= {imgUrl}
        alt="icon"
        className = "w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-[24px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
    <p className="mt-[16px] fonr-normal text-[18px] text-[#b0b0b0] leadung-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
