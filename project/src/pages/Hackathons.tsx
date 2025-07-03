import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, Users, Award, ExternalLink, Trophy } from 'lucide-react';

const hackathons = [
  {
    id: 1,
    title: "Smart India Hackathon 2024",
    description: "Nation's biggest hackathon fostering innovation and providing platform for students to solve real-world problems.",
    organizer: "Government of India",
    registrationDeadline: "December 15, 2024",
    eventDate: "February 20-22, 2025",
    duration: "36 hours",
    maxTeamSize: 6,
    prizePool: "₹1 Crore+",
    category: "National",
    status: "Open",
    website: "https://sih.gov.in",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Google Summer of Code 2024",
    description: "Global program focusing on bringing student developers into open source software development.",
    organizer: "Google",
    registrationDeadline: "March 19, 2024",
    eventDate: "May 1 - August 26, 2024",
    duration: "12 weeks",
    maxTeamSize: 1,
    prizePool: "$1500-$6600",
    category: "International",
    status: "Upcoming",
    website: "https://summerofcode.withgoogle.com",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "HackBengaluru 2024",
    description: "Bengaluru's premier hackathon bringing together the brightest minds to solve city-centric challenges.",
    organizer: "Tech Community Bengaluru",
    registrationDeadline: "November 30, 2024",
    eventDate: "December 14-15, 2024",
    duration: "24 hours",
    maxTeamSize: 4,
    prizePool: "₹5 Lakhs",
    category: "Regional",
    status: "Open",
    website: "https://hackbengaluru.com",
    image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Microsoft Imagine Cup 2024",
    description: "Global competition for student developers to create innovative technology solutions.",
    organizer: "Microsoft",
    registrationDeadline: "January 15, 2025",
    eventDate: "March 15-17, 2025",
    duration: "48 hours",
    maxTeamSize: 4,
    prizePool: "$100,000",
    category: "International",
    status: "Coming Soon",
    website: "https://imaginecup.microsoft.com",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "TechFest IIT Bombay 2024",
    description: "Asia's largest science and technology festival with exciting hackathon competitions.",
    organizer: "IIT Bombay",
    registrationDeadline: "December 10, 2024",
    eventDate: "January 10-12, 2025",
    duration: "30 hours",
    maxTeamSize: 5,
    prizePool: "₹10 Lakhs",
    category: "National",
    status: "Open",
    website: "https://techfest.org",
    image: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Flipkart GRiD 4.0",
    description: "India's biggest tech challenge for engineering students with real-world problem statements.",
    organizer: "Flipkart",
    registrationDeadline: "February 28, 2025",
    eventDate: "April 15-17, 2025",
    duration: "36 hours",
    maxTeamSize: 3,
    prizePool: "₹15 Lakhs",
    category: "National",
    status: "Coming Soon",
    website: "https://dare2compete.com/flipkart-grid",
    image: "https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const categories = ["All", "National", "International", "Regional"];
const statuses = ["All", "Open", "Upcoming", "Coming Soon"];

export const Hackathons: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesCategory = selectedCategory === "All" || hackathon.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || hackathon.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

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
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hackathons
            </span>
            {' '}& Competitions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest hackathons and coding competitions across India and globally
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
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
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Status</h3>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedStatus === status
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="h-full overflow-hidden" hover>
                <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={hackathon.category === 'International' ? 'secondary' : 'primary'}>
                      {hackathon.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={
                      hackathon.status === 'Open' ? 'success' : 
                      hackathon.status === 'Upcoming' ? 'warning' : 'secondary'
                    }>
                      {hackathon.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                    {hackathon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {hackathon.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Registration: {hackathon.registrationDeadline}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {hackathon.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      Team Size: {hackathon.maxTeamSize} max
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      Prize Pool: {hackathon.prizePool}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">
                      Register Now
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

        {filteredHackathons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No hackathons found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};