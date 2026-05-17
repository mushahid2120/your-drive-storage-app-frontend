import React from "react";

function TermsAndCondition() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12">
        <div className="mb-12 px-6 ">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">Terms of Service</h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <span>Last Updated: May 12, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Jharkhand, India</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              <a href="mailto:md.mushahidansari@gmail.com" className="text-blue-600 hover:underline">md.mushahidansari@gmail.com</a>
            </div>
          </div>
        </div>

        <main className="bg-white md:rounded-lg shadow p-8 prose prose-gray max-w-none">
          <style>{`.prose ul { list-style-type: disc; padding-left: 1.5rem; } .prose li { margin-top: 0.25rem; margin-bottom: 0.25rem; }`}</style>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-6">Welcome to Your Drive. By creating an account or using our services, you agree to these Terms of Service. Your Drive is a personal project offering online file storage, syncing, and sharing services. These Terms apply to all users from all countries. If you do not agree with any part of these Terms, please do not use the service.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
          <p className="mb-6">There is no minimum age requirement to use Your Drive. However, users must ensure local laws allow them to access cloud storage services. By using our services, you represent and warrant that you have the right, authority, and capacity to enter into these Terms.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services Provided</h2>
          <p className="mb-3">Your Drive allows users to:</p>
          <ul className="mb-6 space-y-1">
            <li>Upload, store, and manage files online</li>
            <li>Access files across multiple devices</li>
            <li>Share files via public or private links</li>
            <li>Use Google OAuth or GitHub OAuth for login</li>
            <li>Use Google Drive Read-Only access (only when user authorizes) for downloading files to our server</li>
          </ul>
          <p className="mb-6">We offer both free and paid plans. We reserve the right to modify, suspend, or discontinue any part of the service at any time.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>
          <p className="mb-3">By creating an account:</p>
          <ul className="mb-6 space-y-1">
            <li>You agree to provide accurate information</li>
            <li>You may log in from multiple devices</li>
            <li>You may delete your account anytime</li>
            <li>We may temporarily disable or permanently suspend accounts involved in abuse or policy violations</li>
            <li>You are responsible for maintaining the security of your login credentials</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Free and Paid Plans</h2>
          <p className="mb-3"><strong>Free Plan:</strong> Storage limit of 100 MB per user</p>
          <p className="mb-6"><strong>Paid Plans:</strong> Paid plans offer additional storage and features (details available on the website). We may modify pricing or features in the future with notice.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. User Content &amp; Responsibility</h2>
          <p className="mb-3">You may upload any file type, but:</p>
          <ul className="mb-3 space-y-1">
            <li>You are fully responsible for the content you upload</li>
            <li>You must ensure you have rights to store and share your files</li>
            <li>You are liable for any misuse, distribution, or harm caused by files you upload or share</li>
            <li>Public/guest links remain active until you manually revoke them</li>
          </ul>
          <p className="mb-6 font-medium text-amber-800">Your Drive does review, monitor, or scan uploaded files for illegal content, malware, copyrighted material, or harmful data.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Prohibited Activities</h2>
          <p className="mb-3">You must not:</p>
          <ul className="mb-3 space-y-1">
            <li>Upload malware, viruses, or harmful code</li>
            <li>Abuse the system or attempt unauthorized access</li>
            <li>Use the platform for unlawful purposes</li>
            <li>Share files or links that violate local or international laws</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
          </ul>
          <p className="mb-6 font-medium text-red-700">Violation may lead to suspension or account termination.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Storage Policy</h2>
          <ul className="mb-6 space-y-1">
            <li>Files remain stored until the user deletes them</li>
            <li>We do not automatically expire or remove files</li>
            <li>Deleted files cannot be recovered</li>
            <li>We do not scan, alter, or process content except for storage and sharing features</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy &amp; Data Usage</h2>
          <p className="mb-3">Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> to understand how we collect, use, and share information about you.</p>
          <p className="mb-3">Your Drive does not collect analytics such as IP addresses, device information, or behavioral logs.</p>
          <p className="mb-2">We store only:</p>
          <ul className="mb-3 space-y-1">
            <li>Account details (email, OAuth identifiers)</li>
            <li>File metadata (filename, size, timestamp)</li>
            <li>Sharing information (who has access to shared files)</li>
          </ul>
          <p className="mb-4">We do not store EXIF metadata from your images.</p>
          <p className="mb-2 font-medium">Third-Party Services Used:</p>
          <ul className="mb-6 space-y-1">
            <li><strong>Amazon S3</strong> – storage of user files</li>
            <li><strong>AWS CloudFront</strong> – content delivery</li>
            <li><strong>Resend</strong> – sending OTP and notification emails</li>
            <li><strong>Google OAuth</strong> – user authentication</li>
            <li><strong>GitHub OAuth</strong> – user authentication</li>
          </ul>
          <p className="mb-6 text-sm text-gray-600">Your data may be stored or processed by these services according to their individual privacy policies.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Google API Services</h2>
          <p className="mb-6">Your Drive's use and transfer to any other app of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Security</h2>
          <p className="mb-3">We implement industry-standard practices including:</p>
          <ul className="mb-3 space-y-1">
            <li>Hashed passwords</li>
            <li>Signed and secure cookies</li>
            <li>OTP verification for actions</li>
            <li>OAuth-based login</li>
            <li>Input sanitization</li>
            <li>Rate limiting</li>
            <li>Redis session storage</li>
            <li>Encrypted storage on S3.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Account Termination</h2>
          <p className="mb-3">We reserve the right to:</p>
          <ul className="mb-3 space-y-1">
            <li>Suspend accounts involved in abuse</li>
            <li>Delete content violating laws or policies</li>
            <li>Block suspicious activity</li>
            <li>Restrict features for misbehaving accounts</li>
          </ul>
          <p className="mb-6 font-medium text-green-700">Users may delete their own account at any time.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Limitation of Liability</h2>
          <p className="mb-6">To the maximum extent permitted by applicable law, Your Drive and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, damages for loss of profits, loss of data, service interruption, system failures, or any other commercial or personal damages arising out of or related to:</p>
          <ul className="mb-6 space-y-1">
            <li>Your use of or inability to use the Service</li>
            <li>Any unauthorized access to or alteration of your data</li>
            <li>Any content or conduct of any third party using the Service</li>
            <li>Any temporary or permanent loss of data</li>
            <li>Any errors, bugs, downtime, or technical issues beyond our control</li>
          </ul>
          <p className="mb-6">You understand and agree that you use Your Drive at your own discretion and risk. While we make reasonable efforts to protect user data, no method of storage or transmission is completely secure.</p>
          <p className="mb-6 font-medium text-gray-800">In all cases, Your Drive’s total liability shall not exceed the amount you paid for the Service in the past 12 months (or ₹0 if you are using the free plan).</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Reporting Abuse/Misuse</h2>
          <p className="mb-3">If you discover illegal or harmful content being shared via Your Drive, report it to <a href="mailto:md.mushahidansari@gmail.com" className="text-blue-600 hover:underline">md.mushahidansari@gmail.com</a>.</p>
          <p className="mb-6 text-sm text-gray-600">We will take appropriate action based on the severity and laws of India.</p>
        </main>
        <div className="mt-8 text-center text-sm text-gray-600"><p>© 2025 Your Drive. All rights reserved.</p></div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
