// src/pages/ManageCourses.tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Courses } from '../data/courses'
import { CourseCard } from '../shared/courseCards'
import { Layout } from '../components/layout'
import { NewCourseDialog } from '@/shared/form'
import Footer from './footer'

const myCourses = Courses.filter(course => course.isMine)
const allCourses = Courses

export default function ManageCourses() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Inter', 'sans-serif'" }}>
          Manage Courses
        </h1>
        
        <Tabs defaultValue="my" className="space-y-4">
          {/* Custom styled tabs header */}
          <div className="flex items-center justify-between">
            <TabsList className="bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="my" 
                className="
                  px-6 py-2 rounded-md transition-all duration-300 ease-in-out font-medium
                  data-[state=active]:bg-[#FE3448] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:border-transparent
                  hover:border-[#FE3448] hover:border-2 hover:text-[#FE3448] hover:bg-transparent
                  text-gray-600 border-2 border-transparent
                "
                style={{ fontFamily: "'Inter', 'sans-serif'" }}
              >
                My Courses
              </TabsTrigger>
              <TabsTrigger 
                value="all"
                className="
                  px-6 py-2 rounded-md transition-all duration-300 ease-in-out font-medium
                  data-[state=active]:bg-[#FE3448] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:border-transparent
                  hover:border-[#FE3448] hover:border-2 hover:text-[#FE3448] hover:bg-transparent
                  text-gray-600 border-2 border-transparent
                "
                style={{ fontFamily: "'Inter', 'sans-serif'" }}
              >
                All Courses
              </TabsTrigger>
            </TabsList>

            {/* New Course Dialog Button - positioned on far right */}
            <div className="ml-auto">
              <NewCourseDialog />
            </div>
          </div>

          <TabsContent value="my" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map(course => <CourseCard key={course.id} course={course} />)}
          </TabsContent>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map(course => <CourseCard key={course.id} course={course} />)}
          </TabsContent>
        </Tabs>
        
        <Footer />
      </Layout>
    </>
  )
}