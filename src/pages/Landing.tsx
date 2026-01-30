import { motion } from 'framer-motion';
import { Lock, Database, Zap, Github, ArrowRight, CheckCircle2, Users, TrendingUp, Code, FileCheck, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WalletConnect } from '@/components/WalletConnect';
import { Footer } from '@/components/Footer';
import { TextScramble } from '@/components/TextScramble';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img src="/assets/zkv.png" alt="CipherMarket" className="h-8 w-8" />
            <span className="text-xl font-bold">
              <TextScramble text="CipherMarket" />
            </span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <WalletConnect />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Unique Split Layout */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm"
            >
              <Zap className="h-4 w-4 text-primary" />
              Built on Aleo Testnet
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <TextScramble text="Confidential" />
                <br />
                <TextScramble text="Data" />
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  <TextScramble text="Exchange" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Prove your dataset's quality without revealing its contents. Zero-Knowledge proofs on Aleo
              enable trustless data verification for the privacy-first era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="gap-2 group">
                <Link to="/app">
                  Launch App
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/whitepaper">
                  Read Whitepaper
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Privacy</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">0</div>
                <div className="text-xs md:text-sm text-muted-foreground">Data Leaks</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">ZK</div>
                <div className="text-xs md:text-sm text-muted-foreground">Proofs</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative order-1 lg:order-2"
          >
            {/* Floating Cards Stack */}
            <div className="relative h-[400px] md:h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute top-0 left-0 right-12 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src="/assets/zkv.png" alt="ZK" className="h-6 w-6" />
                  <span className="font-semibold">Zero-Knowledge Proofs</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Verify dataset schema, row count, and data types without exposing actual values
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute top-24 left-12 right-0 p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-accent" />
                  <span className="font-semibold">Client-Side Processing</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All data processing happens in your browser. Your raw CSV never leaves your device
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute top-48 left-0 right-12 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Aleo Integration</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Submit proofs directly to Aleo Testnet via Leo, Fox, or Puzzle wallet
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <TextScramble text="Core Features" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Privacy-preserving data verification powered by Aleo's Zero-Knowledge technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Lock className="h-8 w-8" />}
            title="Zero-Knowledge Proofs"
            description="Verify dataset schema, row count, and data types without exposing actual values using Aleo's ZK circuits."
            delay={0.1}
          />
          <FeatureCard
            icon={<Database className="h-8 w-8" />}
            title="Client-Side Processing"
            description="All data processing happens in your browser. Your raw CSV never leaves your device."
            delay={0.2}
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8" />}
            title="Aleo Integration"
            description="Submit proofs directly to Aleo Testnet via Leo, Fox, or Puzzle wallet integration."
            delay={0.3}
          />
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-card/30 rounded-3xl my-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              <TextScramble text="How It Works" />
            </h2>
            <p className="text-muted-foreground">
              Three simple steps to prove your data quality without revealing sensitive information
            </p>
          </div>
          <div className="space-y-8">
            <Step
              number={1}
              title="Upload CSV"
              description="Select your dataset file. Processing happens entirely in your browser with zero server uploads."
              delay={0.1}
            />
            <Step
              number={2}
              title="Generate ZK Proof"
              description="Our Leo circuit creates a cryptographic proof attesting to your data's schema, row count, and integrity without revealing contents."
              delay={0.2}
            />
            <Step
              number={3}
              title="Submit to Aleo"
              description="Connect your wallet and submit the proof to Aleo Testnet for immutable, verifiable on-chain attestation."
              delay={0.3}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <TextScramble text="Why CipherMarket?" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The first privacy-preserving data marketplace built on Aleo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WhyUsCard
            icon={<img src="/assets/zkv.png" alt="ZK" className="h-6 w-6" />}
            title="Privacy First"
            description="Raw data never leaves your device. Only cryptographic proofs are shared."
            delay={0.1}
          />
          <WhyUsCard
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Trustless Verification"
            description="Buyers verify data quality without trusting sellers or intermediaries."
            delay={0.2}
          />
          <WhyUsCard
            icon={<Code className="h-6 w-6" />}
            title="Open Source"
            description="Fully transparent Leo circuits and client-side code for community auditing."
            delay={0.3}
          />
          <WhyUsCard
            icon={<Zap className="h-6 w-6" />}
            title="Fast & Efficient"
            description="Client-side proof generation with optimized Leo circuits for speed."
            delay={0.4}
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <TextScramble text="Real-World Use Cases" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Privacy-preserving data verification across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UseCaseCard
            icon={<Users className="h-6 w-6" />}
            title="Healthcare Data"
            description="Prove patient record completeness while maintaining HIPAA compliance."
            delay={0.1}
          />
          <UseCaseCard
            icon={<TrendingUp className="h-6 w-6" />}
            title="Financial Analytics"
            description="Verify transaction datasets without exposing sensitive financial information."
            delay={0.2}
          />
          <UseCaseCard
            icon={<FileCheck className="h-6 w-6" />}
            title="Research Data"
            description="Attest to experimental data structure while protecting proprietary methods."
            delay={0.3}
          />
          <UseCaseCard
            icon={<Layers className="h-6 w-6" />}
            title="AI Training Sets"
            description="Prove dataset size and diversity without revealing training data contents."
            delay={0.4}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Privacy Preserved</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Data Leaks</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary">∞</div>
            <div className="text-muted-foreground">Trust Enabled</div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <h2 className="text-3xl font-bold">
            <TextScramble text="Ready to Get Started?" />
          </h2>
          <p className="text-muted-foreground">
            Connect your Aleo wallet and start generating Zero-Knowledge proofs for your datasets.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/app">
              Launch Application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 rounded-xl bg-card border border-border/40 space-y-4"
    >
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl font-semibold">
        <TextScramble text={title} />
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function Step({
  number,
  title,
  description,
  delay = 0,
}: {
  number: number;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-6"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-lg"
      >
        {number}
      </motion.div>
      <div className="space-y-2 pt-1">
        <h3 className="text-xl font-semibold">
          <TextScramble text={title} />
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function WhyUsCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="text-primary mb-2">{icon}</div>
          <CardTitle className="text-lg">
            <TextScramble text={title} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/40 space-y-3"
    >
      <div className="text-accent">{icon}</div>
      <h3 className="font-semibold">
        <TextScramble text={title} />
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}