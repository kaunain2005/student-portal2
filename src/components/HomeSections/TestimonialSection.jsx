import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Freelance React Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
  },
  {
    name: "Jane Cooper",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Absolutely wonderful! I would be lost without this service. The design is clean and easy to use.",
  },
  {
    name: "Robert Fox",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "The best experience I have ever had. Highly recommend to anyone looking for a fast solution.",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "A game-changer for our team. The interface is intuitive and powerful.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="w-full px-4 py-10 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          🎓 What Our Students Say
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Empowering Learning. Inspiring Success.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        speed={800} // Smooth transition speed
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border"
                />
              </div>
              <p className="text-gray-700 mt-4">"{testimonial.text}"</p>
              <h3 className="font-bold text-lg mt-4">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
