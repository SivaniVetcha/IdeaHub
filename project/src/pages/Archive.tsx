import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Heart, Bookmark, Users, Calendar, Trash2, Archive as ArchiveIcon } from 'lucide-react';

const mockArchiveItems = [
  {
    id: 1,
    title: "AI-Powered Exam Evaluator",
    description: "Intelligent system that automatically evaluates and grades exam papers using advanced NLP and machine learning algorithms.",
    author: "pallapothu.2024@vitstudent.ac.in",
    authorName: "Pallapothu Student",
    skills: ["AI", "NLP", "Python"],
    likes: 89,
    teamSize: 2,
    maxTeamSize: 4,
    postedDate: "2 days ago",
    savedDate: "1 day ago",
    type: "liked",
    category: "Education"
  },
  {
    id: 2,
    title: "Mental Health Tracker App",
    description: "Comprehensive mobile application that helps students track their mental health and provides mood analysis.",
    author: "vetcha.sivani2024@vitstudent.ac.in",
    authorName: "Vetcha Sivani",
    skills: ["Flutter", "UX Design", "Psychology"],
    likes: 67,
    teamSize: 3,
    maxTeamSize: 5,
    postedDate: "1 week ago",
    savedDate: "5 days ago",
    type: "saved",
    category: "Health"
  },
  {
    id: 3,
    title: "Blockchain Voting Portal",
    description: "Secure and transparent voting system built on blockchain technology for student elections.",
    author: "tallam.saisriya2024@vitstudent.ac.in",
    authorName: "Tallam Sai Sriya",
    skills: ["Blockchain", "Web3", "Solidity"],
    likes: 124,
    teamSize: 4,
    maxTeamSize: 6,
    postedDate: "3 days ago",
    savedDate: "2 days ago",
    type: "liked",
    category: "Technology"
  },
  {
    id: 4,
    title: "Smart Campus Navigation",
    description: "AR-based navigation system for college campuses with real-time location tracking.",
    author: "student@vitstudent.ac.in",
    authorName: "Campus Navigator",
    skills: ["AR", "Mobile Dev", "Unity"],
    likes: 45,
    teamSize: 2,
    maxTeamSize: 4,
    postedDate: "1 day ago",
    savedDate: "1 day ago",
    type: "saved",
    category: "Technology"
  }
];

const filterOptions = ["All", "Liked", "Saved"];

export const Archive: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [archiveItems, setArchiveItems] = useState(mockArchiveItems);

  const filteredItems = archiveItems.filter(item => {
    if (selectedFilter === "All") return true;
    return item.type === selectedFilter.toLowerCase();
  });

  const handleRemoveItem = (id: number) => {
    setArchiveItems(prev => prev.filter(item => item.id !== id));
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
          <motion.div
            whileHover={{ rotateY: 10, scale: 1.05 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 rounded-2xl shadow-2xl">
              <ArchiveIcon className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Your Archive
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep track of your favorite ideas and saved projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {filterOptions.map(filter => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Archive Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="h-full" hover>
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      {item.type === 'liked' ? (
                        <Heart className="w-5 h-5 text-red-500 fill-current" />
                      ) : (
                        <Bookmark className="w-5 h-5 text-blue-500 fill-current" />
                      )}
                      <span className="text-sm font-medium text-gray-600">
                        {item.type === 'liked' ? 'Liked' : 'Saved'}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {item.authorName.charAt(0)}
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-gray-900">{item.authorName}</div>
                      <div className="text-xs text-gray-500">{item.author}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {item.likes}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {item.teamSize}/{item.maxTeamSize}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.postedDate}
                    </div>
                  </div>

                  {/* Archive Info */}
                  <div className="text-xs text-gray-500 mb-4">
                    {item.type === 'liked' ? 'Liked' : 'Saved'} {item.savedDate}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Connect
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Bookmark className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">No {selectedFilter.toLowerCase()} items found.</p>
            <p className="text-gray-400 mt-2">
              {selectedFilter === "All" 
                ? "Start exploring ideas and save your favorites!"
                : `No ${selectedFilter.toLowerCase()} items yet. Start ${selectedFilter.toLowerCase() === 'liked' ? 'liking' : 'saving'} ideas!`
              }
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};