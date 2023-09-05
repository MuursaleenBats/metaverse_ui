'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import {staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {NewFeatures, TitleText, TypingText } from "../components";
import { mewFeatures, newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView='show'
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText
          title='| Whats New'
        />
        <TitleText 
          title={<>What's new about metaverse</>}
        />
        <div
        className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
      >
        {newFeatures.map((feature, index) => (
          <NewFeatures 
            
          />
        ))}
      </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1`} 
      >
        <img
          src="/whats-new.png"
          alt="Whats New"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
