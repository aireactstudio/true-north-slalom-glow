import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
    alert('Form submitted successfully! We\'ll be in touch soon.');
    form.reset();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-tnorth to-tnorth-dark rounded-lg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Let us handle healthcare IT, so you can focus on patient care and spend less on IT labor.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6">
              Getting it done is cheaper than you think
            </p>
            <img 
              src="/lovable-uploads/true-north-logo-white.png" 
              alt="True North" 
              className="w-48 mb-6"
            />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-tnorth-dark mb-6">Request Pricing Information</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-tnorth-text-dark font-medium">
                          First name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Type your first name" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-tnorth-text-dark font-medium">
                          Last name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Type your last name" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-tnorth-text-dark font-medium">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Type your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-tnorth-text-dark font-medium">
                        Company name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Type your company" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-24 w-full bg-gray-100 flex items-center justify-center rounded border border-gray-300">
                    <p className="text-gray-500 text-sm">reCAPTCHA would appear here</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-tnorth hover:bg-tnorth-light text-white font-medium py-3 rounded transition-colors"
                >
                  Download Your Service Pricing
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
