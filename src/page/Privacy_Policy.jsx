import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto py-12 px-6">
          <div className="mb-12 px-6">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-600">
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

          <div className="bg-white md:rounded-lg shadow p-6 md:p-8 prose prose-gray max-w-none">
            <style>{`.prose ul { list-style-type: disc; padding-left: 1.5rem; } .prose li { margin-top: 0.25rem; margin-bottom: 0.25rem; }`}</style>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-3">Welcome to Storemystuff. We respect your privacy and are committed to protecting your personal data.</p>
            <p className="mb-2">This Privacy Policy explains:</p>
            <ul className="mb-3 space-y-1">
              <li>What data we collect</li>
              <li>How we use it</li>
              <li>How your files are stored</li>
              <li>When data is shared with third parties</li>
              <li>Your rights and choices</li>
            </ul>
            <p className="mb-6">By using Storemystuff, you consent to the practices described in this policy.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-3">Storemystuff collects minimal data, only what is necessary to provide file storage and sharing services.</p>
            <p className="mb-2 font-medium">We do NOT collect:</p>
            <ul className="mb-4 space-y-1">
              <li>✗ IP addresses</li>
              <li>✗ Device information</li>
              <li>✗ User analytics</li>
              <li>✗ EXIF metadata from images</li>
              <li>✗ Tracking data, cookies for ads, or behavioral analytics</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. Information You Provide Directly</h3>
            <p className="mb-2">We collect:</p>
            <ul className="mb-6 space-y-1">
              <li>Email address (via Google OAuth or GitHub OAuth)</li>
              <li>Basic profile information shared by OAuth (name, profile photo URL — if provided)</li>
              <li>Account information created by you</li>
              <li>Files and folders that you upload</li>
              <li>Sharing details: Who you share a file with and public/guest link permissions</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. File Storage &amp; Usage</h2>
            <ul className="mb-4 space-y-1">
              <li>Files you upload are stored in Amazon S3</li>
              <li>Files remain stored until you delete them</li>
              <li>We do not automatically scan, inspect, or analyze your content</li>
            </ul>
            <p className="mb-2">We do not access your files unless required for:</p>
            <ul className="mb-4 space-y-1">
              <li>Generating previews/thumbnails</li>
              <li>Processing downloads</li>
              <li>Ensuring system functionality</li>
              <li>Legal compliance (if applicable)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p className="mb-2">We use the data we collect only for:</p>
            <ul className="mb-3 space-y-1">
              <li>Account creation and authentication</li>
              <li>Storing files securely</li>
              <li>Allowing file sharing and permissions</li>
              <li>Sending OTP or verification emails</li>
              <li>Managing subscription plans (free or paid)</li>
              <li>Maintaining system security</li>
              <li>Preventing abuse and ensuring fair use</li>
              <li>Customer support and communication</li>
            </ul>
            <p className="mb-2 font-medium">We do NOT:</p>
            <ul className="mb-6 space-y-1">
              <li>✗ Sell your data</li>
              <li>✗ Share data for marketing</li>
              <li>✗ Track your activity</li>
              <li>✗ Profile or analyze your behavior</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <p className="mb-2">Storemystuff uses only functional cookies, such as:</p>
            <ul className="mb-3 space-y-1">
              <li>Authentication cookies</li>
              <li>Session cookies</li>
              <li>Security cookies</li>
            </ul>
            <p className="mb-6">We do not use cookies for advertising, analytics, or tracking.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="mb-3">Storemystuff uses trusted third-party providers to operate the service:</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1. Amazon Web Services (AWS)</h3>
            <ul className="mb-3 space-y-1">
              <li>S3 for file storage</li>
              <li>CloudFront for content delivery</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2. Resend</h3>
            <ul className="mb-3 space-y-1">
              <li>For sending OTP and email notifications</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.3. Google OAuth</h3>
            <ul className="mb-3 space-y-1">
              <li>For user login and authentication</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.4. GitHub OAuth</h3>
            <ul className="mb-4 space-y-1">
              <li>For optional user login</li>
            </ul>
            <p className="mb-6">These third-party services may process your data only as needed to provide functionality.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
            <p className="mb-2">We use multiple security layers, including:</p>
            <ul className="mb-3 space-y-1">
              <li>Hashed passwords</li>
              <li>Signed cookies</li>
              <li>OTP-based verification</li>
              <li>OAuth for secure authentication</li>
              <li>Rate limiting</li>
              <li>Sanitization of user inputs</li>
              <li>Redis session management</li>
              <li>AWS-managed encryption for file storage</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="mb-2">We retain data as follows:</p>
            <ul className="mb-3 space-y-1">
              <li>Files: until you delete them</li>
              <li>Account information: until your account is deleted</li>
              <li>Shared links: remain active until you revoke them</li>
            </ul>
            <p className="mb-6">Once deleted, data cannot be recovered.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. User Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="mb-3 space-y-1">
              <li>Access your data</li>
              <li>Delete your account</li>
              <li>Remove your files</li>
              <li>Revoke OAuth permissions from Google or GitHub</li>
              <li>Revoke shared links anytime</li>
              <li>Contact us with privacy concerns</li>
            </ul>
            <p className="mb-6">For account or data deletion requests, contact: <a href="mailto:md.mushahidansari@gmail.com" className="text-blue-600 hover:underline">md.mushahidansari@gmail.com</a></p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="mb-6">There is no minimum age requirement, but users must comply with local laws regarding Internet usage. We do not intentionally collect sensitive information from minors.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Sharing of Information</h2>
            <p className="mb-2">We do not share personal data with third parties except:</p>
            <ul className="mb-3 space-y-1">
              <li>With service providers listed above</li>
              <li>When required by law, court orders, or government requests</li>
              <li>When necessary to enforce our Terms of Service</li>
              <li>To investigate, detect, or prevent misuse or security issues</li>
            </ul>
            <p className="mb-6 font-medium">We never sell user data.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Account Deletion</h2>
            <p className="mb-2">Users can delete their account anytime. Deleting your account will:</p>
            <ul className="mb-3 space-y-1">
              <li>Remove your profile information</li>
              <li>Delete all files and folders</li>
              <li>Disable shared links</li>
              <li>Remove connected sessions</li>
            </ul>
            <p className="mb-6">Some minimal logs required for security may be retained internally for short periods.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="mb-8">If you have any questions or concerns regarding privacy or data usage, contact us at: <a href="mailto:md.mushahidansari@gmail.com" className="text-blue-600 hover:underline font-medium">md.mushahidansari@gmail.com</a></p>
          </div>
        </div>
      </main>
      <div className="m-8 text-center text-sm text-gray-600"><p>© 2025 Your Drive. All rights reserved.</p></div>
    </div>
  );
}

export default PrivacyPolicy;
