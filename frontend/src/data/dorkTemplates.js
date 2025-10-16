export const dorkTemplates = [
  // SQL Injection Targets
  {
    id: 'sql-php-id',
    category: 'SQL Injection',
    title: 'PHP Pages with ID Parameter',
    description: 'Finds PHP pages with id parameter (SQL injection target)',
    generateDork: (domain) => `site:${domain} inurl:"id=" | inurl:"productid=" | inurl:"product_id=" | inurl:"itemid=" | inurl:"item_id=" | inurl:"pid=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-product-id',
    category: 'SQL Injection',
    title: 'Product/Item ID Parameters',
    description: 'Finds pages with product/item parameters',
    generateDork: (domain) => `site:${domain} inurl:"product=" | inurl:"prod=" | inurl:"item=" | inurl:"sku=" | inurl:"p=" ext:php | ext:asp | ext:aspx | ext:jsp`
  },
  {
    id: 'sql-category',
    category: 'SQL Injection',
    title: 'Category Parameter Pages',
    description: 'Finds pages with category parameters',
    generateDork: (domain) => `site:${domain} inurl:"cat=" | inurl:"category=" | inurl:"categoryid=" | inurl:"catid=" | inurl:"cid=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-user-pages',
    category: 'SQL Injection',
    title: 'User Profile Pages',
    description: 'Finds user profile pages with parameters',
    generateDork: (domain) => `site:${domain} inurl:"user=" | inurl:"userid=" | inurl:"uid=" | inurl:"member=" | inurl:"profile=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-news-article',
    category: 'SQL Injection',
    title: 'News/Article Pages',
    description: 'Finds news and article pages with parameters',
    generateDork: (domain) => `site:${domain} inurl:"news=" | inurl:"newsid=" | inurl:"article=" | inurl:"articleid=" | inurl:"post=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-page-param',
    category: 'SQL Injection',
    title: 'Page Parameter',
    description: 'Finds pages with page parameter',
    generateDork: (domain) => `site:${domain} inurl:"page=" | inurl:"p=" | inurl:"pg=" | inurl:"pageid=" | inurl:"content=" ext:php | ext:asp | ext:aspx | ext:jsp`
  },
  {
    id: 'sql-view-param',
    category: 'SQL Injection',
    title: 'View Parameter Pages',
    description: 'Finds pages with view parameter',
    generateDork: (domain) => `site:${domain} inurl:"view=" | inurl:"display=" | inurl:"show=" | inurl:"detail=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-query-param',
    category: 'SQL Injection',
    title: 'Query Parameter Pages',
    description: 'Finds pages with query parameters',
    generateDork: (domain) => `site:${domain} inurl:"q=" | inurl:"query=" | inurl:"search=" | inurl:"s=" | inurl:"keyword=" ext:php | ext:asp | ext:aspx`
  },
  
  // XSS (Cross-Site Scripting) Targets
  {
    id: 'xss-search',
    category: 'XSS',
    title: 'Search Pages',
    description: 'Finds search pages (XSS target)',
    generateDork: (domain) => `site:${domain} intitle:"search" | intitle:"search.php" | intitle:"search.asp" | intitle:"search.aspx" | inurl:"search=" | inurl:"q=" | inurl:"query="`
  },
  {
    id: 'xss-comment',
    category: 'XSS',
    title: 'Comment Forms',
    description: 'Finds comment submission forms',
    generateDork: (domain) => `site:${domain} inurl:"comment" | inurl:"addcomment" | inurl:"postcomment" | inurl:"comments.php" | inurl:"add_comment" | intitle:"post comment"`
  },
  {
    id: 'xss-feedback',
    category: 'XSS',
    title: 'Feedback Forms',
    description: 'Finds feedback forms for XSS testing',
    generateDork: (domain) => `site:${domain} intitle:"feedback" | intitle:"feedback.php" | intitle:"feedback.asp" | inurl:"feedback" | inurl:"send-feedback" | inurl:"submit-feedback"`
  },
  {
    id: 'xss-message',
    category: 'XSS',
    title: 'Message/Contact Forms',
    description: 'Finds message and contact forms',
    generateDork: (domain) => `site:${domain} intitle:"message" | intitle:"send message" | inurl:"message.php" | inurl:"sendmessage" | inurl:"contactform" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'xss-guestbook',
    category: 'XSS',
    title: 'Guestbook Pages',
    description: 'Finds guestbook pages',
    generateDork: (domain) => `site:${domain} intitle:"guestbook" | intitle:"guest book" | inurl:"guestbook.php" | inurl:"guest.php" | inurl:"addguest" | inurl:"sign-guestbook"`
  },
  {
    id: 'xss-profile',
    category: 'XSS',
    title: 'Profile Edit Pages',
    description: 'Finds profile editing pages',
    generateDork: (domain) => `site:${domain} intitle:"edit profile" | inurl:"editprofile" | inurl:"profile.php" | inurl:"account.php" | inurl:"myprofile" | inurl:"updateprofile"`
  },
  
  // File Upload Vulnerabilities
  {
    id: 'upload-general',
    category: 'File Upload',
    title: 'File Upload Forms',
    description: 'Finds file upload functionality',
    generateDork: (domain) => `site:${domain} intitle:"upload" | intitle:"file upload" | inurl:"upload.php" | inurl:"fileupload" | inurl:"upload.asp" | inurl:"upload.aspx" | inurl:"uploader"`
  },
  {
    id: 'upload-image',
    category: 'File Upload',
    title: 'Image Upload Forms',
    description: 'Finds image upload pages',
    generateDork: (domain) => `site:${domain} intitle:"upload image" | intitle:"image upload" | inurl:"uploadimage" | inurl:"imageupload" | inurl:"uploadphoto" | inurl:"photoupload"`
  },
  {
    id: 'upload-avatar',
    category: 'File Upload',
    title: 'Avatar/Photo Upload',
    description: 'Finds avatar and photo upload pages',
    generateDork: (domain) => `site:${domain} inurl:"avatar" | inurl:"uploadavatar" | inurl:"changeavatar" | inurl:"profile-picture" | inurl:"profilepic" | intitle:"upload avatar"`
  },
  {
    id: 'upload-document',
    category: 'File Upload',
    title: 'Document Upload',
    description: 'Finds document upload forms',
    generateDork: (domain) => `site:${domain} intitle:"upload document" | inurl:"uploaddoc" | inurl:"documentupload" | inurl:"uploadfile" | inurl:"doc-upload" | inurl:"file_upload"`
  },
  {
    id: 'upload-resume',
    category: 'File Upload',
    title: 'Resume/CV Upload',
    description: 'Finds resume upload forms',
    generateDork: (domain) => `site:${domain} intitle:"upload resume" | intitle:"upload cv" | inurl:"uploadresume" | inurl:"cvupload" | inurl:"resume-upload" | inurl:"career-application"`
  },
  
  // Authentication & Login Forms
  {
    id: 'auth-login',
    category: 'Authentication',
    title: 'Login Pages',
    description: 'Finds login pages',
    generateDork: (domain) => `site:${domain} intitle:"login" | intitle:"sign in" | intitle:"member login" | inurl:"login.php" | inurl:"signin.php" | inurl:"login.asp" | inurl:"auth" | inurl:"authenticate"`
  },
  {
    id: 'auth-admin',
    category: 'Authentication',
    title: 'Admin Login',
    description: 'Finds admin login pages',
    generateDork: (domain) => `site:${domain} intitle:"admin login" | intitle:"administrator" | inurl:"admin/login" | inurl:"adminlogin" | inurl:"admin.php" | inurl:"administrator.php" | inurl:"wp-admin"`
  },
  {
    id: 'auth-panel',
    category: 'Authentication',
    title: 'Admin Panels',
    description: 'Finds admin panel pages',
    generateDork: (domain) => `site:${domain} intitle:"admin panel" | intitle:"control panel" | inurl:"admin" | inurl:"administrator" | inurl:"cpanel" | inurl:"admincp" | inurl:"modcp" | inurl:"admin_area"`
  },
  {
    id: 'auth-register',
    category: 'Authentication',
    title: 'Registration Pages',
    description: 'Finds registration forms',
    generateDork: (domain) => `site:${domain} intitle:"register" | intitle:"sign up" | intitle:"registration" | inurl:"register.php" | inurl:"signup.php" | inurl:"registration" | inurl:"create-account"`
  },
  {
    id: 'auth-forgot',
    category: 'Authentication',
    title: 'Password Reset Pages',
    description: 'Finds password reset forms',
    generateDork: (domain) => `site:${domain} intitle:"forgot password" | intitle:"reset password" | inurl:"forgot" | inurl:"reset-password" | inurl:"forgotpassword" | inurl:"lostpassword" | inurl:"recover"`
  },
  {
    id: 'auth-dashboard',
    category: 'Authentication',
    title: 'User Dashboard',
    description: 'Finds user dashboard pages',
    generateDork: (domain) => `site:${domain} intitle:"dashboard" | intitle:"user home" | intitle:"my account" | inurl:"dashboard" | inurl:"user/home" | inurl:"myaccount" | inurl:"member-area"`
  },
  
  // Contact & Form Pages
  {
    id: 'form-contact',
    category: 'Forms',
    title: 'Contact Forms',
    description: 'Finds contact forms',
    generateDork: (domain) => `site:${domain} inurl:contact.php OR inurl:contactus.php OR "contact form"`
  },
  {
    id: 'form-inquiry',
    category: 'Forms',
    title: 'Inquiry Forms',
    description: 'Finds inquiry submission forms',
    generateDork: (domain) => `site:${domain} inurl:inquiry OR inurl:enquiry OR "inquiry form"`
  },
  {
    id: 'form-quote',
    category: 'Forms',
    title: 'Quote Request Forms',
    description: 'Finds quote request forms',
    generateDork: (domain) => `site:${domain} inurl:quote OR inurl:getquote OR "request quote"`
  },
  {
    id: 'form-order',
    category: 'Forms',
    title: 'Order Forms',
    description: 'Finds order submission forms',
    generateDork: (domain) => `site:${domain} inurl:order.php OR inurl:orderform OR "order form"`
  },
  {
    id: 'form-booking',
    category: 'Forms',
    title: 'Booking Forms',
    description: 'Finds booking and reservation forms',
    generateDork: (domain) => `site:${domain} inurl:booking OR inurl:reservation OR "book now"`
  },
  {
    id: 'form-application',
    category: 'Forms',
    title: 'Application Forms',
    description: 'Finds application submission forms',
    generateDork: (domain) => `site:${domain} inurl:apply OR inurl:application OR "application form"`
  },
  {
    id: 'form-survey',
    category: 'Forms',
    title: 'Survey Forms',
    description: 'Finds survey and poll forms',
    generateDork: (domain) => `site:${domain} inurl:survey OR inurl:poll OR "take survey"`
  },
  {
    id: 'form-newsletter',
    category: 'Forms',
    title: 'Newsletter Signup',
    description: 'Finds newsletter subscription forms',
    generateDork: (domain) => `site:${domain} inurl:newsletter OR inurl:subscribe OR "newsletter signup"`
  },
  
  // LFI/RFI (Local/Remote File Inclusion)
  {
    id: 'lfi-include',
    category: 'File Inclusion',
    title: 'Include Parameter',
    description: 'Finds pages with include parameter (LFI/RFI)',
    generateDork: (domain) => `site:${domain} inurl:".php?include=" OR inurl:".php?inc="`
  },
  {
    id: 'lfi-file',
    category: 'File Inclusion',
    title: 'File Parameter',
    description: 'Finds pages with file parameter',
    generateDork: (domain) => `site:${domain} inurl:".php?file=" OR inurl:".php?filename="`
  },
  {
    id: 'lfi-path',
    category: 'File Inclusion',
    title: 'Path Parameter',
    description: 'Finds pages with path parameter',
    generateDork: (domain) => `site:${domain} inurl:".php?path=" OR inurl:".php?filepath="`
  },
  {
    id: 'lfi-page',
    category: 'File Inclusion',
    title: 'Page Include Parameter',
    description: 'Finds pages with page include parameter',
    generateDork: (domain) => `site:${domain} inurl:".php?pg=" OR inurl:".php?page=" OR inurl:".php?p="`
  },
  
  // Open Redirect
  {
    id: 'redirect-url',
    category: 'Open Redirect',
    title: 'URL Redirect Parameter',
    description: 'Finds pages with URL redirect parameter',
    generateDork: (domain) => `site:${domain} inurl:".php?url=" OR inurl:".php?redirect="`
  },
  {
    id: 'redirect-return',
    category: 'Open Redirect',
    title: 'Return URL Parameter',
    description: 'Finds pages with return URL parameter',
    generateDork: (domain) => `site:${domain} inurl:".php?return=" OR inurl:".php?returnurl="`
  },
  {
    id: 'redirect-next',
    category: 'Open Redirect',
    title: 'Next/Continue Parameter',
    description: 'Finds pages with next/continue parameters',
    generateDork: (domain) => `site:${domain} inurl:".php?next=" OR inurl:".php?continue="`
  },
  
  // IDOR (Insecure Direct Object Reference)
  {
    id: 'idor-invoice',
    category: 'IDOR',
    title: 'Invoice Pages',
    description: 'Finds invoice pages with IDs',
    generateDork: (domain) => `site:${domain} inurl:invoice OR inurl:receipt OR inurl:".php?invoice_id="`
  },
  {
    id: 'idor-order',
    category: 'IDOR',
    title: 'Order Details',
    description: 'Finds order detail pages',
    generateDork: (domain) => `site:${domain} inurl:".php?order_id=" OR inurl:orderdetails`
  },
  {
    id: 'idor-document',
    category: 'IDOR',
    title: 'Document Access',
    description: 'Finds document access pages',
    generateDork: (domain) => `site:${domain} inurl:".php?doc=" OR inurl:".php?document="`
  },
  {
    id: 'idor-profile',
    category: 'IDOR',
    title: 'User Profile Access',
    description: 'Finds user profile pages by ID',
    generateDork: (domain) => `site:${domain} inurl:".php?profile=" OR inurl:".php?user_id="`
  },
  
  // API Endpoints
  {
    id: 'api-endpoint',
    category: 'API',
    title: 'API Endpoints',
    description: 'Finds API endpoints',
    generateDork: (domain) => `site:${domain} inurl:"/api/" OR inurl:"/v1/" OR inurl:"/rest/"`
  },
  {
    id: 'api-json',
    category: 'API',
    title: 'JSON API Responses',
    description: 'Finds JSON API endpoints',
    generateDork: (domain) => `site:${domain} filetype:json inurl:api`
  },
  {
    id: 'api-swagger',
    category: 'API',
    title: 'Swagger/OpenAPI Docs',
    description: 'Finds API documentation pages',
    generateDork: (domain) => `site:${domain} inurl:swagger OR inurl:api-docs OR inurl:openapi`
  },
  
  // Error Pages & Debug Info
  {
    id: 'error-sql',
    category: 'Error Messages',
    title: 'SQL Error Messages',
    description: 'Finds pages with SQL errors',
    generateDork: (domain) => `site:${domain} "mysql_fetch" OR "SQL syntax" OR "mysqli_"`
  },
  {
    id: 'error-php',
    category: 'Error Messages',
    title: 'PHP Error Messages',
    description: 'Finds pages with PHP errors',
    generateDork: (domain) => `site:${domain} "Warning: include" OR "Fatal error" OR "Parse error"`
  },
  {
    id: 'error-stack',
    category: 'Error Messages',
    title: 'Stack Traces',
    description: 'Finds pages with stack traces',
    generateDork: (domain) => `site:${domain} "Stack trace" OR "Traceback" OR "Exception"`
  },
  
  // Shopping & E-commerce
  {
    id: 'ecom-cart',
    category: 'E-commerce',
    title: 'Shopping Cart',
    description: 'Finds shopping cart pages',
    generateDork: (domain) => `site:${domain} inurl:cart OR inurl:basket OR inurl:checkout`
  },
  {
    id: 'ecom-payment',
    category: 'E-commerce',
    title: 'Payment Pages',
    description: 'Finds payment processing pages',
    generateDork: (domain) => `site:${domain} inurl:payment OR inurl:billing OR inurl:pay`
  },
  {
    id: 'ecom-product',
    category: 'E-commerce',
    title: 'Product Pages',
    description: 'Finds product detail pages',
    generateDork: (domain) => `site:${domain} inurl:product OR inurl:item OR inurl:".php?product="`
  }
];
