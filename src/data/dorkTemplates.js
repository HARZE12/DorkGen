export const dorkTemplates = [
  // SQL Injection Targets
  {
    id: 'sql-php-id',
    category: '💉 SQL Injection',
    title: 'PHP Pages with ID Parameter',
    description: 'Finds PHP pages with id parameter (SQL injection target)',
    generateDork: (domain) => `site:${domain} inurl:"id=" | inurl:"productid=" | inurl:"product_id=" | inurl:"itemid=" | inurl:"item_id=" | inurl:"pid=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-product-id',
    category: '💉 SQL Injection',
    title: 'Product/Item ID Parameters',
    description: 'Finds pages with product/item parameters',
    generateDork: (domain) => `site:${domain} inurl:"product=" | inurl:"prod=" | inurl:"item=" | inurl:"sku=" | inurl:"p=" ext:php | ext:asp | ext:aspx | ext:jsp`
  },
  {
    id: 'sql-category',
    category: '💉 SQL Injection',
    title: 'Category Parameter Pages',
    description: 'Finds pages with category parameters',
    generateDork: (domain) => `site:${domain} inurl:"cat=" | inurl:"category=" | inurl:"categoryid=" | inurl:"catid=" | inurl:"cid=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-user-pages',
    category: '💉 SQL Injection',
    title: 'User Profile Pages',
    description: 'Finds user profile pages with parameters',
    generateDork: (domain) => `site:${domain} inurl:"user=" | inurl:"userid=" | inurl:"uid=" | inurl:"member=" | inurl:"profile=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-news-article',
    category: '💉 SQL Injection',
    title: 'News/Article Pages',
    description: 'Finds news and article pages with parameters',
    generateDork: (domain) => `site:${domain} inurl:"news=" | inurl:"newsid=" | inurl:"article=" | inurl:"articleid=" | inurl:"post=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-page-param',
    category: '💉 SQL Injection',
    title: 'Page Parameter',
    description: 'Finds pages with page parameter',
    generateDork: (domain) => `site:${domain} inurl:"page=" | inurl:"p=" | inurl:"pg=" | inurl:"pageid=" | inurl:"content=" ext:php | ext:asp | ext:aspx | ext:jsp`
  },
  {
    id: 'sql-view-param',
    category: '💉 SQL Injection',
    title: 'View Parameter Pages',
    description: 'Finds pages with view parameter',
    generateDork: (domain) => `site:${domain} inurl:"view=" | inurl:"display=" | inurl:"show=" | inurl:"detail=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'sql-query-param',
    category: '💉 SQL Injection',
    title: 'Query Parameter Pages',
    description: 'Finds pages with query parameters',
    generateDork: (domain) => `site:${domain} inurl:"q=" | inurl:"query=" | inurl:"search=" | inurl:"s=" | inurl:"keyword=" ext:php | ext:asp | ext:aspx`
  },
  
  // XSS (Cross-Site Scripting) Targets
  {
    id: 'xss-search',
    category: '⚡ XSS',
    title: 'Search Pages',
    description: 'Finds search pages (XSS target)',
    generateDork: (domain) => `site:${domain} intitle:"search" | intitle:"search.php" | intitle:"search.asp" | intitle:"search.aspx" | inurl:"search=" | inurl:"q=" | inurl:"query="`
  },
  {
    id: 'xss-comment',
    category: '⚡ XSS',
    title: 'Comment Forms',
    description: 'Finds comment submission forms',
    generateDork: (domain) => `site:${domain} inurl:"comment" | inurl:"addcomment" | inurl:"postcomment" | inurl:"comments.php" | inurl:"add_comment" | intitle:"post comment"`
  },
  {
    id: 'xss-feedback',
    category: '⚡ XSS',
    title: 'Feedback Forms',
    description: 'Finds feedback forms for XSS testing',
    generateDork: (domain) => `site:${domain} intitle:"feedback" | intitle:"feedback.php" | intitle:"feedback.asp" | inurl:"feedback" | inurl:"send-feedback" | inurl:"submit-feedback"`
  },
  {
    id: 'xss-message',
    category: '⚡ XSS',
    title: 'Message/Contact Forms',
    description: 'Finds message and contact forms',
    generateDork: (domain) => `site:${domain} intitle:"message" | intitle:"send message" | inurl:"message.php" | inurl:"sendmessage" | inurl:"contactform" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'xss-guestbook',
    category: '⚡ XSS',
    title: 'Guestbook Pages',
    description: 'Finds guestbook pages',
    generateDork: (domain) => `site:${domain} intitle:"guestbook" | intitle:"guest book" | inurl:"guestbook.php" | inurl:"guest.php" | inurl:"addguest" | inurl:"sign-guestbook"`
  },
  {
    id: 'xss-profile',
    category: '⚡ XSS',
    title: 'Profile Edit Pages',
    description: 'Finds profile editing pages',
    generateDork: (domain) => `site:${domain} intitle:"edit profile" | inurl:"editprofile" | inurl:"profile.php" | inurl:"account.php" | inurl:"myprofile" | inurl:"updateprofile"`
  },
  
  // File Upload Vulnerabilities
  {
    id: 'upload-general',
    category: '📤 File Upload',
    title: 'File Upload Forms',
    description: 'Finds file upload functionality',
    generateDork: (domain) => `site:${domain} intitle:"upload" | intitle:"file upload" | inurl:"upload.php" | inurl:"fileupload" | inurl:"upload.asp" | inurl:"upload.aspx" | inurl:"uploader"`
  },
  {
    id: 'upload-image',
    category: '📤 File Upload',
    title: 'Image Upload Forms',
    description: 'Finds image upload pages',
    generateDork: (domain) => `site:${domain} intitle:"upload image" | intitle:"image upload" | inurl:"uploadimage" | inurl:"imageupload" | inurl:"uploadphoto" | inurl:"photoupload"`
  },
  {
    id: 'upload-avatar',
    category: '📤 File Upload',
    title: 'Avatar/Photo Upload',
    description: 'Finds avatar and photo upload pages',
    generateDork: (domain) => `site:${domain} inurl:"avatar" | inurl:"uploadavatar" | inurl:"changeavatar" | inurl:"profile-picture" | inurl:"profilepic" | intitle:"upload avatar"`
  },
  {
    id: 'upload-document',
    category: '📤 File Upload',
    title: 'Document Upload',
    description: 'Finds document upload forms',
    generateDork: (domain) => `site:${domain} intitle:"upload document" | inurl:"uploaddoc" | inurl:"documentupload" | inurl:"uploadfile" | inurl:"doc-upload" | inurl:"file_upload"`
  },
  {
    id: 'upload-resume',
    category: '📤 File Upload',
    title: 'Resume/CV Upload',
    description: 'Finds resume upload forms',
    generateDork: (domain) => `site:${domain} intitle:"upload resume" | intitle:"upload cv" | inurl:"uploadresume" | inurl:"cvupload" | inurl:"resume-upload" | inurl:"career-application"`
  },
  
  // Authentication & Login Forms
  {
    id: 'auth-login',
    category: '🔐 Authentication',
    title: 'Login Pages',
    description: 'Finds login pages',
    generateDork: (domain) => `site:${domain} intitle:"login" | intitle:"sign in" | intitle:"member login" | inurl:"login.php" | inurl:"signin.php" | inurl:"login.asp" | inurl:"auth" | inurl:"authenticate"`
  },
  {
    id: 'auth-admin',
    category: '🔐 Authentication',
    title: 'Admin Login',
    description: 'Finds admin login pages',
    generateDork: (domain) => `site:${domain} intitle:"admin login" | intitle:"administrator" | inurl:"admin/login" | inurl:"adminlogin" | inurl:"admin.php" | inurl:"administrator.php" | inurl:"wp-admin"`
  },
  {
    id: 'auth-panel',
    category: '🔐 Authentication',
    title: 'Admin Panels',
    description: 'Finds admin panel pages',
    generateDork: (domain) => `site:${domain} intitle:"admin panel" | intitle:"control panel" | inurl:"admin" | inurl:"administrator" | inurl:"cpanel" | inurl:"admincp" | inurl:"modcp" | inurl:"admin_area"`
  },
  {
    id: 'auth-register',
    category: '🔐 Authentication',
    title: 'Registration Pages',
    description: 'Finds registration forms',
    generateDork: (domain) => `site:${domain} intitle:"register" | intitle:"sign up" | intitle:"registration" | inurl:"register.php" | inurl:"signup.php" | inurl:"registration" | inurl:"create-account"`
  },
  {
    id: 'auth-forgot',
    category: '🔐 Authentication',
    title: 'Password Reset Pages',
    description: 'Finds password reset forms',
    generateDork: (domain) => `site:${domain} intitle:"forgot password" | intitle:"reset password" | inurl:"forgot" | inurl:"reset-password" | inurl:"forgotpassword" | inurl:"lostpassword" | inurl:"recover"`
  },
  {
    id: 'auth-dashboard',
    category: '🔐 Authentication',
    title: 'User Dashboard',
    description: 'Finds user dashboard pages',
    generateDork: (domain) => `site:${domain} intitle:"dashboard" | intitle:"user home" | intitle:"my account" | inurl:"dashboard" | inurl:"user/home" | inurl:"myaccount" | inurl:"member-area"`
  },
  
  // Contact & Form Pages
  {
    id: 'form-contact',
    category: '📝 Forms',
    title: 'Contact Forms',
    description: 'Finds contact forms',
    generateDork: (domain) => `site:${domain} intitle:"contact" | intitle:"contact us" | intitle:"contact.php" | intitle:"contactus" | inurl:"contact.php" | inurl:"contactus.php" | inurl:"contact.asp" | inurl:"contact.html" | inurl:"contact-us" | inurl:"contact_form"`
  },
  {
    id: 'form-inquiry',
    category: '📝 Forms',
    title: 'Inquiry Forms',
    description: 'Finds inquiry submission forms',
    generateDork: (domain) => `site:${domain} intitle:"inquiry" | intitle:"enquiry" | intitle:"make inquiry" | inurl:"inquiry.php" | inurl:"enquiry" | inurl:"inquiry-form" | inurl:"enquiry_form"`
  },
  {
    id: 'form-quote',
    category: '📝 Forms',
    title: 'Quote Request Forms',
    description: 'Finds quote request forms',
    generateDork: (domain) => `site:${domain} intitle:"get quote" | intitle:"request quote" | intitle:"quote form" | inurl:"quote" | inurl:"getquote" | inurl:"request-quote" | inurl:"quotation"`
  },
  {
    id: 'form-order',
    category: '📝 Forms',
    title: 'Order Forms',
    description: 'Finds order submission forms',
    generateDork: (domain) => `site:${domain} intitle:"order" | intitle:"place order" | intitle:"order form" | inurl:"order.php" | inurl:"orderform" | inurl:"order-now" | inurl:"placeorder"`
  },
  {
    id: 'form-booking',
    category: '📝 Forms',
    title: 'Booking Forms',
    description: 'Finds booking and reservation forms',
    generateDork: (domain) => `site:${domain} intitle:"booking" | intitle:"reservation" | intitle:"book now" | inurl:"booking" | inurl:"reservation" | inurl:"book-now" | inurl:"make-reservation"`
  },
  {
    id: 'form-application',
    category: '📝 Forms',
    title: 'Application Forms',
    description: 'Finds application submission forms',
    generateDork: (domain) => `site:${domain} intitle:"apply" | intitle:"application" | intitle:"application form" | inurl:"apply" | inurl:"application" | inurl:"submit-application" | inurl:"apply-now"`
  },
  {
    id: 'form-survey',
    category: '📝 Forms',
    title: 'Survey Forms',
    description: 'Finds survey and poll forms',
    generateDork: (domain) => `site:${domain} intitle:"survey" | intitle:"poll" | intitle:"questionnaire" | inurl:"survey" | inurl:"poll" | inurl:"take-survey" | inurl:"feedback-survey"`
  },
  {
    id: 'form-newsletter',
    category: '📝 Forms',
    title: 'Newsletter Signup',
    description: 'Finds newsletter subscription forms',
    generateDork: (domain) => `site:${domain} intitle:"newsletter" | intitle:"subscribe" | intitle:"subscription" | inurl:"newsletter" | inurl:"subscribe" | inurl:"signup" | inurl:"email-signup"`
  },
  
  // LFI/RFI (Local/Remote File Inclusion)
  {
    id: 'lfi-include',
    category: '📂 File Inclusion',
    title: 'Include Parameter',
    description: 'Finds pages with include parameter (LFI/RFI)',
    generateDork: (domain) => `site:${domain} inurl:"include=" | inurl:"inc=" | inurl:"incl=" | inurl:"include_file=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'lfi-file',
    category: '📂 File Inclusion',
    title: 'File Parameter',
    description: 'Finds pages with file parameter',
    generateDork: (domain) => `site:${domain} inurl:"file=" | inurl:"filename=" | inurl:"filepath=" | inurl:"doc=" | inurl:"document=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'lfi-path',
    category: '📂 File Inclusion',
    title: 'Path Parameter',
    description: 'Finds pages with path parameter',
    generateDork: (domain) => `site:${domain} inurl:"path=" | inurl:"filepath=" | inurl:"dir=" | inurl:"directory=" | inurl:"folder=" ext:php | ext:asp`
  },
  {
    id: 'lfi-page',
    category: '📂 File Inclusion',
    title: 'Page Include Parameter',
    description: 'Finds pages with page include parameter',
    generateDork: (domain) => `site:${domain} inurl:"pg=" | inurl:"page=" | inurl:"p=" | inurl:"content=" | inurl:"load=" ext:php | ext:asp | ext:jsp`
  },
  
  // Open Redirect
  {
    id: 'redirect-url',
    category: '↗️ Open Redirect',
    title: 'URL Redirect Parameter',
    description: 'Finds pages with URL redirect parameter',
    generateDork: (domain) => `site:${domain} inurl:"url=" | inurl:"redirect=" | inurl:"redir=" | inurl:"link=" | inurl:"goto=" | inurl:"out=" ext:php | ext:asp | ext:aspx`
  },
  {
    id: 'redirect-return',
    category: '↗️ Open Redirect',
    title: 'Return URL Parameter',
    description: 'Finds pages with return URL parameter',
    generateDork: (domain) => `site:${domain} inurl:"return=" | inurl:"returnurl=" | inurl:"ret=" | inurl:"return_url=" | inurl:"returnto=" ext:php | ext:asp`
  },
  {
    id: 'redirect-next',
    category: '↗️ Open Redirect',
    title: 'Next/Continue Parameter',
    description: 'Finds pages with next/continue parameters',
    generateDork: (domain) => `site:${domain} inurl:"next=" | inurl:"continue=" | inurl:"forward=" | inurl:"dest=" | inurl:"destination=" ext:php | ext:asp | ext:jsp`
  },
  
  // IDOR (Insecure Direct Object Reference)
  {
    id: 'idor-invoice',
    category: '🔓 IDOR',
    title: 'Invoice Pages',
    description: 'Finds invoice pages with IDs',
    generateDork: (domain) => `site:${domain} intitle:"invoice" | intitle:"receipt" | inurl:"invoice" | inurl:"receipt" | inurl:"invoice_id=" | inurl:"invoiceid=" ext:php | ext:asp`
  },
  {
    id: 'idor-order',
    category: '🔓 IDOR',
    title: 'Order Details',
    description: 'Finds order detail pages',
    generateDork: (domain) => `site:${domain} intitle:"order details" | intitle:"my orders" | inurl:"order_id=" | inurl:"orderid=" | inurl:"orderdetails" | inurl:"vieworder=" ext:php | ext:asp`
  },
  {
    id: 'idor-document',
    category: '🔓 IDOR',
    title: 'Document Access',
    description: 'Finds document access pages',
    generateDork: (domain) => `site:${domain} inurl:"doc=" | inurl:"document=" | inurl:"docid=" | inurl:"documentid=" | inurl:"viewdoc=" | inurl:"download=" ext:php | ext:asp`
  },
  {
    id: 'idor-profile',
    category: '🔓 IDOR',
    title: 'User Profile Access',
    description: 'Finds user profile pages by ID',
    generateDork: (domain) => `site:${domain} intitle:"profile" | intitle:"user profile" | inurl:"profile=" | inurl:"user_id=" | inurl:"userid=" | inurl:"viewprofile=" ext:php | ext:asp`
  },
  
  // API Endpoints
  {
    id: 'api-endpoint',
    category: '🔌 API',
    title: 'API Endpoints',
    description: 'Finds API endpoints',
    generateDork: (domain) => `site:${domain} inurl:"/api/" | inurl:"/v1/" | inurl:"/v2/" | inurl:"/rest/" | inurl:"/api/v" | inurl:"/graphql" | inurl:"/swagger"`
  },
  {
    id: 'api-json',
    category: '🔌 API',
    title: 'JSON API Responses',
    description: 'Finds JSON API endpoints',
    generateDork: (domain) => `site:${domain} (ext:json | filetype:json) (inurl:"api" | inurl:"v1" | inurl:"v2" | inurl:"rest")`
  },
  {
    id: 'api-swagger',
    category: '🔌 API',
    title: 'Swagger/OpenAPI Docs',
    description: 'Finds API documentation pages',
    generateDork: (domain) => `site:${domain} intitle:"swagger" | intitle:"api docs" | intitle:"api documentation" | inurl:"swagger-ui" | inurl:"api-docs" | inurl:"openapi" | inurl:"redoc"`
  },
  
  // Error Pages & Debug Info
  {
    id: 'error-sql',
    category: '⚠️ Error Messages',
    title: 'SQL Error Messages',
    description: 'Finds pages with SQL errors',
    generateDork: (domain) => `site:${domain} "mysql_fetch" | "SQL syntax" | "mysqli error" | "mysql error" | "ORA-" | "Microsoft OLE DB" | "ODBC SQL"`
  },
  {
    id: 'error-php',
    category: '⚠️ Error Messages',
    title: 'PHP Error Messages',
    description: 'Finds pages with PHP errors',
    generateDork: (domain) => `site:${domain} "Warning: include" | "Fatal error" | "Parse error" | "Warning: require" | "Notice: Undefined" | "Call to undefined"`
  },
  {
    id: 'error-stack',
    category: '⚠️ Error Messages',
    title: 'Stack Traces',
    description: 'Finds pages with stack traces',
    generateDork: (domain) => `site:${domain} "Stack trace:" | "Traceback" | "Exception in thread" | "at line" | "error_reporting" | "display_errors"`
  },
  
  // Shopping & E-commerce
  {
    id: 'ecom-cart',
    category: '🛒 E-commerce',
    title: 'Shopping Cart',
    description: 'Finds shopping cart pages',
    generateDork: (domain) => `site:${domain} intitle:"shopping cart" | intitle:"cart" | intitle:"basket" | inurl:"cart" | inurl:"basket" | inurl:"checkout" | inurl:"shopping-cart" | inurl:"view-cart"`
  },
  {
    id: 'ecom-payment',
    category: '🛒 E-commerce',
    title: 'Payment Pages',
    description: 'Finds payment processing pages',
    generateDork: (domain) => `site:${domain} intitle:"payment" | intitle:"billing" | intitle:"checkout" | inurl:"payment" | inurl:"billing" | inurl:"pay" | inurl:"checkout" | inurl:"payment-info"`
  },
  {
    id: 'ecom-product',
    category: '🛒 E-commerce',
    title: 'Product Pages',
    description: 'Finds product detail pages',
    generateDork: (domain) => `site:${domain} intitle:"product" | intitle:"item details" | inurl:"product" | inurl:"item" | inurl:"prod=" | inurl:"product_id=" | inurl:"viewproduct"`
  },
  
  // People & Username
  {
    id: 'people-profiles',
    category: '👤 People & Username',
    title: 'User Profiles',
    description: 'Finds user profile pages',
    generateDork: (domain) => `site:${domain} intitle:"profile" | intitle:"user profile" | intitle:"member profile" | inurl:"/user/" | inurl:"/profile/" | inurl:"/users/" | inurl:"/member/"`
  },
  {
    id: 'people-directory',
    category: '👤 People & Username',
    title: 'Employee Directory',
    description: 'Finds employee and staff directories',
    generateDork: (domain) => `site:${domain} intitle:"employee directory" | intitle:"staff directory" | intitle:"our team" | intitle:"team members" | inurl:"employees" | inurl:"staff"`
  },
  {
    id: 'people-contact-info',
    category: '👤 People & Username',
    title: 'Contact Information',
    description: 'Finds pages with contact details',
    generateDork: (domain) => `site:${domain} "@${domain}" | "email" | "phone" | "contact" (ext:xls | ext:xlsx | ext:csv | ext:txt | ext:pdf)`
  },
  {
    id: 'people-username',
    category: '👤 People & Username',
    title: 'Username Search',
    description: 'Finds specific usernames on domain',
    generateDork: (domain) => `site:${domain} intitle:"username" | inurl:"user=" | inurl:"username=" | inurl:"profile?user" | "member since"`
  },
  
  // Social Media
  {
    id: 'social-links',
    category: '📱 Social Media',
    title: 'Social Media Links',
    description: 'Finds social media profiles and links',
    generateDork: (domain) => `site:${domain} "facebook.com" | "twitter.com" | "linkedin.com" | "instagram.com" | "youtube.com" | "tiktok.com"`
  },
  {
    id: 'social-feeds',
    category: '📱 Social Media',
    title: 'Social Media Feeds',
    description: 'Finds embedded social media feeds',
    generateDork: (domain) => `site:${domain} intitle:"social" | intitle:"follow us" | inurl:"social-feed" | inurl:"twitter-feed" | "social media"`
  },
  {
    id: 'social-mentions',
    category: '📱 Social Media',
    title: 'Social Mentions',
    description: 'Finds mentions across social platforms',
    generateDork: (domain) => `"${domain}" (site:facebook.com | site:twitter.com | site:linkedin.com | site:instagram.com)`
  },
  {
    id: 'social-share',
    category: '📱 Social Media',
    title: 'Share Buttons & Pages',
    description: 'Finds social sharing functionality',
    generateDork: (domain) => `site:${domain} intitle:"share" | "share this" | "social sharing" | inurl:"share" | "share on facebook"`
  },
  
  // Websites
  {
    id: 'web-subdomains',
    category: '🌐 Websites',
    title: 'Subdomain Discovery',
    description: 'Finds subdomains of target',
    generateDork: (domain) => `site:*.${domain} -www`
  },
  {
    id: 'web-related',
    category: '🌐 Websites',
    title: 'Related Websites',
    description: 'Finds related websites',
    generateDork: (domain) => `related:${domain}`
  },
  {
    id: 'web-cached',
    category: '🌐 Websites',
    title: 'Cached Pages',
    description: 'Finds cached versions of pages',
    generateDork: (domain) => `cache:${domain}`
  },
  {
    id: 'web-sitemap',
    category: '🌐 Websites',
    title: 'Sitemap Files',
    description: 'Finds XML sitemaps',
    generateDork: (domain) => `site:${domain} (inurl:"sitemap.xml" | inurl:"sitemap_index.xml" | inurl:"sitemap" | filetype:xml "sitemap")`
  },
  {
    id: 'web-robots',
    category: '🌐 Websites',
    title: 'Robots.txt Files',
    description: 'Finds robots.txt files',
    generateDork: (domain) => `site:${domain} inurl:"robots.txt"`
  },
  
  // Admin Portals (Extended)
  {
    id: 'admin-phpmyadmin',
    category: '🔐 Admin Portals',
    title: 'phpMyAdmin',
    description: 'Finds phpMyAdmin installations',
    generateDork: (domain) => `site:${domain} intitle:"phpMyAdmin" | inurl:"phpmyadmin" | inurl:"pma" | inurl:"myadmin"`
  },
  {
    id: 'admin-wordpress',
    category: '🔐 Admin Portals',
    title: 'WordPress Admin',
    description: 'Finds WordPress admin panels',
    generateDork: (domain) => `site:${domain} inurl:"wp-admin" | inurl:"wp-login.php" | intitle:"wordpress" | inurl:"wp-content"`
  },
  {
    id: 'admin-cms',
    category: '🔐 Admin Portals',
    title: 'CMS Admin Panels',
    description: 'Finds various CMS admin panels',
    generateDork: (domain) => `site:${domain} inurl:"admin" | inurl:"administrator" | inurl:"moderator" | inurl:"webadmin" | inurl:"adminarea" | inurl:"controlpanel"`
  },
  {
    id: 'admin-config',
    category: '🔐 Admin Portals',
    title: 'Config & Setup Pages',
    description: 'Finds configuration and setup pages',
    generateDork: (domain) => `site:${domain} intitle:"configuration" | intitle:"setup" | inurl:"config" | inurl:"setup.php" | inurl:"install.php" | inurl:"installer"`
  },
  
  // Files
  {
    id: 'files-pdf',
    category: '📁 Files',
    title: 'PDF Documents',
    description: 'Finds PDF files',
    generateDork: (domain) => `site:${domain} (ext:pdf | filetype:pdf)`
  },
  {
    id: 'files-docs',
    category: '📁 Files',
    title: 'Office Documents',
    description: 'Finds Word, Excel, PowerPoint files',
    generateDork: (domain) => `site:${domain} (ext:doc | ext:docx | ext:xls | ext:xlsx | ext:ppt | ext:pptx)`
  },
  {
    id: 'files-text',
    category: '📁 Files',
    title: 'Text Files',
    description: 'Finds text and log files',
    generateDork: (domain) => `site:${domain} (ext:txt | ext:log | ext:cfg | ext:conf | ext:ini)`
  },
  {
    id: 'files-backup',
    category: '📁 Files',
    title: 'Backup Files',
    description: 'Finds backup and archive files',
    generateDork: (domain) => `site:${domain} (ext:bak | ext:backup | ext:old | ext:zip | ext:rar | ext:tar | ext:gz | ext:7z)`
  },
  {
    id: 'files-sql',
    category: '📁 Files',
    title: 'Database Files',
    description: 'Finds SQL and database files',
    generateDork: (domain) => `site:${domain} (ext:sql | ext:db | ext:sqlite | ext:mdb | filetype:sql "INSERT INTO")`
  },
  {
    id: 'files-images',
    category: '📁 Files',
    title: 'Image Files',
    description: 'Finds image files',
    generateDork: (domain) => `site:${domain} (ext:jpg | ext:jpeg | ext:png | ext:gif | ext:bmp | ext:svg)`
  },
  
  // Sensitive Info
  {
    id: 'sensitive-passwords',
    category: '⚠️ Sensitive Info',
    title: 'Password Files',
    description: 'Finds files containing passwords',
    generateDork: (domain) => `site:${domain} (intext:"password" | intext:"passwd" | intext:"pwd") (ext:txt | ext:log | ext:cfg | ext:ini | ext:env)`
  },
  {
    id: 'sensitive-api-keys',
    category: '⚠️ Sensitive Info',
    title: 'API Keys & Tokens',
    description: 'Finds exposed API keys',
    generateDork: (domain) => `site:${domain} ("api_key" | "apikey" | "api-key" | "access_token" | "secret_key") (ext:json | ext:txt | ext:log | ext:env | ext:yml)`
  },
  {
    id: 'sensitive-env',
    category: '⚠️ Sensitive Info',
    title: 'Environment Files',
    description: 'Finds .env and config files',
    generateDork: (domain) => `site:${domain} (inurl:".env" | inurl:"config.php" | inurl:"configuration.php" | ext:env | filetype:env)`
  },
  {
    id: 'sensitive-credentials',
    category: '⚠️ Sensitive Info',
    title: 'Credentials & Secrets',
    description: 'Finds files with credentials',
    generateDork: (domain) => `site:${domain} (intext:"username" | intext:"password" | intext:"admin" | intext:"root") (ext:txt | ext:log | ext:sql)`
  },
  {
    id: 'sensitive-financial',
    category: '⚠️ Sensitive Info',
    title: 'Financial Information',
    description: 'Finds financial data',
    generateDork: (domain) => `site:${domain} ("credit card" | "SSN" | "social security" | "bank account" | "routing number") (ext:xls | ext:xlsx | ext:csv)`
  },
  {
    id: 'sensitive-email',
    category: '⚠️ Sensitive Info',
    title: 'Email Lists',
    description: 'Finds email address lists',
    generateDork: (domain) => `site:${domain} (intext:"@${domain}" | "email list" | "mailing list") (ext:xls | ext:xlsx | ext:csv | ext:txt)`
  },
  
  // Vulnerabilities
  {
    id: 'vuln-directory-listing',
    category: '🛡️ Vulnerabilities',
    title: 'Directory Listing',
    description: 'Finds open directory listings',
    generateDork: (domain) => `site:${domain} intitle:"index of" | intitle:"directory listing" | intitle:"parent directory"`
  },
  {
    id: 'vuln-exposed-git',
    category: '🛡️ Vulnerabilities',
    title: 'Exposed .git Folders',
    description: 'Finds exposed Git repositories',
    generateDork: (domain) => `site:${domain} inurl:".git" | intitle:"Index of /.git"`
  },
  {
    id: 'vuln-log-files',
    category: '🛡️ Vulnerabilities',
    title: 'Exposed Log Files',
    description: 'Finds publicly accessible log files',
    generateDork: (domain) => `site:${domain} (ext:log | filetype:log) (intext:"error" | intext:"warning" | intitle:"index of")`
  },
  {
    id: 'vuln-phpinfo',
    category: '🛡️ Vulnerabilities',
    title: 'PHPInfo Pages',
    description: 'Finds phpinfo() disclosure pages',
    generateDork: (domain) => `site:${domain} (intitle:"phpinfo" | intext:"PHP Version" | "PHP Credits")`
  },
  {
    id: 'vuln-shell',
    category: '🛡️ Vulnerabilities',
    title: 'Web Shells',
    description: 'Finds potential web shells',
    generateDork: (domain) => `site:${domain} (inurl:"shell" | inurl:"cmd" | inurl:"c99" | inurl:"r57" | intitle:"webshell")`
  },
  {
    id: 'vuln-default-pages',
    category: '🛡️ Vulnerabilities',
    title: 'Default Installation Pages',
    description: 'Finds default installation pages',
    generateDork: (domain) => `site:${domain} (intitle:"welcome to" | intitle:"test page" | intitle:"it works!" | intitle:"apache" | "default page")`
  },
  
  // Company Research
  {
    id: 'company-about',
    category: '🏢 Company Research',
    title: 'About & Company Info',
    description: 'Finds company information pages',
    generateDork: (domain) => `site:${domain} (intitle:"about us" | intitle:"about" | intitle:"company" | inurl:"about" | inurl:"company-info")`
  },
  {
    id: 'company-press',
    category: '🏢 Company Research',
    title: 'Press Releases & News',
    description: 'Finds press releases and news',
    generateDork: (domain) => `site:${domain} (intitle:"press release" | intitle:"news" | inurl:"press" | inurl:"news" | inurl:"media")`
  },
  {
    id: 'company-careers',
    category: '🏢 Company Research',
    title: 'Career & Job Postings',
    description: 'Finds career and job pages',
    generateDork: (domain) => `site:${domain} (intitle:"careers" | intitle:"jobs" | intitle:"join us" | inurl:"careers" | inurl:"jobs" | "now hiring")`
  },
  {
    id: 'company-financials',
    category: '🏢 Company Research',
    title: 'Financial Reports',
    description: 'Finds financial documents',
    generateDork: (domain) => `site:${domain} ("annual report" | "financial report" | "investor relations" | "quarterly report") (ext:pdf | ext:doc | ext:docx)`
  },
  {
    id: 'company-presentations',
    category: '🏢 Company Research',
    title: 'Presentations & Slides',
    description: 'Finds company presentations',
    generateDork: (domain) => `site:${domain} (ext:ppt | ext:pptx | filetype:ppt) (intitle:"presentation" | intitle:"slides")`
  },
  
  // IoT & Smart Devices
  {
    id: 'iot-webcams',
    category: '📡 IoT & Smart Devices',
    title: 'IP Cameras & Webcams',
    description: 'Finds IP camera interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"view/view.shtml" | inurl:"ViewerFrame?Mode=" | intitle:"webcam" | intitle:"network camera" | inurl:"axis-cgi")`
  },
  {
    id: 'iot-routers',
    category: '📡 IoT & Smart Devices',
    title: 'Router Admin Panels',
    description: 'Finds router login pages',
    generateDork: (domain) => `site:${domain} (intitle:"router" | intitle:"gateway" | inurl:"router-login" | intitle:"wireless" | "router configuration")`
  },
  {
    id: 'iot-printers',
    category: '📡 IoT & Smart Devices',
    title: 'Network Printers',
    description: 'Finds network printer interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"printer" | inurl:"printer" | intitle:"hp " | intitle:"canon" | intitle:"epson" | "printer status")`
  },
  {
    id: 'iot-smart-home',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Home Devices',
    description: 'Finds smart home device interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"smart home" | inurl:"homeautomation" | "iot device" | intitle:"control panel")`
  },
  
  // Cloud Storage
  {
    id: 'cloud-s3',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 Buckets',
    description: 'Finds S3 bucket references',
    generateDork: (domain) => `site:${domain} (inurl:"s3.amazonaws.com" | intext:"s3.amazonaws.com" | "s3 bucket")`
  },
  {
    id: 'cloud-azure',
    category: '☁️ Cloud Storage',
    title: 'Azure Blob Storage',
    description: 'Finds Azure storage references',
    generateDork: (domain) => `site:${domain} (inurl:"blob.core.windows.net" | intext:"azure" | "blob storage")`
  },
  {
    id: 'cloud-google',
    category: '☁️ Cloud Storage',
    title: 'Google Cloud Storage',
    description: 'Finds GCS bucket references',
    generateDork: (domain) => `site:${domain} (inurl:"storage.googleapis.com" | intext:"gcs" | "google cloud storage")`
  },
  {
    id: 'cloud-dropbox',
    category: '☁️ Cloud Storage',
    title: 'Dropbox Shares',
    description: 'Finds Dropbox shared links',
    generateDork: (domain) => `site:${domain} (inurl:"dropbox.com/s/" | intext:"dropbox" | "shared folder")`
  },
  
  // Code Repositories
  {
    id: 'code-github',
    category: '💻 Code Repositories',
    title: 'GitHub Repositories',
    description: 'Finds GitHub repos',
    generateDork: (domain) => `site:github.com "${domain}"`
  },
  {
    id: 'code-gitlab',
    category: '💻 Code Repositories',
    title: 'GitLab Repositories',
    description: 'Finds GitLab repos',
    generateDork: (domain) => `site:gitlab.com "${domain}"`
  },
  {
    id: 'code-bitbucket',
    category: '💻 Code Repositories',
    title: 'Bitbucket Repositories',
    description: 'Finds Bitbucket repos',
    generateDork: (domain) => `site:bitbucket.org "${domain}"`
  },
  {
    id: 'code-pastebin',
    category: '💻 Code Repositories',
    title: 'Pastebin & Code Pastes',
    description: 'Finds code pastes',
    generateDork: (domain) => `(site:pastebin.com | site:paste.ee | site:ghostbin.com) "${domain}"`
  },
  {
    id: 'code-snippets',
    category: '💻 Code Repositories',
    title: 'Code Snippets',
    description: 'Finds code snippets and gists',
    generateDork: (domain) => `site:${domain} (inurl:"gist" | inurl:"snippet" | intitle:"code" | ext:js | ext:py | ext:java)`
  }
];
