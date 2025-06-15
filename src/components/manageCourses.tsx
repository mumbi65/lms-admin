// src/pages/ManageCourses.tsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Courses } from '../data/courses';
import { CourseCard } from '../shared/courseCards';
import { Layout } from '../components/layout';
import { NewCourseDialog } from '@/shared/form';
import Footer from './footer';
import { AnimatePresence, motion } from 'framer-motion';


export default function ManageCourses() {
  const [tab, setTab] = useState<'my' | 'all'>('my');
  const [searchTerm, setSearchTerm] = useState('');

  const myFilteredCourses = Courses.filter(
    c => c.isMine && c.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const allFilteredCourses = Courses.filter(
    c => c.title.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <Layout onSearch={term => setSearchTerm(term)}>
      <h1 className="text-3xl font-bold text-black mb-3 font-heading">
        Manage Courses
      </h1>

      <Tabs
        defaultValue="my"
        onValueChange={(value: string) => setTab(value as 'my' | 'all')}
        className="space-y-4"
      >
        
        <div className="flex items-center justify-between">
          <TabsList className="bg-cream p-1 rounded-lg flex gap-2 sm:gap-4">
            {['my','all'].map((value) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`
                  px-4 py-1 sm:px-6 sm:py-2 rounded-md
                  transition-all duration-300 ease-in-out font-medium font-body
                  data-[state=active]:bg-red
                  data-[state=active]:text-white
                  data-[state=active]:shadow-sm
                  data-[state=active]:border-transparent
                  hover:border-red
                  hover:border-2
                  hover:text-red
                  hover:bg-transparent
                  text-black
                  border-2 border-transparent
                `}
              >
                {value === 'my' ? 'My Courses' : 'All Courses'}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="ml-auto inline-block px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base">
            <NewCourseDialog />
          </div>
        </div>

       
        <AnimatePresence mode="wait">
          {tab === 'my' && (
            <motion.div
              key="my"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {myFilteredCourses.map((course) => (
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
              {allFilteredCourses.map((course) => (
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