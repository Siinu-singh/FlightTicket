
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Terms & Conditions | FlightTicket',
  description: 'Read the Terms and Conditions for using the FlightTicket website and services.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <h2>1. Introduction</h2>
        <p>Welcome to FlightTicket. These terms and conditions outline the rules and regulations for the use of FlightTicket's Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use FlightTicket if you do not agree to take all of the terms and conditions stated on this page.</p>
        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

        <h2>2. Cookies</h2>
        <p>We employ the use of cookies. By accessing FlightTicket, you agreed to use cookies in agreement with the FlightTicket's Privacy Policy.</p>
        <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

        <h2>3. License</h2>
        <p>Unless otherwise stated, FlightTicket and/or its licensors own the intellectual property rights for all material on FlightTicket. All intellectual property rights are reserved. You may access this from FlightTicket for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from FlightTicket</li>
          <li>Sell, rent or sub-license material from FlightTicket</li>
          <li>Reproduce, duplicate or copy material from FlightTicket</li>
          <li>Redistribute content from FlightTicket</li>
        </ul>
        <p>This Agreement shall begin on the date hereof.</p>

        <h2>4. User Comments</h2>
        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. FlightTicket does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of FlightTicket,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>
        <p>FlightTicket reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

        <h2>5. Hyperlinking to our Content</h2>
        <p>The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</p>
        <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

        <h2>6. iFrames</h2>
        <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

        <h2>7. Content Liability</h2>
        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
        
        <h2>8. Reservation of Rights</h2>
        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

        <h2>9. Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.</p>
        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        
        <p>Please replace this placeholder text with your actual Terms and Conditions. You should consult with a legal professional to ensure your terms are comprehensive and compliant with all relevant laws and regulations.</p>
      </div>
    </div>
  );
}
