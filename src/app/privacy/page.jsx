import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Privacy Policy | FlightTicket',
  description: 'Learn about how FlightTicket collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = "30th May, 2024";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Privacy Policy for FlightTicket"
        subtitle="Your privacy is important to us. This policy explains how we handle your personal information."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>Effective Date: {lastUpdatedDate}</p>
        <p>At FlightTicket, accessible from https://FlightTicket.io, one of our top priorities is the privacy of our visitors. This privacy policy outlines the types of information we collect and how we use, store, and protect it.</p>

        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>Name, email address, phone number, and travel preferences when you voluntarily submit via booking forms or newsletter subscriptions.</p>

        <h3>Usage Data</h3>
        <p>Includes IP address, browser type, pages visited, and time spent on the site to help improve user experience.</p>

        <h3>Cookies</h3>
        <p>We use cookies to understand user behaviour and improve our services. You can choose to disable cookies through your browser settings.</p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process bookings and manage user accounts.</li>
          <li>To send updates, offers, and promotional emails (if opted in).</li>
          <li>To improve website functionality and user experience.</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement secure protocols to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

        <h2>Third Party Sharing</h2>
        <p>We do not sell or rent your data. We may share information with trusted third party partners to fulfil services, such as payment gateways or airlines.</p>

        <h2>Your Rights</h2>
        <ul>
          <li>You may access, update, or request deletion of your data.</li>
          <li>You may opt out of marketing communications at any time.</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. Revisions will be posted with a new "Effective Date".</p>

        <h2>Contact Us</h2>
        <p>If you have any questions, please contact us at [support@FlightTicket.io].</p>
      </div>
    </div>
  );
}