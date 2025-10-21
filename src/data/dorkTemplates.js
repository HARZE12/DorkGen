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
  {
    id: 'sql-basic-injection',
    category: '💉 SQL Injection',
    title: 'SQL Injection - Basic',
    description: 'Common SQL injection entry points',
    generateDork: (domain) => `site:${domain} (inurl:"id=" OR inurl:"pid=" OR inurl:"cid=" OR inurl:"uid=")`
  },
  {
    id: 'sql-advanced-injection',
    category: '💉 SQL Injection',
    title: 'SQL Injection - Advanced',
    description: 'Advanced SQLi parameter patterns',
    generateDork: (domain) => `site:${domain} (inurl:"page=" OR inurl:"query=" OR inurl:"search=" OR inurl:"keyword=")`
  },
  {
    id: 'sql-errors-mysql',
    category: '💉 SQL Injection',
    title: 'SQL Errors - MySQL',
    description: 'MySQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"MySQL" OR intext:"mysql_fetch" OR intext:"mysql_num_rows" OR intext:"SQL syntax")`
  },
  {
    id: 'sql-errors-mssql',
    category: '💉 SQL Injection',
    title: 'SQL Errors - MSSQL',
    description: 'MS SQL Server errors',
    generateDork: (domain) => `site:${domain} (intext:"ODBC SQL Server Driver" OR intext:"Microsoft OLE DB Provider" OR intext:"SQLServer JDBC Driver")`
  },
  {
    id: 'sql-errors-postgresql',
    category: '💉 SQL Injection',
    title: 'SQL Errors - PostgreSQL',
    description: 'PostgreSQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"PostgreSQL" OR intext:"pg_query" OR intext:"pg_exec")`
  },
  {
    id: 'sql-errors-oracle',
    category: '💉 SQL Injection',
    title: 'SQL Errors - Oracle',
    description: 'Oracle database errors',
    generateDork: (domain) => `site:${domain} (intext:"ORA-" OR intext:"Oracle error" OR intext:"Oracle JDBC")`
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
  {
    id: 'xss-vulnerable-params',
    category: '⚡ XSS',
    title: 'XSS Vulnerable Parameters',
    description: 'Potential XSS injection points',
    generateDork: (domain) => `site:${domain} (inurl:"search=" OR inurl:"q=" OR inurl:"keyword=" OR inurl:"query=")`
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
  {
    id: 'upload-form-advanced',
    category: '📤 File Upload',
    title: 'File Upload',
    description: 'File upload functionality',
    generateDork: (domain) => `site:${domain} (inurl:"upload" OR intitle:"upload" OR intext:"choose file")`
  },
  {
    id: 'upload-unrestricted',
    category: '📤 File Upload',
    title: 'Unrestricted Upload',
    description: 'Unrestricted file upload',
    generateDork: (domain) => `site:${domain} inurl:upload (ext:php OR ext:asp OR ext:aspx OR ext:jsp)`
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

  // Admin Portals (from admin-portals.json)
  {
    id: 'admin-basic',
    category: '👤 Admin Portals',
    title: 'Admin Login Basic',
    description: 'Basic admin login pages',
    generateDork: (domain) => `site:${domain} intitle:"admin login"`
  },
  {
    id: 'admin-console',
    category: '👤 Admin Portals',
    title: 'Admin Console',
    description: 'Admin console login',
    generateDork: (domain) => `intitle:"admin console" inurl:login site:${domain}`
  },
  {
    id: 'admin-django',
    category: '👤 Admin Portals',
    title: 'Django Admin',
    description: 'Django framework admin',
    generateDork: (domain) => `intitle:"Django site admin" inurl:admin site:${domain}`
  },
  {
    id: 'admin-phpmyadmin',
    category: '👤 Admin Portals',
    title: 'PHPMyAdmin',
    description: 'PHPMyAdmin interface',
    generateDork: (domain) => `site:${domain} inurl:"/phpmyadmin/" intext:"Create new database"`
  },
  {
    id: 'admin-area',
    category: '👤 Admin Portals',
    title: 'Admin Area',
    description: 'Admin area control panel',
    generateDork: (domain) => `site:${domain} inurl:"/admin_area/" intitle:"Control Panel"`
  },
  {
    id: 'admin-panel-generic',
    category: '👤 Admin Portals',
    title: 'Admin Panel',
    description: 'General admin panel',
    generateDork: (domain) => `site:${domain} inurl:"/admin_panel/" -github`
  },
  {
    id: 'admin-dashboard-generic',
    category: '👤 Admin Portals',
    title: 'Admin Dashboard',
    description: 'Admin dashboard interface',
    generateDork: (domain) => `site:${domain} inurl:"/admin" "Dashboard"`
  },
  {
    id: 'admin-database',
    category: '👤 Admin Portals',
    title: 'Database Admin',
    description: 'Database administration',
    generateDork: (domain) => `site:${domain} inurl:"/dbadmin/" "Database Administration"`
  },
  {
    id: 'admin-wordpress',
    category: '👤 Admin Portals',
    title: 'WordPress Admin',
    description: 'WordPress admin panel',
    generateDork: (domain) => `site:${domain} inurl:wp-admin`
  },
  {
    id: 'admin-login-asp',
    category: '👤 Admin Portals',
    title: 'Admin Login ASP',
    description: 'ASP.NET admin login',
    generateDork: (domain) => `site:${domain} inurl:("administrator/login.aspx" OR "admin/login.aspx")`
  },
  {
    id: 'admin-login-php',
    category: '👤 Admin Portals',
    title: 'Admin Login PHP',
    description: 'PHP admin password page',
    generateDork: (domain) => `site:${domain} inurl:("admin/password.php")`
  },
  {
    id: 'admin-keys',
    category: '👤 Admin Portals',
    title: 'Admin Keys',
    description: 'Admin API keys page',
    generateDork: (domain) => `site:${domain} inurl:"/admin_keys/"`
  },
  {
    id: 'admin-redis',
    category: '👤 Admin Portals',
    title: 'Redis Admin',
    description: 'Redis administration',
    generateDork: (domain) => `site:${domain} inurl:"/redis-admin"`
  },
  {
    id: 'admin-postgresql',
    category: '👤 Admin Portals',
    title: 'PostgreSQL Admin',
    description: 'PostgreSQL admin interface',
    generateDork: (domain) => `site:${domain} inurl:"/php-pg-admin/" "PostgreSQL"`
  },
  {
    id: 'admin-credentials',
    category: '👤 Admin Portals',
    title: 'Admin Credentials',
    description: 'Pages mentioning admin password',
    generateDork: (domain) => `site:${domain} "admin password"`
  },
  {
    id: 'admin-config',
    category: '👤 Admin Portals',
    title: 'Admin Config',
    description: 'Admin configuration setup',
    generateDork: (domain) => `site:${domain} inurl:"/admin/config" intext:"setup"`
  },
  {
    id: 'admin-tomcat',
    category: '👤 Admin Portals',
    title: 'Tomcat Manager',
    description: 'Tomcat web application manager',
    generateDork: (domain) => `site:${domain} inurl:"/manager/html" intitle:"Tomcat Web Application Manager"`
  },
  {
    id: 'admin-joomla',
    category: '👤 Admin Portals',
    title: 'Joomla Admin',
    description: 'Joomla CMS admin',
    generateDork: (domain) => `site:${domain} inurl:"/administrator" intitle:"Joomla"`
  },
  {
    id: 'admin-drupal',
    category: '👤 Admin Portals',
    title: 'Drupal Admin',
    description: 'Drupal CMS login',
    generateDork: (domain) => `site:${domain} inurl:"/user/login" intitle:"Drupal"`
  },
  {
    id: 'admin-magento',
    category: '👤 Admin Portals',
    title: 'Magento Admin',
    description: 'Magento e-commerce admin',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"Magento"`
  },
  {
    id: 'admin-cpanel',
    category: '👤 Admin Portals',
    title: 'CPanel Login',
    description: 'cPanel access',
    generateDork: (domain) => `site:${domain} inurl:":2082" OR inurl:":2083"`
  },
  {
    id: 'admin-plesk',
    category: '👤 Admin Portals',
    title: 'Plesk Panel',
    description: 'Plesk control panel',
    generateDork: (domain) => `site:${domain} inurl:":8443" intitle:"Plesk"`
  },
  {
    id: 'admin-webmin',
    category: '👤 Admin Portals',
    title: 'Webmin',
    description: 'Webmin interface',
    generateDork: (domain) => `site:${domain} inurl:":10000" intitle:"Webmin"`
  },

  // Vulnerabilities (Enhanced)
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
    id: 'vuln-git-config',
    category: '🛡️ Vulnerabilities',
    title: 'Git Exposed',
    description: 'Exposed .git directories',
    generateDork: (domain) => `site:${domain} (inurl:".git" OR intitle:"Index of /.git" OR inurl:"/.git/config")`
  },
  {
    id: 'vuln-svn-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'SVN Exposed',
    description: 'Exposed .svn directories',
    generateDork: (domain) => `site:${domain} (inurl:".svn" OR intitle:"Index of /.svn")`
  },
  {
    id: 'vuln-ds-store',
    category: '🛡️ Vulnerabilities',
    title: 'DS_Store Files',
    description: 'Exposed macOS metadata files',
    generateDork: (domain) => `site:${domain} (inurl:".DS_Store" OR intitle:"Index of" ".DS_Store")`
  },
  {
    id: 'vuln-backup-files',
    category: '🛡️ Vulnerabilities',
    title: 'Backup Files',
    description: 'Backup file exposure',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:old OR ext:backup OR ext:~ OR ext:swp)`
  },
  {
    id: 'vuln-log-files',
    category: '🛡️ Vulnerabilities',
    title: 'Exposed Log Files',
    description: 'Finds publicly accessible log files',
    generateDork: (domain) => `site:${domain} (ext:log OR filetype:log) (intext:"error" OR intext:"warning" OR intitle:"index of")`
  },
  {
    id: 'vuln-log-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Log Files Exposed',
    description: 'Exposed log files',
    generateDork: (domain) => `site:${domain} (ext:log OR intitle:"Index of" "access.log" OR intitle:"Index of" "error.log")`
  },
  {
    id: 'vuln-phpinfo',
    category: '🛡️ Vulnerabilities',
    title: 'PHPInfo Pages',
    description: 'Finds phpinfo() disclosure pages',
    generateDork: (domain) => `site:${domain} (intitle:"phpinfo" OR intext:"PHP Version" OR "PHP Credits")`
  },
  {
    id: 'vuln-phpinfo-disclosure',
    category: '🛡️ Vulnerabilities',
    title: 'PHPInfo Disclosure',
    description: 'PHP information disclosure',
    generateDork: (domain) => `site:${domain} (inurl:"phpinfo.php" OR intitle:"phpinfo()" OR intext:"PHP Version")`
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
  {
    id: 'vuln-open-redirect',
    category: '🛡️ Vulnerabilities',
    title: 'Open Redirect',
    description: 'Open redirect vulnerabilities',
    generateDork: (domain) => `site:${domain} (inurl:"url=http" OR inurl:"redirect=http" OR inurl:"return=http" OR inurl:"next=http")`
  },
  {
    id: 'vuln-lfi',
    category: '🛡️ Vulnerabilities',
    title: 'LFI - Local File Inclusion',
    description: 'Local file inclusion vectors',
    generateDork: (domain) => `site:${domain} (inurl:"file=" OR inurl:"page=" OR inurl:"path=" OR inurl:"include=")`
  },
  {
    id: 'vuln-rfi',
    category: '🛡️ Vulnerabilities',
    title: 'RFI - Remote File Inclusion',
    description: 'Remote file inclusion points',
    generateDork: (domain) => `site:${domain} (inurl:"file=http" OR inurl:"page=http" OR inurl:"include=http")`
  },
  {
    id: 'vuln-path-traversal',
    category: '🛡️ Vulnerabilities',
    title: 'Path Traversal',
    description: 'Directory traversal attempts',
    generateDork: (domain) => `site:${domain} (inurl:"../" OR inurl:"%2e%2e%2f" OR inurl:"..\\\\")`
  },
  {
    id: 'vuln-command-injection',
    category: '🛡️ Vulnerabilities',
    title: 'Command Injection',
    description: 'OS command injection points',
    generateDork: (domain) => `site:${domain} (inurl:"cmd=" OR inurl:"exec=" OR inurl:"command=" OR inurl:"execute=")`
  },
  {
    id: 'vuln-xxe',
    category: '🛡️ Vulnerabilities',
    title: 'XXE - XML External Entity',
    description: 'XML external entity risks',
    generateDork: (domain) => `site:${domain} (inurl:".xml" OR intext:"<?xml" OR intext:"DOCTYPE")`
  },
  {
    id: 'vuln-ssrf',
    category: '🛡️ Vulnerabilities',
    title: 'SSRF - Server Side Request Forgery',
    description: 'SSRF vulnerable parameters',
    generateDork: (domain) => `site:${domain} (inurl:"url=" OR inurl:"uri=" OR inurl:"path=http" OR inurl:"dest=")`
  },
  {
    id: 'vuln-idor',
    category: '🛡️ Vulnerabilities',
    title: 'IDOR - Parameter Tampering',
    description: 'Insecure direct object references',
    generateDork: (domain) => `site:${domain} (inurl:"user_id=" OR inurl:"account_id=" OR inurl:"profile_id=")`
  },
  {
    id: 'vuln-cgi-bin',
    category: '🛡️ Vulnerabilities',
    title: 'CGI-BIN',
    description: 'CGI script directories',
    generateDork: (domain) => `site:${domain} inurl:cgi-bin`
  },
  {
    id: 'vuln-tomcat-manager',
    category: '🛡️ Vulnerabilities',
    title: 'Tomcat Manager',
    description: 'Tomcat manager interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"/manager/html" OR intitle:"Apache Tomcat")`
  },
  {
    id: 'vuln-jboss-console',
    category: '🛡️ Vulnerabilities',
    title: 'JBoss Console',
    description: 'JBoss management consoles',
    generateDork: (domain) => `site:${domain} (inurl:"/jmx-console" OR inurl:"/web-console")`
  },
  {
    id: 'vuln-weblogic-console',
    category: '🛡️ Vulnerabilities',
    title: 'WebLogic Console',
    description: 'Oracle WebLogic console',
    generateDork: (domain) => `site:${domain} inurl:"/console/login"`
  },
  {
    id: 'vuln-jenkins',
    category: '🛡️ Vulnerabilities',
    title: 'Jenkins Exposed',
    description: 'Jenkins CI/CD instances',
    generateDork: (domain) => `site:${domain} (inurl:"/jenkins" OR intitle:"Dashboard [Jenkins]")`
  },
  {
    id: 'vuln-kibana',
    category: '🛡️ Vulnerabilities',
    title: 'Kibana Exposed',
    description: 'Kibana dashboards',
    generateDork: (domain) => `site:${domain} (inurl:"/app/kibana" OR intitle:"Kibana")`
  },
  {
    id: 'vuln-grafana',
    category: '🛡️ Vulnerabilities',
    title: 'Grafana Exposed',
    description: 'Grafana monitoring',
    generateDork: (domain) => `site:${domain} (inurl:"/grafana" OR intitle:"Grafana")`
  },
  {
    id: 'vuln-jupyter',
    category: '🛡️ Vulnerabilities',
    title: 'Jupyter Notebooks',
    description: 'Jupyter notebook instances',
    generateDork: (domain) => `site:${domain} (inurl:"/notebooks" OR intitle:"Jupyter")`
  },
  {
    id: 'vuln-elasticsearch',
    category: '🛡️ Vulnerabilities',
    title: 'Elasticsearch',
    description: 'Elasticsearch interfaces',
    generateDork: (domain) => `site:${domain} (inurl:":9200" OR intext:"_cluster/health")`
  },
  {
    id: 'vuln-mongodb',
    category: '🛡️ Vulnerabilities',
    title: 'MongoDB Exposed',
    description: 'MongoDB database ports',
    generateDork: (domain) => `site:${domain} (inurl:":27017" OR inurl:":28017")`
  },
  {
    id: 'vuln-redis',
    category: '🛡️ Vulnerabilities',
    title: 'Redis Exposed',
    description: 'Redis database instances',
    generateDork: (domain) => `site:${domain} inurl:":6379"`
  },
  {
    id: 'vuln-docker-api',
    category: '🛡️ Vulnerabilities',
    title: 'Docker API',
    description: 'Docker API endpoints',
    generateDork: (domain) => `site:${domain} (inurl:":2375" OR inurl:":2376" OR inurl:"/containers/json")`
  },
  {
    id: 'vuln-kubernetes',
    category: '🛡️ Vulnerabilities',
    title: 'Kubernetes Dashboard',
    description: 'Kubernetes management',
    generateDork: (domain) => `site:${domain} (inurl:"/api/v1" OR intitle:"Kubernetes Dashboard")`
  },
  {
    id: 'vuln-cors',
    category: '🛡️ Vulnerabilities',
    title: 'CORS Misconfiguration',
    description: 'CORS policy issues',
    generateDork: (domain) => `site:${domain} (intext:"Access-Control-Allow-Origin: *")`
  },
  {
    id: 'vuln-csrf',
    category: '🛡️ Vulnerabilities',
    title: 'CSRF Tokens Missing',
    description: 'Forms without CSRF protection',
    generateDork: (domain) => `site:${domain} (inurl:"form" -intext:"csrf" -intext:"token")`
  },
  {
    id: 'vuln-default-creds',
    category: '🛡️ Vulnerabilities',
    title: 'Default Credentials',
    description: 'Default credential documentation',
    generateDork: (domain) => `site:${domain} (intext:"default password" OR intext:"default login")`
  },
  {
    id: 'vuln-struts-rce',
    category: '🛡️ Vulnerabilities',
    title: 'Struts RCE',
    description: 'Apache Struts vulnerabilities',
    generateDork: (domain) => `site:${domain} (ext:action OR ext:do OR inurl:"struts")`
  },
  {
    id: 'vuln-spring-boot',
    category: '🛡️ Vulnerabilities',
    title: 'Spring Boot Actuator',
    description: 'Spring Boot actuator endpoints',
    generateDork: (domain) => `site:${domain} (inurl:"/actuator" OR inurl:"/health" OR inurl:"/env" OR inurl:"/trace")`
  },
  {
    id: 'vuln-laravel-debug',
    category: '🛡️ Vulnerabilities',
    title: 'Laravel Debug Mode',
    description: 'Laravel debug mode enabled',
    generateDork: (domain) => `site:${domain} (intext:"Laravel" AND intext:"Whoops")`
  },
  {
    id: 'vuln-symfony-profiler',
    category: '🛡️ Vulnerabilities',
    title: 'Symfony Profiler',
    description: 'Symfony debug profiler',
    generateDork: (domain) => `site:${domain} inurl:"/_profiler"`
  },
  {
    id: 'vuln-aspnet-trace',
    category: '🛡️ Vulnerabilities',
    title: 'ASP.NET Trace',
    description: 'ASP.NET trace enabled',
    generateDork: (domain) => `site:${domain} (inurl:"trace.axd" OR intext:"Trace.axd")`
  },
  {
    id: 'vuln-viewstate',
    category: '🛡️ Vulnerabilities',
    title: 'ViewState Without MAC',
    description: 'Unprotected ViewState',
    generateDork: (domain) => `site:${domain} (intext:"__VIEWSTATE" -intext:"EnableViewStateMac")`
  },
  {
    id: 'vuln-graphql',
    category: '🛡️ Vulnerabilities',
    title: 'GraphQL Introspection',
    description: 'GraphQL introspection enabled',
    generateDork: (domain) => `site:${domain} (inurl:"graphql" OR inurl:"graphiql")`
  },
  {
    id: 'vuln-swagger',
    category: '🛡️ Vulnerabilities',
    title: 'API Swagger/OpenAPI',
    description: 'Exposed API documentation',
    generateDork: (domain) => `site:${domain} (inurl:"/swagger" OR inurl:"/api-docs" OR inurl:"/openapi.json")`
  },
  {
    id: 'vuln-nginx-status',
    category: '🛡️ Vulnerabilities',
    title: 'Nginx Status Page',
    description: 'Nginx status disclosure',
    generateDork: (domain) => `site:${domain} (inurl:"/nginx_status" OR intitle:"nginx status")`
  },
  {
    id: 'vuln-apache-status',
    category: '🛡️ Vulnerabilities',
    title: 'Apache Server Status',
    description: 'Apache server status page',
    generateDork: (domain) => `site:${domain} (inurl:"/server-status" OR intitle:"Apache Status")`
  },
  {
    id: 'vuln-clickjacking',
    category: '🛡️ Vulnerabilities',
    title: 'Clickjacking Vulnerable',
    description: 'Missing X-Frame-Options',
    generateDork: (domain) => `site:${domain} -intext:"X-Frame-Options" (inurl:"login" OR inurl:"admin")`
  },

  // Sensitive Information
  {
    id: 'sensitive-api-keys',
    category: '🔑 Sensitive Information',
    title: 'API Keys - Generic',
    description: 'Generic API key patterns',
    generateDork: (domain) => `site:${domain} (intext:"api_key" OR intext:"apikey" OR intext:"api-key" OR intext:"apiKey")`
  },
  {
    id: 'sensitive-api-specific',
    category: '🔑 Sensitive Information',
    title: 'API Keys - Specific',
    description: 'Service-specific API keys',
    generateDork: (domain) => `site:${domain} (intext:"stripe_api_key" OR intext:"twilio" OR intext:"firebase" OR intext:"mailgun")`
  },
  {
    id: 'sensitive-aws-keys',
    category: '🔑 Sensitive Information',
    title: 'AWS Keys',
    description: 'AWS access credentials',
    generateDork: (domain) => `site:${domain} (intext:"AKIA" OR intext:"aws_access_key_id" OR intext:"aws_secret_access_key")`
  },
  {
    id: 'sensitive-google-keys',
    category: '🔑 Sensitive Information',
    title: 'Google Cloud Keys',
    description: 'Google Cloud credentials',
    generateDork: (domain) => `site:${domain} (intext:"AIza" OR intext:"GOOGLE_API_KEY" OR intext:"GCP_API_KEY")`
  },
  {
    id: 'sensitive-azure-keys',
    category: '🔑 Sensitive Information',
    title: 'Azure Keys',
    description: 'Microsoft Azure credentials',
    generateDork: (domain) => `site:${domain} (intext:"AZURE" OR intext:"azure_key" OR intext:"azure_secret")`
  },
  {
    id: 'sensitive-private-keys-rsa',
    category: '🔑 Sensitive Information',
    title: 'Private Keys - RSA',
    description: 'RSA private keys',
    generateDork: (domain) => `site:${domain} (intext:"BEGIN RSA PRIVATE KEY" OR intext:"BEGIN PRIVATE KEY")`
  },
  {
    id: 'sensitive-private-keys-files',
    category: '🔑 Sensitive Information',
    title: 'Private Keys - Files',
    description: 'Private key files',
    generateDork: (domain) => `site:${domain} (ext:pem OR ext:key OR ext:ppk)`
  },
  {
    id: 'sensitive-ssh-keys',
    category: '🔑 Sensitive Information',
    title: 'SSH Keys',
    description: 'SSH private keys',
    generateDork: (domain) => `site:${domain} (filename:id_rsa OR filename:id_dsa OR intext:"ssh-rsa")`
  },
  {
    id: 'sensitive-oauth-tokens',
    category: '🔑 Sensitive Information',
    title: 'OAuth Tokens',
    description: 'OAuth credentials',
    generateDork: (domain) => `site:${domain} (intext:"oauth_token" OR intext:"oauth_secret" OR intext:"access_token")`
  },
  {
    id: 'sensitive-jwt-tokens',
    category: '🔑 Sensitive Information',
    title: 'JWT Tokens',
    description: 'JSON Web Tokens',
    generateDork: (domain) => `site:${domain} (intext:"eyJ" OR intext:"jwt" OR intext:"Bearer eyJ")`
  },
  {
    id: 'sensitive-db-passwords',
    category: '🔑 Sensitive Information',
    title: 'Database Passwords',
    description: 'Database credentials',
    generateDork: (domain) => `site:${domain} (intext:"DB_PASSWORD" OR intext:"DATABASE_PASSWORD" OR intext:"db_pass")`
  },
  {
    id: 'sensitive-connection-strings',
    category: '🔑 Sensitive Information',
    title: 'Connection Strings',
    description: 'Database connection strings',
    generateDork: (domain) => `site:${domain} (intext:"Server=" OR intext:"jdbc:" OR intext:"mongodb://" OR intext:"mysql://")`
  },
  {
    id: 'sensitive-smtp-creds',
    category: '🔑 Sensitive Information',
    title: 'SMTP Credentials',
    description: 'Email server credentials',
    generateDork: (domain) => `site:${domain} (intext:"smtp_password" OR intext:"mail_password" OR intext:"email_password")`
  },
  {
    id: 'sensitive-ftp-creds',
    category: '🔑 Sensitive Information',
    title: 'FTP Credentials',
    description: 'FTP server credentials',
    generateDork: (domain) => `site:${domain} (intext:"ftp_username" OR intext:"ftp_password" OR intext:"ftp://")`
  },
  {
    id: 'sensitive-env-files',
    category: '🔑 Sensitive Information',
    title: 'Environment Files',
    description: '.env configuration files',
    generateDork: (domain) => `site:${domain} (ext:env OR filename:.env OR filename:.env.local OR filename:.env.production)`
  },
  {
    id: 'sensitive-config-files',
    category: '🔑 Sensitive Information',
    title: 'Config Files',
    description: 'Configuration files',
    generateDork: (domain) => `site:${domain} (ext:config OR ext:conf OR ext:cfg OR ext:ini)`
  },
  {
    id: 'sensitive-password-url',
    category: '🔑 Sensitive Information',
    title: 'Password in URL',
    description: 'Passwords in URLs',
    generateDork: (domain) => `site:${domain} inurl:password`
  },
  {
    id: 'sensitive-passwords-generic',
    category: '🔑 Sensitive Information',
    title: 'Passwords - Generic',
    description: 'Generic password patterns',
    generateDork: (domain) => `site:${domain} (intext:"password =" OR intext:"pwd =" OR intext:"pass =" OR intext:"passwd =")`
  },
  {
    id: 'sensitive-secret-keys',
    category: '🔑 Sensitive Information',
    title: 'Secret Keys',
    description: 'Application secret keys',
    generateDork: (domain) => `site:${domain} (intext:"secret_key" OR intext:"SECRET_KEY" OR intext:"secret =")`
  },
  {
    id: 'sensitive-encryption-keys',
    category: '🔑 Sensitive Information',
    title: 'Encryption Keys',
    description: 'Encryption keys',
    generateDork: (domain) => `site:${domain} (intext:"encryption_key" OR intext:"cipher_key" OR intext:"crypto_key")`
  },
  {
    id: 'sensitive-github-tokens',
    category: '🔑 Sensitive Information',
    title: 'GitHub Tokens',
    description: 'GitHub access tokens',
    generateDork: (domain) => `site:${domain} (intext:"ghp_" OR intext:"github_token" OR intext:"GITHUB_TOKEN")`
  },
  {
    id: 'sensitive-slack-tokens',
    category: '🔑 Sensitive Information',
    title: 'Slack Tokens',
    description: 'Slack API tokens',
    generateDork: (domain) => `site:${domain} (intext:"xoxb-" OR intext:"xoxp-" OR intext:"SLACK_TOKEN")`
  },
  {
    id: 'sensitive-stripe-keys',
    category: '🔑 Sensitive Information',
    title: 'Stripe Keys',
    description: 'Stripe payment keys',
    generateDork: (domain) => `site:${domain} (intext:"sk_live_" OR intext:"pk_live_" OR intext:"STRIPE_KEY")`
  },
  {
    id: 'sensitive-twilio-keys',
    category: '🔑 Sensitive Information',
    title: 'Twilio Keys',
    description: 'Twilio API credentials',
    generateDork: (domain) => `site:${domain} (intext:"AC" AND intext:"twilio" OR intext:"TWILIO_")`
  },
  {
    id: 'sensitive-paypal-creds',
    category: '🔑 Sensitive Information',
    title: 'PayPal Credentials',
    description: 'PayPal API credentials',
    generateDork: (domain) => `site:${domain} (intext:"paypal" AND intext:"client_id" OR intext:"PAYPAL_")`
  },
  {
    id: 'sensitive-sendgrid-keys',
    category: '🔑 Sensitive Information',
    title: 'SendGrid Keys',
    description: 'SendGrid API keys',
    generateDork: (domain) => `site:${domain} (intext:"SG." OR intext:"SENDGRID_API_KEY")`
  },
  {
    id: 'sensitive-mailgun-keys',
    category: '🔑 Sensitive Information',
    title: 'Mailgun Keys',
    description: 'Mailgun API keys',
    generateDork: (domain) => `site:${domain} (intext:"key-" AND intext:"mailgun" OR intext:"MAILGUN_API_KEY")`
  },
  {
    id: 'sensitive-firebase-keys',
    category: '🔑 Sensitive Information',
    title: 'Firebase Keys',
    description: 'Firebase credentials',
    generateDork: (domain) => `site:${domain} (intext:"firebaseApiKey" OR intext:"FIREBASE_API_KEY")`
  },
  {
    id: 'sensitive-heroku-keys',
    category: '🔑 Sensitive Information',
    title: 'Heroku Keys',
    description: 'Heroku API keys',
    generateDork: (domain) => `site:${domain} (intext:"heroku" AND intext:"api_key" OR intext:"HEROKU_API_KEY")`
  },
  {
    id: 'sensitive-docker-tokens',
    category: '🔑 Sensitive Information',
    title: 'Docker Hub Tokens',
    description: 'Docker Hub credentials',
    generateDork: (domain) => `site:${domain} (intext:"dockerhub" OR intext:"DOCKER_PASSWORD")`
  },
  {
    id: 'sensitive-npm-tokens',
    category: '🔑 Sensitive Information',
    title: 'NPM Tokens',
    description: 'NPM registry tokens',
    generateDork: (domain) => `site:${domain} (intext:"npm_token" OR intext:"NPM_TOKEN" OR intext:"//registry.npmjs.org/:_authToken")`
  },
  {
    id: 'sensitive-mongodb-uris',
    category: '🔑 Sensitive Information',
    title: 'MongoDB URIs',
    description: 'MongoDB connection URIs',
    generateDork: (domain) => `site:${domain} (intext:"mongodb://" OR intext:"mongodb+srv://")`
  },
  {
    id: 'sensitive-redis-urls',
    category: '🔑 Sensitive Information',
    title: 'Redis URLs',
    description: 'Redis connection URLs',
    generateDork: (domain) => `site:${domain} (intext:"redis://" OR intext:"REDIS_URL")`
  },

  // Files
  {
    id: 'files-all-documents',
    category: '📄 Files',
    title: 'All Documents',
    description: 'All document types',
    generateDork: (domain) => `site:${domain} (ext:doc OR ext:docx OR ext:odt OR ext:pdf OR ext:rtf OR ext:txt)`
  },
  {
    id: 'files-all-spreadsheets',
    category: '📄 Files',
    title: 'All Spreadsheets',
    description: 'All spreadsheet formats',
    generateDork: (domain) => `site:${domain} (ext:xls OR ext:xlsx OR ext:csv OR ext:ods)`
  },
  {
    id: 'files-all-presentations',
    category: '📄 Files',
    title: 'All Presentations',
    description: 'All presentation files',
    generateDork: (domain) => `site:${domain} (ext:ppt OR ext:pptx OR ext:odp)`
  },
  {
    id: 'files-config',
    category: '📄 Files',
    title: 'Configuration Files',
    description: 'Config and settings files',
    generateDork: (domain) => `site:${domain} (ext:conf OR ext:config OR ext:cfg OR ext:ini OR ext:env)`
  },
  {
    id: 'files-database',
    category: '📄 Files',
    title: 'Database Files',
    description: 'Database dump files',
    generateDork: (domain) => `site:${domain} (ext:sql OR ext:db OR ext:sqlite OR ext:mdb OR ext:accdb)`
  },
  {
    id: 'files-backup-archives',
    category: '📄 Files',
    title: 'Backup Archives',
    description: 'Backup file extensions',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:backup OR ext:old OR ext:save OR ext:~)`
  },
  {
    id: 'files-compressed',
    category: '📄 Files',
    title: 'Compressed Archives',
    description: 'All archive formats',
    generateDork: (domain) => `site:${domain} (ext:zip OR ext:rar OR ext:tar OR ext:gz OR ext:7z OR ext:bz2)`
  },
  {
    id: 'files-log',
    category: '📄 Files',
    title: 'Log Files',
    description: 'System and app logs',
    generateDork: (domain) => `site:${domain} (ext:log OR ext:logs OR ext:out)`
  },
  {
    id: 'files-code-web',
    category: '📄 Files',
    title: 'Code - Web',
    description: 'Web development files',
    generateDork: (domain) => `site:${domain} (ext:php OR ext:asp OR ext:aspx OR ext:jsp OR ext:js OR ext:html)`
  },
  {
    id: 'files-code-backend',
    category: '📄 Files',
    title: 'Code - Backend',
    description: 'Backend source code',
    generateDork: (domain) => `site:${domain} (ext:py OR ext:java OR ext:rb OR ext:go OR ext:cs OR ext:cpp)`
  },
  {
    id: 'files-data-formats',
    category: '📄 Files',
    title: 'Data Formats',
    description: 'Structured data files',
    generateDork: (domain) => `site:${domain} (ext:json OR ext:xml OR ext:yaml OR ext:yml OR ext:toml)`
  },
  {
    id: 'files-shell-scripts',
    category: '📄 Files',
    title: 'Shell Scripts',
    description: 'Executable scripts',
    generateDork: (domain) => `site:${domain} (ext:sh OR ext:bash OR ext:bat OR ext:cmd OR ext:ps1)`
  },
  {
    id: 'files-key-files',
    category: '📄 Files',
    title: 'Key Files',
    description: 'Certificates and keys',
    generateDork: (domain) => `site:${domain} (ext:pem OR ext:key OR ext:crt OR ext:cer OR ext:p12 OR ext:pfx)`
  },
  {
    id: 'files-source-control',
    category: '📄 Files',
    title: 'Source Control',
    description: 'Version control files',
    generateDork: (domain) => `site:${domain} (ext:git OR inurl:.git OR inurl:.svn OR ext:gitignore)`
  },
  {
    id: 'files-credentials',
    category: '📄 Files',
    title: 'Credentials Files',
    description: 'Files with credential names',
    generateDork: (domain) => `site:${domain} (filename:credentials OR filename:password OR filename:passwords)`
  },
  {
    id: 'files-sensitive-docs',
    category: '📄 Files',
    title: 'Sensitive Docs',
    description: 'Confidential PDF documents',
    generateDork: (domain) => `site:${domain} ext:pdf (confidential OR internal OR private OR secret)`
  },
  {
    id: 'files-financial-docs',
    category: '📄 Files',
    title: 'Financial Docs',
    description: 'Financial spreadsheets',
    generateDork: (domain) => `site:${domain} (ext:xls OR ext:xlsx) (invoice OR payment OR salary OR budget)`
  },
  {
    id: 'files-email-archives',
    category: '📄 Files',
    title: 'Email Archives',
    description: 'Email data files',
    generateDork: (domain) => `site:${domain} (ext:pst OR ext:ost OR ext:mbox OR ext:eml OR ext:msg)`
  },
  {
    id: 'files-docker',
    category: '📄 Files',
    title: 'Docker Files',
    description: 'Docker configuration',
    generateDork: (domain) => `site:${domain} (filename:dockerfile OR filename:docker-compose)`
  },
  {
    id: 'files-cicd',
    category: '📄 Files',
    title: 'CI/CD Configs',
    description: 'CI/CD pipeline files',
    generateDork: (domain) => `site:${domain} (filename:.gitlab-ci OR filename:.travis.yml OR filename:jenkinsfile)`
  },
  {
    id: 'files-package-managers',
    category: '📄 Files',
    title: 'Package Managers',
    description: 'Dependency files',
    generateDork: (domain) => `site:${domain} (filename:package.json OR filename:composer.json OR filename:requirements.txt OR filename:gemfile)`
  },
  {
    id: 'files-ssh-config',
    category: '📄 Files',
    title: 'SSH Config',
    description: 'SSH configuration files',
    generateDork: (domain) => `site:${domain} (filename:id_rsa OR filename:id_dsa OR filename:authorized_keys OR filename:known_hosts)`
  },
  {
    id: 'files-aws-config',
    category: '📄 Files',
    title: 'AWS Config',
    description: 'AWS credential files',
    generateDork: (domain) => `site:${domain} (filename:credentials OR filename:config) (aws OR amazon)`
  },
  {
    id: 'files-api-specs',
    category: '📄 Files',
    title: 'API Specs',
    description: 'API documentation files',
    generateDork: (domain) => `site:${domain} (filename:swagger OR filename:openapi OR ext:wadl OR ext:wsdl)`
  },
  {
    id: 'files-temp',
    category: '📄 Files',
    title: 'Temp Files',
    description: 'Temporary files',
    generateDork: (domain) => `site:${domain} (ext:tmp OR ext:temp OR ext:swp OR ext:cache)`
  },
  {
    id: 'files-memory-dumps',
    category: '📄 Files',
    title: 'Memory Dumps',
    description: 'Memory dump files',
    generateDork: (domain) => `site:${domain} (ext:dmp OR ext:dump OR ext:core)`
  },
  {
    id: 'files-password-lists',
    category: '📄 Files',
    title: 'Password Lists',
    description: 'Password list files',
    generateDork: (domain) => `site:${domain} ext:txt (password OR passwords OR passwd) (list OR dump)`
  },
  {
    id: 'files-kubernetes',
    category: '📄 Files',
    title: 'Kubernetes Configs',
    description: 'Kubernetes configuration',
    generateDork: (domain) => `site:${domain} (ext:yaml OR ext:yml) (kubernetes OR k8s OR kubectl)`
  },
  {
    id: 'files-terraform',
    category: '📄 Files',
    title: 'Terraform Files',
    description: 'Terraform IaC files',
    generateDork: (domain) => `site:${domain} (ext:tf OR ext:tfvars OR ext:tfstate)`
  },
  {
    id: 'files-ansible',
    category: '📄 Files',
    title: 'Ansible Playbooks',
    description: 'Ansible automation files',
    generateDork: (domain) => `site:${domain} (ext:yaml OR ext:yml) (ansible OR playbook)`
  },
  {
    id: 'files-vpn',
    category: '📄 Files',
    title: 'VPN Configs',
    description: 'VPN configuration files',
    generateDork: (domain) => `site:${domain} (ext:ovpn OR ext:conf) (vpn OR openvpn)`
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
    id: 'cloud-s3-generic',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 Buckets - Generic',
    description: 'AWS S3 bucket search',
    generateDork: (domain) => `site:s3.amazonaws.com "${domain}"`
  },
  {
    id: 'cloud-s3-open',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Open Buckets',
    description: 'Open S3 directory listings',
    generateDork: (domain) => `site:s3.amazonaws.com intitle:"Index of /" "${domain}"`
  },
  {
    id: 'cloud-s3-backups',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Backup Files',
    description: 'S3 backup files',
    generateDork: (domain) => `site:s3.amazonaws.com (backup OR dump OR old) "${domain}"`
  },
  {
    id: 'cloud-s3-credentials',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Credentials',
    description: 'S3 credentials exposure',
    generateDork: (domain) => `site:s3.amazonaws.com (password OR credentials OR secret OR api_key) "${domain}"`
  },
  {
    id: 'cloud-s3-databases',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Database Dumps',
    description: 'S3 database files',
    generateDork: (domain) => `site:s3.amazonaws.com (ext:sql OR ext:db OR ext:sqlite) "${domain}"`
  },
  {
    id: 'cloud-s3-configs',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Config Files',
    description: 'S3 configuration files',
    generateDork: (domain) => `site:s3.amazonaws.com (ext:config OR ext:conf OR ext:env) "${domain}"`
  },
  {
    id: 'cloud-s3-logs',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Logs',
    description: 'S3 log files',
    generateDork: (domain) => `site:s3.amazonaws.com ext:log "${domain}"`
  },
  {
    id: 'cloud-azure',
    category: '☁️ Cloud Storage',
    title: 'Azure Blob Storage',
    description: 'Finds Azure storage references',
    generateDork: (domain) => `site:${domain} (inurl:"blob.core.windows.net" OR intext:"azure" OR "blob storage")`
  },
  {
    id: 'cloud-azure-generic',
    category: '☁️ Cloud Storage',
    title: 'Azure Blob Storage',
    description: 'Azure Blob storage',
    generateDork: (domain) => `site:blob.core.windows.net "${domain}"`
  },
  {
    id: 'cloud-azure-open',
    category: '☁️ Cloud Storage',
    title: 'Azure - Open Containers',
    description: 'Open Azure containers',
    generateDork: (domain) => `site:blob.core.windows.net intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-azure-backups',
    category: '☁️ Cloud Storage',
    title: 'Azure - Backup Files',
    description: 'Azure backup files',
    generateDork: (domain) => `site:blob.core.windows.net (backup OR dump) "${domain}"`
  },
  {
    id: 'cloud-azure-configs',
    category: '☁️ Cloud Storage',
    title: 'Azure - Config Files',
    description: 'Azure config files',
    generateDork: (domain) => `site:blob.core.windows.net (ext:config OR ext:json OR ext:xml) "${domain}"`
  },
  {
    id: 'cloud-google',
    category: '☁️ Cloud Storage',
    title: 'Google Cloud Storage',
    description: 'Finds GCS bucket references',
    generateDork: (domain) => `site:${domain} (inurl:"storage.googleapis.com" OR intext:"gcs" OR "google cloud storage")`
  },
  {
    id: 'cloud-gcs-generic',
    category: '☁️ Cloud Storage',
    title: 'Google Cloud Storage',
    description: 'Google Cloud Storage buckets',
    generateDork: (domain) => `site:storage.googleapis.com "${domain}"`
  },
  {
    id: 'cloud-gcs-open',
    category: '☁️ Cloud Storage',
    title: 'GCS - Open Buckets',
    description: 'Open GCS buckets',
    generateDork: (domain) => `site:storage.googleapis.com intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-gcs-backups',
    category: '☁️ Cloud Storage',
    title: 'GCS - Backup Files',
    description: 'GCS backup files',
    generateDork: (domain) => `site:storage.googleapis.com (backup OR dump OR archive) "${domain}"`
  },
  {
    id: 'cloud-gcs-credentials',
    category: '☁️ Cloud Storage',
    title: 'GCS - Credentials',
    description: 'GCS credentials',
    generateDork: (domain) => `site:storage.googleapis.com (password OR credentials OR key) "${domain}"`
  },
  {
    id: 'cloud-dropbox',
    category: '☁️ Cloud Storage',
    title: 'Dropbox Shares',
    description: 'Finds Dropbox shared links',
    generateDork: (domain) => `site:${domain} (inurl:"dropbox.com/s/" OR intext:"dropbox" OR "shared folder")`
  },
  {
    id: 'cloud-dropbox-public',
    category: '☁️ Cloud Storage',
    title: 'Dropbox Public',
    description: 'Public Dropbox links',
    generateDork: (domain) => `site:dropbox.com/s/ "${domain}"`
  },
  {
    id: 'cloud-dropbox-shared',
    category: '☁️ Cloud Storage',
    title: 'Dropbox - Shared Files',
    description: 'Dropbox shared files',
    generateDork: (domain) => `site:dl.dropboxusercontent.com "${domain}"`
  },
  {
    id: 'cloud-digitalocean',
    category: '☁️ Cloud Storage',
    title: 'DigitalOcean Spaces',
    description: 'DigitalOcean Spaces',
    generateDork: (domain) => `site:digitaloceanspaces.com "${domain}"`
  },
  {
    id: 'cloud-gdrive-public',
    category: '☁️ Cloud Storage',
    title: 'Google Drive - Public',
    description: 'Public Google Drive files',
    generateDork: (domain) => `site:drive.google.com/file/d/ "${domain}"`
  },
  {
    id: 'cloud-gdrive-folders',
    category: '☁️ Cloud Storage',
    title: 'Google Drive - Folders',
    description: 'Google Drive folders',
    generateDork: (domain) => `site:drive.google.com/drive/folders "${domain}"`
  },
  {
    id: 'cloud-onedrive-public',
    category: '☁️ Cloud Storage',
    title: 'OneDrive - Public',
    description: 'Public OneDrive links',
    generateDork: (domain) => `site:1drv.ms "${domain}"`
  },
  {
    id: 'cloud-cloudfront',
    category: '☁️ Cloud Storage',
    title: 'AWS CloudFront',
    description: 'CloudFront distributions',
    generateDork: (domain) => `site:cloudfront.net "${domain}"`
  },
  {
    id: 'cloud-firebase',
    category: '☁️ Cloud Storage',
    title: 'Firebase Storage',
    description: 'Firebase storage',
    generateDork: (domain) => `site:firebasestorage.googleapis.com "${domain}"`
  },
  {
    id: 'cloud-pastebin',
    category: '☁️ Cloud Storage',
    title: 'Pastebin',
    description: 'Pastebin entries',
    generateDork: (domain) => `site:pastebin.com "${domain}"`
  },
  {
    id: 'cloud-github-gists',
    category: '☁️ Cloud Storage',
    title: 'GitHub Gists',
    description: 'GitHub Gist pastes',
    generateDork: (domain) => `site:gist.github.com "${domain}"`
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
    id: 'code-github-code-search',
    category: '💻 Code Repositories',
    title: 'GitHub - Search Code',
    description: 'Search GitHub code',
    generateDork: (domain) => `site:github.com "${domain}" (language:javascript OR language:python OR language:java)`
  },
  {
    id: 'code-github-api-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - API Keys',
    description: 'GitHub exposed API keys',
    generateDork: (domain) => `site:github.com "${domain}" (api_key OR apikey OR api-key)`
  },
  {
    id: 'code-github-passwords',
    category: '💻 Code Repositories',
    title: 'GitHub - Passwords',
    description: 'GitHub exposed passwords',
    generateDork: (domain) => `site:github.com "${domain}" (password OR passwd OR pwd)`
  },
  {
    id: 'code-github-aws-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - AWS Keys',
    description: 'GitHub AWS credentials',
    generateDork: (domain) => `site:github.com "${domain}" (AKIA OR aws_access_key_id)`
  },
  {
    id: 'code-github-private-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - Private Keys',
    description: 'GitHub private keys',
    generateDork: (domain) => `site:github.com "${domain}" (BEGIN RSA PRIVATE KEY OR BEGIN PRIVATE KEY)`
  },
  {
    id: 'code-github-db-creds',
    category: '💻 Code Repositories',
    title: 'GitHub - Database Creds',
    description: 'GitHub database credentials',
    generateDork: (domain) => `site:github.com "${domain}" (DB_PASSWORD OR DATABASE_PASSWORD)`
  },
  {
    id: 'code-github-env',
    category: '💻 Code Repositories',
    title: 'GitHub - Env Files',
    description: 'GitHub .env files',
    generateDork: (domain) => `site:github.com "${domain}" filename:.env`
  },
  {
    id: 'code-github-config',
    category: '💻 Code Repositories',
    title: 'GitHub - Config Files',
    description: 'GitHub config files',
    generateDork: (domain) => `site:github.com "${domain}" (filename:config.json OR filename:settings.json)`
  },
  {
    id: 'code-github-ssh',
    category: '💻 Code Repositories',
    title: 'GitHub - SSH Keys',
    description: 'GitHub SSH keys',
    generateDork: (domain) => `site:github.com "${domain}" (filename:id_rsa OR filename:id_dsa)`
  },
  {
    id: 'code-github-tokens',
    category: '💻 Code Repositories',
    title: 'GitHub - Tokens',
    description: 'GitHub tokens and secrets',
    generateDork: (domain) => `site:github.com "${domain}" (token OR oauth OR secret)`
  },
  {
    id: 'code-gitlab',
    category: '💻 Code Repositories',
    title: 'GitLab Repositories',
    description: 'Finds GitLab repos',
    generateDork: (domain) => `site:gitlab.com "${domain}"`
  },
  {
    id: 'code-gitlab-code',
    category: '💻 Code Repositories',
    title: 'GitLab - Code Search',
    description: 'GitLab code search',
    generateDork: (domain) => `site:gitlab.com "${domain}" (password OR api_key OR secret)`
  },
  {
    id: 'code-gitlab-creds',
    category: '💻 Code Repositories',
    title: 'GitLab - Credentials',
    description: 'GitLab credentials',
    generateDork: (domain) => `site:gitlab.com "${domain}" (credentials OR auth OR token)`
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
  },
  {
    id: 'code-npm',
    category: '💻 Code Repositories',
    title: 'NPM Packages',
    description: 'NPM package registry',
    generateDork: (domain) => `site:npmjs.com "${domain}"`
  },
  {
    id: 'code-pypi',
    category: '💻 Code Repositories',
    title: 'PyPI Packages',
    description: 'Python package index',
    generateDork: (domain) => `site:pypi.org "${domain}"`
  },
  {
    id: 'code-docker-hub',
    category: '💻 Code Repositories',
    title: 'Docker Hub',
    description: 'Docker container images',
    generateDork: (domain) => `site:hub.docker.com "${domain}"`
  },
  {
    id: 'code-stackoverflow',
    category: '💻 Code Repositories',
    title: 'Stack Overflow Code',
    description: 'Stack Overflow code snippets',
    generateDork: (domain) => `site:stackoverflow.com "${domain}" (password OR api_key OR credentials)`
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
  {
    id: 'company-linkedin',
    category: '🏢 Company Research',
    title: 'LinkedIn Company Page',
    description: 'Official company LinkedIn',
    generateDork: (domain) => `"${domain}" site:linkedin.com/company`
  },
  {
    id: 'company-linkedin-employees',
    category: '🏢 Company Research',
    title: 'LinkedIn Employees',
    description: 'Find company employees',
    generateDork: (domain) => `"${domain}" site:linkedin.com (employees OR works at OR currently)`
  },
  {
    id: 'company-executives',
    category: '🏢 Company Research',
    title: 'Executive Team',
    description: 'C-level executives',
    generateDork: (domain) => `"${domain}" (CEO OR CTO OR CFO OR founder OR executive) site:linkedin.com`
  },
  {
    id: 'company-jobs-all',
    category: '🏢 Company Research',
    title: 'Job Postings - All',
    description: 'All job platforms',
    generateDork: (domain) => `"${domain}" (site:indeed.com OR site:glassdoor.com OR site:linkedin.com/jobs)`
  },
  {
    id: 'company-reviews',
    category: '🏢 Company Research',
    title: 'Company Reviews',
    description: 'Employee reviews',
    generateDork: (domain) => `"${domain}" site:glassdoor.com reviews`
  },
  {
    id: 'company-press-releases',
    category: '🏢 Company Research',
    title: 'Press Releases',
    description: 'Company announcements',
    generateDork: (domain) => `"${domain}" ("press release" OR "announces" OR "launches")`
  },
  {
    id: 'company-news',
    category: '🏢 Company Research',
    title: 'News Articles',
    description: 'Media coverage',
    generateDork: (domain) => `"${domain}" site:techcrunch.com OR site:bloomberg.com OR site:reuters.com`
  },
  {
    id: 'company-sec',
    category: '🏢 Company Research',
    title: 'SEC Filings',
    description: 'SEC regulatory filings',
    generateDork: (domain) => `"${domain}" site:sec.gov`
  },
  {
    id: 'company-patents',
    category: '🏢 Company Research',
    title: 'Patents',
    description: 'Patent portfolio',
    generateDork: (domain) => `"${domain}" site:patents.google.com`
  },
  {
    id: 'company-acquisitions',
    category: '🏢 Company Research',
    title: 'Acquisitions',
    description: 'M&A activity',
    generateDork: (domain) => `"${domain}" ("acquired" OR "acquisition" OR "acquires" OR "buys")`
  },
  {
    id: 'company-funding',
    category: '🏢 Company Research',
    title: 'Funding Rounds',
    description: 'Venture funding',
    generateDork: (domain) => `"${domain}" ("series A" OR "series B" OR "series C" OR "funding" OR "investment")`
  },
  {
    id: 'company-tech-stack',
    category: '🏢 Company Research',
    title: 'Technology Stack',
    description: 'Tech stack details',
    generateDork: (domain) => `"${domain}" site:stackshare.io`
  },
  {
    id: 'company-bug-bounty',
    category: '🏢 Company Research',
    title: 'Bug Bounty Program',
    description: 'Bug bounty info',
    generateDork: (domain) => `"${domain}" ("bug bounty" OR "security researcher" OR "responsible disclosure")`
  },
  {
    id: 'company-breaches',
    category: '🏢 Company Research',
    title: 'Data Breaches',
    description: 'Security incidents',
    generateDork: (domain) => `"${domain}" ("data breach" OR "security incident" OR "hacked" OR "compromised")`
  },
  {
    id: 'company-subdomains',
    category: '🏢 Company Research',
    title: 'Subdomains',
    description: 'All subdomains',
    generateDork: (domain) => `site:*.${domain}`
  },
  {
    id: 'company-social-twitter',
    category: '🏢 Company Research',
    title: 'Twitter/X Account',
    description: 'Social media presence',
    generateDork: (domain) => `"${domain}" site:twitter.com OR site:x.com`
  },
  {
    id: 'company-reddit',
    category: '🏢 Company Research',
    title: 'Reddit Mentions',
    description: 'Reddit discussions',
    generateDork: (domain) => `"${domain}" site:reddit.com`
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
    id: 'iot-webcams-generic',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Generic',
    description: 'Generic webcam interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"/view/index.shtml" OR inurl:"/view.shtml")`
  },
  {
    id: 'iot-webcams-axis',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Axis',
    description: 'Axis camera systems',
    generateDork: (domain) => `site:${domain} (inurl:"/axis-cgi/mjpg" OR intitle:"AXIS")`
  },
  {
    id: 'iot-ip-cameras',
    category: '📡 IoT & Smart Devices',
    title: 'IP Cameras - All',
    description: 'All IP camera systems',
    generateDork: (domain) => `site:${domain} (intitle:"Network Camera" OR intitle:"IP Camera" OR intitle:"webcam")`
  },
  {
    id: 'iot-routers',
    category: '📡 IoT & Smart Devices',
    title: 'Router Admin Panels',
    description: 'Finds router login pages',
    generateDork: (domain) => `site:${domain} (intitle:"router" OR intitle:"gateway" OR inurl:"router-login" OR intitle:"wireless" OR "router configuration")`
  },
  {
    id: 'iot-routers-generic',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Generic',
    description: 'Generic router interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"Router" OR inurl:"/cgi-bin/" OR intitle:"Gateway")`
  },
  {
    id: 'iot-routers-cisco',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Cisco',
    description: 'Cisco router management',
    generateDork: (domain) => `site:${domain} (intitle:"Cisco" OR inurl:"/level/15/")`
  },
  {
    id: 'iot-printers',
    category: '📡 IoT & Smart Devices',
    title: 'Network Printers',
    description: 'Finds network printer interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"printer" OR inurl:"printer" OR intitle:"hp " OR intitle:"canon" OR intitle:"epson" OR "printer status")`
  },
  {
    id: 'iot-printers-all',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - All',
    description: 'Network printers',
    generateDork: (domain) => `site:${domain} (intitle:"Printer" OR inurl:"/printer" OR inurl:"/web/guest")`
  },
  {
    id: 'iot-printers-hp',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - HP',
    description: 'HP network printers',
    generateDork: (domain) => `site:${domain} (inurl:"/hp/device/" OR intitle:"HP LaserJet" OR intitle:"HP Printer")`
  },
  {
    id: 'iot-smart-home',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Home Devices',
    description: 'Finds smart home device interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"smart home" OR inurl:"homeautomation" OR "iot device" OR intitle:"control panel")`
  },
  {
    id: 'iot-nas-synology',
    category: '📡 IoT & Smart Devices',
    title: 'NAS - Synology',
    description: 'Synology NAS',
    generateDork: (domain) => `site:${domain} (intitle:"Synology" OR inurl:":5000" OR inurl:":5001")`
  },
  {
    id: 'iot-scada',
    category: '📡 IoT & Smart Devices',
    title: 'Industrial Control',
    description: 'Industrial control systems',
    generateDork: (domain) => `site:${domain} (intitle:"SCADA" OR intitle:"HMI" OR intitle:"PLC")`
  },

  // Website Discovery
  {
    id: 'website-site-search',
    category: '🌐 Website Discovery',
    title: 'Site Search',
    description: 'All indexed pages',
    generateDork: (domain) => `site:${domain}`
  },
  {
    id: 'website-subdomains',
    category: '🌐 Website Discovery',
    title: 'Subdomains',
    description: 'Find all subdomains',
    generateDork: (domain) => `site:*.${domain}`
  },
  {
    id: 'website-login-pages',
    category: '🌐 Website Discovery',
    title: 'Login Pages',
    description: 'Login and auth pages',
    generateDork: (domain) => `site:${domain} (inurl:login OR inurl:signin OR inurl:signup OR inurl:register OR inurl:auth)`
  },
  {
    id: 'website-sql-errors',
    category: '🌐 Website Discovery',
    title: 'SQL Errors',
    description: 'Find SQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"sql syntax near" OR intext:"syntax error" OR intext:"mysql_" OR intext:"Warning: mysql")`
  },
  {
    id: 'website-documents',
    category: '🌐 Website Discovery',
    title: 'Documents',
    description: 'Find document files',
    generateDork: (domain) => `site:${domain} (ext:doc OR ext:docx OR ext:pdf OR ext:xls OR ext:xlsx OR ext:txt)`
  },
  {
    id: 'website-api-keys',
    category: '🌐 Website Discovery',
    title: 'API Keys Exposed',
    description: 'Search for exposed API keys',
    generateDork: (domain) => `site:${domain} (intext:"api_key" OR intext:"apiToken" OR intext:"access_token" OR intext:"secret_key")`
  },
  {
    id: 'website-config-files',
    category: '🌐 Website Discovery',
    title: 'Config Files',
    description: 'Configuration files',
    generateDork: (domain) => `site:${domain} (inurl:config OR inurl:configuration OR inurl:settings) (ext:xml OR ext:json OR ext:yaml OR ext:ini)`
  },
  {
    id: 'website-directory-listings',
    category: '🌐 Website Discovery',
    title: 'Directory Listings',
    description: 'Exposed directories',
    generateDork: (domain) => `site:${domain} (intitle:"index of /" OR intitle:"index of")`
  },
  {
    id: 'website-backup-files',
    category: '🌐 Website Discovery',
    title: 'Backup Files',
    description: 'Find backup files',
    generateDork: (domain) => `site:${domain} (inurl:backup OR inurl:bak OR inurl:old) (ext:zip OR ext:rar OR ext:tar OR ext:gz OR ext:bak)`
  },
  {
    id: 'website-git-repos',
    category: '🌐 Website Discovery',
    title: 'Git Repositories',
    description: 'Exposed source control',
    generateDork: (domain) => `site:${domain} (inurl:.git OR inurl:.svn OR inurl:gitlab OR inurl:github)`
  },
  {
    id: 'website-error-messages',
    category: '🌐 Website Discovery',
    title: 'Error Messages',
    description: 'Error and debug info',
    generateDork: (domain) => `site:${domain} (intext:"error" OR intext:"warning" OR intext:"exception" OR intext:"fatal error")`
  },
  {
    id: 'website-db-admin',
    category: '🌐 Website Discovery',
    title: 'Database Admin',
    description: 'Database interfaces',
    generateDork: (domain) => `site:${domain} (inurl:phpmyadmin OR inurl:adminer OR inurl:dbadmin OR inurl:database)`
  },
  {
    id: 'website-cloud-storage',
    category: '🌐 Website Discovery',
    title: 'Cloud Storage',
    description: 'Cloud storage buckets',
    generateDork: (domain) => `site:${domain} (inurl:s3.amazonaws.com OR inurl:storage.googleapis.com OR inurl:azure OR intext:"bucket")`
  },
  {
    id: 'website-upload-forms',
    category: '🌐 Website Discovery',
    title: 'Upload Forms',
    description: 'File upload pages',
    generateDork: (domain) => `site:${domain} (inurl:upload OR inurl:filemanager OR inurl:uploads)`
  },
  {
    id: 'website-old-deprecated',
    category: '🌐 Website Discovery',
    title: 'Old/Deprecated',
    description: 'Old versions and archives',
    generateDork: (domain) => `site:${domain} (inurl:old OR inurl:deprecated OR inurl:v1 OR inurl:legacy OR inurl:archive)`
  },
  {
    id: 'website-robots-sitemaps',
    category: '🌐 Website Discovery',
    title: 'Robots & Sitemaps',
    description: 'Robots and sitemap files',
    generateDork: (domain) => `site:${domain} (inurl:robots.txt OR inurl:sitemap.xml)`
  },
  {
    id: 'website-contact-info',
    category: '🌐 Website Discovery',
    title: 'Contact Info',
    description: 'Contact information',
    generateDork: (domain) => `site:${domain} (intext:"contact us" OR intext:"support" OR intext:"@${domain}")`
  },
  {
    id: 'website-email-addresses',
    category: '🌐 Website Discovery',
    title: 'Email Addresses',
    description: 'Find email addresses',
    generateDork: (domain) => `site:${domain} intext:@${domain}`
  },
  {
    id: 'website-api-docs',
    category: '🌐 Website Discovery',
    title: 'API Documentation',
    description: 'API docs and specs',
    generateDork: (domain) => `site:${domain} (inurl:api OR inurl:swagger OR inurl:openapi)`
  },
  {
    id: 'website-graphql',
    category: '🌐 Website Discovery',
    title: 'GraphQL Endpoints',
    description: 'GraphQL APIs',
    generateDork: (domain) => `site:${domain} inurl:graphql`
  },
  {
    id: 'website-rest-apis',
    category: '🌐 Website Discovery',
    title: 'REST APIs',
    description: 'REST API endpoints',
    generateDork: (domain) => `site:${domain} (inurl:/api/v1 OR inurl:/api/v2 OR inurl:/rest)`
  },
  {
    id: 'website-health-check',
    category: '🌐 Website Discovery',
    title: 'Health Check',
    description: 'Health check endpoints',
    generateDork: (domain) => `site:${domain} (inurl:health OR inurl:status OR inurl:ping)`
  },
  {
    id: 'website-search-pages',
    category: '🌐 Website Discovery',
    title: 'Search Pages',
    description: 'Search functionality',
    generateDork: (domain) => `site:${domain} (inurl:search OR inurl:find)`
  },
  {
    id: 'website-download-pages',
    category: '🌐 Website Discovery',
    title: 'Download Pages',
    description: 'Download sections',
    generateDork: (domain) => `site:${domain} inurl:download`
  },

  // Additional IoT & Smart Devices
  {
    id: 'iot-smart-refrigerators',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Refrigerators',
    description: 'Smart refrigerators',
    generateDork: (domain) => `site:${domain} (intitle:"Smart Refrigerator" OR intitle:"Connected Appliance")`
  },
  {
    id: 'iot-medical-devices',
    category: '📡 IoT & Smart Devices',
    title: 'Medical Devices',
    description: 'Medical IoT devices',
    generateDork: (domain) => `site:${domain} (intitle:"Medical Device" OR intitle:"Patient Monitor")`
  },
  {
    id: 'iot-smart-meters',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Meters',
    description: 'Smart metering systems',
    generateDork: (domain) => `site:${domain} (intitle:"Smart Meter" OR intitle:"Energy Monitor")`
  },
  {
    id: 'iot-charging-stations',
    category: '📡 IoT & Smart Devices',
    title: 'Charging Stations',
    description: 'EV charging stations',
    generateDork: (domain) => `site:${domain} (intitle:"EV Charging" OR intitle:"Electric Vehicle")`
  },
  {
    id: 'iot-voip-phones',
    category: '📡 IoT & Smart Devices',
    title: 'VoIP Phones',
    description: 'VoIP phone systems',
    generateDork: (domain) => `site:${domain} (intitle:"VoIP" OR intitle:"IP Phone" OR intitle:"Cisco SPA")`
  },
  {
    id: 'iot-video-conferencing',
    category: '📡 IoT & Smart Devices',
    title: 'Video Conferencing',
    description: 'Video conferencing systems',
    generateDork: (domain) => `site:${domain} (intitle:"Video Conference" OR intitle:"Polycom" OR intitle:"Zoom Room")`
  },
  {
    id: 'iot-digital-signage',
    category: '📡 IoT & Smart Devices',
    title: 'Digital Signage',
    description: 'Digital signage displays',
    generateDork: (domain) => `site:${domain} (intitle:"Digital Signage" OR intitle:"Display System")`
  },

  // Additional Cloud Storage Providers
  {
    id: 'cloud-digitalocean-spaces',
    category: '☁️ Cloud Storage',
    title: 'DigitalOcean Spaces',
    description: 'DigitalOcean Spaces storage',
    generateDork: (domain) => `site:digitaloceanspaces.com "${domain}"`
  },
  {
    id: 'cloud-digitalocean-open',
    category: '☁️ Cloud Storage',
    title: 'DigitalOcean - Open Spaces',
    description: 'Open DO Spaces',
    generateDork: (domain) => `site:digitaloceanspaces.com intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-wasabi',
    category: '☁️ Cloud Storage',
    title: 'Wasabi Storage',
    description: 'Wasabi cloud storage',
    generateDork: (domain) => `site:wasabisys.com "${domain}"`
  },
  {
    id: 'cloud-backblaze',
    category: '☁️ Cloud Storage',
    title: 'Backblaze B2',
    description: 'Backblaze B2 storage',
    generateDork: (domain) => `site:backblazeb2.com "${domain}"`
  },
  {
    id: 'cloud-alibaba',
    category: '☁️ Cloud Storage',
    title: 'Alibaba Cloud OSS',
    description: 'Alibaba Cloud storage',
    generateDork: (domain) => `site:aliyuncs.com "${domain}"`
  },
  {
    id: 'cloud-wetransfer',
    category: '☁️ Cloud Storage',
    title: 'WeTransfer Links',
    description: 'WeTransfer shared files',
    generateDork: (domain) => `site:wetransfer.com "${domain}"`
  },
  {
    id: 'cloud-mega',
    category: '☁️ Cloud Storage',
    title: 'Mega.nz Shares',
    description: 'Mega shared files',
    generateDork: (domain) => `site:mega.nz "${domain}"`
  },
  {
    id: 'cloud-mediafire',
    category: '☁️ Cloud Storage',
    title: 'MediaFire Files',
    description: 'MediaFire uploads',
    generateDork: (domain) => `site:mediafire.com "${domain}"`
  },

  // Code Sharing Platforms
  {
    id: 'code-pastebin',
    category: '💻 Code Repositories',
    title: 'Pastebin',
    description: 'Pastebin entries',
    generateDork: (domain) => `site:pastebin.com "${domain}"`
  },
  {
    id: 'code-jsfiddle',
    category: '💻 Code Repositories',
    title: 'JSFiddle',
    description: 'JSFiddle code snippets',
    generateDork: (domain) => `site:jsfiddle.net "${domain}"`
  },
  {
    id: 'code-codepen',
    category: '💻 Code Repositories',
    title: 'CodePen',
    description: 'CodePen code examples',
    generateDork: (domain) => `site:codepen.io "${domain}"`
  },
  {
    id: 'code-codeproject',
    category: '💻 Code Repositories',
    title: 'CodeProject',
    description: 'CodeProject articles',
    generateDork: (domain) => `site:codeproject.com "${domain}"`
  },

  // Image Hosting
  {
    id: 'images-imgur',
    category: '📄 Files',
    title: 'Imgur',
    description: 'Imgur image uploads',
    generateDork: (domain) => `site:imgur.com "${domain}"`
  },
  {
    id: 'images-flickr',
    category: '📄 Files',
    title: 'Flickr',
    description: 'Flickr image hosting',
    generateDork: (domain) => `site:flickr.com "${domain}"`
  },
  {
    id: 'images-photobucket',
    category: '📄 Files',
    title: 'Photobucket',
    description: 'Photobucket uploads',
    generateDork: (domain) => `site:photobucket.com "${domain}"`
  },

  // Collaboration Tools
  {
    id: 'collab-trello',
    category: '🏢 Company Research',
    title: 'Trello Boards',
    description: 'Public Trello boards',
    generateDork: (domain) => `site:trello.com "${domain}"`
  },
  {
    id: 'collab-notion',
    category: '🏢 Company Research',
    title: 'Notion Pages',
    description: 'Public Notion pages',
    generateDork: (domain) => `site:notion.site "${domain}"`
  },
  {
    id: 'collab-airtable',
    category: '🏢 Company Research',
    title: 'Airtable',
    description: 'Airtable shared bases',
    generateDork: (domain) => `site:airtable.com "${domain}"`
  },

  // Additional Company Research
  {
    id: 'company-wayback',
    category: '🏢 Company Research',
    title: 'Wayback Machine',
    description: 'Historical snapshots',
    generateDork: (domain) => `"${domain}" site:web.archive.org`
  },
  {
    id: 'company-legal-docs',
    category: '🏢 Company Research',
    title: 'Legal Documents',
    description: 'Legal documentation',
    generateDork: (domain) => `"${domain}" (filetype:pdf OR filetype:doc) (legal OR terms OR privacy OR agreement)`
  },

  // Additional Vulnerabilities
  {
    id: 'vuln-xxe',
    category: '🛡️ Vulnerabilities',
    title: 'XXE - XML External Entity',
    description: 'XML external entity risks',
    generateDork: (domain) => `site:${domain} (inurl:".xml" OR intext:"<?xml" OR intext:"DOCTYPE")`
  },
  {
    id: 'vuln-idor',
    category: '🛡️ Vulnerabilities',
    title: 'IDOR - Parameter Tampering',
    description: 'Insecure direct object references',
    generateDork: (domain) => `site:${domain} (inurl:"user_id=" OR inurl:"account_id=" OR inurl:"profile_id=")`
  },
  {
    id: 'vuln-ds-store',
    category: '🛡️ Vulnerabilities',
    title: 'DS_Store Files',
    description: 'Exposed macOS metadata files',
    generateDork: (domain) => `site:${domain} (inurl:".DS_Store" OR intitle:"Index of" ".DS_Store")`
  },
  {
    id: 'vuln-cors',
    category: '🛡️ Vulnerabilities',
    title: 'CORS Misconfiguration',
    description: 'CORS policy issues',
    generateDork: (domain) => `site:${domain} (intext:"Access-Control-Allow-Origin: *")`
  },
  {
    id: 'vuln-csrf-missing',
    category: '🛡️ Vulnerabilities',
    title: 'CSRF Tokens Missing',
    description: 'Forms without CSRF protection',
    generateDork: (domain) => `site:${domain} (inurl:"form" -intext:"csrf" -intext:"token")`
  },
  {
    id: 'vuln-default-creds',
    category: '🛡️ Vulnerabilities',
    title: 'Default Credentials',
    description: 'Default credential documentation',
    generateDork: (domain) => `site:${domain} (intext:"default password" OR intext:"default login")`
  },
  {
    id: 'vuln-struts',
    category: '🛡️ Vulnerabilities',
    title: 'Struts RCE',
    description: 'Apache Struts vulnerabilities',
    generateDork: (domain) => `site:${domain} (ext:action OR ext:do OR inurl:"struts")`
  },
  {
    id: 'vuln-laravel-debug',
    category: '🛡️ Vulnerabilities',
    title: 'Laravel Debug Mode',
    description: 'Laravel debug mode enabled',
    generateDork: (domain) => `site:${domain} (intext:"Laravel" AND intext:"Whoops")`
  },
  {
    id: 'vuln-symfony-profiler',
    category: '🛡️ Vulnerabilities',
    title: 'Symfony Profiler',
    description: 'Symfony debug profiler',
    generateDork: (domain) => `site:${domain} inurl:"/_profiler"`
  },
  {
    id: 'vuln-aspnet-trace',
    category: '🛡️ Vulnerabilities',
    title: 'ASP.NET Trace',
    description: 'ASP.NET trace enabled',
    generateDork: (domain) => `site:${domain} (inurl:"trace.axd" OR intext:"Trace.axd")`
  },
  {
    id: 'vuln-viewstate',
    category: '🛡️ Vulnerabilities',
    title: 'ViewState Without MAC',
    description: 'Unprotected ViewState',
    generateDork: (domain) => `site:${domain} (intext:"__VIEWSTATE" -intext:"EnableViewStateMac")`
  },
  {
    id: 'vuln-nginx-status',
    category: '🛡️ Vulnerabilities',
    title: 'Nginx Status Page',
    description: 'Nginx status disclosure',
    generateDork: (domain) => `site:${domain} (inurl:"/nginx_status" OR intitle:"nginx status")`
  },
  {
    id: 'vuln-apache-status',
    category: '🛡️ Vulnerabilities',
    title: 'Apache Server Status',
    description: 'Apache server status page',
    generateDork: (domain) => `site:${domain} (inurl:"/server-status" OR intitle:"Apache Status")`
  },
  {
    id: 'vuln-clickjacking',
    category: '🛡️ Vulnerabilities',
    title: 'Clickjacking Vulnerable',
    description: 'Missing X-Frame-Options',
    generateDork: (domain) => `site:${domain} -intext:"X-Frame-Options" (inurl:"login" OR inurl:"admin")`
  },

  // Additional Sensitive Information
  {
    id: 'sensitive-jwt-secrets',
    category: '🔑 Sensitive Information',
    title: 'JWT Secrets',
    description: 'JWT secret keys',
    generateDork: (domain) => `site:${domain} (jwt OR token) (secret OR key OR signing)`
  },
  {
    id: 'sensitive-postman',
    category: '🔑 Sensitive Information',
    title: 'Postman Collections',
    description: 'Postman API collections',
    generateDork: (domain) => `site:${domain} ext:json (postman OR collection) (api OR endpoint)`
  },
  {
    id: 'sensitive-insomnia',
    category: '🔑 Sensitive Information',
    title: 'Insomnia Configs',
    description: 'Insomnia API workspace',
    generateDork: (domain) => `site:${domain} (filename:insomnia OR filename:workspace) ext:json`
  },
  {
    id: 'sensitive-core-dumps',
    category: '🔑 Sensitive Information',
    title: 'Core Dumps',
    description: 'Application crash dumps',
    generateDork: (domain) => `site:${domain} (ext:core OR filename:core.dump OR ext:mdmp)`
  },
  {
    id: 'sensitive-selenium',
    category: '🔑 Sensitive Information',
    title: 'Selenium Tests',
    description: 'Selenium test files',
    generateDork: (domain) => `site:${domain} (ext:py OR ext:js) (selenium OR webdriver OR test)`
  },
  {
    id: 'sensitive-procfiles',
    category: '🔑 Sensitive Information',
    title: 'Procfiles',
    description: 'Heroku process files',
    generateDork: (domain) => `site:${domain} (filename:Procfile OR filename:procfile)`
  },
  {
    id: 'sensitive-makefile',
    category: '🔑 Sensitive Information',
    title: 'Makefile Configs',
    description: 'Build automation files',
    generateDork: (domain) => `site:${domain} (filename:Makefile OR filename:makefile)`
  },

  // Additional Files
  {
    id: 'files-soap-services',
    category: '📄 Files',
    title: 'SOAP Services',
    description: 'SOAP web services',
    generateDork: (domain) => `site:${domain} ext:wsdl`
  },
  {
    id: 'files-rss-feeds',
    category: '📄 Files',
    title: 'RSS Feeds',
    description: 'RSS/Atom feeds',
    generateDork: (domain) => `site:${domain} (ext:rss OR ext:atom OR inurl:feed)`
  },
  {
    id: 'files-webhook-urls',
    category: '📄 Files',
    title: 'Webhook URLs',
    description: 'Webhook endpoints',
    generateDork: (domain) => `site:${domain} inurl:webhook`
  },
  {
    id: 'files-callback-urls',
    category: '📄 Files',
    title: 'Callback URLs',
    description: 'Callback endpoints',
    generateDork: (domain) => `site:${domain} inurl:callback`
  },
  {
    id: 'files-metrics-stats',
    category: '📄 Files',
    title: 'Metrics/Stats',
    description: 'Metrics pages',
    generateDork: (domain) => `site:${domain} (inurl:metrics OR inurl:stats OR inurl:statistics)`
  },

  // Security Research Platforms
  {
    id: 'security-exploit-db',
    category: '🏢 Company Research',
    title: 'Exploit-DB',
    description: 'Exploit database',
    generateDork: (domain) => `site:exploit-db.com "${domain}"`
  },
  {
    id: 'security-packetstorm',
    category: '🏢 Company Research',
    title: 'PacketStorm Security',
    description: 'PacketStorm exploits',
    generateDork: (domain) => `site:packetstormsecurity.com "${domain}"`
  },
  {
    id: 'security-cve-details',
    category: '🏢 Company Research',
    title: 'CVE Details',
    description: 'CVE vulnerability details',
    generateDork: (domain) => `site:cvedetails.com "${domain}"`
  },
  {
    id: 'security-nvd',
    category: '🏢 Company Research',
    title: 'NVD Database',
    description: 'National Vulnerability Database',
    generateDork: (domain) => `site:nvd.nist.gov "${domain}"`
  },
  {
    id: 'security-focus',
    category: '🏢 Company Research',
    title: 'Security Focus',
    description: 'SecurityFocus vulnerabilities',
    generateDork: (domain) => `site:securityfocus.com "${domain}"`
  },
  {
    id: 'security-github-advisories',
    category: '🏢 Company Research',
    title: 'GitHub Security Advisories',
    description: 'GitHub security advisories',
    generateDork: (domain) => `site:github.com/advisories "${domain}"`
  },
  {
    id: 'security-snyk',
    category: '🏢 Company Research',
    title: 'Snyk Vulnerabilities',
    description: 'Snyk vulnerability database',
    generateDork: (domain) => `site:snyk.io/vuln "${domain}"`
  },
  {
    id: 'security-oss-index',
    category: '🏢 Company Research',
    title: 'OSS Index',
    description: 'Open source security index',
    generateDork: (domain) => `site:ossindex.sonatype.org "${domain}"`
  },

  // Package Registries
  {
    id: 'packages-rubygems',
    category: '💻 Code Repositories',
    title: 'RubyGems',
    description: 'Ruby gem packages',
    generateDork: (domain) => `site:rubygems.org "${domain}"`
  },
  {
    id: 'packages-nuget',
    category: '💻 Code Repositories',
    title: 'NuGet Packages',
    description: 'NuGet package registry',
    generateDork: (domain) => `site:nuget.org "${domain}"`
  },
  {
    id: 'packages-maven',
    category: '💻 Code Repositories',
    title: 'Maven Central',
    description: 'Maven package repository',
    generateDork: (domain) => `site:mvnrepository.com "${domain}"`
  },
  {
    id: 'packages-packagist',
    category: '💻 Code Repositories',
    title: 'Packagist - PHP',
    description: 'PHP package registry',
    generateDork: (domain) => `site:packagist.org "${domain}"`
  },
  {
    id: 'packages-crates',
    category: '💻 Code Repositories',
    title: 'Crates.io - Rust',
    description: 'Rust package registry',
    generateDork: (domain) => `site:crates.io "${domain}"`
  },
  {
    id: 'packages-go',
    category: '💻 Code Repositories',
    title: 'Go Packages',
    description: 'Go package index',
    generateDork: (domain) => `site:pkg.go.dev "${domain}"`
  },

  // Additional Admin Portals
  {
    id: 'admin-admin-keys',
    category: '👤 Admin Portals',
    title: 'Admin Keys',
    description: 'Admin API keys page',
    generateDork: (domain) => `site:${domain} inurl:"/admin_keys/"`
  },
  {
    id: 'admin-redis',
    category: '👤 Admin Portals',
    title: 'Redis Admin',
    description: 'Redis administration',
    generateDork: (domain) => `site:${domain} inurl:"/redis-admin"`
  },
  {
    id: 'admin-postgresql',
    category: '👤 Admin Portals',
    title: 'PostgreSQL Admin',
    description: 'PostgreSQL admin interface',
    generateDork: (domain) => `site:${domain} inurl:"/php-pg-admin/" "PostgreSQL"`
  },
  {
    id: 'admin-credentials',
    category: '👤 Admin Portals',
    title: 'Admin Credentials',
    description: 'Pages mentioning admin password',
    generateDork: (domain) => `site:${domain} "admin password"`
  },
  {
    id: 'admin-grades',
    category: '👤 Admin Portals',
    title: 'Admin Grades',
    description: 'Educational admin grade access',
    generateDork: (domain) => `site:${domain} admin grades`
  },
  {
    id: 'admin-http',
    category: '👤 Admin Portals',
    title: 'HTTP Admin',
    description: 'HTTP admin interfaces',
    generateDork: (domain) => `site:${domain} http intitle: admin`
  },
  {
    id: 'admin-index',
    category: '👤 Admin Portals',
    title: 'Admin Index',
    description: 'Exposed admin directories',
    generateDork: (domain) => `site:${domain} intitle:"index of" *.admin`
  },
  {
    id: 'admin-config',
    category: '👤 Admin Portals',
    title: 'Admin Config',
    description: 'Admin configuration setup',
    generateDork: (domain) => `site:${domain} inurl:"/admin/config" intext:"setup"`
  },
  {
    id: 'admin-settings',
    category: '👤 Admin Portals',
    title: 'Admin Settings',
    description: 'Admin settings page',
    generateDork: (domain) => `site:${domain} inurl:"/admin/settings" "account"`
  },
  {
    id: 'admin-admincp',
    category: '👤 Admin Portals',
    title: 'AdminCP',
    description: 'AdminCP control panel',
    generateDork: (domain) => `site:${domain} inurl:"admincp" intext:"control panel"`
  },
  {
    id: 'admin-tools',
    category: '👤 Admin Portals',
    title: 'Admin Tools',
    description: 'Admin tools with restricted access',
    generateDork: (domain) => `site:${domain} inurl:"/admin-tools" intext:"restricted access"`
  },
  {
    id: 'admin-portal',
    category: '👤 Admin Portals',
    title: 'Admin Portal',
    description: 'Admin portal login (excluding docs)',
    generateDork: (domain) => `site:${domain} intitle:"admin portal" inurl:"login" -guide -help -docs`
  },
  {
    id: 'admin-access',
    category: '👤 Admin Portals',
    title: 'Admin Access',
    description: 'Admin access pages',
    generateDork: (domain) => `site:${domain} intitle:"admin access" inurl:"/admin"`
  },
  {
    id: 'admin-system',
    category: '👤 Admin Portals',
    title: 'Admin System',
    description: 'System admin console',
    generateDork: (domain) => `site:${domain} inurl:"/admin-console" intitle:"System Admin"`
  },
  {
    id: 'admin-interface',
    category: '👤 Admin Portals',
    title: 'Admin Interface',
    description: 'Admin login interface',
    generateDork: (domain) => `site:${domain} intitle:"admin interface" inurl:"/login"`
  },
  {
    id: 'admin-file-manager',
    category: '👤 Admin Portals',
    title: 'Admin File Manager',
    description: 'Admin file managers',
    generateDork: (domain) => `site:${domain} inurl:"/filemanager" intitle:"admin"`
  },
  {
    id: 'admin-sql',
    category: '👤 Admin Portals',
    title: 'Admin SQL',
    description: 'Admin SQL interfaces',
    generateDork: (domain) => `site:${domain} inurl:"/admin/sql"`
  },
  {
    id: 'admin-backup',
    category: '👤 Admin Portals',
    title: 'Admin Backup',
    description: 'Admin backup pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/backup"`
  },
  {
    id: 'admin-users',
    category: '👤 Admin Portals',
    title: 'Admin Users',
    description: 'Admin user management',
    generateDork: (domain) => `site:${domain} inurl:"/admin/users"`
  },
  {
    id: 'admin-reports',
    category: '👤 Admin Portals',
    title: 'Admin Reports',
    description: 'Admin reporting',
    generateDork: (domain) => `site:${domain} inurl:"/admin/reports"`
  },
  {
    id: 'admin-logs',
    category: '👤 Admin Portals',
    title: 'Admin Logs',
    description: 'Admin log viewing',
    generateDork: (domain) => `site:${domain} inurl:"/admin/logs"`
  },
  {
    id: 'admin-api',
    category: '👤 Admin Portals',
    title: 'Admin API',
    description: 'Admin API endpoints',
    generateDork: (domain) => `site:${domain} inurl:"/admin/api"`
  },
  {
    id: 'admin-debug',
    category: '👤 Admin Portals',
    title: 'Admin Debug',
    description: 'Admin debug mode',
    generateDork: (domain) => `site:${domain} inurl:"/admin/debug"`
  },
  {
    id: 'admin-test',
    category: '👤 Admin Portals',
    title: 'Admin Test',
    description: 'Admin test pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/test"`
  },
  {
    id: 'admin-install',
    category: '👤 Admin Portals',
    title: 'Admin Install',
    description: 'Admin installation',
    generateDork: (domain) => `site:${domain} inurl:"/admin/install"`
  },
  {
    id: 'admin-setup',
    category: '👤 Admin Portals',
    title: 'Admin Setup',
    description: 'Admin setup wizard',
    generateDork: (domain) => `site:${domain} inurl:"/admin/setup"`
  },
  {
    id: 'admin-account',
    category: '👤 Admin Portals',
    title: 'Admin Account',
    description: 'Admin account pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/account"`
  },
  {
    id: 'admin-profile',
    category: '👤 Admin Portals',
    title: 'Admin Profile',
    description: 'Admin profile settings',
    generateDork: (domain) => `site:${domain} inurl:"/admin/profile"`
  }
];
