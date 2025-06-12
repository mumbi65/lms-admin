// src/pages/ManageCourses.tsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Courses } from '../data/courses';
import { CourseCard } from '../shared/courseCards';
import { Layout } from '../components/layout';
import { NewCourseDialog } from '@/shared/form';
import Footer from './footer';
import { AnimatePresence, motion } from 'framer-motion';

const myCourses  = Courses.filter(c => c.isMine);
const allCourses = Courses;

export default function ManageCourses() {
  const [tab, setTab] = useState<'my' | 'all'>('my');

  return (
    <Layout>
      <h1
        className="text-3xl font-bold text-gray-900 mb-3"
        style={{ fontFamily: "'Inter', 'sans-serif'" }}
      >
        Manage Courses
      </h1>

      <Tabs
        defaultValue="my"
        onValueChange={(value: string) => setTab(value as 'my' | 'all')}
        className="space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <TabsList className="bg-gray-100 p-1 rounded-lg flex gap-2 sm:gap-4">
            {['my','all'].map((value) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`
                  px-4 py-1 sm:px-6 sm:py-2 rounded-md
                  transition-all duration-300 ease-in-out font-medium
                  data-[state=active]:bg-[#FE3448]
                  data-[state=active]:text-white
                  data-[state=active]:shadow-sm
                  data-[state=active]:border-transparent
                  hover:border-[#FE3448]
                  hover:border-2
                  hover:text-[#FE3448]
                  hover:bg-transparent
                  text-gray-600
                  border-2 border-transparent
                `}
                style={{ fontFamily: "'Open Sans', 'sans-serif'" }}
              >
                {value === 'my' ? 'My Courses' : 'All Courses'}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="ml-auto inline-block px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base">
            <NewCourseDialog />
          </div>
        </div>

        {/* Animated panels */}
        <AnimatePresence mode="wait">
          {tab === 'my' && (
            <motion.div
              key="my"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {myCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          )}

          {tab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>

      <Footer />
    </Layout>
  );
}
