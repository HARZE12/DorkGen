export const dorkTemplates = [
  {
    id: 'contact-form',
    category: 'Forms',
    title: 'Contact Us Form',
    description: 'Finds contact forms with specific file names',
    generateDork: (domain) => `site:${domain} inurl:contact.php OR inurl:contact.asp OR inurl:contactus.php`
  },
  {
    id: 'contact-page',
    category: 'Forms',
    title: 'Contact Us Page',
    description: 'Finds contact pages with specific URLs',
    generateDork: (domain) => `site:${domain} inurl:contact OR inurl:contactus OR "contact us"`
  },
  {
    id: 'feedback-form',
    category: 'Forms',
    title: 'Feedback Form',
    description: 'Finds feedback forms and submission pages',
    generateDork: (domain) => `site:${domain} inurl:feedback OR inurl:submit-feedback OR "feedback form"`
  },
  {
    id: 'submit-request',
    category: 'Forms',
    title: 'Submit a Request Page',
    description: 'Finds pages for submitting requests',
    generateDork: (domain) => `site:${domain} inurl:submit-request OR inurl:request OR "submit a request"`
  },
  {
    id: 'contact-support',
    category: 'Support',
    title: 'Contact Support',
    description: 'Finds support contact pages',
    generateDork: (domain) => `site:${domain} inurl:support OR inurl:contact-support OR "contact support"`
  },
  {
    id: 'submit-pages',
    category: 'Forms',
    title: 'Submit Pages',
    description: 'Finds pages for submitting information',
    generateDork: (domain) => `site:${domain} inurl:submit OR inurl:submission OR "submit information"`
  },
  {
    id: 'support-center',
    category: 'Support',
    title: 'Support Center',
    description: 'Finds support center pages',
    generateDork: (domain) => `site:${domain} inurl:support-center OR inurl:help-center OR "support center"`
  },
  {
    id: 'submit-forms',
    category: 'Forms',
    title: 'Submit Forms',
    description: 'Finds various submission forms',
    generateDork: (domain) => `site:${domain} inurl:form OR inurl:submitform OR "submit form"`
  },
  {
    id: 'request-submit',
    category: 'Forms',
    title: 'Request a Submit',
    description: 'Finds pages for submitting requests',
    generateDork: (domain) => `site:${domain} inurl:request-submit OR "request submission" OR inurl:send-request`
  },
  {
    id: 'report-pages',
    category: 'Forms',
    title: 'Report Pages',
    description: 'Finds pages for submitting reports',
    generateDork: (domain) => `site:${domain} inurl:report OR inurl:submit-report OR "report issue"`
  },
  {
    id: 'form-pages',
    category: 'Forms',
    title: 'Form Pages',
    description: 'Finds pages with specific form text',
    generateDork: (domain) => `site:${domain} intext:"form" inurl:form OR inurl:contact-form`
  },
  {
    id: 'request-type',
    category: 'Forms',
    title: 'Request Type Forms',
    description: 'Finds request forms with specific URLs',
    generateDork: (domain) => `site:${domain} inurl:request-type OR inurl:inquiry OR "type of request"`
  },
  {
    id: 'job-application',
    category: 'Career',
    title: 'Job Application Forms',
    description: 'Finds forms for job applications',
    generateDork: (domain) => `site:${domain} inurl:apply OR inurl:career OR inurl:job-application OR "apply now"`
  },
  {
    id: 'newsletter',
    category: 'Marketing',
    title: 'Newsletter Subscription',
    description: 'Finds newsletter signup forms',
    generateDork: (domain) => `site:${domain} inurl:newsletter OR inurl:subscribe OR "subscribe to newsletter"`
  },
  {
    id: 'support-tickets',
    category: 'Support',
    title: 'Support Tickets',
    description: 'Finds support ticket submission forms',
    generateDork: (domain) => `site:${domain} inurl:ticket OR inurl:support-ticket OR "create ticket" OR "submit ticket"`
  },
  {
    id: 'report-abuse',
    category: 'Forms',
    title: 'Report Abuse',
    description: 'Finds forms for reporting abuse',
    generateDork: (domain) => `site:${domain} inurl:report-abuse OR inurl:abuse OR "report abuse"`
  },
  {
    id: 'testimonial',
    category: 'Marketing',
    title: 'Testimonial Submission',
    description: 'Finds forms for submitting testimonials',
    generateDork: (domain) => `site:${domain} inurl:testimonial OR inurl:review OR "submit testimonial" OR "leave a review"`
  },
  {
    id: 'ask-question',
    category: 'Support',
    title: 'Ask a Question',
    description: 'Finds forms for asking questions',
    generateDork: (domain) => `site:${domain} inurl:ask OR inurl:question OR "ask a question" OR inurl:faq-submit`
  },
  {
    id: 'callback',
    category: 'Forms',
    title: 'Request a Callback',
    description: 'Finds forms for requesting callbacks',
    generateDork: (domain) => `site:${domain} inurl:callback OR inurl:call-back OR "request a callback" OR "call me back"`
  },
  {
    id: 'bug-report',
    category: 'Support',
    title: 'Bug Report Forms',
    description: 'Finds forms for reporting bugs',
    generateDork: (domain) => `site:${domain} inurl:bug-report OR inurl:report-bug OR "report a bug" OR inurl:bug-tracker`
  },
  {
    id: 'suggestion',
    category: 'Forms',
    title: 'Suggestion Box',
    description: 'Finds forms for submitting suggestions',
    generateDork: (domain) => `site:${domain} inurl:suggestion OR inurl:suggest OR "suggestion box" OR "submit suggestion"`
  },
  {
    id: 'registration',
    category: 'Forms',
    title: 'Registration Forms',
    description: 'Finds user registration forms',
    generateDork: (domain) => `site:${domain} inurl:register OR inurl:signup OR inurl:registration OR "create account"`
  },
  {
    id: 'quote-request',
    category: 'Forms',
    title: 'Quote Request Forms',
    description: 'Finds forms for requesting quotes',
    generateDork: (domain) => `site:${domain} inurl:quote OR inurl:get-quote OR "request a quote" OR "get a quote"`
  },
  {
    id: 'upload-form',
    category: 'Upload',
    title: 'File Upload Forms',
    description: 'Finds pages with file upload functionality',
    generateDork: (domain) => `site:${domain} inurl:upload OR inurl:file-upload OR "upload file" OR "choose file"`
  },
  {
    id: 'login-page',
    category: 'Auth',
    title: 'Login Pages',
    description: 'Finds login and authentication pages',
    generateDork: (domain) => `site:${domain} inurl:login OR inurl:signin OR inurl:auth OR "log in"`
  },
  {
    id: 'admin-panel',
    category: 'Admin',
    title: 'Admin Panels',
    description: 'Finds potential admin panel pages',
    generateDork: (domain) => `site:${domain} inurl:admin OR inurl:administrator OR inurl:cpanel OR "admin panel"`
  }
];
