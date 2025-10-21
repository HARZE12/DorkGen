export const dorkTemplates = [
  // SQL Injection Targets
  {
    id: 'sql-php-id',
    category: '💉 SQL Injection',
    title: 'PHP Pages with ID Parameter',
    description: 'Finds PHP pages with id parameter (SQL injection target)',
    generateDork: (domain) => `site:${domain} (inurl:"id=" OR inurl:"productid=" OR inurl:"product_id=" OR inurl:"itemid=" OR inurl:"item_id=" OR inurl:"pid=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'sql-product-id',
    category: '💉 SQL Injection',
    title: 'Product/Item ID Parameters',
    description: 'Finds pages with product/item parameters',
    generateDork: (domain) => `site:${domain} (inurl:"product=" OR inurl:"prod=" OR inurl:"item=" OR inurl:"sku=" OR inurl:"p=") (ext:php OR ext:asp OR ext:aspx OR ext:jsp)`
  },
  {
    id: 'sql-category',
    category: '💉 SQL Injection',
    title: 'Category Parameter Pages',
    description: 'Finds pages with category parameters',
    generateDork: (domain) => `site:${domain} (inurl:"cat=" OR inurl:"category=" OR inurl:"categoryid=" OR inurl:"catid=" OR inurl:"cid=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'sql-user-pages',
    category: '💉 SQL Injection',
    title: 'User Profile Pages',
    description: 'Finds user profile pages with parameters',
    generateDork: (domain) => `site:${domain} (inurl:"user=" OR inurl:"userid=" OR inurl:"uid=" OR inurl:"member=" OR inurl:"profile=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'sql-news-article',
    category: '💉 SQL Injection',
    title: 'News/Article Pages',
    description: 'Finds news and article pages with parameters',
    generateDork: (domain) => `site:${domain} (inurl:"news=" OR inurl:"newsid=" OR inurl:"article=" OR inurl:"articleid=" OR inurl:"post=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'sql-page-param',
    category: '💉 SQL Injection',
    title: 'Page Parameter',
    description: 'Finds pages with page parameter',
    generateDork: (domain) => `site:${domain} (inurl:"page=" OR inurl:"p=" OR inurl:"pg=" OR inurl:"pageid=" OR inurl:"content=") (ext:php OR ext:asp OR ext:aspx OR ext:jsp)`
  },
  {
    id: 'sql-view-param',
    category: '💉 SQL Injection',
    title: 'View Parameter Pages',
    description: 'Finds pages with view parameter',
    generateDork: (domain) => `site:${domain} (inurl:"view=" OR inurl:"display=" OR inurl:"show=" OR inurl:"detail=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'sql-query-param',
    category: '💉 SQL Injection',
    title: 'Query Parameter Pages',
    description: 'Finds pages with query parameters',
    generateDork: (domain) => `site:${domain} (inurl:"q=" OR inurl:"query=" OR inurl:"search=" OR inurl:"s=" OR inurl:"keyword=") (ext:php OR ext:asp OR ext:aspx)`
  },
  
  // XSS (Cross-Site Scripting) Targets
  {
    id: 'xss-search',
    category: '⚡ XSS',
    title: 'Search Pages',
    description: 'Finds search pages (XSS target)',
    generateDork: (domain) => `site:${domain} (intitle:"search" OR intitle:"search.php" OR intitle:"search.asp" OR intitle:"search.aspx" OR inurl:"search=" OR inurl:"q=" OR inurl:"query=")`
  },
  {
    id: 'xss-comment',
    category: '⚡ XSS',
    title: 'Comment Forms',
    description: 'Finds comment submission forms',
    generateDork: (domain) => `site:${domain} (inurl:"comment" OR inurl:"addcomment" OR inurl:"postcomment" OR inurl:"comments.php" OR inurl:"add_comment" OR intitle:"post comment")`
  },
  {
    id: 'xss-feedback',
    category: '⚡ XSS',
    title: 'Feedback Forms',
    description: 'Finds feedback forms for XSS testing',
    generateDork: (domain) => `site:${domain} (intitle:"feedback" OR intitle:"feedback.php" OR intitle:"feedback.asp" OR inurl:"feedback" OR inurl:"send-feedback" OR inurl:"submit-feedback")`
  },
  {
    id: 'xss-message',
    category: '⚡ XSS',
    title: 'Message/Contact Forms',
    description: 'Finds message and contact forms',
    generateDork: (domain) => `site:${domain} (intitle:"message" OR intitle:"send message" OR inurl:"message.php" OR inurl:"sendmessage" OR inurl:"contactform") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'xss-guestbook',
    category: '⚡ XSS',
    title: 'Guestbook Pages',
    description: 'Finds guestbook pages',
    generateDork: (domain) => `site:${domain} (intitle:"guestbook" OR intitle:"guest book" OR inurl:"guestbook.php" OR inurl:"guest.php" OR inurl:"addguest" OR inurl:"sign-guestbook")`
  },
  {
    id: 'xss-profile',
    category: '⚡ XSS',
    title: 'Profile Edit Pages',
    description: 'Finds profile editing pages',
    generateDork: (domain) => `site:${domain} (intitle:"edit profile" OR inurl:"editprofile" OR inurl:"profile.php" OR inurl:"account.php" OR inurl:"myprofile" OR inurl:"updateprofile")`
  },
  
  // File Upload Vulnerabilities
  {
    id: 'upload-general',
    category: '📤 File Upload',
    title: 'File Upload Forms',
    description: 'Finds file upload functionality',
    generateDork: (domain) => `site:${domain} (intitle:"upload" OR intitle:"file upload" OR inurl:"upload.php" OR inurl:"fileupload" OR inurl:"upload.asp" OR inurl:"upload.aspx" OR inurl:"uploader")`
  },
  {
    id: 'upload-image',
    category: '📤 File Upload',
    title: 'Image Upload Forms',
    description: 'Finds image upload pages',
    generateDork: (domain) => `site:${domain} (intitle:"upload image" OR intitle:"image upload" OR inurl:"uploadimage" OR inurl:"imageupload" OR inurl:"uploadphoto" OR inurl:"photoupload")`
  },
  {
    id: 'upload-avatar',
    category: '📤 File Upload',
    title: 'Avatar/Photo Upload',
    description: 'Finds avatar and photo upload pages',
    generateDork: (domain) => `site:${domain} (inurl:"avatar" OR inurl:"uploadavatar" OR inurl:"changeavatar" OR inurl:"profile-picture" OR inurl:"profilepic" OR intitle:"upload avatar")`
  },
  {
    id: 'upload-document',
    category: '📤 File Upload',
    title: 'Document Upload',
    description: 'Finds document upload forms',
    generateDork: (domain) => `site:${domain} (intitle:"upload document" OR inurl:"uploaddoc" OR inurl:"documentupload" OR inurl:"uploadfile" OR inurl:"doc-upload" OR inurl:"file_upload")`
  },
  {
    id: 'upload-resume',
    category: '📤 File Upload',
    title: 'Resume/CV Upload',
    description: 'Finds resume upload forms',
    generateDork: (domain) => `site:${domain} (intitle:"upload resume" OR intitle:"upload cv" OR inurl:"uploadresume" OR inurl:"cvupload" OR inurl:"resume-upload" OR inurl:"career-application")`
  },
  
  // Authentication & Login Forms
  {
    id: 'auth-login',
    category: '🔐 Authentication',
    title: 'Login Pages',
    description: 'Finds login pages',
    generateDork: (domain) => `site:${domain} (intitle:"login" OR intitle:"sign in" OR intitle:"member login" OR inurl:"login.php" OR inurl:"signin.php" OR inurl:"login.asp" OR inurl:"auth" OR inurl:"authenticate")`
  },
  {
    id: 'auth-admin',
    category: '🔐 Authentication',
    title: 'Admin Login',
    description: 'Finds admin login pages',
    generateDork: (domain) => `site:${domain} (intitle:"admin login" OR intitle:"administrator" OR inurl:"admin/login" OR inurl:"adminlogin" OR inurl:"admin.php" OR inurl:"administrator.php" OR inurl:"wp-admin")`
  },
  {
    id: 'auth-panel',
    category: '🔐 Authentication',
    title: 'Admin Panels',
    description: 'Finds admin panel pages',
    generateDork: (domain) => `site:${domain} (intitle:"admin panel" OR intitle:"control panel" OR inurl:"admin" OR inurl:"administrator" OR inurl:"cpanel" OR inurl:"admincp" OR inurl:"modcp" OR inurl:"admin_area")`
  },
  {
    id: 'auth-register',
    category: '🔐 Authentication',
    title: 'Registration Pages',
    description: 'Finds registration forms',
    generateDork: (domain) => `site:${domain} (intitle:"register" OR intitle:"sign up" OR intitle:"registration" OR inurl:"register.php" OR inurl:"signup.php" OR inurl:"registration" OR inurl:"create-account")`
  },
  {
    id: 'auth-forgot',
    category: '🔐 Authentication',
    title: 'Password Reset Pages',
    description: 'Finds password reset forms',
    generateDork: (domain) => `site:${domain} (intitle:"forgot password" OR intitle:"reset password" OR inurl:"forgot" OR inurl:"reset-password" OR inurl:"forgotpassword" OR inurl:"lostpassword" OR inurl:"recover")`
  },
  {
    id: 'auth-dashboard',
    category: '🔐 Authentication',
    title: 'User Dashboard',
    description: 'Finds user dashboard pages',
    generateDork: (domain) => `site:${domain} (intitle:"dashboard" OR intitle:"user home" OR intitle:"my account" OR inurl:"dashboard" OR inurl:"user/home" OR inurl:"myaccount" OR inurl:"member-area")`
  },
  
  // Contact & Form Pages
  {
    id: 'form-contact',
    category: '📝 Forms',
    title: 'Contact Forms',
    description: 'Finds contact forms',
    generateDork: (domain) => `site:${domain} (intitle:"contact" OR intitle:"contact us" OR intitle:"contact.php" OR intitle:"contactus" OR inurl:"contact.php" OR inurl:"contactus.php" OR inurl:"contact.asp" OR inurl:"contact.html" OR inurl:"contact-us" OR inurl:"contact_form")`
  },
  {
    id: 'form-inquiry',
    category: '📝 Forms',
    title: 'Inquiry Forms',
    description: 'Finds inquiry submission forms',
    generateDork: (domain) => `site:${domain} (intitle:"inquiry" OR intitle:"enquiry" OR intitle:"make inquiry" OR inurl:"inquiry.php" OR inurl:"enquiry" OR inurl:"inquiry-form" OR inurl:"enquiry_form")`
  },
  {
    id: 'form-quote',
    category: '📝 Forms',
    title: 'Quote Request Forms',
    description: 'Finds quote request forms',
    generateDork: (domain) => `site:${domain} (intitle:"get quote" OR intitle:"request quote" OR intitle:"quote form" OR inurl:"quote" OR inurl:"getquote" OR inurl:"request-quote" OR inurl:"quotation")`
  },
  {
    id: 'form-order',
    category: '📝 Forms',
    title: 'Order Forms',
    description: 'Finds order submission forms',
    generateDork: (domain) => `site:${domain} (intitle:"order" OR intitle:"place order" OR intitle:"order form" OR inurl:"order.php" OR inurl:"orderform" OR inurl:"order-now" OR inurl:"placeorder")`
  },
  {
    id: 'form-booking',
    category: '📝 Forms',
    title: 'Booking Forms',
    description: 'Finds booking and reservation forms',
    generateDork: (domain) => `site:${domain} (intitle:"booking" OR intitle:"reservation" OR intitle:"book now" OR inurl:"booking" OR inurl:"reservation" OR inurl:"book-now" OR inurl:"make-reservation")`
  },
  {
    id: 'form-application',
    category: '📝 Forms',
    title: 'Application Forms',
    description: 'Finds application submission forms',
    generateDork: (domain) => `site:${domain} (intitle:"apply" OR intitle:"application" OR intitle:"application form" OR inurl:"apply" OR inurl:"application" OR inurl:"submit-application" OR inurl:"apply-now")`
  },
  {
    id: 'form-survey',
    category: '📝 Forms',
    title: 'Survey Forms',
    description: 'Finds survey and poll forms',
    generateDork: (domain) => `site:${domain} (intitle:"survey" OR intitle:"poll" OR intitle:"questionnaire" OR inurl:"survey" OR inurl:"poll" OR inurl:"take-survey" OR inurl:"feedback-survey")`
  },
  {
    id: 'form-newsletter',
    category: '📝 Forms',
    title: 'Newsletter Signup',
    description: 'Finds newsletter subscription forms',
    generateDork: (domain) => `site:${domain} (intitle:"newsletter" OR intitle:"subscribe" OR intitle:"subscription" OR inurl:"newsletter" OR inurl:"subscribe" OR inurl:"signup" OR inurl:"email-signup")`
  },
  
  // LFI/RFI (Local/Remote File Inclusion)
  {
    id: 'lfi-include',
    category: '📂 File Inclusion',
    title: 'Include Parameter',
    description: 'Finds pages with include parameter (LFI/RFI)',
    generateDork: (domain) => `site:${domain} (inurl:"include=" OR inurl:"inc=" OR inurl:"incl=" OR inurl:"include_file=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'lfi-file',
    category: '📂 File Inclusion',
    title: 'File Parameter',
    description: 'Finds pages with file parameter',
    generateDork: (domain) => `site:${domain} (inurl:"file=" OR inurl:"filename=" OR inurl:"filepath=" OR inurl:"doc=" OR inurl:"document=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'lfi-path',
    category: '📂 File Inclusion',
    title: 'Path Parameter',
    description: 'Finds pages with path parameter',
    generateDork: (domain) => `site:${domain} (inurl:"path=" OR inurl:"filepath=" OR inurl:"dir=" OR inurl:"directory=" OR inurl:"folder=") (ext:php OR ext:asp)`
  },
  {
    id: 'lfi-page',
    category: '📂 File Inclusion',
    title: 'Page Include Parameter',
    description: 'Finds pages with page include parameter',
    generateDork: (domain) => `site:${domain} (inurl:"pg=" OR inurl:"page=" OR inurl:"p=" OR inurl:"content=" OR inurl:"load=") (ext:php OR ext:asp OR ext:jsp)`
  },
  
  // Open Redirect
  {
    id: 'redirect-url',
    category: '↗️ Open Redirect',
    title: 'URL Redirect Parameter',
    description: 'Finds pages with URL redirect parameter',
    generateDork: (domain) => `site:${domain} (inurl:"url=" OR inurl:"redirect=" OR inurl:"redir=" OR inurl:"link=" OR inurl:"goto=" OR inurl:"out=") (ext:php OR ext:asp OR ext:aspx)`
  },
  {
    id: 'redirect-return',
    category: '↗️ Open Redirect',
    title: 'Return URL Parameter',
    description: 'Finds pages with return URL parameter',
    generateDork: (domain) => `site:${domain} (inurl:"return=" OR inurl:"returnurl=" OR inurl:"ret=" OR inurl:"return_url=" OR inurl:"returnto=") (ext:php OR ext:asp)`
  },
  {
    id: 'redirect-next',
    category: '↗️ Open Redirect',
    title: 'Next/Continue Parameter',
    description: 'Finds pages with next/continue parameters',
    generateDork: (domain) => `site:${domain} (inurl:"next=" OR inurl:"continue=" OR inurl:"forward=" OR inurl:"dest=" OR inurl:"destination=") (ext:php OR ext:asp OR ext:jsp)`
  },
  
  // IDOR (Insecure Direct Object Reference)
  {
    id: 'idor-invoice',
    category: '🔓 IDOR',
    title: 'Invoice Pages',
    description: 'Finds invoice pages with IDs',
    generateDork: (domain) => `site:${domain} (intitle:"invoice" OR intitle:"receipt" OR inurl:"invoice" OR inurl:"receipt" OR inurl:"invoice_id=" OR inurl:"invoiceid=") (ext:php OR ext:asp)`
  },
  {
    id: 'idor-order',
    category: '🔓 IDOR',
    title: 'Order Details',
    description: 'Finds order detail pages',
    generateDork: (domain) => `site:${domain} (intitle:"order details" OR intitle:"my orders" OR inurl:"order_id=" OR inurl:"orderid=" OR inurl:"orderdetails" OR inurl:"vieworder=") (ext:php OR ext:asp)`
  },
  {
    id: 'idor-document',
    category: '🔓 IDOR',
    title: 'Document Access',
    description: 'Finds document access pages',
    generateDork: (domain) => `site:${domain} (inurl:"doc=" OR inurl:"document=" OR inurl:"docid=" OR inurl:"documentid=" OR inurl:"viewdoc=" OR inurl:"download=") (ext:php OR ext:asp)`
  },
  {
    id: 'idor-profile',
    category: '🔓 IDOR',
    title: 'User Profile Access',
    description: 'Finds user profile pages by ID',
    generateDork: (domain) => `site:${domain} (intitle:"profile" OR intitle:"user profile" OR inurl:"profile=" OR inurl:"user_id=" OR inurl:"userid=" OR inurl:"viewprofile=") (ext:php OR ext:asp)`
  },
  
  // API Endpoints
  {
    id: 'api-endpoint',
    category: '🔌 API',
    title: 'API Endpoints',
    description: 'Finds API endpoints',
    generateDork: (domain) => `site:${domain} (inurl:"/api/" OR inurl:"/v1/" OR inurl:"/v2/" OR inurl:"/rest/" OR inurl:"/api/v" OR inurl:"/graphql" OR inurl:"/swagger")`
  },
  {
    id: 'api-json',
    category: '🔌 API',
    title: 'JSON API Responses',
    description: 'Finds JSON API endpoints',
    generateDork: (domain) => `site:${domain} (ext:json OR filetype:json) (inurl:"api" OR inurl:"v1" OR inurl:"v2" OR inurl:"rest")`
  },
  {
    id: 'api-swagger',
    category: '🔌 API',
    title: 'Swagger/OpenAPI Docs',
    description: 'Finds API documentation pages',
    generateDork: (domain) => `site:${domain} (intitle:"swagger" OR intitle:"api docs" OR intitle:"api documentation" OR inurl:"swagger-ui" OR inurl:"api-docs" OR inurl:"openapi" OR inurl:"redoc")`
  },
  
  // Error Pages & Debug Info
  {
    id: 'error-sql',
    category: '⚠️ Error Messages',
    title: 'SQL Error Messages',
    description: 'Finds pages with SQL errors',
    generateDork: (domain) => `site:${domain} ("mysql_fetch" OR "SQL syntax" OR "mysqli error" OR "mysql error" OR "ORA-" OR "Microsoft OLE DB" OR "ODBC SQL")`
  },
  {
    id: 'error-php',
    category: '⚠️ Error Messages',
    title: 'PHP Error Messages',
    description: 'Finds pages with PHP errors',
    generateDork: (domain) => `site:${domain} ("Warning: include" OR "Fatal error" OR "Parse error" OR "Warning: require" OR "Notice: Undefined" OR "Call to undefined")`
  },
  {
    id: 'error-stack',
    category: '⚠️ Error Messages',
    title: 'Stack Traces',
    description: 'Finds pages with stack traces',
    generateDork: (domain) => `site:${domain} ("Stack trace:" OR "Traceback" OR "Exception in thread" OR "at line" OR "error_reporting" OR "display_errors")`
  },
  
  // Shopping & E-commerce
  {
    id: 'ecom-cart',
    category: '🛒 E-commerce',
    title: 'Shopping Cart',
    description: 'Finds shopping cart pages',
    generateDork: (domain) => `site:${domain} (intitle:"shopping cart" OR intitle:"cart" OR intitle:"basket" OR inurl:"cart" OR inurl:"basket" OR inurl:"checkout" OR inurl:"shopping-cart" OR inurl:"view-cart")`
  },
  {
    id: 'ecom-payment',
    category: '🛒 E-commerce',
    title: 'Payment Pages',
    description: 'Finds payment processing pages',
    generateDork: (domain) => `site:${domain} (intitle:"payment" OR intitle:"billing" OR intitle:"checkout" OR inurl:"payment" OR inurl:"billing" OR inurl:"pay" OR inurl:"checkout" OR inurl:"payment-info")`
  },
  {
    id: 'ecom-product',
    category: '🛒 E-commerce',
    title: 'Product Pages',
    description: 'Finds product detail pages',
    generateDork: (domain) => `site:${domain} (intitle:"product" OR intitle:"item details" OR inurl:"product" OR inurl:"item" OR inurl:"prod=" OR inurl:"product_id=" OR inurl:"viewproduct")`
  },
  
  // People & Username (domain parameter = username/person name)
  {
    id: 'people-basic',
    category: '👤 People & Username',
    title: 'Basic Search',
    description: 'Simple exact search for name/username',
    generateDork: (domain) => `"${domain}"`
  },
  {
    id: 'people-wildcard',
    category: '👤 People & Username',
    title: 'Wildcard All Sites',
    description: 'Search all domains',
    generateDork: (domain) => `site:*.* "${domain}"`
  },
  {
    id: 'people-linkedin-profile',
    category: '👤 People & Username',
    title: 'LinkedIn Profile',
    description: 'LinkedIn profile page',
    generateDork: (domain) => `site:linkedin.com/in/ "${domain}"`
  },
  {
    id: 'people-linkedin-all',
    category: '👤 People & Username',
    title: 'LinkedIn All Pages',
    description: 'All LinkedIn results',
    generateDork: (domain) => `site:linkedin.com "${domain}"`
  },
  {
    id: 'people-linkedin-posts',
    category: '👤 People & Username',
    title: 'LinkedIn Posts',
    description: 'LinkedIn activity',
    generateDork: (domain) => `site:linkedin.com/posts "${domain}"`
  },
  {
    id: 'people-instagram-profile',
    category: '👤 People & Username',
    title: 'Instagram Profile',
    description: 'Instagram account',
    generateDork: (domain) => `site:instagram.com "${domain}" -inurl:user`
  },
  {
    id: 'people-instagram-photos',
    category: '👤 People & Username',
    title: 'Instagram Photos',
    description: 'Instagram posts',
    generateDork: (domain) => `site:instagram.com/p "${domain}"`
  },
  {
    id: 'people-facebook-profile',
    category: '👤 People & Username',
    title: 'Facebook Profile',
    description: 'Facebook page',
    generateDork: (domain) => `site:facebook.com "${domain}"`
  },
  {
    id: 'people-facebook-photos',
    category: '👤 People & Username',
    title: 'Facebook Photos',
    description: 'Facebook images',
    generateDork: (domain) => `site:facebook.com/photo "${domain}"`
  },
  {
    id: 'people-twitter-profile',
    category: '👤 People & Username',
    title: 'Twitter/X Profile',
    description: 'Twitter account',
    generateDork: (domain) => `site:twitter.com "${domain}"`
  },
  {
    id: 'people-twitter-tweets',
    category: '👤 People & Username',
    title: 'Twitter Tweets',
    description: 'Tweet history',
    generateDork: (domain) => `site:twitter.com/status "${domain}"`
  },
  {
    id: 'people-github-profile',
    category: '👤 People & Username',
    title: 'GitHub Profile',
    description: 'GitHub account',
    generateDork: (domain) => `site:github.com "${domain}"`
  },
  {
    id: 'people-github-repos',
    category: '👤 People & Username',
    title: 'GitHub Repos',
    description: 'GitHub projects',
    generateDork: (domain) => `site:github.com/${domain}`
  },
  {
    id: 'people-github-commits',
    category: '👤 People & Username',
    title: 'GitHub Commits',
    description: 'Code contributions',
    generateDork: (domain) => `site:github.com author:"${domain}"`
  },
  {
    id: 'people-reddit-user',
    category: '👤 People & Username',
    title: 'Reddit User',
    description: 'Reddit profile',
    generateDork: (domain) => `site:reddit.com/user/ "${domain}"`
  },
  {
    id: 'people-reddit-posts',
    category: '👤 People & Username',
    title: 'Reddit Posts',
    description: 'Reddit activity',
    generateDork: (domain) => `site:reddit.com "${domain}"`
  },
  {
    id: 'people-stackoverflow-profile',
    category: '👤 People & Username',
    title: 'Stack Overflow',
    description: 'Stack Overflow profile',
    generateDork: (domain) => `site:stackoverflow.com/users "${domain}"`
  },
  {
    id: 'people-stackoverflow-posts',
    category: '👤 People & Username',
    title: 'Stack Overflow Posts',
    description: 'SO contributions',
    generateDork: (domain) => `site:stackoverflow.com "${domain}"`
  },
  {
    id: 'people-youtube-channel',
    category: '👤 People & Username',
    title: 'YouTube Channel',
    description: 'YouTube channel',
    generateDork: (domain) => `site:youtube.com/c/ "${domain}"`
  },
  {
    id: 'people-youtube-videos',
    category: '👤 People & Username',
    title: 'YouTube Videos',
    description: 'Video content',
    generateDork: (domain) => `site:youtube.com "${domain}"`
  },
  {
    id: 'people-tiktok',
    category: '👤 People & Username',
    title: 'TikTok Profile',
    description: 'TikTok account',
    generateDork: (domain) => `site:tiktok.com/@"${domain}"`
  },
  {
    id: 'people-medium-profile',
    category: '👤 People & Username',
    title: 'Medium Articles',
    description: 'Medium blog',
    generateDork: (domain) => `site:medium.com/@"${domain}"`
  },
  {
    id: 'people-medium-posts',
    category: '👤 People & Username',
    title: 'Medium Posts',
    description: 'Medium articles',
    generateDork: (domain) => `site:medium.com "${domain}"`
  },
  {
    id: 'people-devto',
    category: '👤 People & Username',
    title: 'Dev.to Profile',
    description: 'Dev.to account',
    generateDork: (domain) => `site:dev.to "${domain}"`
  },
  {
    id: 'people-behance',
    category: '👤 People & Username',
    title: 'Behance Profile',
    description: 'Behance portfolio',
    generateDork: (domain) => `site:behance.net "${domain}"`
  },
  {
    id: 'people-dribbble',
    category: '👤 People & Username',
    title: 'Dribbble Profile',
    description: 'Dribbble designs',
    generateDork: (domain) => `site:dribbble.com "${domain}"`
  },
  {
    id: 'people-pinterest',
    category: '👤 People & Username',
    title: 'Pinterest Profile',
    description: 'Pinterest boards',
    generateDork: (domain) => `site:pinterest.com/${domain}`
  },
  {
    id: 'people-tumblr',
    category: '👤 People & Username',
    title: 'Tumblr Blog',
    description: 'Tumblr blog',
    generateDork: (domain) => `site:tumblr.com "${domain}"`
  },
  {
    id: 'people-quora-profile',
    category: '👤 People & Username',
    title: 'Quora Profile',
    description: 'Quora account',
    generateDork: (domain) => `site:quora.com/profile/ "${domain}"`
  },
  {
    id: 'people-quora-answers',
    category: '👤 People & Username',
    title: 'Quora Answers',
    description: 'Quora responses',
    generateDork: (domain) => `site:quora.com "${domain}"`
  },
  {
    id: 'people-telegram',
    category: '👤 People & Username',
    title: 'Telegram',
    description: 'Telegram username',
    generateDork: (domain) => `site:t.me "${domain}"`
  },
  {
    id: 'people-discord',
    category: '👤 People & Username',
    title: 'Discord',
    description: 'Discord servers',
    generateDork: (domain) => `site:discord.com "${domain}"`
  },
  {
    id: 'people-twitch',
    category: '👤 People & Username',
    title: 'Twitch Profile',
    description: 'Twitch channel',
    generateDork: (domain) => `site:twitch.tv/${domain}`
  },
  {
    id: 'people-soundcloud',
    category: '👤 People & Username',
    title: 'SoundCloud',
    description: 'SoundCloud music',
    generateDork: (domain) => `site:soundcloud.com/${domain}`
  },
  {
    id: 'people-spotify',
    category: '👤 People & Username',
    title: 'Spotify',
    description: 'Spotify profile',
    generateDork: (domain) => `site:open.spotify.com "${domain}"`
  },
  {
    id: 'people-vimeo',
    category: '👤 People & Username',
    title: 'Vimeo',
    description: 'Vimeo videos',
    generateDork: (domain) => `site:vimeo.com/${domain}`
  },
  {
    id: 'people-flickr',
    category: '👤 People & Username',
    title: 'Flickr',
    description: 'Flickr photos',
    generateDork: (domain) => `site:flickr.com/photos/ "${domain}"`
  },
  {
    id: 'people-contact-phone',
    category: '👤 People & Username',
    title: 'Contact Info',
    description: 'Phone numbers',
    generateDork: (domain) => `"${domain}" (phone OR contact OR mobile OR cell)`
  },
  {
    id: 'people-email',
    category: '👤 People & Username',
    title: 'Email Address',
    description: 'Email addresses',
    generateDork: (domain) => `"${domain}" (email OR @)`
  },
  {
    id: 'people-address',
    category: '👤 People & Username',
    title: 'Address Info',
    description: 'Physical address',
    generateDork: (domain) => `"${domain}" (address OR location OR city OR state)`
  },
  {
    id: 'people-resume-pdf',
    category: '👤 People & Username',
    title: 'Resume PDF',
    description: 'Resume documents',
    generateDork: (domain) => `"${domain}" filetype:pdf resume`
  },
  {
    id: 'people-cv',
    category: '👤 People & Username',
    title: 'CV Documents',
    description: 'CV files',
    generateDork: (domain) => `"${domain}" filetype:pdf cv`
  },
  {
    id: 'people-portfolio-pdf',
    category: '👤 People & Username',
    title: 'Portfolio PDF',
    description: 'Portfolio docs',
    generateDork: (domain) => `"${domain}" filetype:pdf portfolio`
  },
  {
    id: 'people-biography',
    category: '👤 People & Username',
    title: 'Biography',
    description: 'Bio information',
    generateDork: (domain) => `"${domain}" (bio OR biography OR about)`
  },
  {
    id: 'people-professional',
    category: '👤 People & Username',
    title: 'Professional Info',
    description: 'Work history',
    generateDork: (domain) => `"${domain}" (work OR job OR career OR position)`
  },
  {
    id: 'people-education',
    category: '👤 People & Username',
    title: 'Education',
    description: 'Educational background',
    generateDork: (domain) => `"${domain}" (education OR university OR college OR school)`
  },
  {
    id: 'people-inurl',
    category: '👤 People & Username',
    title: 'In URL',
    description: 'Username in URL',
    generateDork: (domain) => `inurl:"${domain}"`
  },
  {
    id: 'people-intext',
    category: '👤 People & Username',
    title: 'In Text',
    description: 'Name in text',
    generateDork: (domain) => `intext:"${domain}"`
  },
  {
    id: 'people-intitle',
    category: '👤 People & Username',
    title: 'In Title',
    description: 'Name in title',
    generateDork: (domain) => `intitle:"${domain}"`
  },
  {
    id: 'people-related',
    category: '👤 People & Username',
    title: 'Related Sites',
    description: 'Similar profiles',
    generateDork: (domain) => `related:"${domain}"`
  },
  {
    id: 'people-news',
    category: '👤 People & Username',
    title: 'News Articles',
    description: 'News mentions',
    generateDork: (domain) => `"${domain}" (site:news OR site:*.news)`
  },
  
  // Social Media
  {
    id: 'social-links',
    category: '📱 Social Media',
    title: 'Social Media Links',
    description: 'Finds social media profiles and links',
    generateDork: (domain) => `site:${domain} ("facebook.com" OR "twitter.com" OR "linkedin.com" OR "instagram.com" OR "youtube.com" OR "tiktok.com")`
  },
  {
    id: 'social-feeds',
    category: '📱 Social Media',
    title: 'Social Media Feeds',
    description: 'Finds embedded social media feeds',
    generateDork: (domain) => `site:${domain} (intitle:"social" OR intitle:"follow us" OR inurl:"social-feed" OR inurl:"twitter-feed" OR "social media")`
  },
  {
    id: 'social-mentions',
    category: '📱 Social Media',
    title: 'Social Mentions',
    description: 'Finds mentions across social platforms',
    generateDork: (domain) => `"${domain}" (site:facebook.com OR site:twitter.com OR site:linkedin.com OR site:instagram.com)`
  },
  {
    id: 'social-share',
    category: '📱 Social Media',
    title: 'Share Buttons & Pages',
    description: 'Finds social sharing functionality',
    generateDork: (domain) => `site:${domain} (intitle:"share" OR "share this" OR "social sharing" OR inurl:"share" OR "share on facebook")`
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
    generateDork: (domain) => `site:${domain} (inurl:"sitemap.xml" OR inurl:"sitemap_index.xml" OR inurl:"sitemap" OR (filetype:xml "sitemap"))`
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
    generateDork: (domain) => `site:${domain} (intitle:"phpMyAdmin" OR inurl:"phpmyadmin" OR inurl:"pma" OR inurl:"myadmin")`
  },
  {
    id: 'admin-wordpress',
    category: '🔐 Admin Portals',
    title: 'WordPress Admin',
    description: 'Finds WordPress admin panels',
    generateDork: (domain) => `site:${domain} (inurl:"wp-admin" OR inurl:"wp-login.php" OR intitle:"wordpress" OR inurl:"wp-content")`
  },
  {
    id: 'admin-cms',
    category: '🔐 Admin Portals',
    title: 'CMS Admin Panels',
    description: 'Finds various CMS admin panels',
    generateDork: (domain) => `site:${domain} (inurl:"admin" OR inurl:"administrator" OR inurl:"moderator" OR inurl:"webadmin" OR inurl:"adminarea" OR inurl:"controlpanel")`
  },
  {
    id: 'admin-config',
    category: '🔐 Admin Portals',
    title: 'Config & Setup Pages',
    description: 'Finds configuration and setup pages',
    generateDork: (domain) => `site:${domain} (intitle:"configuration" OR intitle:"setup" OR inurl:"config" OR inurl:"setup.php" OR inurl:"install.php" OR inurl:"installer")`
  },
  
  // Files
  {
    id: 'files-pdf',
    category: '📁 Files',
    title: 'PDF Documents',
    description: 'Finds PDF files',
    generateDork: (domain) => `site:${domain} (ext:pdf OR filetype:pdf)`
  },
  {
    id: 'files-docs',
    category: '📁 Files',
    title: 'Office Documents',
    description: 'Finds Word, Excel, PowerPoint files',
    generateDork: (domain) => `site:${domain} (ext:doc OR ext:docx OR ext:xls OR ext:xlsx OR ext:ppt OR ext:pptx)`
  },
  {
    id: 'files-text',
    category: '📁 Files',
    title: 'Text Files',
    description: 'Finds text and log files',
    generateDork: (domain) => `site:${domain} (ext:txt OR ext:log OR ext:cfg OR ext:conf OR ext:ini)`
  },
  {
    id: 'files-backup',
    category: '📁 Files',
    title: 'Backup Files',
    description: 'Finds backup and archive files',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:backup OR ext:old OR ext:zip OR ext:rar OR ext:tar OR ext:gz OR ext:7z)`
  },
  {
    id: 'files-sql',
    category: '📁 Files',
    title: 'Database Files',
    description: 'Finds SQL and database files',
    generateDork: (domain) => `site:${domain} (ext:sql OR ext:db OR ext:sqlite OR ext:mdb OR (filetype:sql "INSERT INTO"))`
  },
  {
    id: 'files-images',
    category: '📁 Files',
    title: 'Image Files',
    description: 'Finds image files',
    generateDork: (domain) => `site:${domain} (ext:jpg OR ext:jpeg OR ext:png OR ext:gif OR ext:bmp OR ext:svg)`
  },
  
  // Sensitive Info
  {
    id: 'sensitive-passwords',
    category: '⚠️ Sensitive Info',
    title: 'Password Files',
    description: 'Finds files containing passwords',
    generateDork: (domain) => `site:${domain} (intext:"password" OR intext:"passwd" OR intext:"pwd") (ext:txt OR ext:log OR ext:cfg OR ext:ini OR ext:env)`
  },
  {
    id: 'sensitive-api-keys',
    category: '⚠️ Sensitive Info',
    title: 'API Keys & Tokens',
    description: 'Finds exposed API keys',
    generateDork: (domain) => `site:${domain} ("api_key" OR "apikey" OR "api-key" OR "access_token" OR "secret_key") (ext:json OR ext:txt OR ext:log OR ext:env OR ext:yml)`
  },
  {
    id: 'sensitive-env',
    category: '⚠️ Sensitive Info',
    title: 'Environment Files',
    description: 'Finds .env and config files',
    generateDork: (domain) => `site:${domain} (inurl:".env" OR inurl:"config.php" OR inurl:"configuration.php" OR ext:env OR filetype:env)`
  },
  {
    id: 'sensitive-credentials',
    category: '⚠️ Sensitive Info',
    title: 'Credentials & Secrets',
    description: 'Finds files with credentials',
    generateDork: (domain) => `site:${domain} (intext:"username" OR intext:"password" OR intext:"admin" OR intext:"root") (ext:txt OR ext:log OR ext:sql)`
  },
  {
    id: 'sensitive-financial',
    category: '⚠️ Sensitive Info',
    title: 'Financial Information',
    description: 'Finds financial data',
    generateDork: (domain) => `site:${domain} ("credit card" OR "SSN" OR "social security" OR "bank account" OR "routing number") (ext:xls OR ext:xlsx OR ext:csv)`
  },
  {
    id: 'sensitive-email',
    category: '⚠️ Sensitive Info',
    title: 'Email Lists',
    description: 'Finds email address lists',
    generateDork: (domain) => `site:${domain} (intext:"@${domain}" OR "email list" OR "mailing list") (ext:xls OR ext:xlsx OR ext:csv OR ext:txt)`
  },
  
  // Vulnerabilities
  {
    id: 'vuln-directory-listing',
    category: '🛡️ Vulnerabilities',
    title: 'Directory Listing',
    description: 'Finds open directory listings',
    generateDork: (domain) => `site:${domain} (intitle:"index of" OR intitle:"directory listing" OR intitle:"parent directory")`
  },
  {
    id: 'vuln-exposed-git',
    category: '🛡️ Vulnerabilities',
    title: 'Exposed .git Folders',
    description: 'Finds exposed Git repositories',
    generateDork: (domain) => `site:${domain} (inurl:".git" OR intitle:"Index of /.git")`
  },
  {
    id: 'vuln-log-files',
    category: '🛡️ Vulnerabilities',
    title: 'Exposed Log Files',
    description: 'Finds publicly accessible log files',
    generateDork: (domain) => `site:${domain} (ext:log OR filetype:log) (intext:"error" OR intext:"warning" OR intitle:"index of")`
  },
  {
    id: 'vuln-phpinfo',
    category: '🛡️ Vulnerabilities',
    title: 'PHPInfo Pages',
    description: 'Finds phpinfo() disclosure pages',
    generateDork: (domain) => `site:${domain} (intitle:"phpinfo" OR intext:"PHP Version" OR "PHP Credits")`
  },
  {
    id: 'vuln-shell',
    category: '🛡️ Vulnerabilities',
    title: 'Web Shells',
    description: 'Finds potential web shells',
    generateDork: (domain) => `site:${domain} (inurl:"shell" OR inurl:"cmd" OR inurl:"c99" OR inurl:"r57" OR intitle:"webshell")`
  },
  {
    id: 'vuln-default-pages',
    category: '🛡️ Vulnerabilities',
    title: 'Default Installation Pages',
    description: 'Finds default installation pages',
    generateDork: (domain) => `site:${domain} (intitle:"welcome to" OR intitle:"test page" OR intitle:"it works!" OR intitle:"apache" OR "default page")`
  },
  
  // Company Research
  {
    id: 'company-about',
    category: '🏢 Company Research',
    title: 'About & Company Info',
    description: 'Finds company information pages',
    generateDork: (domain) => `site:${domain} (intitle:"about us" OR intitle:"about" OR intitle:"company" OR inurl:"about" OR inurl:"company-info")`
  },
  {
    id: 'company-press',
    category: '🏢 Company Research',
    title: 'Press Releases & News',
    description: 'Finds press releases and news',
    generateDork: (domain) => `site:${domain} (intitle:"press release" OR intitle:"news" OR inurl:"press" OR inurl:"news" OR inurl:"media")`
  },
  {
    id: 'company-careers',
    category: '🏢 Company Research',
    title: 'Career & Job Postings',
    description: 'Finds career and job pages',
    generateDork: (domain) => `site:${domain} (intitle:"careers" OR intitle:"jobs" OR intitle:"join us" OR inurl:"careers" OR inurl:"jobs" OR "now hiring")`
  },
  {
    id: 'company-financials',
    category: '🏢 Company Research',
    title: 'Financial Reports',
    description: 'Finds financial documents',
    generateDork: (domain) => `site:${domain} ("annual report" OR "financial report" OR "investor relations" OR "quarterly report") (ext:pdf OR ext:doc OR ext:docx)`
  },
  {
    id: 'company-presentations',
    category: '🏢 Company Research',
    title: 'Presentations & Slides',
    description: 'Finds company presentations',
    generateDork: (domain) => `site:${domain} (ext:ppt OR ext:pptx OR filetype:ppt) (intitle:"presentation" OR intitle:"slides")`
  },
  
  // IoT & Smart Devices
  {
    id: 'iot-webcams',
    category: '📡 IoT & Smart Devices',
    title: 'IP Cameras & Webcams',
    description: 'Finds IP camera interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"view/view.shtml" OR inurl:"ViewerFrame?Mode=" OR intitle:"webcam" OR intitle:"network camera" OR inurl:"axis-cgi")`
  },
  {
    id: 'iot-routers',
    category: '📡 IoT & Smart Devices',
    title: 'Router Admin Panels',
    description: 'Finds router login pages',
    generateDork: (domain) => `site:${domain} (intitle:"router" OR intitle:"gateway" OR inurl:"router-login" OR intitle:"wireless" OR "router configuration")`
  },
  {
    id: 'iot-printers',
    category: '📡 IoT & Smart Devices',
    title: 'Network Printers',
    description: 'Finds network printer interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"printer" OR inurl:"printer" OR intitle:"hp " OR intitle:"canon" OR intitle:"epson" OR "printer status")`
  },
  {
    id: 'iot-smart-home',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Home Devices',
    description: 'Finds smart home device interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"smart home" OR inurl:"homeautomation" OR "iot device" OR intitle:"control panel")`
  },
  
  // Cloud Storage
  {
    id: 'cloud-s3',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 Buckets',
    description: 'Finds S3 bucket references',
    generateDork: (domain) => `site:${domain} (inurl:"s3.amazonaws.com" OR intext:"s3.amazonaws.com" OR "s3 bucket")`
  },
  {
    id: 'cloud-azure',
    category: '☁️ Cloud Storage',
    title: 'Azure Blob Storage',
    description: 'Finds Azure storage references',
    generateDork: (domain) => `site:${domain} (inurl:"blob.core.windows.net" OR intext:"azure" OR "blob storage")`
  },
  {
    id: 'cloud-google',
    category: '☁️ Cloud Storage',
    title: 'Google Cloud Storage',
    description: 'Finds GCS bucket references',
    generateDork: (domain) => `site:${domain} (inurl:"storage.googleapis.com" OR intext:"gcs" OR "google cloud storage")`
  },
  {
    id: 'cloud-dropbox',
    category: '☁️ Cloud Storage',
    title: 'Dropbox Shares',
    description: 'Finds Dropbox shared links',
    generateDork: (domain) => `site:${domain} (inurl:"dropbox.com/s/" OR intext:"dropbox" OR "shared folder")`
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
    generateDork: (domain) => `(site:pastebin.com OR site:paste.ee OR site:ghostbin.com) "${domain}"`
  },
  {
    id: 'code-snippets',
    category: '💻 Code Repositories',
    title: 'Code Snippets',
    description: 'Finds code snippets and gists',
    generateDork: (domain) => `site:${domain} (inurl:"gist" OR inurl:"snippet" OR intitle:"code" OR ext:js OR ext:py OR ext:java)`
  }
];
