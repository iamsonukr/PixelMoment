import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

function Hero() {
    const textVariants={
        initial:{
            x:-500,
            opaCity:0,
        },
        animate:{
            x:0,
            opaCity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            }
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    }

    const sliderVariants={
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20,
            }
        }
    }
  return (
      <div className='hero'>
          <div className="wrapper">
            {/* Text container here */}
              <motion.div className="textContainer" 
              variants={textVariants}
              initial="initial"
              animate="animate"
              >
                  <motion.h2>Pixel Moment</motion.h2>
                  <motion.h1>Photography</motion.h1>
                  <motion.p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae esse fugit expedita vitae ipsa? Enim atque reprehenderit doloremque beatae impedit deleniti! Neque facilis expedita quos dignissimos quas, earum fuga harum dolorum pariatur laboriosam!
                  </motion.p>
                  <motion.div className="buttons">
                      <button>See the latest work</button>
                      <button>Contact Us</button>
                  </motion.div>
                  <motion.img src="/scroll.png" variants={textVariants}
                  animate='scrollButton' alt="" />
              </motion.div>
              {/* Sliding text */}
              <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Birthday Photoshoot, Marraige Photshoot ,Event Photography and VideoGraphy
              </motion.div>

              {/* Image container here */}
              <motion.div className="imageContainer">
                  <img className='heroImg' src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_840.jpg" alt="" />
              </motion.div>
          </div>
      </div>
  )
}

export default Hero