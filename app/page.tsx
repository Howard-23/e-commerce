import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Box,
  CheckCircle,
  LayoutDashboard,
  Package,
  Shield,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Box className="h-6 w-6 text-primary" />
            <span>ShopiDash</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Manage your store with{" "}
            <span className="text-primary">confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, all-in-one e-commerce dashboard that helps you track sales, manage products, 
            and grow your business with powerful analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No credit card required</p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-muted-foreground">
            Powerful features to help you manage and grow your e-commerce business
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={LayoutDashboard}
            title="Intuitive Dashboard"
            description="Get a bird's eye view of your business with real-time analytics and insights."
          />
          <FeatureCard
            icon={ShoppingCart}
            title="Order Management"
            description="Track and manage orders from placement to delivery with ease."
          />
          <FeatureCard
            icon={Package}
            title="Product Catalog"
            description="Organize your inventory and manage product listings effortlessly."
          />
          <FeatureCard
            icon={Users}
            title="Customer Insights"
            description="Understand your customers with detailed profiles and purchase history."
          />
          <FeatureCard
            icon={BarChart3}
            title="Advanced Analytics"
            description="Make data-driven decisions with comprehensive reports and charts."
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Reliable"
            description="Enterprise-grade security to protect your business data."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <StatCard number="10K+" label="Active Users" />
          <StatCard number="$50M+" label="Transactions" />
          <StatCard number="99.9%" label="Uptime" />
          <StatCard number="24/7" label="Support" />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground">
            Choose the plan that's right for your business
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Starter"
            price="Free"
            description="Perfect for getting started"
            features={["Up to 100 products", "Basic analytics", "Email support", "1 user"]
            }
            buttonText="Get Started"
            buttonVariant="outline"
          />
          <PricingCard
            name="Pro"
            price="$49"
            description="Best for growing businesses"
            features={[
              "Unlimited products",
              "Advanced analytics",
              "Priority support",
              "5 users",
              "Custom reports",
            ]}
            buttonText="Start Free Trial"
            buttonVariant="default"
            popular
          />
          <PricingCard
            name="Enterprise"
            price="Custom"
            description="For large organizations"
            features={[
              "Everything in Pro",
              "Dedicated support",
              "Unlimited users",
              "Custom integrations",
              "SLA guarantee",
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of successful merchants using ShopDash to manage and scale their stores.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/dashboard">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                <Box className="h-6 w-6 text-primary" />
                <span>ShopDash</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Modern e-commerce dashboard for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground">Integrations</Link></li>
                <li><Link href="#" className="hover:text-foreground">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground">API Reference</Link></li>
                <li><Link href="#" className="hover:text-foreground">Community</Link></li>
                <li><Link href="#" className="hover:text-foreground">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ShopDash. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-primary mb-1">{number}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  popular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-xl border ${
        popular ? "border-primary shadow-lg" : ""
      } bg-card relative`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="text-4xl font-bold mb-2">{price}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={buttonVariant}
        className="w-full"
        asChild
      >
        <Link href="/dashboard">{buttonText}</Link>
      </Button>
    </div>
  );
}
