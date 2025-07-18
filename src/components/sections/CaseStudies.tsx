import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react'
import { Button } from '../ui/button'

const CaseStudies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const caseStudies = [
    {
      title: "Manufacturing Excellence",
      client: "Leading Automotive Manufacturer",
      industry: "Manufacturing",
      challenge: "Optimize production efficiency and reduce operational costs through AI-driven predictive maintenance.",
      solution: "Implemented AI-powered predictive analytics system with real-time monitoring and automated alerts.",
      results: [
        { metric: "35%", description: "Reduction in downtime" },
        { metric: "₹2.5Cr", description: "Annual cost savings" },
        { metric: "90%", description: "Prediction accuracy" }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Retail Revolution",
      client: "Multi-chain Retail Group",
      industry: "Retail",
      challenge: "Enhance customer experience and optimize inventory management across 50+ stores.",
      solution: "Deployed AI-driven customer analytics and demand forecasting system with personalized recommendations.",
      results: [
        { metric: "45%", description: "Increase in sales" },
        { metric: "60%", description: "Inventory optimization" },
        { metric: "4.8/5", description: "Customer satisfaction" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Financial Services Transformation",
      client: "Leading Banking Institution",
      industry: "Financial Services",
      challenge: "Enhance fraud detection and improve customer service through intelligent automation.",
      solution: "Implemented AI-driven fraud detection system with real-time transaction monitoring and automated customer support.",
      results: [
        { metric: "85%", description: "Fraud detection accuracy" },
        { metric: "50%", description: "Faster response time" },
        { metric: "₹3.2Cr", description: "Annual savings" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable transformations
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div ref={ref} className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{study.client}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <Users className="w-5 h-5 text-blue-500" />
                        <Zap className="w-5 h-5 text-yellow-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Success Metrics</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that have transformed their operations with SYNESTRA's AI solutions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
            Start Your Transformation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies