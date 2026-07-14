import experienceStyles from "@/animations/experience.module.css";

const ExperienceTimeline = () => {
  return (
    <div className={`${experienceStyles.timeline_component}`}>
      <div className={`${experienceStyles.timeline_progress}`}>
        <div className={`${experienceStyles.timeline_progress_bar}`}></div>
      </div>
      <div className={`${experienceStyles.timeline_item}`}>
        <div className={`${experienceStyles.timeline_left}`}>
          <div className={`${experienceStyles.timeline_date_text}`}>
            January 2026
          </div>
        </div>
        <div className={`${experienceStyles.timeline_center}`}>
          <div className={`${experienceStyles.timeline_circle}`}></div>
        </div>
        <div className={`${experienceStyles.timeline_right}`}>
          <div className={`${experienceStyles.margin_bottom_xlarge}`}>
            <div className={`${experienceStyles.timeline_text}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              animi voluptate quae, neque veniam quaerat, eius distinctio porro
              dolorem ex sapiente illo sunt impedit eos consequuntur ipsa,
              soluta quasi sequi! Iusto explicabo quibusdam unde porro, ex
              nesciunt animi aliquid voluptas minima sit saepe voluptatem
              accusamus temporibus reprehenderit minus odio dolor distinctio.
              Modi ratione quaerat praesentium architecto. Modi soluta incidunt
              iusto.
            </div>
          </div>
          <div className={`${experienceStyles.timeline_image_wrapper}`}>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/960x0.jpg"
              loading="lazy"
              width="480"
              alt="Tesla Roadster"
            />
          </div>
        </div>
      </div>

      <div className={`${experienceStyles.timeline_item}`}>
        <div className={`${experienceStyles.timeline_left}`}>
          <div className={`${experienceStyles.timeline_date_text}`}>
            January 2026
          </div>
        </div>
        <div className={`${experienceStyles.timeline_center}`}>
          <div className={`${experienceStyles.timeline_circle}`}></div>
        </div>
        <div className={`${experienceStyles.timeline_right}`}>
          <div className={`${experienceStyles.margin_bottom_xlarge}`}>
            <div className={`${experienceStyles.timeline_text}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              animi voluptate quae, neque veniam quaerat, eius distinctio porro
              dolorem ex sapiente illo sunt impedit eos consequuntur ipsa,
              soluta quasi sequi! Iusto explicabo quibusdam unde porro, ex
              nesciunt animi aliquid voluptas minima sit saepe voluptatem
              accusamus temporibus reprehenderit minus odio dolor distinctio.
              Modi ratione quaerat praesentium architecto. Modi soluta incidunt
              iusto.
            </div>
          </div>
          <div className={`${experienceStyles.timeline_image_wrapper}`}>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/960x0.jpg"
              loading="lazy"
              width="480"
              alt="Tesla Roadster"
            />
          </div>
        </div>
      </div>

      <div className={`${experienceStyles.timeline_item}`}>
        <div className={`${experienceStyles.timeline_left}`}>
          <div className={`${experienceStyles.timeline_date_text}`}>
            January 2026
          </div>
        </div>
        <div className={`${experienceStyles.timeline_center}`}>
          <div className={`${experienceStyles.timeline_circle}`}></div>
        </div>
        <div className={`${experienceStyles.timeline_right}`}>
          <div className={`${experienceStyles.margin_bottom_xlarge}`}>
            <div className={`${experienceStyles.timeline_text}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              animi voluptate quae, neque veniam quaerat, eius distinctio porro
              dolorem ex sapiente illo sunt impedit eos consequuntur ipsa,
              soluta quasi sequi! Iusto explicabo quibusdam unde porro, ex
              nesciunt animi aliquid voluptas minima sit saepe voluptatem
              accusamus temporibus reprehenderit minus odio dolor distinctio.
              Modi ratione quaerat praesentium architecto. Modi soluta incidunt
              iusto.
            </div>
          </div>
          <div className={`${experienceStyles.timeline_image_wrapper}`}>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/960x0.jpg"
              loading="lazy"
              width="480"
              alt="Tesla Roadster"
            />
          </div>
        </div>
      </div>

      {/* <div className={`${experienceStyles.overlay_fade_top}`}></div>
      <div className={`${experienceStyles.overlay_fade_bottom}`}></div> */}
    </div>
  );
};

export default ExperienceTimeline;
