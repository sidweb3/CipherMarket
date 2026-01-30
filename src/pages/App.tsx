import { motion } from 'framer-motion';
import { WalletConnect } from '@/components/WalletConnect';
import { ProofGenerator } from '@/components/ProofGenerator';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function App() {
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
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img src="/assets/zkv.png" alt="CipherMarket" className="h-6 w-6" />
              <span className="text-lg font-bold">CipherMarket</span>
            </motion.div>
          </div>
          <WalletConnect />
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold">Generate ZK Proof</h1>
            <p className="text-muted-foreground">
              Upload your CSV dataset and create a Zero-Knowledge proof of its schema
            </p>
          </motion.div>

          <ProofGenerator />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 p-6 rounded-xl bg-card border border-border/40"
          >
            <h3 className="font-semibold mb-4">Privacy Guarantee</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <img src="/assets/zkv.png" alt="ZK" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>All CSV processing happens locally in your browser</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-2"
              >
                <img src="/assets/zkv.png" alt="ZK" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Raw data never leaves your device</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-2"
              >
                <img src="/assets/zkv.png" alt="ZK" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Only schema metadata is proven via Zero-Knowledge circuits</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}