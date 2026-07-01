import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start gap-8 py-16 md:py-24">
        {/* Hero section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-display-2 md:text-display-1 text-(--on-bg-high) mb-4 animate-reveal">
            Unideka UI
          </h1>
          <p className="text-body-2 md:text-body-1 text-(--on-bg-medium) mb-8 animate-reveal delay-100">
            A modern, accessible component library built with React, Tailwind CSS, and Radix UI primitives.
          </p>
          <Button asChild variant="filled" size="lg" className="text-lg px-8 py-4 animate-reveal delay-200">
            <a
              href="https://github.com/your-org/unideka-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </Button>
        </div>

        {/* Glass card showing text styles */}
        <div className="flex-1 animate-reveal delay-300">
          <div className="bg-(--bg)/50 backdrop-blur-md border border-(--outline) rounded-2xl p-8 shadow-lg">
            <h2 className="text-display-1 text-(--on-bg-high) mb-2 animate-fade-in delay-100">
              Display 1 <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Display)</span>
            </h2>
            <h3 className="text-display-2 text-(--on-bg-high) mb-2 animate-fade-in delay-200">
              Display 2 <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Display)</span>
            </h3>
            <p className="text-body-1 text-(--on-bg-medium) mb-4 animate-fade-in delay-300">
              Body 1 – the primary reading size for paragraphs and descriptions.
              <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Text)</span>
            </p>
            <p className="text-body-2 text-(--on-bg-low) mb-4 animate-fade-in delay-400">
              Body 2 – smaller text for captions and secondary information.
              <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Text)</span>
            </p>
            <p className="text-caption text-(--on-bg-low) mb-2 animate-fade-in delay-500">
              Caption – extra small text for labels and footnotes.
              <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Text)</span>
            </p>
            <p className="text-overline text-(--on-bg-low) animate-fade-in delay-600">
              Overline – uppercase small text for headings and badges.
              <span className="text-caption text-(--on-bg-low) ml-2">(Unideka Display)</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
