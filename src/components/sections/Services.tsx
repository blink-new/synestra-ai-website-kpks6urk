import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, BarChart3, Cog, Users, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business objectives. We help you identify opportunities, assess readiness, and create roadmaps for successful AI implementation.",
      features: ["AI Readiness Assessment", "Strategic Roadmapping", "Technology Selection", "ROI Analysis"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Market Research & Analytics",
      description: "Leverage advanced analytics and AI-powered insights to understand market trends, customer behavior, and competitive landscapes for informed decision-making.",
      features: ["Market Intelligence", "Customer Analytics", "Competitive Analysis", "Trend Forecasting"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Organizational Transformation",
      description: "Guide your organization through digital transformation with change management strategies, process optimization, and cultural alignment for AI adoption.",
      features: ["Change Management", "Process Optimization", "Cultural Transformation", "Training & Development"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Strategic Advisory",
      description: "Provide executive-level guidance on AI governance, risk management, and strategic decision-making to ensure sustainable growth and competitive advantage.",
      features: ["Executive Coaching", "Risk Assessment", "Governance Framework", "Strategic Planning"],
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing tailored AI solutions and roadmaps" },
              { step: "03", title: "Implementation", description: "Executing the plan with precision and expertise" },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services