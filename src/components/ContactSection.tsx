import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projectTypes = ["Website", "Web App", "E-commerce", "MVP", "Other"];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate send
    setTimeout(() => {
      setFormState("sent");
      setForm({ name: "", email: "", projectType: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-primary mb-4 tracking-wider">{"// Contact"}</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's build something <span className="text-gradient-red">fast & powerful</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4 font-mono text-sm text-muted-foreground">
              <p>
                <span className="text-primary">email:</span> racecode.solutions@gmail.com
              </p>
              <p>
                <span className="text-primary">location:</span> Remote / Worldwide
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, projectType: type })}
                    className={`px-4 py-2 text-xs font-mono rounded border transition-colors ${
                      form.projectType === type
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-surface border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full bg-primary text-primary-foreground py-3.5 font-semibold rounded hover:bg-primary/90 transition-colors text-sm disabled:opacity-60"
            >
              {formState === "sending" ? "Sending..." : formState === "sent" ? "✓ Message Sent!" : "Send Request"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
