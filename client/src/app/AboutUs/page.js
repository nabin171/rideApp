"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Shield,
  Zap,
  Heart,
  Star,
} from "lucide-react";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observers = new Map();

    document.querySelectorAll("[data-animate]").forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.set(index, observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const stats = [
    {
      number: "2M+",
      label: "Happy Riders",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "500K+",
      label: "Active Drivers",
      icon: Award,
      color: "from-blue-500 to-purple-500",
    },
    {
      number: "50+",
      label: "Cities",
      icon: Globe,
      color: "from-green-500 to-blue-500",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: Shield,
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get matched with nearby drivers in seconds, not minutes.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "24/7 monitoring, background checks, and insurance coverage.",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "Built by riders, for riders. Your feedback shapes our future.",
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Luxury vehicles, professional drivers, and 5-star service.",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      years: "2019",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      quote:
        "RideFlow has completely transformed my daily commute. The reliability and premium service make it worth every penny. I can focus on work while traveling in comfort.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "University Student",
      years: "2020",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      quote:
        "As a student on a budget, I was amazed by the flexible pricing and student discounts. Plus, the app is so intuitive - booking a ride takes literally 10 seconds.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Worker",
      years: "2018",
      avatar: "https://i.pravatar.cc/150?u=emily",
      quote:
        "Working late shifts, safety is my top priority. RideFlow's driver verification and real-time tracking give me peace of mind every single trip.",
      rating: 5,
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      desc: "Started with a vision to revolutionize urban transportation",
    },
    {
      year: "2019",
      title: "100K Users",
      desc: "Reached our first major milestone with rapid growth",
    },
    {
      year: "2021",
      title: "Global Expansion",
      desc: "Expanded to 25 cities across 5 countries",
    },
    {
      year: "2024",
      title: "2M+ Rides",
      desc: "Celebrating millions of safe, reliable journeys",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div data-animate className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-200">
                    About RideFlow
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Redefining
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Transportation
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  We're not just another ride-sharing platform. We're pioneering
                  the future of urban mobility with cutting-edge technology,
                  uncompromising safety, and a commitment to sustainable
                  transportation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30">
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group relative inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-500/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                  <span>Watch Our Story</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div data-animate className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-3xl p-8 backdrop-blur-sm">
                  <img
                    src="/r3.jpg"
                    alt="Premium ride experience"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats */}
                  <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 shadow-xl backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm text-purple-100">
                      Average Rating
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-4 shadow-xl backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-green-100">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  data-animate
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              Why Choose RideFlow?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've reimagined every aspect of ride-sharing to deliver an
              experience that's not just better, but extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  data-animate
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              Stories from Our Community
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-2xl lg:text-3xl text-gray-200 font-medium leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-purple-500/50"
                  />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-sm text-purple-400">
                      Member since {testimonials[currentTestimonial].years}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              Our Journey
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-animate
                className="flex items-center space-x-8 group"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {milestone.year}
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join millions of riders who've already discovered a better way to
              travel. Your journey to premium transportation starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30">
                <Users className="w-5 h-5" />
                <span>Start Riding Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group relative inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-500/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span>Become a Driver</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
