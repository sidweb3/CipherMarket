import { Github, Twitter, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/assets/zkv.png" alt="CipherMarket" className="h-6 w-6" />
              <span className="text-lg font-bold">CipherMarket</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Privacy-preserving data verification with Zero-Knowledge proofs on Aleo.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/whitepaper" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Whitepaper
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://aleo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aleo Network
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/aleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ciphermarket.io"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 CipherMarket. Built for AKINDO Buildathon Wave 1.</p>
          <p className="flex items-center gap-2">
            Powered by <span className="text-primary font-semibold">Aleo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
