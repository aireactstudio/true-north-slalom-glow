import React, { useState } from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, ArrowRight, MailIcon, BuildingIcon, PhoneIcon, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
  phone: z.string().optional(),
  serviceInterest: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Please provide a brief description of your needs' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      phone: '',
      serviceInterest: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(data);
      
      // Show success state
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[30%] w-96 h-96 bg-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-[10%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-white/80">
            Let us handle healthcare IT, so you can focus on patient care and spend less on IT labor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          {/* Left column - Contact info */}
          <div className="lg:col-span-2 text-white">
            <div className="bg-blue-900/30 backdrop-blur-sm border-2 border-blue-600 p-8 rounded-xl shadow-lg shadow-blue-900/20">
              <h3 className="text-2xl font-bold mb-6">How Can We Help?</h3>
              <p className="text-white/80 mb-10 leading-relaxed">
                We're dedicated to helping healthcare providers optimize their IT infrastructure and improve patient care. 
                Get in touch with us to discuss how we can help your organization.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-900/40 p-3 mt-1">
                    <PhoneIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Call Us</h4>
                    <p className="text-white/70">1.855.383.4300</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-900/40 p-3 mt-1">
                    <MailIcon className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email Us</h4>
                    <p className="text-white/70">info@truenorthitg.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-900/40 p-3 mt-1">
                    <BuildingIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Visit Us</h4>
                    <p className="text-white/70">16504 9th Ave SE, #203<br />Mill Creek, WA 98012</p>
                  </div>
                </div>
              </div>
              
              <div className="h-36 lg:h-full relative mt-10 lg:mt-0 border-2 border-purple-600 p-8 rounded-xl bg-blue-900/20 flex items-center justify-center shadow-lg shadow-blue-900/20">
                <img 
                  src="/images/tn-logo-light.svg" 
                  alt="True North ITG Logo" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-blue-900/30 backdrop-blur-sm border-2 border-green-600 p-8 rounded-xl shadow-lg shadow-blue-900/20 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-white/80 mb-8">
                  Thank you for reaching out. One of our representatives will contact you shortly to discuss your healthcare IT needs.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-500 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-blue-900/30 backdrop-blur-sm border-2 border-red-600 p-8 rounded-xl shadow-lg shadow-blue-900/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium">
                              First Name <span className="text-blue-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your first name" 
                                className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium">
                              Last Name <span className="text-blue-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your last name" 
                                className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium">
                              Email <span className="text-blue-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="your@email.com" 
                                  type="email" 
                                  className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400 pl-10" 
                                  {...field} 
                                />
                                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="(123) 456-7890" 
                                  className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400 pl-10" 
                                  {...field} 
                                />
                                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Organization <span className="text-blue-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Your company or practice name" 
                                className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400 pl-10" 
                                {...field} 
                              />
                              <BuildingIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Service Interest <span className="text-blue-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-blue-950/30 border-blue-800/60 text-white focus:border-blue-400">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-blue-900 border-blue-800 text-white">
                              <SelectItem value="managed-cloud" className="focus:bg-blue-800">Managed Cloud Services</SelectItem>
                              <SelectItem value="managed-security" className="focus:bg-blue-800">Managed Security & DR</SelectItem>
                              <SelectItem value="managed-it" className="focus:bg-blue-800">Managed IT Solutions</SelectItem>
                              <SelectItem value="ehr-implementation" className="focus:bg-blue-800">EHR Implementation</SelectItem>
                              <SelectItem value="it-consultation" className="focus:bg-blue-800">IT Consultation</SelectItem>
                              <SelectItem value="other" className="focus:bg-blue-800">Other Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Message <span className="text-blue-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea 
                                placeholder="Tell us about your healthcare IT needs..." 
                                className="bg-blue-950/30 border-blue-800/60 text-white placeholder:text-white/50 focus:border-blue-400 min-h-[120px] pl-10 pt-8" 
                                {...field} 
                              />
                              <MessageSquare className="absolute left-3 top-8 h-4 w-4 text-blue-400" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-6 rounded-lg transition-colors flex items-center justify-center gap-2 h-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
