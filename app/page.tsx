"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { Testimonials } from "@/components/ui/testimonials";
import { ChevronDown, Check } from "lucide-react";

export default function Home() {
  const handleCTAClick = async () => {
    try {
      // Enviar evento para o webhook
      await fetch("https://wbn.araxa.app/webhook/receive-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: "new.lead",
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar evento ao webhook:", error);
    }
    
    // Redirecionar para o link do Hotmart
    window.open("https://go.hotmart.com/N103453734S?dp=1", "_blank");
  };

  // Testemunhos para o componente circular
  const circularTestimonials = [
    {
      quote: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes. Me siento confiada de nuevo.",
      name: "Isabel Gutiérrez",
      designation: "Cliente satisfecha",
      src: "/ALEXA.png",
    },
    {
      quote: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      name: "María García",
      designation: "Cliente satisfecha",
      src: "/ELLIE.png",
    },
    {
      quote: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      name: "Ana Martínez",
      designation: "Cliente satisfecha",
      src: "/IRIS.png",
    },
    {
      quote: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      name: "Laura Sánchez",
      designation: "Cliente satisfecha",
      src: "/Jane_Hogg_before_and_after.jpg",
    },
    {
      quote: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      name: "Carla Rodríguez",
      designation: "Cliente satisfecha",
      src: "/original.jpg",
    },
    {
      quote: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      name: "Fernanda López",
      designation: "Cliente satisfecha",
      src: "/original (1).jpg",
    },
    {
      quote: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      name: "Patricia Martín",
      designation: "Cliente satisfecha",
      src: "/original (2).jpg",
    },
    {
      quote: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      name: "Roberta Fernández",
      designation: "Cliente satisfecha",
      src: "/original (3).jpg",
    },
    {
      quote: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      name: "Luciana Torres",
      designation: "Cliente satisfecha",
      src: "/original (4).jpg",
    },
    {
      quote: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      name: "Mariana Ruiz",
      designation: "Cliente satisfecha",
      src: "/original (5).jpg",
    },
    {
      quote: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      name: "Beatriz Jiménez",
      designation: "Cliente satisfecha",
      src: "/original (6).jpg",
    },
    {
      quote: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes.",
      name: "Camila Díaz",
      designation: "Cliente satisfecha",
      src: "/original (7).jpg",
    },
    {
      quote: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      name: "Gabriela Moreno",
      designation: "Cliente satisfecha",
      src: "/original (8).jpg",
    },
    {
      quote: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      name: "Larissa Navarro",
      designation: "Cliente satisfecha",
      src: "/original (9).jpg",
    },
    {
      quote: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      name: "Rafaela Serrano",
      designation: "Cliente satisfecha",
      src: "/original (10).jpg",
    },
    {
      quote: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      name: "Vanessa Ramos",
      designation: "Cliente satisfecha",
      src: "/original (11).jpg",
    },
    {
      quote: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      name: "Tatiana Iglesias",
      designation: "Cliente satisfecha",
      src: "/original (12).jpg",
    },
    {
      quote: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes.",
      name: "Bruna Vega",
      designation: "Cliente satisfecha",
      src: "/original (13).jpg",
    },
    {
      quote: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      name: "Amanda Castro",
      designation: "Cliente satisfecha",
      src: "/original (14).jpg",
    },
    {
      quote: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      name: "Priscila Morales",
      designation: "Cliente satisfecha",
      src: "/original (15).jpg",
    },
    {
      quote: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      name: "Daniela Herrera",
      designation: "Cliente satisfecha",
      src: "/original (16).jpg",
    },
    {
      quote: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      name: "Juliana Delgado",
      designation: "Cliente satisfecha",
      src: "/original (17).jpg",
    },
  ];

  // Testemunhos para o componente de colunas
  const columnTestimonials = [
    {
      text: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      image: "/ALEXA.png",
      name: "María García",
      role: "Cliente satisfecha",
    },
    {
      text: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      image: "/ELLIE.png",
      name: "Ana Martínez",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      image: "/IRIS.png",
      name: "Laura Sánchez",
      role: "Cliente satisfecha",
    },
    {
      text: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      image: "/Jane_Hogg_before_and_after.jpg",
      name: "Carla Rodríguez",
      role: "Cliente satisfecha",
    },
    {
      text: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      image: "/original.jpg",
      name: "Fernanda López",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes.",
      image: "/original (1).jpg",
      name: "Patricia Martín",
      role: "Cliente satisfecha",
    },
    {
      text: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      image: "/original (2).jpg",
      name: "Roberta Fernández",
      role: "Cliente satisfecha",
    },
    {
      text: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      image: "/original (3).jpg",
      name: "Luciana Torres",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      image: "/original (4).jpg",
      name: "Mariana Ruiz",
      role: "Cliente satisfecha",
    },
    {
      text: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      image: "/original (5).jpg",
      name: "Beatriz Jiménez",
      role: "Cliente satisfecha",
    },
    {
      text: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      image: "/original (6).jpg",
      name: "Camila Díaz",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes.",
      image: "/original (7).jpg",
      name: "Gabriela Moreno",
      role: "Cliente satisfecha",
    },
    {
      text: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      image: "/original (8).jpg",
      name: "Isabel Gutiérrez",
      role: "Cliente satisfecha",
    },
    {
      text: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      image: "/original (9).jpg",
      name: "Larissa Navarro",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      image: "/original (10).jpg",
      name: "Rafaela Serrano",
      role: "Cliente satisfecha",
    },
    {
      text: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      image: "/original (11).jpg",
      name: "Vanessa Ramos",
      role: "Cliente satisfecha",
    },
    {
      text: "Finalmente una rutina que sí sigo. Mi piel está fresca todo el día y los brotes desaparecieron. ¡Increíble lo simple que es!",
      image: "/original (12).jpg",
      name: "Tatiana Iglesias",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Lo mejor que he incorporado a mi día! En solo 3 minutos por la mañana mi piel está limpia, calmada y sin nuevos brotes.",
      image: "/original (13).jpg",
      name: "Bruna Vega",
      role: "Cliente satisfecha",
    },
    {
      text: "En solo una semana vi menos brotes. ¡Ahora es lo primero que hago al levantarme y mi piel está mucho más calmada!",
      image: "/original (14).jpg",
      name: "Amanda Castro",
      role: "Cliente satisfecha",
    },
    {
      text: "Después de años con acné hormonal, esta rutina simple de 3 minutos marcó la diferencia. Mi piel está clara y sin nuevos granitos.",
      image: "/original (15).jpg",
      name: "Priscila Morales",
      role: "Cliente satisfecha",
    },
    {
      text: "¡Adiós espinillas! Es tan corta que la cumplo siempre. Mi piel nunca estuvo tan uniforme. ¡100% recomendado!",
      image: "/original (16).jpg",
      name: "Daniela Herrera",
      role: "Cliente satisfecha",
    },
    {
      text: "En pocas semanas mi piel cambió por completo. Solo 3 minutos y los resultados son impresionantes. ¡Vale cada segundo!",
      image: "/original (17).jpg",
      name: "Juliana Delgado",
      role: "Cliente satisfecha",
    },
  ];

  // Testemunhos para o componente de cards (duplicados)
  const testimonialsData = [
    ...columnTestimonials.map((testimonial) => ({
      image: testimonial.image,
      name: testimonial.name,
      username: `@${testimonial.name.toLowerCase().replace(/\s+/g, "")}`,
      text: testimonial.text,
      social: "https://twitter.com",
    })),
    ...columnTestimonials.map((testimonial) => ({
      image: testimonial.image,
      name: testimonial.name,
      username: `@${testimonial.name.toLowerCase().replace(/\s+/g, "")}`,
      text: testimonial.text,
      social: "https://twitter.com",
    })),
  ];

  const faqItems = [
    {
      question: "¿Realmente elimina acné y espinillas?",
      answer: "Sí, la Rutina Matinal de 3 Minutos está diseñada para controlar brotes, reducir inflamación y prevenir nuevas imperfecciones desde el primer uso diario.",
    },
    {
      question: "¿Cuándo veré resultados?",
      answer: "Mejoras visibles desde los primeros 7 días; resultados óptimos en 30-60 días manteniendo los 3 minutos diarios.",
    },
    {
      question: "¿Es complicada o necesita muchos productos?",
      answer: "No, solo 3 pasos simples con productos básicos (o los que ya tienes). Perfecta para pieles propensas a acné.",
    },
    {
      question: "¿Qué incluye?",
      answer: "Acceso inmediato al método completo en video + guía PDF paso a paso. + Regalos: Lista de productos recomendados + Calendario de seguimiento 30 días.",
    },
    {
      question: "¿Hay garantía?",
      answer: "Sí, garantía de satisfacción 30 días. Si no ves menos brotes y piel más clara, te devolvemos el dinero.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg font-semibold">
            <span className="line-through opacity-75">Valor real: 149€</span>{" "}
            <span className="text-2xl font-bold">Hoy: 49€ (más del 67% OFF)</span>
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 px-4"
          >
            ¡Descubre el <span className="text-green-600">MÉTODO</span> de solo{" "}
            <span className="text-green-600">3 MINUTOS MATINALES</span> que te da una{" "}
            <span className="text-green-600">Rutina de Skincare Perfecta</span> y{" "}
            <span className="text-green-600">ELIMINA</span> Acné y Espinillas para Siempre!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 px-4"
          >
            Rutina Matinal 3 Minutos: El sistema paso a paso que miles de mujeres usan para despertar con piel clara, sin brotes y radiante. Resultados reales desde la primera semana.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 mb-8 px-4"
          >
            Oferta limitada - Más de 15.000 mujeres ya lo han transformado 👇
          </motion.p>

          {/* Vídeo Container - Proporção 9:16 (Reels) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-sm mx-auto mb-8 w-full px-4"
          >
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                <source src="/VSL PELE.mov" type="video/quicktime" />
                <source src="/VSL PELE.mov" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Compra Ahora por Solo 49€
          </motion.button>
        </div>
      </section>

      {/* Divisor */}
      <div className="border-t-2 border-gray-200 my-16"></div>

      {/* Circular Testimonials Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              Resultados Comprobados (basados en experiencias de miles de usuarias): <span className="text-green-600">92% MENOS BROTES</span> de acné y espinillas y <span className="text-green-600">88% PIEL MÁS CLARA</span> y uniforme
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Más de 15.000 mujeres transformadas. 4.8/5 en reseñas</p>
          </motion.div>

          <div className="flex justify-center">
            <CircularTestimonials
              testimonials={circularTestimonials}
              autoplay={true}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#10b981",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              ¡Quiero mi Rutina Perfecta de 3 Minutos Ahora!
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 px-4"
          >
            En las <span className="text-green-600">Primeras Semanas</span> Experimentarás:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "92% menos brotes de acné y espinillas",
              "88% piel más clara y uniforme",
              "Menos rojeces, puntos negros y marcas",
              "Mayor confianza con una piel fresca e impecable desde que te levantas",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-green-100 rounded-xl"
              >
                <Check className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              ¡Quiero mi Rutina Perfecta de 3 Minutos Ahora!
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-900 px-4">
              ¿Cansada de rutinas largas que nunca sigues, acné que aparece de la nada y espinillas que arruinan tu día?
            </h2>

            <div className="space-y-6 mb-8 text-left px-4">
              <p className="text-lg sm:text-xl text-gray-700 font-medium">
                Muchas mujeres sufren brotes recurrentes, piel grasa o mixta descontrolada y falta de tiempo para cuidarse...
              </p>
              <p className="text-lg sm:text-xl text-gray-700 font-medium">
                ¿Te pasa que...?
              </p>
              {[
                "Tienes buenas intenciones pero nunca mantienes una rutina larga",
                "Aparecen espinillas y acné justo cuando más lo necesitas evitar",
                "Probaste mil productos pero nada te da resultados consistentes",
              ].map((pain, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-lg sm:text-xl text-gray-700 font-medium px-4"
                >
                  {pain}
                </motion.p>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 mb-6 w-full sm:w-auto"
            >
              ¡Esto cambia con solo 3 minutos cada mañana!
            </motion.button>

            <p className="text-base sm:text-lg text-gray-600 px-4">
              No es una rutina complicada de 10 pasos. Es un método simple, efectivo y diseñado para la vida real: 3 minutos al despertar que limpian, equilibran y protegen tu piel para todo el día.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 px-4"
          >
            ¿Para quién es la <span className="text-green-600">RUTINA MATINAL DE 3 MINUTOS?</span>
          </motion.h2>

          <div className="space-y-6 mb-12">
            {[
              "Mujeres ocupadas que quieren resultados sin invertir horas;",
              "Mujeres con acné adulto, espinillas recurrentes y brotes hormonales;",
              "Mujeres con piel grasa, mixta o propensa a imperfecciones;",
              "Mujeres que buscan piel clara y calmada de forma natural y sostenible;",
              "Mujeres listas para una rutina fácil que realmente cumplen todos los días;",
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-green-100 rounded-xl border-l-4 border-green-600"
              >
                <Check className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-base sm:text-lg text-gray-700">{audience}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              ¡Quiero mi Piel Clara Ahora!
            </button>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
          >
            <div className="flex justify-center">
              <div className="border border-green-600 py-1 px-4 rounded-lg text-green-600 font-semibold">
                Testimonios
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mt-5 text-center text-gray-900 px-4">
              Lo que dicen nuestras clientas
            </h2>
            <p className="text-center mt-5 text-gray-600 text-base sm:text-lg px-4">
              Experiencias reales de mujeres que transformaron su piel con solo 3 minutos al día
            </p>
          </motion.div>

          <div className="mt-10">
            <Testimonials
              testimonials={testimonialsData}
              title=""
              description=""
              maxDisplayed={6}
            />
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              ¡Quiero mi Rutina Perfecta de 3 Minutos Ahora!
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 px-4"
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-100 rounded-xl p-6 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              ¡Quiero mi Rutina Perfecta de 3 Minutos Ahora!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rutina Matinal 3 Minutos</h3>
              <p className="text-gray-400">
                El método simple que elimina acné y espinillas con solo 3 minutos diarios por la mañana.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                Email: contacto@tuweb.com
                <br />
                Soporte: 24/7 disponible
              </p>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Rutina Matinal 3 Minutos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

