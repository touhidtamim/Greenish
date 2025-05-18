import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Video, MessageSquare, Calendar } from "react-feather";
import SupportCard from "../component/SupportCard";
import WorkshopTable from "../component/WorkshopTable";
import TestimonialSection from "../component/TestimonialSection";
import BookingButton from "../component/BookingButton";
import FloatingCallButton from "../component/FloatingCallButton";

const PlantCareSupport = () => {
  const supportServices = [
    {
      icon: <PhoneCall className="text-green-600" size={30} />,
      title: "24/7 Botanist Chat",
      description: "Instant messaging with plant experts",
    },
    {
      icon: <Video className="text-green-600" size={30} />,
      title: "Video Consultations",
      description: "Personalized video calls for urgent plant issues",
    },
    {
      icon: <MessageSquare className="text-green-600" size={30} />,
      title: "Care Reminders",
      description: "Custom SMS/email alerts for watering schedules",
    },
    {
      icon: <Calendar className="text-green-600" size={30} />,
      title: "Seasonal Workshops",
      description: "Free monthly live classes on plant care",
    },
  ];

  const workshopSchedule = useMemo(() => {
    const baseDate = new Date();
    const topics = [
      "Spring Planting 101",
      "Advanced Pruning",
      "Indoor Plant Care",
      "Plant Propagation Techniques",
      "Composting Made Easy",
    ];

    return Array.from({ length: 4 }, (_, i) => {
      const futureDate = new Date(baseDate);
      futureDate.setDate(baseDate.getDate() + 15 * (i + 1));
      const options = { year: "numeric", month: "long", day: "numeric" };
      return {
        date: futureDate.toLocaleDateString("en-US", options),
        topic: topics[i % topics.length],
        time: `${3 + i}:00 PM`,
      };
    });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-green-900 mb-3"
          >
            Your Personal Plant Care Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-green-700 max-w-2xl mx-auto text-md md:text-lg"
          >
            From expert support to live workshops, we’re here to help your
            greens thrive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SupportCard {...service} />
            </motion.div>
          ))}
        </div>

        <WorkshopTable schedule={workshopSchedule} />
        <TestimonialSection />
        <BookingButton />
      </div>

      <FloatingCallButton />
    </section>
  );
};

export default PlantCareSupport;
