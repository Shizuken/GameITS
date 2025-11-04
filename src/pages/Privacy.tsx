import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-card/20">
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>

          <div className="bg-gradient-panel border border-primary/30 rounded-lg p-8 shadow-panel space-y-6">
            <section>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed">
                We collect information you provide directly to us, including your username, email address, payment information, and any other information you choose to provide when using our services.
              </p>
            </section>

            <section>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process your transactions, send you technical notices and support messages, and communicate with you about products, services, and events.
              </p>
            </section>

            <section>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. All payment information is encrypted and processed securely.
              </p>
            </section>

            <section>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@gameits.com" className="text-primary hover:underline">
                  privacy@gameits.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
