import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Container>
      {/* Hero section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-display-2 md:text-display-1 text-(--on-bg-high) mb-4">
            Unideka UI
          </h1>
          <p className="text-body-2 md:text-body-1 text-(--on-bg-medium) mb-8">
            A modern, accessible component library built with React, Tailwind CSS, and Radix UI primitives.
          </p>
          <Button asChild variant="filled" size="lg">
            <a
              href="https://github.com/your-org/unideka-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </Button>
        </div>
      </section>

      {/* Glass card showing text styles */}
      <section className="py-8 md:py-12">
        <div className="max-w-lg mx-auto">
          <div className="bg-(--bg) backdrop-blur-sm border border-(--outline) rounded-xl p-6 shadow-sm">
            <h2 className="text-display-2 text-(--on-bg-high) mb-2">Display 2</h2>
            <p className="text-body-1 text-(--on-bg-medium) mb-4">
              Body 1 – the primary reading size for paragraphs and descriptions.
            </p>
            <p className="text-body-2 text-(--on-bg-low)">
              Body 2 – smaller text for captions and secondary information.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
