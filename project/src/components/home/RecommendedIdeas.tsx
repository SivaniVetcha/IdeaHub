import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Heart, Users, Calendar, Star, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const demoIdeas = [
  {
    id: 1,
    title: "AI-Powered Exam Evaluator",
    description: "Intelligent system that automatically evaluates and grades exam papers using advanced NLP and machine learning algorithms, providing detailed feedback to students.",
   // author: "pallapothu.2024@vitstudent.ac.in",
    authorName: "Pallapothu Amrutha",
    skills: ["AI", "NLP", "Python", "Machine Learning"],
    likes: 89,
    teamSize: 2,
    maxTeamSize: 4,
    postedDate: "2 days ago",
    isRecommended: true,
    category: "Education"
  },
  {
    id: 2,
    title: "Mental Health Tracker App",
    description: "Comprehensive mobile application that helps students track their mental health, provides mood analysis, and connects them with counseling resources.",
    //author: "vetcha.sivani2024@vitstudent.ac.in",
    authorName: "Vetcha Sivani",
    skills: ["Flutter", "UX Design", "Psychology", "Mobile Dev"],
    likes: 67,
    teamSize: 3,
    maxTeamSize: 5,
    postedDate: "1 week ago",
    isRecommended: true,
    category: "Health"
  },
  {
    id: 3,
    title: "Blockchain Voting Portal",
    description: "Secure and transparent voting system built on blockchain technology for student elections and organizational decision-making processes.",
    //author: "tallam.saisriya2024@vitstudent.ac.in",
    authorName: "Tallam Sai Sriya",
    skills: ["Blockchain", "Web3", "Solidity", "React"],
    likes: 124,
    teamSize: 4,
    maxTeamSize: 6,
    postedDate: "3 days ago",
    isRecommended: true,
    category: "Technology"
  }
];

export const RecommendedIdeas: React.FC = () => {
  const handleConnect = (email: string, projectTitle: string) => {
    const subject = encodeURIComponent(`Interested in collaborating on: ${projectTitle}`);
    const body = encodeURIComponent(`Hi,\n\nI found your project "${projectTitle}" on IdeaHub and I'm interested in collaborating. I'd love to discuss this opportunity further.\n\nBest regards`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Top Ideas
            </span>
            {' '}— Recommended For You
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover innovative project ideas tailored to your skills and interests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
          {demoIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full" hover glow={idea.isRecommended}>
                <div className="p-6">
                  {/* Header with Recommended Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {idea.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {idea.description}
                      </p>
                    </div>
                    {idea.isRecommended && (
                      <motion.div 
                        className="ml-2"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <Badge variant="recommended">
                          <Star className="w-3 h-3 mr-1" />
                          Recommended
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  {/* Author */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                      {idea.authorName.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{idea.authorName}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {idea.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-500" />
                        {idea.likes}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-blue-500" />
                        {idea.teamSize}/{idea.maxTeamSize}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {idea.postedDate}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1" 
                      size="sm"
                      onClick={() => handleConnect(idea.authorName, idea.title)}
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/explore">
            <Button variant="outline" size="lg" className="group">
              View All Ideas
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};