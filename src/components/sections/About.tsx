import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe, Lightbulb } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We deliver exceptional results through rigorous analysis and innovative solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with your team to ensure seamless integration and knowledge transfer."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Our solutions are informed by global best practices and local market insights."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technologies to drive transformational change."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SYNESTRA
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Pune, SYNESTRA is a leading AI solutions company specializing in strategic advisory 
              and organizational transformation. We help businesses navigate the complexities of digital 
              transformation and harness the power of artificial intelligence.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experts combines deep industry knowledge with cutting-edge AI technologies 
              to deliver solutions that drive measurable business outcomes. From market research to 
              strategic planning, we're your trusted partner in the journey toward AI-driven success.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To empower organizations with AI-driven strategies that unlock their full potential 
                and create sustainable competitive advantages in the digital economy.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SYNESTRA?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h4>
              <p className="text-gray-600">Deep expertise in AI and digital transformation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600">Round-the-clock assistance for your projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customized</h4>
              <p className="text-gray-600">Tailored solutions for your unique needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About