'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {Dialog,DialogTrigger,DialogContent,DialogHeader,DialogTitle,DialogDescription,DialogFooter,DialogClose,} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {Form,FormField,FormItem,FormLabel,FormControl,FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { toast } from 'sonner'; 

const courseFormSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  price: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1),
  pathways: z.array(z.string()).min(1),
  category: z.string().min(1),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  status: z.enum(['Draft', 'Published']),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;

export function NewCourseDialog() {
  const [open, setOpen] = useState(false);
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: '',
      slug: '',
      price: '',
      summary: '',
      description: '',
      pathways: [],
      category: '',
      difficulty: 'Beginner',
      status: 'Draft',
    },
  });

  const onSubmit = async (values: CourseFormValues) => {
    try {
      // await api.createCourse(values);
      console.log('New Course:', values);
      toast.success(`Created "${values.title}" successfully!`);
      setOpen(false);
      form.reset();
    } catch (err) {
      toast.error('Failed to create course. Please try again.');
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="
            bg-red hover:bg-red/90 active:bg-red/80 
            text-white font-medium px-6 py-2 rounded-lg
            transition-all duration-200 shadow-sm hover:shadow-md
            border-2 border-transparent hover:border-red
            flex items-center gap-2 font-body
          "
        >
          New Course
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full max-h-[97vh] overflow-auto">
        <style>{`
          .focus-red:focus, 
          .focus-red:focus-visible, 
          [data-focus-red]:focus,
          [data-focus-red]:focus-visible,
          .focus-red:focus-within {
            outline: 2px solid #FE3448 !important;
            outline-offset: 2px !important;
            border-color: #FE3448 !important;
            box-shadow: 0 0 0 2px rgba(254, 52, 72, 0.2) !important;
          }
          
          .select-trigger:focus,
          .select-trigger:focus-visible {
            outline: 2px solid #FE3448 !important;
            outline-offset: 2px !important;
            border-color: #FE3448 !important;
            box-shadow: 0 0 0 2px rgba(254, 52, 72, 0.2) !important;
          }
        `}</style>

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-black font-heading">
            Create New Course
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-heading">
            Fill in the details to create a new course for your students
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-black font-heading">
                    Course Title*
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Python Programming" 
                      className="focus-red mt-1 h-11 font-body"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-black font-heading">
                      Course Slug*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        placeholder="PYTHON" 
                        className="focus-red mt-1 h-11 font-body"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-black font-heading">
                      Price*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        placeholder="KES 30,000" 
                        className="focus-red mt-1 h-11 font-body"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-black font-heading">
                    Course Summary*
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Brief summary for course overview" 
                      rows={2} 
                      className="focus-red mt-1 resize-none font-body"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-black font-heading">
                    Course Description*
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Provide a detailed description of what students will learn" 
                      rows={4} 
                      className="focus-red mt-1 resize-none font-body"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pathways"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-black font-heading">
                    Associated Pathways*
                  </FormLabel>
                  <FormControl>
                    <Select 
                      onValueChange={(value) => {
                        if (value && !field.value.includes(value)) {
                          field.onChange([...field.value, value]);
                        }
                      }} 
                      value=""
                    >
                      <SelectTrigger className="select-trigger mt-1 h-11 w-full font-body" data-focus-red>
                        <SelectValue placeholder="Select all that apply" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                        <SelectItem value="DevOps">DevOps</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {field.value.map((pathway) => (
                        <div
                          key={pathway}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue/10 text-blue text-sm rounded-md border border-blue/20"
                        >
                          <span className="font-body">{pathway}</span>
                          <button
                            type="button"
                            onClick={() => {
                              field.onChange(field.value.filter((p) => p !== pathway));
                            }}
                            className="ml-1 text-blue hover:text-blue/70"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full grid grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium text-black font-heading">
                      Course Category*
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="select-trigger mt-1 h-11 w-full font-body" data-focus-red>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Programming">Programming</SelectItem>
                          <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                          <SelectItem value="DevOps">DevOps</SelectItem>
                          <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium text-black font-heading">
                      Difficulty*
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="select-trigger mt-1 h-11 w-full font-body" data-focus-red>
                          <SelectValue placeholder="Select Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-black font-heading">
                    Course Status*
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="select-trigger mt-1 h-11 w-full font-body" data-focus-red>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex justify-between items-center pt-6 gap-4">
              <DialogClose asChild>
                <Button 
                  variant="outline" 
                  className="
                    border-blue text-muted-foreground hover:bg-blue hover:text-white
                    px-20 py-3 h-11 font-heading
                  "
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit"
                className="
                  bg-red hover:bg-red/90 active:bg-red/80
                  text-white font-medium
                  transition-all duration-200
                  px-15 py-3 h-11 font-heading
                "
              >
                Create Course
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}