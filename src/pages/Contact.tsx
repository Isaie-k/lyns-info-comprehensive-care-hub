import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import GoogleMap from "@/components/map/GoogleMap";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message envoyé avec succès !");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contactez-Nous
          </motion.h1>
          <motion.p 
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <motion.h2 
                className="font-display text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Informations de Contact
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire. Nous vous répondrons dans les plus brefs délais.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Adresse", content: "123 Avenue des Services\n75001 Paris, France", isLink: false },
                  { icon: Phone, title: "Téléphone", content: "+33 1 23 45 67 89", href: "tel:+33123456789", isLink: true },
                  { icon: Mail, title: "Email", content: "contact@lynsinfo.fr", href: "mailto:contact@lynsinfo.fr", isLink: true },
                  { icon: Clock, title: "Horaires", content: "Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 12h00", isLink: false },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-6 h-6 text-secondary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-card rounded-2xl p-8 shadow-card"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-10 h-10 text-secondary" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <motion.h2 
                      className="font-display text-2xl font-bold text-foreground mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Demander un Devis
                    </motion.h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            placeholder="Jean"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            placeholder="Dupont"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jean.dupont@email.fr"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+33 6 12 34 56 78"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service souhaité *</Label>
                        <select
                          id="service"
                          className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="gardiennage">Gardiennage</option>
                          <option value="nettoyage">Nettoyage</option>
                          <option value="entretien">Entretien</option>
                          <option value="hygiene">Hygiène</option>
                          <option value="protocoles">Protocoles</option>
                          <option value="multiple">Plusieurs services</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez votre projet ou vos besoins..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Envoi en cours..."
                        ) : (
                          <>
                            Envoyer le Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Nous Trouver
              </h2>
              <p className="text-muted-foreground">
                Rendez-nous visite à notre siège social
              </p>
            </motion.div>
          </ScrollReveal>
          <GoogleMap />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
