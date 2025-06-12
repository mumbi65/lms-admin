// src/components/CourseCard.tsx
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import { Courses } from '../data/courses'

interface CourseCardProps { 
  course: Courses 
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="border-border rounded-2xl overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top' }}
        />
      </div>
      <CardContent className="space-y-2">
        <h3 
          className="text-l text-black font-semibold"
          style={{ fontFamily: "'Inter', 'sans-serif'" }}
        >
          {course.title}
        </h3>
        <p 
          className="text-sm text-black/80 line-clamp-2"
          style={{ fontFamily: "'Open Sans', 'sans-serif'" }}
        >
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <span 
            className="text-base text-black font-medium"
            style={{ fontFamily: "'Open Sans', 'sans-serif'" }}
          >
            {course.price}
          </span>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500 text-sm" />
            <span 
              className="text-sm text-gray-600"
              style={{ fontFamily: "'Open Sans', 'sans-serif'" }}
            >
              {course.rating} ({course.reviews} reviews)
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          variant="outline" 
          className="w-full border-[#FE3448] text-[#FE3448] hover:bg-[#E12D3F] hover:text-white hover:border-[#E12D3F] transition-colors duration-200 flex items-center justify-center space-x-2"
          style={{ fontFamily: "'Open Sans', 'sans-serif'" }}
        >
          <span>{course.isMine ? 'Manage Course' : 'Learn More'}</span>
          <FaArrowRight className="text-sm" />
        </Button>
      </CardFooter>
    </Card>
  )
}