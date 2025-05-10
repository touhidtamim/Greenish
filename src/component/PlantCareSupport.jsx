import { motion } from "framer-motion";
import { PhoneCall, Video, MessageSquare, Calendar } from "react-feather";
import { useMemo } from "react";

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
              className="bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-all border border-green-100"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 bg-green-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-green-700 pl-14">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            📅 Upcoming Workshops
          </h3>
          <table className="min-w-full table-auto mt-4 text-green-800">
            <thead>
              <tr className="bg-green-100 text-green-900 uppercase text-sm">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Topic</th>
                <th className="py-3 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {workshopSchedule.map((workshop, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-green-50 transition duration-200"
                >
                  <td className="py-3 px-4">{workshop.date}</td>
                  <td className="py-3 px-4">{workshop.topic}</td>
                  <td className="py-3 px-4">{workshop.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-green-200"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="https://i.ibb.co.com/pq9JbCn/153388499-happy-girl-in-a-field-of-sunflowers.jpg"
                alt="Plant care consultation"
                className="rounded-lg shadow"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                “Greenish literally brought my plant back to life.”
              </h4>
              <p className="text-green-700 mb-4">
                I was losing hope when my Monstera started wilting. But thanks
                to a video call with their plant expert, I learned how to treat
                root rot and save it — step by step. I never felt alone in the
                process.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                  <span className="text-green-800 font-semibold">SK</span>
                </div>
                <div>
                  <p className="font-medium">Sarah K.</p>
                  <p className="text-sm text-green-600">
                    Loyal Greenish Member since 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold px-4 md:px-8 py-2 md:py-3 rounded-full shadow-lg transition-all duration-300"
          >
            🌱 Book a Plant Care Session
          </a>
        </motion.div>
      </div>

      <div className="fixed bottom-4 right-4 animate-bounce bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-xl text-white cursor-pointer transition-all duration-300 z-50">
        <span className="text-xl">💬</span>
      </div>
    </section>
  );
};

export default PlantCareSupport;
