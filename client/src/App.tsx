import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import { lazy, Suspense, useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

// Pages
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Services = lazy(() => import("./pages/Services"));
const Bookkeeping = lazy(() => import("./pages/services/Bookkeeping"));
const TaxPreparation = lazy(() => import("./pages/services/TaxPreparation"));
const TaxPlanning = lazy(() => import("./pages/services/TaxPlanning"));
const Payroll = lazy(() => import("./pages/services/Payroll"));
const FinancialPlanning = lazy(() => import("./pages/services/FinancialPlanning"));
const RetirementWealth = lazy(() => import("./pages/services/RetirementWealth"));
const LifeInsurance = lazy(() => import("./pages/services/LifeInsurance"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const LocationDoral = lazy(() => import("./pages/locations/Doral"));
const LocationMiami = lazy(() => import("./pages/locations/Miami"));
const LocationHialeah = lazy(() => import("./pages/locations/Hialeah"));
const LocationCoralGables = lazy(() => import("./pages/locations/CoralGables"));
const LocationKendall = lazy(() => import("./pages/locations/Kendall"));
const LocationMiamiLakes = lazy(() => import("./pages/locations/MiamiLakes"));
const LocationMiamiBeach = lazy(() => import("./pages/locations/MiamiBeach"));
const LocationHomestead = lazy(() => import("./pages/locations/Homestead"));
const LocationPembrokePines = lazy(() => import("./pages/locations/PembrokePines"));
const LocationMiramar = lazy(() => import("./pages/locations/Miramar"));
const LocationFortLauderdale = lazy(() => import("./pages/locations/FortLauderdale"));
const Book = lazy(() => import("./pages/Book"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/our-team" component={OurTeam} />
        <Route path="/services" component={Services} />
        <Route path="/services/bookkeeping" component={Bookkeeping} />
        <Route path="/services/tax-preparation" component={TaxPreparation} />
        <Route path="/services/tax-planning" component={TaxPlanning} />
        <Route path="/services/payroll" component={Payroll} />
        <Route path="/services/financial-planning" component={FinancialPlanning} />
        <Route path="/services/retirement-wealth-planning" component={RetirementWealth} />
        <Route path="/services/life-insurance" component={LifeInsurance} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/locations/doral" component={LocationDoral} />
        <Route path="/locations/miami" component={LocationMiami} />
        <Route path="/locations/hialeah" component={LocationHialeah} />
        <Route path="/locations/coral-gables" component={LocationCoralGables} />
        <Route path="/locations/kendall" component={LocationKendall} />
        <Route path="/locations/miami-lakes" component={LocationMiamiLakes} />
        <Route path="/locations/miami-beach" component={LocationMiamiBeach} />
        <Route path="/locations/homestead" component={LocationHomestead} />
        <Route path="/locations/pembroke-pines" component={LocationPembrokePines} />
        <Route path="/locations/miramar" component={LocationMiramar} />
        <Route path="/locations/fort-lauderdale" component={LocationFortLauderdale} />
        <Route path="/book" component={Book} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
