import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, XIcon } from 'lucide-react';
export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background Video with dark overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-globus-blue-dark/75 z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80">
            
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4" />
            
          </video>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="mb-8">
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-24 h-24 bg-globus-orange hover:bg-globus-orange-hover rounded-full flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-110 group relative">
              
              <div className="absolute inset-0 rounded-full border-4 border-globus-orange animate-ping opacity-75"></div>
              <PlayIcon className="w-10 h-10 text-white ml-2" />
            </button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}>
            
            <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl text-white mb-6">
              Notre Promesse
            </h2>
            <p className="font-opensans text-xl text-seconda-blue max-w-2xl mx-auto">
              Transparence totale et qualité irréprochable. Entrez dans les
              coulisses de nos chantiers et découvrez notre savoir-faire en
              action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {isModalOpen &&
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}>
          
            {/* Backdrop */}
            <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }} />
          

            {/* Modal Content */}
            <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl z-10"
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}>
            
              {/* Close Button */}
              <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-20">
              
                <XIcon className="w-5 h-5" />
              </button>

              {/* YouTube Embed */}
              <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="Globus BTP - Notre Promesse"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
            
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}