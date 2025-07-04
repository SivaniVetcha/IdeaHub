import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, Users, Calendar, Star, Mail, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const allIdeas = [
  {
    id: 1,
    title: "AI-Powered Exam Evaluator",
    description: "Intelligent system that automatically evaluates and grades exam papers using advanced NLP and machine learning algorithms, providing detailed feedback to students.",
    author: "pallapothu.2024@vitstudent.ac.in",
    authorName: "Pallapothu Student",
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
    author: "vetcha.sivani2024@vitstudent.ac.in",
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
    author: "tallam.saisriya2024@vitstudent.ac.in",
    authorName: "Tallam Sai Sriya",
    skills: ["Blockchain", "Web3", "Solidity", "React"],
    likes: 124,
    teamSize: 4,
    maxTeamSize: 6,
    postedDate: "3 days ago",
    isRecommended: true,
    category: "Technology"
  },
  {
    id: 4,
    title: "Smart Campus Navigation",
    description: "AR-based navigation system for college campuses with real-time location tracking and interactive campus information.",
    author: "student1@vitstudent.ac.in",
    authorName: "Campus Navigator",
    skills: ["AR", "Mobile Dev", "Unity", "GPS"],
    likes: 45,
    teamSize: 2,
    maxTeamSize: 4,
    postedDate: "5 days ago",
    isRecommended: false,
    category: "Technology"
  },
  {
    id: 5,
    title: "Sustainable Energy Monitor",
    description: "IoT-based system to monitor and optimize energy consumption in college dormitories and academic buildings.",
    author: "student2@vitstudent.ac.in",
    authorName: "Energy Saver",
    skills: ["IoT", "Arduino", "Data Analytics", "Web Dev"],
    likes: 33,
    teamSize: 3,
    maxTeamSize: 5,
    postedDate: "1 week ago",
    isRecommended: false,
    category: "Environment"
  }
];

const skills = ["AI", "Web Dev", "Mobile Dev", "Blockchain", "IoT", "Data Science", "UX Design", "AR/VR", "Python", "React"];
const categories = ["All", "Education", "Health", "Technology", "Environment"];

export const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredIdeas, setFilteredIdeas] = useState(allIdeas);

  const handleSkillToggle = (skill: string) => {
    const newSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    setSelectedSkills(newSkills);
    filterIdeas(searchTerm, newSkills, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterIdeas(searchTerm, selectedSkills, category);
  };

  const filterIdeas = (search: string, skills: string[], category: string) => {
    let filtered = allIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(search.toLowerCase()) ||
                           idea.description.toLowerCase().includes(search.toLowerCase()) ||
                           idea.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
      const matchesSkills = skills.length === 0 || 
                           skills.some(skill => idea.skills.includes(skill));
      const matchesCategory = category === 'All' || idea.category === category;
      
      return matchesSearch && matchesSkills && matchesCategory;
    });
    
    setFilteredIdeas(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterIdeas(value, selectedSkills, selectedCategory);
  };

  const handleConnect = (email: string, projectTitle: string) => {
    const subject = encodeURIComponent(`Interested in collaborating on: ${projectTitle}`);
    const body = encodeURIComponent(`Hi,\n\nI found your project "${projectTitle}" on IdeaHub and I'm interested in collaborating. I'd love to discuss this opportunity further.\n\nBest regards`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Explore Ideas
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover innovative project ideas from talented students across India
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search ideas by keyword, skill, or technology..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skills Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <motion.button
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="h-full" hover glow={idea.isRecommended}>
                <div className="p-6">
                  {/* Header */}
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

                  {/* Actions */}
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

        {filteredIdeas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No ideas found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};