import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { User, Github, Linkedin, Mail, Calendar, Award, Users, Lightbulb, LogOut, BookOpen, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

const profileTabs = [
  { id: 'ideas', label: 'Posted Ideas', icon: Lightbulb },
  { id: 'saved', label: 'Saved Ideas', icon: BookOpen },
  { id: 'skills', label: 'Skills', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Star }
];

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ideas');
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const mockProfile = {
    name: currentUser?.email?.split('@')[0] || "Student User",
    email: currentUser?.email || "student@vitstudent.ac.in",
    bio: "Computer Science student passionate about AI/ML and innovative technology solutions. Love building projects that make a real difference.",
    university: "Vellore Institute of Technology",
    year: "3rd Year",
    joinDate: "January 2024",
    github: "https://github.com/student",
    linkedin: "https://linkedin.com/in/student",
    skills: ["AI", "Machine Learning", "Python", "React", "Node.js", "Data Science", "UX Design"],
    postedIdeas: [
      {
        id: 1,
        title: "AI-Powered Study Assistant",
        description: "Intelligent tutoring system that adapts to individual learning styles.",
        likes: 45,
        teamSize: 3,
        status: "Active"
      },
      {
        id: 2,
        title: "Campus Sustainability Tracker",
        description: "App to track and gamify sustainable practices on campus.",
        likes: 23,
        teamSize: 2,
        status: "In Progress"
      }
    ],
    savedIdeas: [
      {
        id: 1,
        title: "Blockchain Voting Portal",
        author: "tallam.saisriya2024@vitstudent.ac.in",
        skills: ["Blockchain", "Web3"]
      },
      {
        id: 2,
        title: "Mental Health Tracker App",
        author: "vetcha.sivani2024@vitstudent.ac.in",
        skills: ["Flutter", "UX Design"]
      }
    ],
    achievements: [
      { title: "Hackathon Winner", description: "Won 1st place at TechFest 2024", date: "March 2024" },
      { title: "Open Source Contributor", description: "Contributed to 5+ open source projects", date: "2024" },
      { title: "Project Leader", description: "Led 3 successful project teams", date: "2024" }
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ideas':
        return (
          <div className="space-y-6">
            {mockProfile.postedIdeas.map(idea => (
              <Card key={idea.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {idea.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{idea.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{idea.likes} likes</span>
                      <span>{idea.teamSize} team members</span>
                    </div>
                  </div>
                  <Badge variant={idea.status === 'Active' ? 'success' : 'warning'}>
                    {idea.status}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'saved':
        return (
          <div className="space-y-6">
            {mockProfile.savedIdeas.map((idea, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{idea.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {idea.author}</p>
                    <div className="flex flex-wrap gap-2">
                      {idea.skills.map(skill => (
                        <Badge key={skill} variant="primary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  View Project
                </Button>
              </Card>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {mockProfile.skills.map(skill => (
                  <Badge key={skill} variant="primary" className="text-base px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="mt-6" variant="outline">
                Add New Skill
              </Button>
            </Card>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            {mockProfile.achievements.map((achievement, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <motion.div 
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
              >
                {mockProfile.name.charAt(0).toUpperCase()}
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mockProfile.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{mockProfile.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{mockProfile.university}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{mockProfile.year}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{mockProfile.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Joined {mockProfile.joinDate}</span>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={mockProfile.github}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={mockProfile.linkedin}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button>Edit Profile</Button>
                <Button variant="outline">Settings</Button>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Profile Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {profileTabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      whileHover={{ y: -2 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </Card>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};