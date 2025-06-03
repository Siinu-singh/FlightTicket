import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Terms & Conditions | FlightTicket',
  description: 'Read the Terms and Conditions for using the FlightTicket website and services.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Terms and Conditions for FlightTicket"
        subtitle="Please read these terms carefully before using our services."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>Effective Date: 30th May, 2024</p>
        <p>These Terms and Conditions govern your use of the FlightTicket website located at https://FlightTicket.io. By accessing our website or using our services, you agree to these terms.</p>

        <h2>1. Use of Website</h2>
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others.</p>

        <h2>2. Booking Terms</h2>
        <p>All bookings made through FlightTicket are subject to availability and airline specific rules. We act as an intermediary and do not control flight availability or pricing.</p>

        <h2>3. User Accounts</h2>
        <p>When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.</p>

        <h2>4. Payment and Refunds</h2>
        <p>Payments are processed through secure third party gateways. Refunds are subject to airline policies, and FlightTicket is not liable for denied refund requests from airlines.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content, branding, and materials on FlightTicket are the property of the website owner and may not be reused without permission.</p>

        <h2>6. Limitation of Liability</h2>
        <p>FlightTicket is not liable for any loss, injury, or inconvenience caused by delays, cancellations, or errors made by third party travel providers.</p>

        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>

        <h2>Contact</h2>
        <p>For questions or concerns regarding these terms, please email us at [support@FlightTicket.io].</p>
      </div>
    </div>
  );
}