import scss from "./Section.module.scss";
const Section = () => {
  return (
    <div id={scss.Section}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left_side}>
            <h1>Our brand carries the genes of an athlate - <span>LiNing</span> </h1>
            <p>
              Li-Ning is the Chinese leader in athletic apparel and footwear,
              rooted in the vision of its founder and namesake, the champion
              gymnast, Mr. Li Ning. He founded the company in 1990 with the
              simple goal of providing Chinese athletes a national brand to wear
              on the world stage of the Olympics — historically one of the
              West’s rare portals into authentic Chinese culture. This modest
              intention has, 30 years later, led to the rise of a global sport
              pioneer. Residing at the forefront of 21st-century design and
              technology while celebrating its own, storied heritage, Li-Ning
              explores the tension between past and future, man and nature,
              exibility and strength. Yet it is ultimately driven by the
              boundless potential of the human body.
            </p>
          </div>
          <div className={scss.rigth_side}></div>
        </div>
      </div>
    </div>
  );
};
export default Section;
