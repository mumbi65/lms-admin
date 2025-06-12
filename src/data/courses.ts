// src/data/courses.ts
export interface Courses {
  id: number
  title: string
  description: string
  price: string
  rating: number
  reviews: number
  image: string
  isMine: boolean
}

export const Courses: Courses[] = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Learn how to program with Python. From basic syntax and data types to using web services and object-oriented programming',
    price: 'KES 25,000',
    rating: 4.7,
    reviews: 13,
    image: "/src/assets/images/image1.jpg",
    isMine: false,
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    description: 'Learn the fundamentals of writing efficient and scalable code. Beat the "Big Tech" technical interview',
    price: 'KES 5,000',
    rating: 4.9,
    reviews: 10,
    image: "/src/assets/images/image2.jpg",
    isMine: false,
  },
  {
    id: 3,
    title: 'Django Backend Development',
    description: 'Learn how to build scalable backend with Python and the Django framework, work with database, and build backend APIs',
    price: 'KES 25,000',
    rating: 4.8,
    reviews: 20,
    image: "/src/assets/images/image3.jpg",
    isMine: false,
  },
  {
    id: 4,
    title: 'Python Data Analytics',
    description: 'Learn the Numpy array manipulation, Pandas data analysis, and visualisation with Matplotlib, Seaborn, and Plotly',
    price: 'KES 25,000',
    rating: 4.7,
    reviews: 13,
    image: "/src/assets/images/image4.jpg",
    isMine: true,
  },
  {
    id: 5,
    title: 'General Data Analytics',
    description: 'Learn how to query and structure relational databases with SQL, and how to analyse data with MS Excel and Tableau',
    price: 'KES 25,000',
    rating: 4.9,
    reviews: 10,
    image: "/src/assets/images/image5.jpg",
    isMine: true,
  },
  {
    id: 6,
    title: 'Machine Learning Fundamentals',
    description: 'Learn data preparation for ML, supervised learning algorithms, and model evaluation with Python and Scikit Learn',
    price: 'KES 25,000',
    rating: 4.8,
    reviews: 20,
    image: "/src/assets/images/image6.jpg",
    isMine: true,
  }
]
