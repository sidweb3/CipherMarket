import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Database, Zap, CheckCircle2, Code, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { Separator } from '@/components/ui/separator';
import { TextScramble } from '@/components/TextScramble';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <img src="/assets/zkv.png" alt="CipherMarket" className="h-6 w-6" />
              <span className="text-lg font-bold">
                <TextScramble text="CipherMarket" />
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold"
            >
              <TextScramble text="CipherMarket Whitepaper" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              Privacy-Preserving Data Verification with Zero-Knowledge Proofs
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              Version 1.0 • AKINDO Buildathon Wave 1 • December 2024
            </motion.div>
          </div>

          <Separator />

          {/* Abstract */}
          <Section title="Abstract" icon={<img src="/assets/zkv.png" alt="ZK" className="h-6 w-6" />}>
            <p className="text-muted-foreground leading-relaxed">
              CipherMarket introduces a novel approach to data marketplace verification using Zero-Knowledge proofs on the Aleo blockchain. 
              Our protocol enables data sellers to prove dataset properties (schema, structure, row count, and integrity) without revealing 
              the actual data contents, solving the fundamental trust problem in decentralized data exchanges. By leveraging Aleo's 
              privacy-preserving smart contracts and client-side ZK proof generation, we create a trustless environment where data quality 
              can be verified without compromising privacy, compliance, or competitive advantage.
            </p>
          </Section>

          {/* Problem Statement */}
          <Section title="Problem Statement" icon={<Database className="h-6 w-6" />}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Traditional data marketplaces face critical challenges that prevent efficient, trustless data exchange:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Trust Deficit:</strong> Buyers cannot verify data quality before purchase, leading to information asymmetry and market inefficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Privacy Exposure:</strong> Sellers must reveal sensitive data samples to prove quality, risking data leaks and competitive disadvantage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Compliance Risk:</strong> Data exposure violates GDPR, HIPAA, CCPA, and other privacy regulations, limiting market participation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Centralized Intermediaries:</strong> Current solutions rely on trusted third parties, introducing single points of failure and censorship risks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Intellectual Property Concerns:</strong> Revealing data structure exposes proprietary collection methods and business intelligence</span>
              </li>
            </ul>
          </Section>

          {/* Solution */}
          <Section title="Our Solution" icon={<Lock className="h-6 w-6" />}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CipherMarket leverages Aleo's Zero-Knowledge proof system to enable verifiable data attestation without exposure:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">1. Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">
                  All CSV parsing and proof generation occurs locally in the user's browser using Leo WASM compilation, 
                  ensuring raw data never leaves the device. This eliminates server-side data handling risks and maintains 
                  complete user control over sensitive information.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">2. Zero-Knowledge Attestation</h4>
                <p className="text-sm text-muted-foreground">
                  Leo circuits generate cryptographic proofs that attest to dataset properties (column count, 
                  data types, row count, hash commitment) without revealing actual cell values. The proof is mathematically 
                  verifiable but computationally infeasible to reverse-engineer, providing perfect privacy guarantees.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">3. On-Chain Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Proofs are submitted to Aleo Testnet where they can be verified by anyone, creating an 
                  immutable record of data quality claims. Smart contracts enforce verification logic, eliminating 
                  the need for trusted intermediaries and enabling trustless data marketplaces.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">4. Multi-Wallet Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Support for Leo, Fox, and Puzzle wallets ensures broad accessibility across the Aleo ecosystem, 
                  allowing users to choose their preferred wallet provider while maintaining consistent security guarantees.
                </p>
              </div>
            </div>
          </Section>

          {/* Technical Architecture */}
          <Section title="Technical Architecture" icon={<Code className="h-6 w-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Leo Circuit Design</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Our <code className="px-2 py-1 rounded bg-muted">data_attestation.aleo</code> program implements:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• <strong>Schema Verification:</strong> Validates column count (1-32) and data types (String, Integer, Float)</li>
                  <li>• <strong>Row Count Attestation:</strong> Proves dataset size (1-1,000,000 rows) without revealing individual records</li>
                  <li>• <strong>Data Integrity:</strong> Poseidon hash commitment ensures data hasn't been tampered with</li>
                  <li>• <strong>Public Input Validation:</strong> Cryptographic constraints ensure proof correctness</li>
                  <li>• <strong>Zero-Knowledge Guarantee:</strong> Circuit design prevents any information leakage beyond stated properties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">WASM Integration</h4>
                <p className="text-sm text-muted-foreground">
                  The Provable SDK (@provablehq/sdk) enables in-browser execution of Leo programs through WebAssembly compilation, 
                  providing seamless ZK proof generation without server-side dependencies. This architecture ensures maximum privacy 
                  and eliminates single points of failure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cryptographic Primitives</h4>
                <p className="text-sm text-muted-foreground">
                  Aleo's Poseidon hash function provides collision-resistant commitments optimized for ZK circuits. 
                  The BLS12-377 elliptic curve pairing enables efficient proof verification on-chain while maintaining 
                  128-bit security levels.
                </p>
              </div>
            </div>
          </Section>

          {/* Use Cases */}
          <Section title="Use Cases" icon={<Globe className="h-6 w-6" />}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">Healthcare Data</h4>
                <p className="text-sm text-muted-foreground">
                  Prove patient record completeness and structure while maintaining HIPAA compliance. Hospitals can verify 
                  dataset quality for research partnerships without exposing Protected Health Information (PHI).
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">Financial Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Verify transaction dataset quality without exposing sensitive financial information. Banks and fintech 
                  companies can prove data completeness for regulatory compliance and risk modeling.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">Research Data</h4>
                <p className="text-sm text-muted-foreground">
                  Attest to experimental data structure while protecting proprietary research methods. Academic institutions 
                  can share dataset metadata for collaboration without revealing sensitive experimental results.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">AI Training Sets</h4>
                <p className="text-sm text-muted-foreground">
                  Prove dataset size and diversity without revealing training data contents. ML companies can verify 
                  data quality for model training while protecting proprietary datasets and avoiding data poisoning.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">Supply Chain</h4>
                <p className="text-sm text-muted-foreground">
                  Verify logistics data completeness without exposing supplier relationships or pricing information, 
                  enabling trustless supply chain auditing and optimization.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <h4 className="font-semibold mb-2">Marketing Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Prove customer behavior dataset properties while maintaining GDPR compliance and protecting 
                  competitive intelligence about customer segments and targeting strategies.
                </p>
              </div>
            </div>
          </Section>

          {/* Security Analysis */}
          <Section title="Security Analysis" icon={<img src="/assets/zkv.png" alt="ZK" className="h-6 w-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Privacy Guarantees</h4>
                <p className="text-sm text-muted-foreground">
                  Zero-Knowledge proofs provide information-theoretic privacy: verifiers learn nothing beyond the 
                  stated public inputs (column count, row count, data types, hash). Even with unlimited computational 
                  power, it is impossible to extract raw data from the proof.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Soundness</h4>
                <p className="text-sm text-muted-foreground">
                  The Leo circuit constraints ensure that no malicious prover can generate a valid proof for false 
                  statements. Aleo's Marlin proof system provides computational soundness with negligible error probability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Attack Resistance</h4>
                <p className="text-sm text-muted-foreground">
                  Client-side processing eliminates server-side attack vectors. On-chain verification prevents 
                  man-in-the-middle attacks. Cryptographic commitments prevent data tampering after proof generation.
                </p>
              </div>
            </div>
          </Section>

          {/* Roadmap */}
          <Section title="Roadmap" icon={<TrendingUp className="h-6 w-6" />}>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Phase 1</div>
                <div>
                  <h4 className="font-semibold mb-1">Foundation (Current - Q4 2024)</h4>
                  <p className="text-sm text-muted-foreground">
                    Core ZK proof generation for CSV schema, multi-wallet integration (Leo, Fox, Puzzle), 
                    Aleo Testnet deployment, demo mode for judges, comprehensive documentation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Phase 2</div>
                <div>
                  <h4 className="font-semibold mb-1">Enhanced Verification (Q1 2025)</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced schema validation (foreign keys, constraints), statistical property proofs (mean, variance, distribution), 
                    data quality metrics (completeness, uniqueness), support for JSON and Parquet formats
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Phase 3</div>
                <div>
                  <h4 className="font-semibold mb-1">Marketplace Integration (Q2 2025)</h4>
                  <p className="text-sm text-muted-foreground">
                    Data listing platform with search and discovery, escrow smart contracts for secure transactions, 
                    reputation system for sellers, encrypted data delivery, dispute resolution mechanism
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Phase 4</div>
                <div>
                  <h4 className="font-semibold mb-1">Mainnet Launch (Q3 2025)</h4>
                  <p className="text-sm text-muted-foreground">
                    Production deployment on Aleo Mainnet, governance token launch, decentralized protocol management, 
                    community-driven feature development, enterprise partnerships
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Conclusion */}
          <Section title="Conclusion" icon={<Zap className="h-6 w-6" />}>
            <p className="text-muted-foreground leading-relaxed">
              CipherMarket represents a paradigm shift in data marketplace trust. By leveraging Aleo's Zero-Knowledge 
              technology, we enable verifiable data quality claims without compromising privacy, compliance, or 
              competitive advantage. This opens new possibilities for data-driven industries to participate in 
              decentralized economies while maintaining the highest standards of data protection. As privacy regulations 
              tighten globally and data becomes increasingly valuable, CipherMarket provides the infrastructure for 
              a trustless, privacy-preserving data economy. We invite developers, researchers, and enterprises to join 
              us in building the future of confidential data exchange.
            </p>
          </Section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <h2 className="text-3xl font-bold">
              <TextScramble text="Try CipherMarket" />
            </h2>
            <p className="text-muted-foreground">
              Experience privacy-preserving data verification on Aleo Testnet
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                Launch Application
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <h2 className="text-3xl font-bold">
          <TextScramble text={title} />
        </h2>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}