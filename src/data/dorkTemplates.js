const rawTemplates = [
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
  }
,

  // ===== ADDITIONAL DORKS FROM JSON FILES =====
  {
    id: 'vulnerabilities-sql-injection---basic',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Injection - Basic',
    description: 'Common SQL injection entry points',
    generateDork: (domain) => `site:${domain} (inurl:"id=" OR inurl:"pid=" OR inurl:"cid=" OR inurl:"uid=")`
  },
  {
    id: 'vulnerabilities-sql-injection---advanced',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Injection - Advanced',
    description: 'Advanced SQLi parameter patterns',
    generateDork: (domain) => `site:${domain} (inurl:"page=" OR inurl:"query=" OR inurl:"search=" OR inurl:"keyword=")`
  },
  {
    id: 'vulnerabilities-sql-errors---mysql',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Errors - MySQL',
    description: 'MySQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"MySQL" OR intext:"mysql_fetch" OR intext:"mysql_num_rows" OR intext:"SQL syntax")`
  },
  {
    id: 'vulnerabilities-sql-errors---mssql',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Errors - MSSQL',
    description: 'MS SQL Server errors',
    generateDork: (domain) => `site:${domain} (intext:"ODBC SQL Server Driver" OR intext:"Microsoft OLE DB Provider" OR intext:"SQLServer JDBC Driver")`
  },
  {
    id: 'vulnerabilities-sql-errors---postgresql',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Errors - PostgreSQL',
    description: 'PostgreSQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"PostgreSQL" OR intext:"pg_query" OR intext:"pg_exec")`
  },
  {
    id: 'vulnerabilities-sql-errors---oracle',
    category: '🛡️ Vulnerabilities',
    title: 'SQL Errors - Oracle',
    description: 'Oracle database errors',
    generateDork: (domain) => `site:${domain} (intext:"ORA-" OR intext:"Oracle error" OR intext:"Oracle JDBC")`
  },
  {
    id: 'vulnerabilities-xss-vulnerable-parameters',
    category: '🛡️ Vulnerabilities',
    title: 'XSS Vulnerable Parameters',
    description: 'Potential XSS injection points',
    generateDork: (domain) => `site:${domain} (inurl:"search=" OR inurl:"q=" OR inurl:"keyword=" OR inurl:"query=")`
  },
  {
    id: 'vulnerabilities-open-redirect',
    category: '🛡️ Vulnerabilities',
    title: 'Open Redirect',
    description: 'Open redirect vulnerabilities',
    generateDork: (domain) => `site:${domain} (inurl:"url=http" OR inurl:"redirect=http" OR inurl:"return=http" OR inurl:"next=http")`
  },
  {
    id: 'vulnerabilities-lfi---local-file-inclusion',
    category: '🛡️ Vulnerabilities',
    title: 'LFI - Local File Inclusion',
    description: 'Local file inclusion vectors',
    generateDork: (domain) => `site:${domain} (inurl:"file=" OR inurl:"page=" OR inurl:"path=" OR inurl:"include=")`
  },
  {
    id: 'vulnerabilities-rfi---remote-file-inclusion',
    category: '🛡️ Vulnerabilities',
    title: 'RFI - Remote File Inclusion',
    description: 'Remote file inclusion points',
    generateDork: (domain) => `site:${domain} (inurl:"file=http" OR inurl:"page=http" OR inurl:"include=http")`
  },
  {
    id: 'vulnerabilities-path-traversal',
    category: '🛡️ Vulnerabilities',
    title: 'Path Traversal',
    description: 'Directory traversal attempts',
    generateDork: (domain) => `site:${domain} (inurl:"../" OR inurl:"%2e%2e%2f" OR inurl:"..\\")`
  },
  {
    id: 'vulnerabilities-command-injection',
    category: '🛡️ Vulnerabilities',
    title: 'Command Injection',
    description: 'OS command injection points',
    generateDork: (domain) => `site:${domain} (inurl:"cmd=" OR inurl:"exec=" OR inurl:"command=" OR inurl:"execute=")`
  },
  {
    id: 'vulnerabilities-xxe---xml-external-entity',
    category: '🛡️ Vulnerabilities',
    title: 'XXE - XML External Entity',
    description: 'XML external entity risks',
    generateDork: (domain) => `site:${domain} (inurl:".xml" OR intext:"<?xml" OR intext:"DOCTYPE")`
  },
  {
    id: 'vulnerabilities-ssrf---server-side-request-forgery',
    category: '🛡️ Vulnerabilities',
    title: 'SSRF - Server Side Request Forgery',
    description: 'SSRF vulnerable parameters',
    generateDork: (domain) => `site:${domain} (inurl:"url=" OR inurl:"uri=" OR inurl:"path=http" OR inurl:"dest=")`
  },
  {
    id: 'vulnerabilities-idor---parameter-tampering',
    category: '🛡️ Vulnerabilities',
    title: 'IDOR - Parameter Tampering',
    description: 'Insecure direct object references',
    generateDork: (domain) => `site:${domain} (inurl:"user_id=" OR inurl:"account_id=" OR inurl:"profile_id=")`
  },
  {
    id: 'vulnerabilities-file-upload',
    category: '🛡️ Vulnerabilities',
    title: 'File Upload',
    description: 'File upload functionality',
    generateDork: (domain) => `site:${domain} (inurl:"upload" OR intitle:"upload" OR intext:"choose file")`
  },
  {
    id: 'vulnerabilities-unrestricted-upload',
    category: '🛡️ Vulnerabilities',
    title: 'Unrestricted Upload',
    description: 'Unrestricted file upload',
    generateDork: (domain) => `site:${domain} inurl:upload (ext:php OR ext:asp OR ext:aspx OR ext:jsp)`
  },
  {
    id: 'vulnerabilities-phpinfo-disclosure',
    category: '🛡️ Vulnerabilities',
    title: 'PHPInfo Disclosure',
    description: 'PHP information disclosure',
    generateDork: (domain) => `site:${domain} (inurl:"phpinfo.php" OR intitle:"phpinfo()" OR intext:"PHP Version")`
  },
  {
    id: 'vulnerabilities-directory-listing',
    category: '🛡️ Vulnerabilities',
    title: 'Directory Listing',
    description: 'Exposed directory listings',
    generateDork: (domain) => `site:${domain} (intitle:"Index of" OR intitle:"Directory listing")`
  },
  {
    id: 'vulnerabilities-git-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Git Exposed',
    description: 'Exposed .git directories',
    generateDork: (domain) => `site:${domain} (inurl:".git" OR intitle:"Index of /.git" OR inurl:"/.git/config")`
  },
  {
    id: 'vulnerabilities-svn-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'SVN Exposed',
    description: 'Exposed .svn directories',
    generateDork: (domain) => `site:${domain} (inurl:".svn" OR intitle:"Index of /.svn")`
  },
  {
    id: 'vulnerabilities-ds-store-files',
    category: '🛡️ Vulnerabilities',
    title: 'DS_Store Files',
    description: 'Exposed macOS metadata files',
    generateDork: (domain) => `site:${domain} (inurl:".DS_Store" OR intitle:"Index of" ".DS_Store")`
  },
  {
    id: 'vulnerabilities-backup-files',
    category: '🛡️ Vulnerabilities',
    title: 'Backup Files',
    description: 'Backup file exposure',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:old OR ext:backup OR ext:~ OR ext:swp)`
  },
  {
    id: 'vulnerabilities-log-files-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Log Files Exposed',
    description: 'Exposed log files',
    generateDork: (domain) => `site:${domain} (ext:log OR intitle:"Index of" "access.log" OR intitle:"Index of" "error.log")`
  },
  {
    id: 'vulnerabilities-cgi-bin',
    category: '🛡️ Vulnerabilities',
    title: 'CGI-BIN',
    description: 'CGI script directories',
    generateDork: (domain) => `site:${domain} inurl:cgi-bin`
  },
  {
    id: 'vulnerabilities-tomcat-manager',
    category: '🛡️ Vulnerabilities',
    title: 'Tomcat Manager',
    description: 'Tomcat manager interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"/manager/html" OR intitle:"Apache Tomcat")`
  },
  {
    id: 'vulnerabilities-jboss-console',
    category: '🛡️ Vulnerabilities',
    title: 'JBoss Console',
    description: 'JBoss management consoles',
    generateDork: (domain) => `site:${domain} (inurl:"/jmx-console" OR inurl:"/web-console")`
  },
  {
    id: 'vulnerabilities-weblogic-console',
    category: '🛡️ Vulnerabilities',
    title: 'WebLogic Console',
    description: 'Oracle WebLogic console',
    generateDork: (domain) => `site:${domain} inurl:"/console/login"`
  },
  {
    id: 'vulnerabilities-jenkins-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Jenkins Exposed',
    description: 'Jenkins CI/CD instances',
    generateDork: (domain) => `site:${domain} (inurl:"/jenkins" OR intitle:"Dashboard [Jenkins]")`
  },
  {
    id: 'vulnerabilities-kibana-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Kibana Exposed',
    description: 'Kibana dashboards',
    generateDork: (domain) => `site:${domain} (inurl:"/app/kibana" OR intitle:"Kibana")`
  },
  {
    id: 'vulnerabilities-grafana-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Grafana Exposed',
    description: 'Grafana monitoring',
    generateDork: (domain) => `site:${domain} (inurl:"/grafana" OR intitle:"Grafana")`
  },
  {
    id: 'vulnerabilities-jupyter-notebooks',
    category: '🛡️ Vulnerabilities',
    title: 'Jupyter Notebooks',
    description: 'Jupyter notebook instances',
    generateDork: (domain) => `site:${domain} (inurl:"/notebooks" OR intitle:"Jupyter")`
  },
  {
    id: 'vulnerabilities-elasticsearch',
    category: '🛡️ Vulnerabilities',
    title: 'Elasticsearch',
    description: 'Elasticsearch interfaces',
    generateDork: (domain) => `site:${domain} (inurl:":9200" OR intext:"_cluster/health")`
  },
  {
    id: 'vulnerabilities-mongodb-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'MongoDB Exposed',
    description: 'MongoDB database ports',
    generateDork: (domain) => `site:${domain} (inurl:":27017" OR inurl:":28017")`
  },
  {
    id: 'vulnerabilities-redis-exposed',
    category: '🛡️ Vulnerabilities',
    title: 'Redis Exposed',
    description: 'Redis database instances',
    generateDork: (domain) => `site:${domain} inurl:":6379"`
  },
  {
    id: 'vulnerabilities-docker-api',
    category: '🛡️ Vulnerabilities',
    title: 'Docker API',
    description: 'Docker API endpoints',
    generateDork: (domain) => `site:${domain} (inurl:":2375" OR inurl:":2376" OR inurl:"/containers/json")`
  },
  {
    id: 'vulnerabilities-kubernetes-dashboard',
    category: '🛡️ Vulnerabilities',
    title: 'Kubernetes Dashboard',
    description: 'Kubernetes management',
    generateDork: (domain) => `site:${domain} (inurl:"/api/v1" OR intitle:"Kubernetes Dashboard")`
  },
  {
    id: 'vulnerabilities-cors-misconfiguration',
    category: '🛡️ Vulnerabilities',
    title: 'CORS Misconfiguration',
    description: 'CORS policy issues',
    generateDork: (domain) => `site:${domain} (intext:"Access-Control-Allow-Origin: *")`
  },
  {
    id: 'vulnerabilities-csrf-tokens-missing',
    category: '🛡️ Vulnerabilities',
    title: 'CSRF Tokens Missing',
    description: 'Forms without CSRF protection',
    generateDork: (domain) => `site:${domain} (inurl:"form" -intext:"csrf" -intext:"token")`
  },
  {
    id: 'vulnerabilities-default-credentials',
    category: '🛡️ Vulnerabilities',
    title: 'Default Credentials',
    description: 'Default credential documentation',
    generateDork: (domain) => `site:${domain} (intext:"default password" OR intext:"default login")`
  },
  {
    id: 'vulnerabilities-struts-rce',
    category: '🛡️ Vulnerabilities',
    title: 'Struts RCE',
    description: 'Apache Struts vulnerabilities',
    generateDork: (domain) => `site:${domain} (ext:action OR ext:do OR inurl:"struts")`
  },
  {
    id: 'vulnerabilities-spring-boot-actuator',
    category: '🛡️ Vulnerabilities',
    title: 'Spring Boot Actuator',
    description: 'Spring Boot actuator endpoints',
    generateDork: (domain) => `site:${domain} (inurl:"/actuator" OR inurl:"/health" OR inurl:"/env" OR inurl:"/trace")`
  },
  {
    id: 'vulnerabilities-laravel-debug-mode',
    category: '🛡️ Vulnerabilities',
    title: 'Laravel Debug Mode',
    description: 'Laravel debug mode enabled',
    generateDork: (domain) => `site:${domain} (intext:"Laravel" AND intext:"Whoops")`
  },
  {
    id: 'vulnerabilities-symfony-profiler',
    category: '🛡️ Vulnerabilities',
    title: 'Symfony Profiler',
    description: 'Symfony debug profiler',
    generateDork: (domain) => `site:${domain} inurl:"/_profiler"`
  },
  {
    id: 'vulnerabilities-aspnet-trace',
    category: '🛡️ Vulnerabilities',
    title: 'ASP.NET Trace',
    description: 'ASP.NET trace enabled',
    generateDork: (domain) => `site:${domain} (inurl:"trace.axd" OR intext:"Trace.axd")`
  },
  {
    id: 'vulnerabilities-viewstate-without-mac',
    category: '🛡️ Vulnerabilities',
    title: 'ViewState Without MAC',
    description: 'Unprotected ViewState',
    generateDork: (domain) => `site:${domain} (intext:"__VIEWSTATE" -intext:"EnableViewStateMac")`
  },
  {
    id: 'vulnerabilities-graphql-introspection',
    category: '🛡️ Vulnerabilities',
    title: 'GraphQL Introspection',
    description: 'GraphQL introspection enabled',
    generateDork: (domain) => `site:${domain} (inurl:"graphql" OR inurl:"graphiql")`
  },
  {
    id: 'vulnerabilities-api-swaggeropenapi',
    category: '🛡️ Vulnerabilities',
    title: 'API Swagger/OpenAPI',
    description: 'Exposed API documentation',
    generateDork: (domain) => `site:${domain} (inurl:"/swagger" OR inurl:"/api-docs" OR inurl:"/openapi.json")`
  },
  {
    id: 'vulnerabilities-nginx-status-page',
    category: '🛡️ Vulnerabilities',
    title: 'Nginx Status Page',
    description: 'Nginx status disclosure',
    generateDork: (domain) => `site:${domain} (inurl:"/nginx_status" OR intitle:"nginx status")`
  },
  {
    id: 'vulnerabilities-apache-server-status',
    category: '🛡️ Vulnerabilities',
    title: 'Apache Server Status',
    description: 'Apache server status page',
    generateDork: (domain) => `site:${domain} (inurl:"/server-status" OR intitle:"Apache Status")`
  },
  {
    id: 'vulnerabilities-clickjacking-vulnerable',
    category: '🛡️ Vulnerabilities',
    title: 'Clickjacking Vulnerable',
    description: 'Missing X-Frame-Options',
    generateDork: (domain) => `site:${domain} -intext:"X-Frame-Options" (inurl:"login" OR inurl:"admin")`
  },
  {
    id: 'admin-portals-admin-login-basic',
    category: '👤 Admin Portals',
    title: 'Admin Login Basic',
    description: 'Basic admin login pages',
    generateDork: (domain) => `site:${domain} intitle:"admin login"`
  },
  {
    id: 'admin-portals-admin-console',
    category: '👤 Admin Portals',
    title: 'Admin Console',
    description: 'Admin console login',
    generateDork: (domain) => `intitle:"admin console" inurl:login site:${domain}`
  },
  {
    id: 'admin-portals-django-admin',
    category: '👤 Admin Portals',
    title: 'Django Admin',
    description: 'Django framework admin',
    generateDork: (domain) => `intitle:"Django site admin" inurl:admin site:${domain}`
  },
  {
    id: 'admin-portals-phpmyadmin',
    category: '👤 Admin Portals',
    title: 'PHPMyAdmin',
    description: 'PHPMyAdmin interface',
    generateDork: (domain) => `site:${domain} inurl:"/phpmyadmin/" intext:"Create new database"`
  },
  {
    id: 'admin-portals-admin-area',
    category: '👤 Admin Portals',
    title: 'Admin Area',
    description: 'Admin area control panel',
    generateDork: (domain) => `site:${domain} inurl:"/admin_area/" intitle:"Control Panel"`
  },
  {
    id: 'admin-portals-admin-panel',
    category: '👤 Admin Portals',
    title: 'Admin Panel',
    description: 'General admin panel',
    generateDork: (domain) => `site:${domain} inurl:"/admin_panel/" -github`
  },
  {
    id: 'admin-portals-admin-dashboard',
    category: '👤 Admin Portals',
    title: 'Admin Dashboard',
    description: 'Admin dashboard interface',
    generateDork: (domain) => `site:${domain} inurl:"/admin" "Dashboard"`
  },
  {
    id: 'admin-portals-database-admin',
    category: '👤 Admin Portals',
    title: 'Database Admin',
    description: 'Database administration',
    generateDork: (domain) => `site:${domain} inurl:"/dbadmin/" "Database Administration"`
  },
  {
    id: 'admin-portals-wordpress-admin',
    category: '👤 Admin Portals',
    title: 'WordPress Admin',
    description: 'WordPress admin panel',
    generateDork: (domain) => `site:${domain} inurl:wp-admin`
  },
  {
    id: 'admin-portals-admin-login-asp',
    category: '👤 Admin Portals',
    title: 'Admin Login ASP',
    description: 'ASP.NET admin login',
    generateDork: (domain) => `site:${domain} inurl:("administrator/login.aspx" OR "admin/login.aspx")`
  },
  {
    id: 'admin-portals-admin-login-php',
    category: '👤 Admin Portals',
    title: 'Admin Login PHP',
    description: 'PHP admin password page',
    generateDork: (domain) => `site:${domain} inurl:("admin/password.php")`
  },
  {
    id: 'admin-portals-admin-keys',
    category: '👤 Admin Portals',
    title: 'Admin Keys',
    description: 'Admin API keys page',
    generateDork: (domain) => `site:${domain} inurl:"/admin_keys/"`
  },
  {
    id: 'admin-portals-redis-admin',
    category: '👤 Admin Portals',
    title: 'Redis Admin',
    description: 'Redis administration',
    generateDork: (domain) => `site:${domain} inurl:"/redis-admin"`
  },
  {
    id: 'admin-portals-postgresql-admin',
    category: '👤 Admin Portals',
    title: 'PostgreSQL Admin',
    description: 'PostgreSQL admin interface',
    generateDork: (domain) => `site:${domain} inurl:"/php-pg-admin/" "PostgreSQL"`
  },
  {
    id: 'admin-portals-admin-credentials',
    category: '👤 Admin Portals',
    title: 'Admin Credentials',
    description: 'Pages mentioning admin password',
    generateDork: (domain) => `site:${domain} "admin password"`
  },
  {
    id: 'admin-portals-admin-grades',
    category: '👤 Admin Portals',
    title: 'Admin Grades',
    description: 'Educational admin grade access',
    generateDork: (domain) => `site:${domain} admin grades`
  },
  {
    id: 'admin-portals-http-admin',
    category: '👤 Admin Portals',
    title: 'HTTP Admin',
    description: 'HTTP admin interfaces',
    generateDork: (domain) => `site:${domain} http intitle: admin`
  },
  {
    id: 'admin-portals-admin-index',
    category: '👤 Admin Portals',
    title: 'Admin Index',
    description: 'Exposed admin directories',
    generateDork: (domain) => `site:${domain} intitle:"index of" *.admin`
  },
  {
    id: 'admin-portals-admin-config',
    category: '👤 Admin Portals',
    title: 'Admin Config',
    description: 'Admin configuration setup',
    generateDork: (domain) => `site:${domain} inurl:"/admin/config" intext:"setup"`
  },
  {
    id: 'admin-portals-tomcat-manager',
    category: '👤 Admin Portals',
    title: 'Tomcat Manager',
    description: 'Tomcat web application manager',
    generateDork: (domain) => `site:${domain} inurl:"/manager/html" intitle:"Tomcat Web Application Manager"`
  },
  {
    id: 'admin-portals-admin-settings',
    category: '👤 Admin Portals',
    title: 'Admin Settings',
    description: 'Admin settings page',
    generateDork: (domain) => `site:${domain} inurl:"/admin/settings" "account"`
  },
  {
    id: 'admin-portals-admincp',
    category: '👤 Admin Portals',
    title: 'AdminCP',
    description: 'AdminCP control panel',
    generateDork: (domain) => `site:${domain} inurl:"admincp" intext:"control panel"`
  },
  {
    id: 'admin-portals-admin-tools',
    category: '👤 Admin Portals',
    title: 'Admin Tools',
    description: 'Admin tools with restricted access',
    generateDork: (domain) => `site:${domain} inurl:"/admin-tools" intext:"restricted access"`
  },
  {
    id: 'admin-portals-admin-portal',
    category: '👤 Admin Portals',
    title: 'Admin Portal',
    description: 'Admin portal login (excluding docs)',
    generateDork: (domain) => `site:${domain} intitle:"admin portal" inurl:"login" -guide -help -docs`
  },
  {
    id: 'admin-portals-admin-access',
    category: '👤 Admin Portals',
    title: 'Admin Access',
    description: 'Admin access pages',
    generateDork: (domain) => `site:${domain} intitle:"admin access" inurl:"/admin"`
  },
  {
    id: 'admin-portals-admin-system',
    category: '👤 Admin Portals',
    title: 'Admin System',
    description: 'System admin console',
    generateDork: (domain) => `site:${domain} inurl:"/admin-console" intitle:"System Admin"`
  },
  {
    id: 'admin-portals-admin-interface',
    category: '👤 Admin Portals',
    title: 'Admin Interface',
    description: 'Admin login interface',
    generateDork: (domain) => `site:${domain} intitle:"admin interface" inurl:"/login"`
  },
  {
    id: 'admin-portals-joomla-admin',
    category: '👤 Admin Portals',
    title: 'Joomla Admin',
    description: 'Joomla CMS admin',
    generateDork: (domain) => `site:${domain} inurl:"/administrator" intitle:"Joomla"`
  },
  {
    id: 'admin-portals-drupal-admin',
    category: '👤 Admin Portals',
    title: 'Drupal Admin',
    description: 'Drupal CMS login',
    generateDork: (domain) => `site:${domain} inurl:"/user/login" intitle:"Drupal"`
  },
  {
    id: 'admin-portals-magento-admin',
    category: '👤 Admin Portals',
    title: 'Magento Admin',
    description: 'Magento e-commerce admin',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"Magento"`
  },
  {
    id: 'admin-portals-shopify-admin',
    category: '👤 Admin Portals',
    title: 'Shopify Admin',
    description: 'Shopify store admin',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"Shopify"`
  },
  {
    id: 'admin-portals-oscommerce-admin',
    category: '👤 Admin Portals',
    title: 'osCommerce Admin',
    description: 'osCommerce admin panel',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"osCommerce"`
  },
  {
    id: 'admin-portals-opencart-admin',
    category: '👤 Admin Portals',
    title: 'OpenCart Admin',
    description: 'OpenCart admin',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"OpenCart"`
  },
  {
    id: 'admin-portals-prestashop-admin',
    category: '👤 Admin Portals',
    title: 'PrestaShop Admin',
    description: 'PrestaShop backend',
    generateDork: (domain) => `site:${domain} inurl:"/admin" intitle:"PrestaShop"`
  },
  {
    id: 'admin-portals-admin-file-manager',
    category: '👤 Admin Portals',
    title: 'Admin File Manager',
    description: 'Admin file managers',
    generateDork: (domain) => `site:${domain} inurl:"/filemanager" intitle:"admin"`
  },
  {
    id: 'admin-portals-cpanel-login',
    category: '👤 Admin Portals',
    title: 'CPanel Login',
    description: 'cPanel access',
    generateDork: (domain) => `site:${domain} inurl:":2082" OR inurl:":2083"`
  },
  {
    id: 'admin-portals-plesk-panel',
    category: '👤 Admin Portals',
    title: 'Plesk Panel',
    description: 'Plesk control panel',
    generateDork: (domain) => `site:${domain} inurl:":8443" intitle:"Plesk"`
  },
  {
    id: 'admin-portals-directadmin',
    category: '👤 Admin Portals',
    title: 'DirectAdmin',
    description: 'DirectAdmin panel',
    generateDork: (domain) => `site:${domain} inurl:":2222" intitle:"DirectAdmin"`
  },
  {
    id: 'admin-portals-webmin',
    category: '👤 Admin Portals',
    title: 'Webmin',
    description: 'Webmin interface',
    generateDork: (domain) => `site:${domain} inurl:":10000" intitle:"Webmin"`
  },
  {
    id: 'admin-portals-admin-sql',
    category: '👤 Admin Portals',
    title: 'Admin SQL',
    description: 'Admin SQL interfaces',
    generateDork: (domain) => `site:${domain} inurl:"/admin/sql"`
  },
  {
    id: 'admin-portals-admin-backup',
    category: '👤 Admin Portals',
    title: 'Admin Backup',
    description: 'Admin backup pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/backup"`
  },
  {
    id: 'admin-portals-admin-users',
    category: '👤 Admin Portals',
    title: 'Admin Users',
    description: 'Admin user management',
    generateDork: (domain) => `site:${domain} inurl:"/admin/users"`
  },
  {
    id: 'admin-portals-admin-reports',
    category: '👤 Admin Portals',
    title: 'Admin Reports',
    description: 'Admin reporting',
    generateDork: (domain) => `site:${domain} inurl:"/admin/reports"`
  },
  {
    id: 'admin-portals-admin-logs',
    category: '👤 Admin Portals',
    title: 'Admin Logs',
    description: 'Admin log viewing',
    generateDork: (domain) => `site:${domain} inurl:"/admin/logs"`
  },
  {
    id: 'admin-portals-admin-api',
    category: '👤 Admin Portals',
    title: 'Admin API',
    description: 'Admin API endpoints',
    generateDork: (domain) => `site:${domain} inurl:"/admin/api"`
  },
  {
    id: 'admin-portals-admin-debug',
    category: '👤 Admin Portals',
    title: 'Admin Debug',
    description: 'Admin debug mode',
    generateDork: (domain) => `site:${domain} inurl:"/admin/debug"`
  },
  {
    id: 'admin-portals-admin-test',
    category: '👤 Admin Portals',
    title: 'Admin Test',
    description: 'Admin test pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/test"`
  },
  {
    id: 'admin-portals-admin-install',
    category: '👤 Admin Portals',
    title: 'Admin Install',
    description: 'Admin installation',
    generateDork: (domain) => `site:${domain} inurl:"/admin/install"`
  },
  {
    id: 'admin-portals-admin-setup',
    category: '👤 Admin Portals',
    title: 'Admin Setup',
    description: 'Admin setup wizard',
    generateDork: (domain) => `site:${domain} inurl:"/admin/setup"`
  },
  {
    id: 'admin-portals-admin-account',
    category: '👤 Admin Portals',
    title: 'Admin Account',
    description: 'Admin account pages',
    generateDork: (domain) => `site:${domain} inurl:"/admin/account"`
  },
  {
    id: 'admin-portals-admin-profile',
    category: '👤 Admin Portals',
    title: 'Admin Profile',
    description: 'Admin profile settings',
    generateDork: (domain) => `site:${domain} inurl:"/admin/profile"`
  },
  {
    id: 'cloud-storage-aws-s3-buckets---generic',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 Buckets - Generic',
    description: 'AWS S3 bucket search',
    generateDork: (domain) => `site:s3.amazonaws.com "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---open-buckets',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Open Buckets',
    description: 'Open S3 directory listings',
    generateDork: (domain) => `site:s3.amazonaws.com intitle:"Index of /" "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---backup-files',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Backup Files',
    description: 'S3 backup files',
    generateDork: (domain) => `site:s3.amazonaws.com (backup OR dump OR old) "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---credentials',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Credentials',
    description: 'S3 credentials exposure',
    generateDork: (domain) => `site:s3.amazonaws.com (password OR credentials OR secret OR api_key) "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---database-dumps',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Database Dumps',
    description: 'S3 database files',
    generateDork: (domain) => `site:s3.amazonaws.com (ext:sql OR ext:db OR ext:sqlite) "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---config-files',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Config Files',
    description: 'S3 configuration files',
    generateDork: (domain) => `site:s3.amazonaws.com (ext:config OR ext:conf OR ext:env) "${domain}"`
  },
  {
    id: 'cloud-storage-aws-s3---logs',
    category: '☁️ Cloud Storage',
    title: 'AWS S3 - Logs',
    description: 'S3 log files',
    generateDork: (domain) => `site:s3.amazonaws.com ext:log "${domain}"`
  },
  {
    id: 'cloud-storage-google-cloud-storage',
    category: '☁️ Cloud Storage',
    title: 'Google Cloud Storage',
    description: 'Google Cloud Storage buckets',
    generateDork: (domain) => `site:storage.googleapis.com "${domain}"`
  },
  {
    id: 'cloud-storage-gcs---open-buckets',
    category: '☁️ Cloud Storage',
    title: 'GCS - Open Buckets',
    description: 'Open GCS buckets',
    generateDork: (domain) => `site:storage.googleapis.com intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-storage-gcs---backup-files',
    category: '☁️ Cloud Storage',
    title: 'GCS - Backup Files',
    description: 'GCS backup files',
    generateDork: (domain) => `site:storage.googleapis.com (backup OR dump OR archive) "${domain}"`
  },
  {
    id: 'cloud-storage-gcs---credentials',
    category: '☁️ Cloud Storage',
    title: 'GCS - Credentials',
    description: 'GCS credentials',
    generateDork: (domain) => `site:storage.googleapis.com (password OR credentials OR key) "${domain}"`
  },
  {
    id: 'cloud-storage-azure-blob-storage',
    category: '☁️ Cloud Storage',
    title: 'Azure Blob Storage',
    description: 'Azure Blob storage',
    generateDork: (domain) => `site:blob.core.windows.net "${domain}"`
  },
  {
    id: 'cloud-storage-azure---open-containers',
    category: '☁️ Cloud Storage',
    title: 'Azure - Open Containers',
    description: 'Open Azure containers',
    generateDork: (domain) => `site:blob.core.windows.net intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-storage-azure---backup-files',
    category: '☁️ Cloud Storage',
    title: 'Azure - Backup Files',
    description: 'Azure backup files',
    generateDork: (domain) => `site:blob.core.windows.net (backup OR dump) "${domain}"`
  },
  {
    id: 'cloud-storage-azure---config-files',
    category: '☁️ Cloud Storage',
    title: 'Azure - Config Files',
    description: 'Azure config files',
    generateDork: (domain) => `site:blob.core.windows.net (ext:config OR ext:json OR ext:xml) "${domain}"`
  },
  {
    id: 'cloud-storage-digitalocean-spaces',
    category: '☁️ Cloud Storage',
    title: 'DigitalOcean Spaces',
    description: 'DigitalOcean Spaces',
    generateDork: (domain) => `site:digitaloceanspaces.com "${domain}"`
  },
  {
    id: 'cloud-storage-digitalocean---open-spaces',
    category: '☁️ Cloud Storage',
    title: 'DigitalOcean - Open Spaces',
    description: 'Open DO Spaces',
    generateDork: (domain) => `site:digitaloceanspaces.com intitle:"Index of" "${domain}"`
  },
  {
    id: 'cloud-storage-wasabi-storage',
    category: '☁️ Cloud Storage',
    title: 'Wasabi Storage',
    description: 'Wasabi cloud storage',
    generateDork: (domain) => `site:wasabisys.com "${domain}"`
  },
  {
    id: 'cloud-storage-backblaze-b2',
    category: '☁️ Cloud Storage',
    title: 'Backblaze B2',
    description: 'Backblaze B2 storage',
    generateDork: (domain) => `site:backblazeb2.com "${domain}"`
  },
  {
    id: 'cloud-storage-alibaba-cloud-oss',
    category: '☁️ Cloud Storage',
    title: 'Alibaba Cloud OSS',
    description: 'Alibaba Cloud storage',
    generateDork: (domain) => `site:aliyuncs.com "${domain}"`
  },
  {
    id: 'cloud-storage-dropbox-public',
    category: '☁️ Cloud Storage',
    title: 'Dropbox Public',
    description: 'Public Dropbox links',
    generateDork: (domain) => `site:dropbox.com/s/ "${domain}"`
  },
  {
    id: 'cloud-storage-dropbox---shared-files',
    category: '☁️ Cloud Storage',
    title: 'Dropbox - Shared Files',
    description: 'Dropbox shared files',
    generateDork: (domain) => `site:dl.dropboxusercontent.com "${domain}"`
  },
  {
    id: 'cloud-storage-google-drive---public',
    category: '☁️ Cloud Storage',
    title: 'Google Drive - Public',
    description: 'Public Google Drive files',
    generateDork: (domain) => `site:drive.google.com/file/d/ "${domain}"`
  },
  {
    id: 'cloud-storage-google-drive---folders',
    category: '☁️ Cloud Storage',
    title: 'Google Drive - Folders',
    description: 'Google Drive folders',
    generateDork: (domain) => `site:drive.google.com/drive/folders "${domain}"`
  },
  {
    id: 'cloud-storage-onedrive---public',
    category: '☁️ Cloud Storage',
    title: 'OneDrive - Public',
    description: 'Public OneDrive links',
    generateDork: (domain) => `site:1drv.ms "${domain}"`
  },
  {
    id: 'cloud-storage-onedrive---shared',
    category: '☁️ Cloud Storage',
    title: 'OneDrive - Shared',
    description: 'OneDrive shared files',
    generateDork: (domain) => `site:onedrive.live.com "${domain}"`
  },
  {
    id: 'cloud-storage-box---public',
    category: '☁️ Cloud Storage',
    title: 'Box - Public',
    description: 'Box public files',
    generateDork: (domain) => `site:app.box.com "${domain}"`
  },
  {
    id: 'cloud-storage-icloud---public',
    category: '☁️ Cloud Storage',
    title: 'iCloud - Public',
    description: 'iCloud shared files',
    generateDork: (domain) => `site:icloud.com "${domain}"`
  },
  {
    id: 'cloud-storage-aws-cloudfront',
    category: '☁️ Cloud Storage',
    title: 'AWS CloudFront',
    description: 'CloudFront distributions',
    generateDork: (domain) => `site:cloudfront.net "${domain}"`
  },
  {
    id: 'cloud-storage-cloudflare-cdn',
    category: '☁️ Cloud Storage',
    title: 'Cloudflare CDN',
    description: 'Cloudflare CDN files',
    generateDork: (domain) => `site:cloudflarecdn.com "${domain}"`
  },
  {
    id: 'cloud-storage-firebase-storage',
    category: '☁️ Cloud Storage',
    title: 'Firebase Storage',
    description: 'Firebase storage',
    generateDork: (domain) => `site:firebasestorage.googleapis.com "${domain}"`
  },
  {
    id: 'cloud-storage-heroku-assets',
    category: '☁️ Cloud Storage',
    title: 'Heroku Assets',
    description: 'Heroku hosted files',
    generateDork: (domain) => `site:herokuapp.com "${domain}"`
  },
  {
    id: 'cloud-storage-netlify-assets',
    category: '☁️ Cloud Storage',
    title: 'Netlify Assets',
    description: 'Netlify hosted files',
    generateDork: (domain) => `site:netlify.app "${domain}"`
  },
  {
    id: 'cloud-storage-vercel-assets',
    category: '☁️ Cloud Storage',
    title: 'Vercel Assets',
    description: 'Vercel hosted files',
    generateDork: (domain) => `site:vercel.app "${domain}"`
  },
  {
    id: 'cloud-storage-github-pages',
    category: '☁️ Cloud Storage',
    title: 'GitHub Pages',
    description: 'GitHub Pages sites',
    generateDork: (domain) => `site:github.io "${domain}"`
  },
  {
    id: 'cloud-storage-gitlab-pages',
    category: '☁️ Cloud Storage',
    title: 'GitLab Pages',
    description: 'GitLab Pages sites',
    generateDork: (domain) => `site:gitlab.io "${domain}"`
  },
  {
    id: 'cloud-storage-bitbucket-pages',
    category: '☁️ Cloud Storage',
    title: 'Bitbucket Pages',
    description: 'Bitbucket Pages sites',
    generateDork: (domain) => `site:bitbucket.io "${domain}"`
  },
  {
    id: 'cloud-storage-wetransfer-links',
    category: '☁️ Cloud Storage',
    title: 'WeTransfer Links',
    description: 'WeTransfer shared files',
    generateDork: (domain) => `site:wetransfer.com "${domain}"`
  },
  {
    id: 'cloud-storage-meganz-shares',
    category: '☁️ Cloud Storage',
    title: 'Mega.nz Shares',
    description: 'Mega shared files',
    generateDork: (domain) => `site:mega.nz "${domain}"`
  },
  {
    id: 'cloud-storage-mediafire-files',
    category: '☁️ Cloud Storage',
    title: 'MediaFire Files',
    description: 'MediaFire uploads',
    generateDork: (domain) => `site:mediafire.com "${domain}"`
  },
  {
    id: 'cloud-storage-pastebin',
    category: '☁️ Cloud Storage',
    title: 'Pastebin',
    description: 'Pastebin entries',
    generateDork: (domain) => `site:pastebin.com "${domain}"`
  },
  {
    id: 'cloud-storage-github-gists',
    category: '☁️ Cloud Storage',
    title: 'GitHub Gists',
    description: 'GitHub Gist pastes',
    generateDork: (domain) => `site:gist.github.com "${domain}"`
  },
  {
    id: 'cloud-storage-gitlab-snippets',
    category: '☁️ Cloud Storage',
    title: 'GitLab Snippets',
    description: 'GitLab snippets',
    generateDork: (domain) => `site:gitlab.com/snippets "${domain}"`
  },
  {
    id: 'cloud-storage-jsfiddle',
    category: '☁️ Cloud Storage',
    title: 'JSFiddle',
    description: 'JSFiddle code snippets',
    generateDork: (domain) => `site:jsfiddle.net "${domain}"`
  },
  {
    id: 'cloud-storage-codepen',
    category: '☁️ Cloud Storage',
    title: 'CodePen',
    description: 'CodePen code examples',
    generateDork: (domain) => `site:codepen.io "${domain}"`
  },
  {
    id: 'cloud-storage-imgur',
    category: '☁️ Cloud Storage',
    title: 'Imgur',
    description: 'Imgur image uploads',
    generateDork: (domain) => `site:imgur.com "${domain}"`
  },
  {
    id: 'cloud-storage-flickr',
    category: '☁️ Cloud Storage',
    title: 'Flickr',
    description: 'Flickr image hosting',
    generateDork: (domain) => `site:flickr.com "${domain}"`
  },
  {
    id: 'cloud-storage-photobucket',
    category: '☁️ Cloud Storage',
    title: 'Photobucket',
    description: 'Photobucket uploads',
    generateDork: (domain) => `site:photobucket.com "${domain}"`
  },
  {
    id: 'cloud-storage-trello-boards',
    category: '☁️ Cloud Storage',
    title: 'Trello Boards',
    description: 'Public Trello boards',
    generateDork: (domain) => `site:trello.com "${domain}"`
  },
  {
    id: 'cloud-storage-notion-pages',
    category: '☁️ Cloud Storage',
    title: 'Notion Pages',
    description: 'Public Notion pages',
    generateDork: (domain) => `site:notion.site "${domain}"`
  },
  {
    id: 'cloud-storage-airtable',
    category: '☁️ Cloud Storage',
    title: 'Airtable',
    description: 'Airtable shared bases',
    generateDork: (domain) => `site:airtable.com "${domain}"`
  },
  {
    id: 'code-repositories-github---user-repos',
    category: '💻 Code Repositories',
    title: 'GitHub - User Repos',
    description: 'GitHub user repositories',
    generateDork: (domain) => `site:github.com/${domain}`
  },
  {
    id: 'code-repositories-github---search-code',
    category: '💻 Code Repositories',
    title: 'GitHub - Search Code',
    description: 'Search GitHub code',
    generateDork: (domain) => `site:github.com "${domain}" (language:javascript OR language:python OR language:java)`
  },
  {
    id: 'code-repositories-github---api-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - API Keys',
    description: 'GitHub exposed API keys',
    generateDork: (domain) => `site:github.com "${domain}" (api_key OR apikey OR api-key)`
  },
  {
    id: 'code-repositories-github---passwords',
    category: '💻 Code Repositories',
    title: 'GitHub - Passwords',
    description: 'GitHub exposed passwords',
    generateDork: (domain) => `site:github.com "${domain}" (password OR passwd OR pwd)`
  },
  {
    id: 'code-repositories-github---aws-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - AWS Keys',
    description: 'GitHub AWS credentials',
    generateDork: (domain) => `site:github.com "${domain}" (AKIA OR aws_access_key_id)`
  },
  {
    id: 'code-repositories-github---private-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - Private Keys',
    description: 'GitHub private keys',
    generateDork: (domain) => `site:github.com "${domain}" (BEGIN RSA PRIVATE KEY OR BEGIN PRIVATE KEY)`
  },
  {
    id: 'code-repositories-github---database-creds',
    category: '💻 Code Repositories',
    title: 'GitHub - Database Creds',
    description: 'GitHub database credentials',
    generateDork: (domain) => `site:github.com "${domain}" (DB_PASSWORD OR DATABASE_PASSWORD)`
  },
  {
    id: 'code-repositories-github---env-files',
    category: '💻 Code Repositories',
    title: 'GitHub - Env Files',
    description: 'GitHub .env files',
    generateDork: (domain) => `site:github.com "${domain}" filename:.env`
  },
  {
    id: 'code-repositories-github---config-files',
    category: '💻 Code Repositories',
    title: 'GitHub - Config Files',
    description: 'GitHub config files',
    generateDork: (domain) => `site:github.com "${domain}" (filename:config.json OR filename:settings.json)`
  },
  {
    id: 'code-repositories-github---ssh-keys',
    category: '💻 Code Repositories',
    title: 'GitHub - SSH Keys',
    description: 'GitHub SSH keys',
    generateDork: (domain) => `site:github.com "${domain}" (filename:id_rsa OR filename:id_dsa)`
  },
  {
    id: 'code-repositories-github---tokens',
    category: '💻 Code Repositories',
    title: 'GitHub - Tokens',
    description: 'GitHub tokens and secrets',
    generateDork: (domain) => `site:github.com "${domain}" (token OR oauth OR secret)`
  },
  {
    id: 'code-repositories-github---docker-secrets',
    category: '💻 Code Repositories',
    title: 'GitHub - Docker Secrets',
    description: 'GitHub Docker secrets',
    generateDork: (domain) => `site:github.com "${domain}" filename:docker-compose.yml (password OR secret)`
  },
  {
    id: 'code-repositories-github---sql-files',
    category: '💻 Code Repositories',
    title: 'GitHub - SQL Files',
    description: 'GitHub SQL files',
    generateDork: (domain) => `site:github.com "${domain}" ext:sql`
  },
  {
    id: 'code-repositories-github---kubernetes-secrets',
    category: '💻 Code Repositories',
    title: 'GitHub - Kubernetes Secrets',
    description: 'GitHub k8s secrets',
    generateDork: (domain) => `site:github.com "${domain}" (kind:Secret OR apiVersion:v1)`
  },
  {
    id: 'code-repositories-github---terraform',
    category: '💻 Code Repositories',
    title: 'GitHub - Terraform',
    description: 'GitHub Terraform files',
    generateDork: (domain) => `site:github.com "${domain}" (ext:tf OR ext:tfvars)`
  },
  {
    id: 'code-repositories-gitlab---user-repos',
    category: '💻 Code Repositories',
    title: 'GitLab - User Repos',
    description: 'GitLab user repositories',
    generateDork: (domain) => `site:gitlab.com/${domain}`
  },
  {
    id: 'code-repositories-gitlab---code-search',
    category: '💻 Code Repositories',
    title: 'GitLab - Code Search',
    description: 'GitLab code search',
    generateDork: (domain) => `site:gitlab.com "${domain}" (password OR api_key OR secret)`
  },
  {
    id: 'code-repositories-gitlab---credentials',
    category: '💻 Code Repositories',
    title: 'GitLab - Credentials',
    description: 'GitLab credentials',
    generateDork: (domain) => `site:gitlab.com "${domain}" (credentials OR auth OR token)`
  },
  {
    id: 'code-repositories-gitlab---config-files',
    category: '💻 Code Repositories',
    title: 'GitLab - Config Files',
    description: 'GitLab config files',
    generateDork: (domain) => `site:gitlab.com "${domain}" (filename:config OR filename:.env)`
  },
  {
    id: 'code-repositories-gitlab---cicd-variables',
    category: '💻 Code Repositories',
    title: 'GitLab - CI/CD Variables',
    description: 'GitLab CI/CD secrets',
    generateDork: (domain) => `site:gitlab.com "${domain}" filename:.gitlab-ci.yml (variables OR secret)`
  },
  {
    id: 'code-repositories-bitbucket---repos',
    category: '💻 Code Repositories',
    title: 'Bitbucket - Repos',
    description: 'Bitbucket repositories',
    generateDork: (domain) => `site:bitbucket.org/${domain}`
  },
  {
    id: 'code-repositories-bitbucket---code-search',
    category: '💻 Code Repositories',
    title: 'Bitbucket - Code Search',
    description: 'Bitbucket code search',
    generateDork: (domain) => `site:bitbucket.org "${domain}" (password OR api_key)`
  },
  {
    id: 'code-repositories-bitbucket---credentials',
    category: '💻 Code Repositories',
    title: 'Bitbucket - Credentials',
    description: 'Bitbucket credentials',
    generateDork: (domain) => `site:bitbucket.org "${domain}" (credentials OR token OR secret)`
  },
  {
    id: 'code-repositories-sourceforge',
    category: '💻 Code Repositories',
    title: 'SourceForge',
    description: 'SourceForge projects',
    generateDork: (domain) => `site:sourceforge.net "${domain}"`
  },
  {
    id: 'code-repositories-gitea-instances',
    category: '💻 Code Repositories',
    title: 'Gitea Instances',
    description: 'Gitea repositories',
    generateDork: (domain) => `"${domain}" (inurl:/explore/repos OR intitle:"Gitea")`
  },
  {
    id: 'code-repositories-gogs-instances',
    category: '💻 Code Repositories',
    title: 'Gogs Instances',
    description: 'Gogs repositories',
    generateDork: (domain) => `"${domain}" (inurl:/explore/repos OR intitle:"Gogs")`
  },
  {
    id: 'code-repositories-npm-packages',
    category: '💻 Code Repositories',
    title: 'NPM Packages',
    description: 'NPM package registry',
    generateDork: (domain) => `site:npmjs.com "${domain}"`
  },
  {
    id: 'code-repositories-pypi-packages',
    category: '💻 Code Repositories',
    title: 'PyPI Packages',
    description: 'Python package index',
    generateDork: (domain) => `site:pypi.org "${domain}"`
  },
  {
    id: 'code-repositories-rubygems',
    category: '💻 Code Repositories',
    title: 'RubyGems',
    description: 'Ruby gem packages',
    generateDork: (domain) => `site:rubygems.org "${domain}"`
  },
  {
    id: 'code-repositories-nuget-packages',
    category: '💻 Code Repositories',
    title: 'NuGet Packages',
    description: 'NuGet package registry',
    generateDork: (domain) => `site:nuget.org "${domain}"`
  },
  {
    id: 'code-repositories-maven-central',
    category: '💻 Code Repositories',
    title: 'Maven Central',
    description: 'Maven package repository',
    generateDork: (domain) => `site:mvnrepository.com "${domain}"`
  },
  {
    id: 'code-repositories-packagist---php',
    category: '💻 Code Repositories',
    title: 'Packagist - PHP',
    description: 'PHP package registry',
    generateDork: (domain) => `site:packagist.org "${domain}"`
  },
  {
    id: 'code-repositories-cratesio---rust',
    category: '💻 Code Repositories',
    title: 'Crates.io - Rust',
    description: 'Rust package registry',
    generateDork: (domain) => `site:crates.io "${domain}"`
  },
  {
    id: 'code-repositories-go-packages',
    category: '💻 Code Repositories',
    title: 'Go Packages',
    description: 'Go package index',
    generateDork: (domain) => `site:pkg.go.dev "${domain}"`
  },
  {
    id: 'code-repositories-docker-hub',
    category: '💻 Code Repositories',
    title: 'Docker Hub',
    description: 'Docker container images',
    generateDork: (domain) => `site:hub.docker.com "${domain}"`
  },
  {
    id: 'code-repositories-github-container-registry',
    category: '💻 Code Repositories',
    title: 'GitHub Container Registry',
    description: 'GitHub container registry',
    generateDork: (domain) => `site:ghcr.io "${domain}"`
  },
  {
    id: 'code-repositories-stack-overflow-code',
    category: '💻 Code Repositories',
    title: 'Stack Overflow Code',
    description: 'Stack Overflow code snippets',
    generateDork: (domain) => `site:stackoverflow.com "${domain}" (password OR api_key OR credentials)`
  },
  {
    id: 'code-repositories-codeproject',
    category: '💻 Code Repositories',
    title: 'CodeProject',
    description: 'CodeProject articles',
    generateDork: (domain) => `site:codeproject.com "${domain}"`
  },
  {
    id: 'code-repositories-hackerone-reports',
    category: '💻 Code Repositories',
    title: 'HackerOne Reports',
    description: 'HackerOne bug reports',
    generateDork: (domain) => `site:hackerone.com/reports "${domain}"`
  },
  {
    id: 'code-repositories-bugcrowd-disclosures',
    category: '💻 Code Repositories',
    title: 'Bugcrowd Disclosures',
    description: 'Bugcrowd disclosures',
    generateDork: (domain) => `site:bugcrowd.com "${domain}"`
  },
  {
    id: 'code-repositories-exploit-db',
    category: '💻 Code Repositories',
    title: 'Exploit-DB',
    description: 'Exploit database',
    generateDork: (domain) => `site:exploit-db.com "${domain}"`
  },
  {
    id: 'code-repositories-packetstorm-security',
    category: '💻 Code Repositories',
    title: 'PacketStorm Security',
    description: 'PacketStorm exploits',
    generateDork: (domain) => `site:packetstormsecurity.com "${domain}"`
  },
  {
    id: 'code-repositories-cve-details',
    category: '💻 Code Repositories',
    title: 'CVE Details',
    description: 'CVE vulnerability details',
    generateDork: (domain) => `site:cvedetails.com "${domain}"`
  },
  {
    id: 'code-repositories-nvd-database',
    category: '💻 Code Repositories',
    title: 'NVD Database',
    description: 'National Vulnerability Database',
    generateDork: (domain) => `site:nvd.nist.gov "${domain}"`
  },
  {
    id: 'code-repositories-security-focus',
    category: '💻 Code Repositories',
    title: 'Security Focus',
    description: 'SecurityFocus vulnerabilities',
    generateDork: (domain) => `site:securityfocus.com "${domain}"`
  },
  {
    id: 'code-repositories-github-security-advisories',
    category: '💻 Code Repositories',
    title: 'GitHub Security Advisories',
    description: 'GitHub security advisories',
    generateDork: (domain) => `site:github.com/advisories "${domain}"`
  },
  {
    id: 'code-repositories-snyk-vulnerabilities',
    category: '💻 Code Repositories',
    title: 'Snyk Vulnerabilities',
    description: 'Snyk vulnerability database',
    generateDork: (domain) => `site:snyk.io/vuln "${domain}"`
  },
  {
    id: 'code-repositories-oss-index',
    category: '💻 Code Repositories',
    title: 'OSS Index',
    description: 'Open source security index',
    generateDork: (domain) => `site:ossindex.sonatype.org "${domain}"`
  },
  {
    id: 'code-repositories-github-trending',
    category: '💻 Code Repositories',
    title: 'GitHub Trending',
    description: 'GitHub trending repos',
    generateDork: (domain) => `site:github.com/trending "${domain}"`
  },
  {
    id: 'code-repositories-github-topics',
    category: '💻 Code Repositories',
    title: 'GitHub Topics',
    description: 'GitHub topic collections',
    generateDork: (domain) => `site:github.com/topics "${domain}"`
  },
  {
    id: 'company-research-linkedin-company-page',
    category: '🏢 Company Research',
    title: 'LinkedIn Company Page',
    description: 'Official company LinkedIn',
    generateDork: (domain) => `"${domain}" site:linkedin.com/company`
  },
  {
    id: 'company-research-linkedin-employees',
    category: '🏢 Company Research',
    title: 'LinkedIn Employees',
    description: 'Find company employees',
    generateDork: (domain) => `"${domain}" site:linkedin.com (employees OR works at OR currently)`
  },
  {
    id: 'company-research-executive-team',
    category: '🏢 Company Research',
    title: 'Executive Team',
    description: 'C-level executives',
    generateDork: (domain) => `"${domain}" (CEO OR CTO OR CFO OR founder OR executive) site:linkedin.com`
  },
  {
    id: 'company-research-employee-count',
    category: '🏢 Company Research',
    title: 'Employee Count',
    description: 'Company size information',
    generateDork: (domain) => `"${domain}" site:linkedin.com employees (100-500 OR 500-1000 OR 1000-5000)`
  },
  {
    id: 'company-research-job-postings---all',
    category: '🏢 Company Research',
    title: 'Job Postings - All',
    description: 'All job platforms',
    generateDork: (domain) => `"${domain}" (site:indeed.com OR site:glassdoor.com OR site:linkedin.com/jobs)`
  },
  {
    id: 'company-research-developer-jobs',
    category: '🏢 Company Research',
    title: 'Developer Jobs',
    description: 'Tech hiring activity',
    generateDork: (domain) => `"${domain}" (engineer OR developer OR programmer) (site:linkedin.com/jobs OR site:indeed.com)`
  },
  {
    id: 'company-research-security-jobs',
    category: '🏢 Company Research',
    title: 'Security Jobs',
    description: 'Security team hiring',
    generateDork: (domain) => `"${domain}" (security OR infosec OR cybersecurity) (site:linkedin.com/jobs OR site:indeed.com)`
  },
  {
    id: 'company-research-company-reviews',
    category: '🏢 Company Research',
    title: 'Company Reviews',
    description: 'Employee reviews',
    generateDork: (domain) => `"${domain}" site:glassdoor.com reviews`
  },
  {
    id: 'company-research-salary-information',
    category: '🏢 Company Research',
    title: 'Salary Information',
    description: 'Salary ranges',
    generateDork: (domain) => `"${domain}" site:glassdoor.com salaries`
  },
  {
    id: 'company-research-interview-reviews',
    category: '🏢 Company Research',
    title: 'Interview Reviews',
    description: 'Interview experiences',
    generateDork: (domain) => `"${domain}" site:glassdoor.com interviews`
  },
  {
    id: 'company-research-press-releases',
    category: '🏢 Company Research',
    title: 'Press Releases',
    description: 'Company announcements',
    generateDork: (domain) => `"${domain}" ("press release" OR "announces" OR "launches")`
  },
  {
    id: 'company-research-news-articles',
    category: '🏢 Company Research',
    title: 'News Articles',
    description: 'Media coverage',
    generateDork: (domain) => `"${domain}" site:techcrunch.com OR site:bloomberg.com OR site:reuters.com`
  },
  {
    id: 'company-research-financial-reports',
    category: '🏢 Company Research',
    title: 'Financial Reports',
    description: 'Financial documents',
    generateDork: (domain) => `"${domain}" filetype:pdf ("annual report" OR "quarterly report" OR "10-K" OR "10-Q")`
  },
  {
    id: 'company-research-sec-filings',
    category: '🏢 Company Research',
    title: 'SEC Filings',
    description: 'SEC regulatory filings',
    generateDork: (domain) => `"${domain}" site:sec.gov`
  },
  {
    id: 'company-research-patents',
    category: '🏢 Company Research',
    title: 'Patents',
    description: 'Patent portfolio',
    generateDork: (domain) => `"${domain}" site:patents.google.com`
  },
  {
    id: 'company-research-trademark-search',
    category: '🏢 Company Research',
    title: 'Trademark Search',
    description: 'Trademark registrations',
    generateDork: (domain) => `"${domain}" site:uspto.gov trademarks`
  },
  {
    id: 'company-research-acquisitions',
    category: '🏢 Company Research',
    title: 'Acquisitions',
    description: 'M&A activity',
    generateDork: (domain) => `"${domain}" ("acquired" OR "acquisition" OR "acquires" OR "buys")`
  },
  {
    id: 'company-research-funding-rounds',
    category: '🏢 Company Research',
    title: 'Funding Rounds',
    description: 'Venture funding',
    generateDork: (domain) => `"${domain}" ("series A" OR "series B" OR "series C" OR "funding" OR "investment")`
  },
  {
    id: 'company-research-investors',
    category: '🏢 Company Research',
    title: 'Investors',
    description: 'Investor information',
    generateDork: (domain) => `"${domain}" site:crunchbase.com OR site:pitchbook.com`
  },
  {
    id: 'company-research-technology-stack',
    category: '🏢 Company Research',
    title: 'Technology Stack',
    description: 'Tech stack details',
    generateDork: (domain) => `"${domain}" site:stackshare.io`
  },
  {
    id: 'company-research-website-technology',
    category: '🏢 Company Research',
    title: 'Website Technology',
    description: 'Website tech analysis',
    generateDork: (domain) => `"${domain}" site:builtwith.com`
  },
  {
    id: 'company-research-github-repos',
    category: '🏢 Company Research',
    title: 'GitHub Repos',
    description: 'Open source projects',
    generateDork: (domain) => `"${domain}" site:github.com`
  },
  {
    id: 'company-research-code-repositories',
    category: '🏢 Company Research',
    title: 'Code Repositories',
    description: 'All code repositories',
    generateDork: (domain) => `"${domain}" (site:github.com OR site:gitlab.com OR site:bitbucket.org)`
  },
  {
    id: 'company-research-api-documentation',
    category: '🏢 Company Research',
    title: 'API Documentation',
    description: 'API resources',
    generateDork: (domain) => `"${domain}" ("api documentation" OR "api docs" OR "developer docs")`
  },
  {
    id: 'company-research-bug-bounty-program',
    category: '🏢 Company Research',
    title: 'Bug Bounty Program',
    description: 'Bug bounty info',
    generateDork: (domain) => `"${domain}" ("bug bounty" OR "security researcher" OR "responsible disclosure")`
  },
  {
    id: 'company-research-security-policy',
    category: '🏢 Company Research',
    title: 'Security Policy',
    description: 'Security disclosure policy',
    generateDork: (domain) => `"${domain}" ("security policy" OR "security.txt" OR "/.well-known/security.txt")`
  },
  {
    id: 'company-research-data-breaches',
    category: '🏢 Company Research',
    title: 'Data Breaches',
    description: 'Security incidents',
    generateDork: (domain) => `"${domain}" ("data breach" OR "security incident" OR "hacked" OR "compromised")`
  },
  {
    id: 'company-research-cve-vulnerabilities',
    category: '🏢 Company Research',
    title: 'CVE Vulnerabilities',
    description: 'Known vulnerabilities',
    generateDork: (domain) => `"${domain}" (CVE OR vulnerability OR "security advisory")`
  },
  {
    id: 'company-research-shodan-results',
    category: '🏢 Company Research',
    title: 'Shodan Results',
    description: 'Shodan IoT search',
    generateDork: (domain) => `"${domain}" site:shodan.io`
  },
  {
    id: 'company-research-censys-results',
    category: '🏢 Company Research',
    title: 'Censys Results',
    description: 'Censys internet scan',
    generateDork: (domain) => `"${domain}" site:censys.io`
  },
  {
    id: 'company-research-ip-ranges',
    category: '🏢 Company Research',
    title: 'IP Ranges',
    description: 'Network infrastructure',
    generateDork: (domain) => `"${domain}" ("ip range" OR "netblock" OR "ASN")`
  },
  {
    id: 'company-research-subdomains',
    category: '🏢 Company Research',
    title: 'Subdomains',
    description: 'All subdomains',
    generateDork: (domain) => `site:*.${domain}`
  },
  {
    id: 'company-research-ssl-certificates',
    category: '🏢 Company Research',
    title: 'SSL Certificates',
    description: 'SSL cert transparency',
    generateDork: (domain) => `"${domain}" site:crt.sh`
  },
  {
    id: 'company-research-dns-records',
    category: '🏢 Company Research',
    title: 'DNS Records',
    description: 'DNS information',
    generateDork: (domain) => `"${domain}" ("dns" OR "nameserver" OR "mx record")`
  },
  {
    id: 'company-research-whois-information',
    category: '🏢 Company Research',
    title: 'Whois Information',
    description: 'Domain registration',
    generateDork: (domain) => `"${domain}" site:whois.com OR site:domaintools.com`
  },
  {
    id: 'company-research-partnerships',
    category: '🏢 Company Research',
    title: 'Partnerships',
    description: 'Business partnerships',
    generateDork: (domain) => `"${domain}" ("partners with" OR "partnership" OR "collaboration")`
  },
  {
    id: 'company-research-competitors',
    category: '🏢 Company Research',
    title: 'Competitors',
    description: 'Competitive analysis',
    generateDork: (domain) => `"${domain}" ("competitor" OR "alternative" OR "vs")`
  },
  {
    id: 'company-research-customer-reviews',
    category: '🏢 Company Research',
    title: 'Customer Reviews',
    description: 'Product reviews',
    generateDork: (domain) => `"${domain}" (site:g2.com OR site:trustpilot.com OR site:capterra.com)`
  },
  {
    id: 'company-research-social-media',
    category: '🏢 Company Research',
    title: 'Social Media',
    description: 'Social presence',
    generateDork: (domain) => `"${domain}" (site:twitter.com OR site:facebook.com OR site:instagram.com)`
  },
  {
    id: 'company-research-youtube-channel',
    category: '🏢 Company Research',
    title: 'YouTube Channel',
    description: 'Video content',
    generateDork: (domain) => `"${domain}" site:youtube.com`
  },
  {
    id: 'company-research-twitterx-account',
    category: '🏢 Company Research',
    title: 'Twitter/X Account',
    description: 'Social media presence',
    generateDork: (domain) => `"${domain}" site:twitter.com OR site:x.com`
  },
  {
    id: 'company-research-facebook-page',
    category: '🏢 Company Research',
    title: 'Facebook Page',
    description: 'Facebook company page',
    generateDork: (domain) => `"${domain}" site:facebook.com`
  },
  {
    id: 'company-research-instagram-account',
    category: '🏢 Company Research',
    title: 'Instagram Account',
    description: 'Instagram presence',
    generateDork: (domain) => `"${domain}" site:instagram.com`
  },
  {
    id: 'company-research-reddit-mentions',
    category: '🏢 Company Research',
    title: 'Reddit Mentions',
    description: 'Reddit discussions',
    generateDork: (domain) => `"${domain}" site:reddit.com`
  },
  {
    id: 'company-research-hackernews-mentions',
    category: '🏢 Company Research',
    title: 'HackerNews Mentions',
    description: 'HackerNews coverage',
    generateDork: (domain) => `"${domain}" site:news.ycombinator.com`
  },
  {
    id: 'company-research-product-hunt',
    category: '🏢 Company Research',
    title: 'Product Hunt',
    description: 'Product Hunt listings',
    generateDork: (domain) => `"${domain}" site:producthunt.com`
  },
  {
    id: 'company-research-alternativeto',
    category: '🏢 Company Research',
    title: 'AlternativeTo',
    description: 'Product alternatives',
    generateDork: (domain) => `"${domain}" site:alternativeto.net`
  },
  {
    id: 'company-research-wayback-machine',
    category: '🏢 Company Research',
    title: 'Wayback Machine',
    description: 'Historical snapshots',
    generateDork: (domain) => `"${domain}" site:web.archive.org`
  },
  {
    id: 'company-research-legal-documents',
    category: '🏢 Company Research',
    title: 'Legal Documents',
    description: 'Legal documentation',
    generateDork: (domain) => `"${domain}" (filetype:pdf OR filetype:doc) (legal OR terms OR privacy OR agreement)`
  },
  {
    id: 'company-research-contact-information',
    category: '🏢 Company Research',
    title: 'Contact Information',
    description: 'Company contact details',
    generateDork: (domain) => `"${domain}" (contact OR email OR phone OR address)`
  },
  {
    id: 'files-all-documents-2',
    category: '📄 Files',
    title: 'All Documents',
    description: 'All document types',
    generateDork: (domain) => `site:${domain} (ext:doc OR ext:docx OR ext:odt OR ext:pdf OR ext:rtf OR ext:txt)`
  },
  {
    id: 'files-all-spreadsheets-2',
    category: '📄 Files',
    title: 'All Spreadsheets',
    description: 'All spreadsheet formats',
    generateDork: (domain) => `site:${domain} (ext:xls OR ext:xlsx OR ext:csv OR ext:ods)`
  },
  {
    id: 'files-all-presentations-2',
    category: '📄 Files',
    title: 'All Presentations',
    description: 'All presentation files',
    generateDork: (domain) => `site:${domain} (ext:ppt OR ext:pptx OR ext:odp)`
  },
  {
    id: 'files-configuration-files',
    category: '📄 Files',
    title: 'Configuration Files',
    description: 'Config and settings files',
    generateDork: (domain) => `site:${domain} (ext:conf OR ext:config OR ext:cfg OR ext:ini OR ext:env)`
  },
  {
    id: 'files-database-files',
    category: '📄 Files',
    title: 'Database Files',
    description: 'Database dump files',
    generateDork: (domain) => `site:${domain} (ext:sql OR ext:db OR ext:sqlite OR ext:mdb OR ext:accdb)`
  },
  {
    id: 'files-backup-archives-2',
    category: '📄 Files',
    title: 'Backup Archives',
    description: 'Backup file extensions',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:backup OR ext:old OR ext:save OR ext:~)`
  },
  {
    id: 'files-compressed-archives',
    category: '📄 Files',
    title: 'Compressed Archives',
    description: 'All archive formats',
    generateDork: (domain) => `site:${domain} (ext:zip OR ext:rar OR ext:tar OR ext:gz OR ext:7z OR ext:bz2)`
  },
  {
    id: 'files-log-files',
    category: '📄 Files',
    title: 'Log Files',
    description: 'System and app logs',
    generateDork: (domain) => `site:${domain} (ext:log OR ext:logs OR ext:out)`
  },
  {
    id: 'files-code---web',
    category: '📄 Files',
    title: 'Code - Web',
    description: 'Web development files',
    generateDork: (domain) => `site:${domain} (ext:php OR ext:asp OR ext:aspx OR ext:jsp OR ext:js OR ext:html)`
  },
  {
    id: 'files-code---backend',
    category: '📄 Files',
    title: 'Code - Backend',
    description: 'Backend source code',
    generateDork: (domain) => `site:${domain} (ext:py OR ext:java OR ext:rb OR ext:go OR ext:cs OR ext:cpp)`
  },
  {
    id: 'files-data-formats-2',
    category: '📄 Files',
    title: 'Data Formats',
    description: 'Structured data files',
    generateDork: (domain) => `site:${domain} (ext:json OR ext:xml OR ext:yaml OR ext:yml OR ext:toml)`
  },
  {
    id: 'files-shell-scripts-2',
    category: '📄 Files',
    title: 'Shell Scripts',
    description: 'Executable scripts',
    generateDork: (domain) => `site:${domain} (ext:sh OR ext:bash OR ext:bat OR ext:cmd OR ext:ps1)`
  },
  {
    id: 'files-key-files-2',
    category: '📄 Files',
    title: 'Key Files',
    description: 'Certificates and keys',
    generateDork: (domain) => `site:${domain} (ext:pem OR ext:key OR ext:crt OR ext:cer OR ext:p12 OR ext:pfx)`
  },
  {
    id: 'files-source-control-2',
    category: '📄 Files',
    title: 'Source Control',
    description: 'Version control files',
    generateDork: (domain) => `site:${domain} (ext:git OR inurl:.git OR inurl:.svn OR ext:gitignore)`
  },
  {
    id: 'files-credentials-files',
    category: '📄 Files',
    title: 'Credentials Files',
    description: 'Files with credential names',
    generateDork: (domain) => `site:${domain} (filename:credentials OR filename:password OR filename:passwords)`
  },
  {
    id: 'files-sensitive-docs-2',
    category: '📄 Files',
    title: 'Sensitive Docs',
    description: 'Confidential PDF documents',
    generateDork: (domain) => `site:${domain} ext:pdf (confidential OR internal OR private OR secret)`
  },
  {
    id: 'files-financial-docs-2',
    category: '📄 Files',
    title: 'Financial Docs',
    description: 'Financial spreadsheets',
    generateDork: (domain) => `site:${domain} (ext:xls OR ext:xlsx) (invoice OR payment OR salary OR budget)`
  },
  {
    id: 'files-email-archives-2',
    category: '📄 Files',
    title: 'Email Archives',
    description: 'Email data files',
    generateDork: (domain) => `site:${domain} (ext:pst OR ext:ost OR ext:mbox OR ext:eml OR ext:msg)`
  },
  {
    id: 'files-docker-files',
    category: '📄 Files',
    title: 'Docker Files',
    description: 'Docker configuration',
    generateDork: (domain) => `site:${domain} (filename:dockerfile OR filename:docker-compose)`
  },
  {
    id: 'files-cicd-configs',
    category: '📄 Files',
    title: 'CI/CD Configs',
    description: 'CI/CD pipeline files',
    generateDork: (domain) => `site:${domain} (filename:.gitlab-ci OR filename:.travis.yml OR filename:jenkinsfile)`
  },
  {
    id: 'files-package-managers-2',
    category: '📄 Files',
    title: 'Package Managers',
    description: 'Dependency files',
    generateDork: (domain) => `site:${domain} (filename:package.json OR filename:composer.json OR filename:requirements.txt OR filename:gemfile)`
  },
  {
    id: 'files-ssh-config-2',
    category: '📄 Files',
    title: 'SSH Config',
    description: 'SSH configuration files',
    generateDork: (domain) => `site:${domain} (filename:id_rsa OR filename:id_dsa OR filename:authorized_keys OR filename:known_hosts)`
  },
  {
    id: 'files-aws-config-2',
    category: '📄 Files',
    title: 'AWS Config',
    description: 'AWS credential files',
    generateDork: (domain) => `site:${domain} (filename:credentials OR filename:config) (aws OR amazon)`
  },
  {
    id: 'files-api-specs-2',
    category: '📄 Files',
    title: 'API Specs',
    description: 'API documentation files',
    generateDork: (domain) => `site:${domain} (filename:swagger OR filename:openapi OR ext:wadl OR ext:wsdl)`
  },
  {
    id: 'files-temp-files',
    category: '📄 Files',
    title: 'Temp Files',
    description: 'Temporary files',
    generateDork: (domain) => `site:${domain} (ext:tmp OR ext:temp OR ext:swp OR ext:cache)`
  },
  {
    id: 'files-memory-dumps-2',
    category: '📄 Files',
    title: 'Memory Dumps',
    description: 'Memory dump files',
    generateDork: (domain) => `site:${domain} (ext:dmp OR ext:dump OR ext:core)`
  },
  {
    id: 'files-password-lists-2',
    category: '📄 Files',
    title: 'Password Lists',
    description: 'Password list files',
    generateDork: (domain) => `site:${domain} ext:txt (password OR passwords OR passwd) (list OR dump)`
  },
  {
    id: 'files-kubernetes-configs',
    category: '📄 Files',
    title: 'Kubernetes Configs',
    description: 'Kubernetes configuration',
    generateDork: (domain) => `site:${domain} (ext:yaml OR ext:yml) (kubernetes OR k8s OR kubectl)`
  },
  {
    id: 'files-terraform-files',
    category: '📄 Files',
    title: 'Terraform Files',
    description: 'Terraform IaC files',
    generateDork: (domain) => `site:${domain} (ext:tf OR ext:tfvars OR ext:tfstate)`
  },
  {
    id: 'files-ansible-playbooks',
    category: '📄 Files',
    title: 'Ansible Playbooks',
    description: 'Ansible automation files',
    generateDork: (domain) => `site:${domain} (ext:yaml OR ext:yml) (ansible OR playbook)`
  },
  {
    id: 'files-vpn-configs',
    category: '📄 Files',
    title: 'VPN Configs',
    description: 'VPN configuration files',
    generateDork: (domain) => `site:${domain} (ext:ovpn OR ext:conf) (vpn OR openvpn)`
  },
  {
    id: 'files-database-dumps',
    category: '📄 Files',
    title: 'Database Dumps',
    description: 'SQL database backups',
    generateDork: (domain) => `site:${domain} ext:sql (dump OR backup) (database OR db)`
  },
  {
    id: 'files-phpinfo-files',
    category: '📄 Files',
    title: 'PHPInfo Files',
    description: 'PHP info disclosure',
    generateDork: (domain) => `site:${domain} ext:php (phpinfo OR php_info)`
  },
  {
    id: 'files-env-files',
    category: '📄 Files',
    title: 'Env Files',
    description: 'Environment variable files',
    generateDork: (domain) => `site:${domain} (filename:.env OR filename:.env.local OR filename:.env.production)`
  },
  {
    id: 'files-htaccess-files',
    category: '📄 Files',
    title: 'Htaccess Files',
    description: 'Apache config files',
    generateDork: (domain) => `site:${domain} (filename:.htaccess OR filename:.htpasswd)`
  },
  {
    id: 'files-nginx-configs',
    category: '📄 Files',
    title: 'Nginx Configs',
    description: 'Nginx configuration',
    generateDork: (domain) => `site:${domain} (filename:nginx.conf OR ext:conf) nginx`
  },
  {
    id: 'files-php-configs',
    category: '📄 Files',
    title: 'PHP Configs',
    description: 'PHP configuration files',
    generateDork: (domain) => `site:${domain} (filename:php.ini OR filename:php.conf)`
  },
  {
    id: 'files-web-shells',
    category: '📄 Files',
    title: 'Web Shells',
    description: 'Potential web shells',
    generateDork: (domain) => `site:${domain} (ext:php OR ext:asp) (shell OR cmd OR c99 OR r57 OR webshell)`
  },
  {
    id: 'files-source-maps',
    category: '📄 Files',
    title: 'Source Maps',
    description: 'JavaScript source maps',
    generateDork: (domain) => `site:${domain} ext:map (sourceMappingURL OR sourceMap)`
  },
  {
    id: 'files-graphql-schemas',
    category: '📄 Files',
    title: 'GraphQL Schemas',
    description: 'GraphQL schema files',
    generateDork: (domain) => `site:${domain} (ext:graphql OR ext:gql OR filename:schema.graphql)`
  },
  {
    id: 'files-redis-configs',
    category: '📄 Files',
    title: 'Redis Configs',
    description: 'Redis configuration files',
    generateDork: (domain) => `site:${domain} (filename:redis.conf OR filename:redis-cli)`
  },
  {
    id: 'files-mongodb-configs',
    category: '📄 Files',
    title: 'MongoDB Configs',
    description: 'MongoDB configuration',
    generateDork: (domain) => `site:${domain} (filename:mongod.conf OR filename:mongo.conf)`
  },
  {
    id: 'files-private-keys',
    category: '📄 Files',
    title: 'Private Keys',
    description: 'Private key files',
    generateDork: (domain) => `site:${domain} (ext:key OR ext:pem) (private OR rsa OR dsa OR ecdsa)`
  },
  {
    id: 'files-jwt-secrets',
    category: '📄 Files',
    title: 'JWT Secrets',
    description: 'JWT secret keys',
    generateDork: (domain) => `site:${domain} (jwt OR token) (secret OR key OR signing)`
  },
  {
    id: 'files-postman-collections',
    category: '📄 Files',
    title: 'Postman Collections',
    description: 'Postman API collections',
    generateDork: (domain) => `site:${domain} ext:json (postman OR collection) (api OR endpoint)`
  },
  {
    id: 'files-insomnia-configs',
    category: '📄 Files',
    title: 'Insomnia Configs',
    description: 'Insomnia API workspace',
    generateDork: (domain) => `site:${domain} (filename:insomnia OR filename:workspace) ext:json`
  },
  {
    id: 'files-core-dumps',
    category: '📄 Files',
    title: 'Core Dumps',
    description: 'Application crash dumps',
    generateDork: (domain) => `site:${domain} (ext:core OR filename:core.dump OR ext:mdmp)`
  },
  {
    id: 'files-selenium-tests',
    category: '📄 Files',
    title: 'Selenium Tests',
    description: 'Selenium test files',
    generateDork: (domain) => `site:${domain} (ext:py OR ext:js) (selenium OR webdriver OR test)`
  },
  {
    id: 'files-webpack-configs',
    category: '📄 Files',
    title: 'Webpack Configs',
    description: 'Webpack build configs',
    generateDork: (domain) => `site:${domain} (filename:webpack.config OR filename:webpack.prod)`
  },
  {
    id: 'files-procfiles',
    category: '📄 Files',
    title: 'Procfiles',
    description: 'Heroku process files',
    generateDork: (domain) => `site:${domain} (filename:Procfile OR filename:procfile)`
  },
  {
    id: 'files-makefile-configs',
    category: '📄 Files',
    title: 'Makefile Configs',
    description: 'Build automation files',
    generateDork: (domain) => `site:${domain} (filename:Makefile OR filename:makefile)`
  },
  {
    id: 'iot-devices-webcams---generic',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Generic',
    description: 'Generic webcam interfaces',
    generateDork: (domain) => `site:${domain} (inurl:"/view/index.shtml" OR inurl:"/view.shtml")`
  },
  {
    id: 'iot-devices-webcams---axis',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Axis',
    description: 'Axis camera systems',
    generateDork: (domain) => `site:${domain} (inurl:"/axis-cgi/mjpg" OR intitle:"AXIS")`
  },
  {
    id: 'iot-devices-webcams---panasonic',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Panasonic',
    description: 'Panasonic cameras',
    generateDork: (domain) => `site:${domain} (inurl:"ViewerFrame?Mode=" OR intitle:"Panasonic")`
  },
  {
    id: 'iot-devices-webcams---mobotix',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Mobotix',
    description: 'Mobotix camera systems',
    generateDork: (domain) => `site:${domain} (inurl:"/control/userimage.html" OR intitle:"MOBOTIX")`
  },
  {
    id: 'iot-devices-webcams---canon',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Canon',
    description: 'Canon network cameras',
    generateDork: (domain) => `site:${domain} (inurl:"/view/viewer_index.shtml" OR intitle:"Canon")`
  },
  {
    id: 'iot-devices-webcams---sony',
    category: '📡 IoT & Smart Devices',
    title: 'Webcams - Sony',
    description: 'Sony network cameras',
    generateDork: (domain) => `site:${domain} (inurl:"/command/inquiry.cgi" OR intitle:"Sony")`
  },
  {
    id: 'iot-devices-ip-cameras---all',
    category: '📡 IoT & Smart Devices',
    title: 'IP Cameras - All',
    description: 'All IP camera systems',
    generateDork: (domain) => `site:${domain} (intitle:"Network Camera" OR intitle:"IP Camera" OR intitle:"webcam")`
  },
  {
    id: 'iot-devices-dvr-systems',
    category: '📡 IoT & Smart Devices',
    title: 'DVR Systems',
    description: 'DVR systems',
    generateDork: (domain) => `site:${domain} (inurl:"/view/viewer_index.shtml" OR intitle:"DVR" OR intitle:"Digital Video Recorder")`
  },
  {
    id: 'iot-devices-nvr-systems',
    category: '📡 IoT & Smart Devices',
    title: 'NVR Systems',
    description: 'Network video recorders',
    generateDork: (domain) => `site:${domain} (intitle:"NVR" OR intitle:"Network Video Recorder")`
  },
  {
    id: 'iot-devices-security-systems',
    category: '📡 IoT & Smart Devices',
    title: 'Security Systems',
    description: 'Security alarm systems',
    generateDork: (domain) => `site:${domain} (intitle:"Security System" OR intitle:"Alarm System")`
  },
  {
    id: 'iot-devices-building-management',
    category: '📡 IoT & Smart Devices',
    title: 'Building Management',
    description: 'Building management systems',
    generateDork: (domain) => `site:${domain} (intitle:"Building Management" OR intitle:"BMS")`
  },
  {
    id: 'iot-devices-hvac-systems',
    category: '📡 IoT & Smart Devices',
    title: 'HVAC Systems',
    description: 'HVAC control systems',
    generateDork: (domain) => `site:${domain} (intitle:"HVAC" OR intitle:"Climate Control")`
  },
  {
    id: 'iot-devices-printers---all',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - All',
    description: 'Network printers',
    generateDork: (domain) => `site:${domain} (intitle:"Printer" OR inurl:"/printer" OR inurl:"/web/guest")`
  },
  {
    id: 'iot-devices-printers---hp',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - HP',
    description: 'HP network printers',
    generateDork: (domain) => `site:${domain} (inurl:"/hp/device/" OR intitle:"HP LaserJet" OR intitle:"HP Printer")`
  },
  {
    id: 'iot-devices-printers---canon',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - Canon',
    description: 'Canon network printers',
    generateDork: (domain) => `site:${domain} (inurl:"/catwalk/" OR intitle:"Canon")`
  },
  {
    id: 'iot-devices-printers---xerox',
    category: '📡 IoT & Smart Devices',
    title: 'Printers - Xerox',
    description: 'Xerox network printers',
    generateDork: (domain) => `site:${domain} (inurl:"/properties/" OR intitle:"Xerox")`
  },
  {
    id: 'iot-devices-routers---generic',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Generic',
    description: 'Generic router interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"Router" OR inurl:"/cgi-bin/" OR intitle:"Gateway")`
  },
  {
    id: 'iot-devices-routers---cisco',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Cisco',
    description: 'Cisco router management',
    generateDork: (domain) => `site:${domain} (intitle:"Cisco" OR inurl:"/level/15/")`
  },
  {
    id: 'iot-devices-routers---mikrotik',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - MikroTik',
    description: 'MikroTik routers',
    generateDork: (domain) => `site:${domain} (intitle:"RouterOS" OR intitle:"MikroTik")`
  },
  {
    id: 'iot-devices-routers---ubiquiti',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Ubiquiti',
    description: 'Ubiquiti routers',
    generateDork: (domain) => `site:${domain} (intitle:"UniFi" OR intitle:"EdgeRouter")`
  },
  {
    id: 'iot-devices-routers---netgear',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - Netgear',
    description: 'Netgear router interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"NETGEAR" OR inurl:"/index.htm")`
  },
  {
    id: 'iot-devices-routers---tp-link',
    category: '📡 IoT & Smart Devices',
    title: 'Routers - TP-Link',
    description: 'TP-Link routers',
    generateDork: (domain) => `site:${domain} (intitle:"TP-LINK" OR inurl:"/userRpm/")`
  },
  {
    id: 'iot-devices-firewalls---pfsense',
    category: '📡 IoT & Smart Devices',
    title: 'Firewalls - pfSense',
    description: 'pfSense firewalls',
    generateDork: (domain) => `site:${domain} (intitle:"pfSense" OR inurl:"/index.php?zone=")`
  },
  {
    id: 'iot-devices-firewalls---sonicwall',
    category: '📡 IoT & Smart Devices',
    title: 'Firewalls - SonicWall',
    description: 'SonicWall firewalls',
    generateDork: (domain) => `site:${domain} (intitle:"SonicWall" OR inurl:"/auth.html")`
  },
  {
    id: 'iot-devices-firewalls---fortinet',
    category: '📡 IoT & Smart Devices',
    title: 'Firewalls - Fortinet',
    description: 'Fortinet FortiGate',
    generateDork: (domain) => `site:${domain} (intitle:"FortiGate" OR intitle:"Fortinet")`
  },
  {
    id: 'iot-devices-nas-devices',
    category: '📡 IoT & Smart Devices',
    title: 'NAS Devices',
    description: 'NAS storage devices',
    generateDork: (domain) => `site:${domain} (intitle:"NAS" OR intitle:"Network Attached Storage")`
  },
  {
    id: 'iot-devices-nas---synology',
    category: '📡 IoT & Smart Devices',
    title: 'NAS - Synology',
    description: 'Synology NAS',
    generateDork: (domain) => `site:${domain} (intitle:"Synology" OR inurl:":5000" OR inurl:":5001")`
  },
  {
    id: 'iot-devices-nas---qnap',
    category: '📡 IoT & Smart Devices',
    title: 'NAS - QNAP',
    description: 'QNAP NAS',
    generateDork: (domain) => `site:${domain} (intitle:"QNAP" OR inurl:"/cgi-bin/")`
  },
  {
    id: 'iot-devices-smart-tvs',
    category: '📡 IoT & Smart Devices',
    title: 'Smart TVs',
    description: 'Smart TV interfaces',
    generateDork: (domain) => `site:${domain} (intitle:"Smart TV" OR intitle:"Android TV")`
  },
  {
    id: 'iot-devices-smart-speakers',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Speakers',
    description: 'Smart speaker systems',
    generateDork: (domain) => `site:${domain} (intitle:"Alexa" OR intitle:"Google Home" OR intitle:"Smart Speaker")`
  },
  {
    id: 'iot-devices-smart-lights',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Lights',
    description: 'Smart lighting systems',
    generateDork: (domain) => `site:${domain} (intitle:"Philips Hue" OR intitle:"Smart Lighting")`
  },
  {
    id: 'iot-devices-smart-thermostats',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Thermostats',
    description: 'Smart thermostat systems',
    generateDork: (domain) => `site:${domain} (intitle:"Nest" OR intitle:"Ecobee" OR intitle:"Smart Thermostat")`
  },
  {
    id: 'iot-devices-smart-locks',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Locks',
    description: 'Smart lock systems',
    generateDork: (domain) => `site:${domain} (intitle:"Smart Lock" OR intitle:"August" OR intitle:"Yale Lock")`
  },
  {
    id: 'iot-devices-smart-doorbells',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Doorbells',
    description: 'Smart doorbell systems',
    generateDork: (domain) => `site:${domain} (intitle:"Ring" OR intitle:"Video Doorbell")`
  },
  {
    id: 'iot-devices-industrial-control',
    category: '📡 IoT & Smart Devices',
    title: 'Industrial Control',
    description: 'Industrial control systems',
    generateDork: (domain) => `site:${domain} (intitle:"SCADA" OR intitle:"HMI" OR intitle:"PLC")`
  },
  {
    id: 'iot-devices-water-treatment',
    category: '📡 IoT & Smart Devices',
    title: 'Water Treatment',
    description: 'Water treatment systems',
    generateDork: (domain) => `site:${domain} (intitle:"Water" AND intitle:"Control")`
  },
  {
    id: 'iot-devices-power-systems',
    category: '📡 IoT & Smart Devices',
    title: 'Power Systems',
    description: 'Power management systems',
    generateDork: (domain) => `site:${domain} (intitle:"Power" OR intitle:"UPS" OR intitle:"Generator")`
  },
  {
    id: 'iot-devices-solar-panels',
    category: '📡 IoT & Smart Devices',
    title: 'Solar Panels',
    description: 'Solar panel systems',
    generateDork: (domain) => `site:${domain} (intitle:"Solar" OR intitle:"Inverter" OR intitle:"Photovoltaic")`
  },
  {
    id: 'iot-devices-weather-stations',
    category: '📡 IoT & Smart Devices',
    title: 'Weather Stations',
    description: 'Weather monitoring stations',
    generateDork: (domain) => `site:${domain} (intitle:"Weather Station" OR intitle:"Meteorological")`
  },
  {
    id: 'iot-devices-traffic-cameras',
    category: '📡 IoT & Smart Devices',
    title: 'Traffic Cameras',
    description: 'Traffic monitoring cameras',
    generateDork: (domain) => `site:${domain} (intitle:"Traffic" AND intitle:"Camera")`
  },
  {
    id: 'iot-devices-parking-systems',
    category: '📡 IoT & Smart Devices',
    title: 'Parking Systems',
    description: 'Parking management systems',
    generateDork: (domain) => `site:${domain} (intitle:"Parking" AND intitle:"System")`
  },
  {
    id: 'iot-devices-access-control',
    category: '📡 IoT & Smart Devices',
    title: 'Access Control',
    description: 'Access control systems',
    generateDork: (domain) => `site:${domain} (intitle:"Access Control" OR intitle:"Card Reader")`
  },
  {
    id: 'iot-devices-intercom-systems',
    category: '📡 IoT & Smart Devices',
    title: 'Intercom Systems',
    description: 'Building intercom systems',
    generateDork: (domain) => `site:${domain} (intitle:"Intercom" OR intitle:"Entry System")`
  },
  {
    id: 'iot-devices-elevator-systems',
    category: '📡 IoT & Smart Devices',
    title: 'Elevator Systems',
    description: 'Elevator control systems',
    generateDork: (domain) => `site:${domain} (intitle:"Elevator" OR intitle:"Lift Control")`
  },
  {
    id: 'iot-devices-medical-devices',
    category: '📡 IoT & Smart Devices',
    title: 'Medical Devices',
    description: 'Medical IoT devices',
    generateDork: (domain) => `site:${domain} (intitle:"Medical Device" OR intitle:"Patient Monitor")`
  },
  {
    id: 'iot-devices-smart-meters',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Meters',
    description: 'Smart metering systems',
    generateDork: (domain) => `site:${domain} (intitle:"Smart Meter" OR intitle:"Energy Monitor")`
  },
  {
    id: 'iot-devices-charging-stations',
    category: '📡 IoT & Smart Devices',
    title: 'Charging Stations',
    description: 'EV charging stations',
    generateDork: (domain) => `site:${domain} (intitle:"EV Charging" OR intitle:"Electric Vehicle")`
  },
  {
    id: 'iot-devices-voip-phones',
    category: '📡 IoT & Smart Devices',
    title: 'VoIP Phones',
    description: 'VoIP phone systems',
    generateDork: (domain) => `site:${domain} (intitle:"VoIP" OR intitle:"IP Phone" OR intitle:"Cisco SPA")`
  },
  {
    id: 'iot-devices-video-conferencing',
    category: '📡 IoT & Smart Devices',
    title: 'Video Conferencing',
    description: 'Video conferencing systems',
    generateDork: (domain) => `site:${domain} (intitle:"Video Conference" OR intitle:"Polycom" OR intitle:"Zoom Room")`
  },
  {
    id: 'iot-devices-digital-signage',
    category: '📡 IoT & Smart Devices',
    title: 'Digital Signage',
    description: 'Digital signage displays',
    generateDork: (domain) => `site:${domain} (intitle:"Digital Signage" OR intitle:"Display System")`
  },
  {
    id: 'iot-devices-smart-refrigerators',
    category: '📡 IoT & Smart Devices',
    title: 'Smart Refrigerators',
    description: 'Smart refrigerators',
    generateDork: (domain) => `site:${domain} (intitle:"Smart Refrigerator" OR intitle:"Connected Appliance")`
  },
  {
    id: 'sensitive-info-api-keys---generic',
    category: '🔑 Sensitive Information',
    title: 'API Keys - Generic',
    description: 'Generic API key patterns',
    generateDork: (domain) => `site:${domain} (intext:"api_key" OR intext:"apikey" OR intext:"api-key" OR intext:"apiKey")`
  },
  {
    id: 'sensitive-info-api-keys---specific',
    category: '🔑 Sensitive Information',
    title: 'API Keys - Specific',
    description: 'Service-specific API keys',
    generateDork: (domain) => `site:${domain} (intext:"stripe_api_key" OR intext:"twilio" OR intext:"firebase" OR intext:"mailgun")`
  },
  {
    id: 'sensitive-info-aws-keys',
    category: '🔑 Sensitive Information',
    title: 'AWS Keys',
    description: 'AWS access credentials',
    generateDork: (domain) => `site:${domain} (intext:"AKIA" OR intext:"aws_access_key_id" OR intext:"aws_secret_access_key")`
  },
  {
    id: 'sensitive-info-google-cloud-keys',
    category: '🔑 Sensitive Information',
    title: 'Google Cloud Keys',
    description: 'Google Cloud credentials',
    generateDork: (domain) => `site:${domain} (intext:"AIza" OR intext:"GOOGLE_API_KEY" OR intext:"GCP_API_KEY")`
  },
  {
    id: 'sensitive-info-azure-keys',
    category: '🔑 Sensitive Information',
    title: 'Azure Keys',
    description: 'Microsoft Azure credentials',
    generateDork: (domain) => `site:${domain} (intext:"AZURE" OR intext:"azure_key" OR intext:"azure_secret")`
  },
  {
    id: 'sensitive-info-private-keys---rsa',
    category: '🔑 Sensitive Information',
    title: 'Private Keys - RSA',
    description: 'RSA private keys',
    generateDork: (domain) => `site:${domain} (intext:"BEGIN RSA PRIVATE KEY" OR intext:"BEGIN PRIVATE KEY")`
  },
  {
    id: 'sensitive-info-private-keys---files',
    category: '🔑 Sensitive Information',
    title: 'Private Keys - Files',
    description: 'Private key files',
    generateDork: (domain) => `site:${domain} (ext:pem OR ext:key OR ext:ppk)`
  },
  {
    id: 'sensitive-info-ssh-keys',
    category: '🔑 Sensitive Information',
    title: 'SSH Keys',
    description: 'SSH private keys',
    generateDork: (domain) => `site:${domain} (filename:id_rsa OR filename:id_dsa OR intext:"ssh-rsa")`
  },
  {
    id: 'sensitive-info-oauth-tokens',
    category: '🔑 Sensitive Information',
    title: 'OAuth Tokens',
    description: 'OAuth credentials',
    generateDork: (domain) => `site:${domain} (intext:"oauth_token" OR intext:"oauth_secret" OR intext:"access_token")`
  },
  {
    id: 'sensitive-info-jwt-tokens',
    category: '🔑 Sensitive Information',
    title: 'JWT Tokens',
    description: 'JSON Web Tokens',
    generateDork: (domain) => `site:${domain} (intext:"eyJ" OR intext:"jwt" OR intext:"Bearer eyJ")`
  },
  {
    id: 'sensitive-info-database-passwords',
    category: '🔑 Sensitive Information',
    title: 'Database Passwords',
    description: 'Database credentials',
    generateDork: (domain) => `site:${domain} (intext:"DB_PASSWORD" OR intext:"DATABASE_PASSWORD" OR intext:"db_pass")`
  },
  {
    id: 'sensitive-info-connection-strings',
    category: '🔑 Sensitive Information',
    title: 'Connection Strings',
    description: 'Database connection strings',
    generateDork: (domain) => `site:${domain} (intext:"Server=" OR intext:"jdbc:" OR intext:"mongodb://" OR intext:"mysql://")`
  },
  {
    id: 'sensitive-info-smtp-credentials',
    category: '🔑 Sensitive Information',
    title: 'SMTP Credentials',
    description: 'Email server credentials',
    generateDork: (domain) => `site:${domain} (intext:"smtp_password" OR intext:"mail_password" OR intext:"email_password")`
  },
  {
    id: 'sensitive-info-ftp-credentials',
    category: '🔑 Sensitive Information',
    title: 'FTP Credentials',
    description: 'FTP server credentials',
    generateDork: (domain) => `site:${domain} (intext:"ftp_username" OR intext:"ftp_password" OR intext:"ftp://")`
  },
  {
    id: 'sensitive-info-environment-files',
    category: '🔑 Sensitive Information',
    title: 'Environment Files',
    description: '.env configuration files',
    generateDork: (domain) => `site:${domain} (ext:env OR filename:.env OR filename:.env.local OR filename:.env.production)`
  },
  {
    id: 'sensitive-info-config-files',
    category: '🔑 Sensitive Information',
    title: 'Config Files',
    description: 'Configuration files',
    generateDork: (domain) => `site:${domain} (ext:config OR ext:conf OR ext:cfg OR ext:ini)`
  },
  {
    id: 'sensitive-info-password-in-url',
    category: '🔑 Sensitive Information',
    title: 'Password in URL',
    description: 'Passwords in URLs',
    generateDork: (domain) => `site:${domain} inurl:password`
  },
  {
    id: 'sensitive-info-passwords---generic',
    category: '🔑 Sensitive Information',
    title: 'Passwords - Generic',
    description: 'Generic password patterns',
    generateDork: (domain) => `site:${domain} (intext:"password =" OR intext:"pwd =" OR intext:"pass =" OR intext:"passwd =")`
  },
  {
    id: 'sensitive-info-secret-keys',
    category: '🔑 Sensitive Information',
    title: 'Secret Keys',
    description: 'Application secret keys',
    generateDork: (domain) => `site:${domain} (intext:"secret_key" OR intext:"SECRET_KEY" OR intext:"secret =")`
  },
  {
    id: 'sensitive-info-encryption-keys',
    category: '🔑 Sensitive Information',
    title: 'Encryption Keys',
    description: 'Encryption keys',
    generateDork: (domain) => `site:${domain} (intext:"encryption_key" OR intext:"cipher_key" OR intext:"crypto_key")`
  },
  {
    id: 'sensitive-info-github-tokens',
    category: '🔑 Sensitive Information',
    title: 'GitHub Tokens',
    description: 'GitHub access tokens',
    generateDork: (domain) => `site:${domain} (intext:"ghp_" OR intext:"github_token" OR intext:"GITHUB_TOKEN")`
  },
  {
    id: 'sensitive-info-slack-tokens',
    category: '🔑 Sensitive Information',
    title: 'Slack Tokens',
    description: 'Slack API tokens',
    generateDork: (domain) => `site:${domain} (intext:"xoxb-" OR intext:"xoxp-" OR intext:"SLACK_TOKEN")`
  },
  {
    id: 'sensitive-info-stripe-keys',
    category: '🔑 Sensitive Information',
    title: 'Stripe Keys',
    description: 'Stripe payment keys',
    generateDork: (domain) => `site:${domain} (intext:"sk_live_" OR intext:"pk_live_" OR intext:"STRIPE_KEY")`
  },
  {
    id: 'sensitive-info-twilio-keys',
    category: '🔑 Sensitive Information',
    title: 'Twilio Keys',
    description: 'Twilio API credentials',
    generateDork: (domain) => `site:${domain} (intext:"AC" AND intext:"twilio" OR intext:"TWILIO_")`
  },
  {
    id: 'sensitive-info-paypal-credentials',
    category: '🔑 Sensitive Information',
    title: 'PayPal Credentials',
    description: 'PayPal API credentials',
    generateDork: (domain) => `site:${domain} (intext:"paypal" AND intext:"client_id" OR intext:"PAYPAL_")`
  },
  {
    id: 'sensitive-info-sendgrid-keys',
    category: '🔑 Sensitive Information',
    title: 'SendGrid Keys',
    description: 'SendGrid API keys',
    generateDork: (domain) => `site:${domain} (intext:"SG." OR intext:"SENDGRID_API_KEY")`
  },
  {
    id: 'sensitive-info-mailgun-keys',
    category: '🔑 Sensitive Information',
    title: 'Mailgun Keys',
    description: 'Mailgun API keys',
    generateDork: (domain) => `site:${domain} (intext:"key-" AND intext:"mailgun" OR intext:"MAILGUN_API_KEY")`
  },
  {
    id: 'sensitive-info-firebase-keys',
    category: '🔑 Sensitive Information',
    title: 'Firebase Keys',
    description: 'Firebase credentials',
    generateDork: (domain) => `site:${domain} (intext:"firebaseApiKey" OR intext:"FIREBASE_API_KEY")`
  },
  {
    id: 'sensitive-info-heroku-keys',
    category: '🔑 Sensitive Information',
    title: 'Heroku Keys',
    description: 'Heroku API keys',
    generateDork: (domain) => `site:${domain} (intext:"heroku" AND intext:"api_key" OR intext:"HEROKU_API_KEY")`
  },
  {
    id: 'sensitive-info-docker-hub-tokens',
    category: '🔑 Sensitive Information',
    title: 'Docker Hub Tokens',
    description: 'Docker Hub credentials',
    generateDork: (domain) => `site:${domain} (intext:"dockerhub" OR intext:"DOCKER_PASSWORD")`
  },
  {
    id: 'sensitive-info-npm-tokens',
    category: '🔑 Sensitive Information',
    title: 'NPM Tokens',
    description: 'NPM registry tokens',
    generateDork: (domain) => `site:${domain} (intext:"npm_token" OR intext:"NPM_TOKEN" OR intext:"//registry.npmjs.org/:_authToken")`
  },
  {
    id: 'sensitive-info-pypi-tokens',
    category: '🔑 Sensitive Information',
    title: 'PyPI Tokens',
    description: 'Python package index tokens',
    generateDork: (domain) => `site:${domain} (intext:"pypi_token" OR intext:"PYPI_TOKEN")`
  },
  {
    id: 'sensitive-info-credentials-json',
    category: '🔑 Sensitive Information',
    title: 'Credentials JSON',
    description: 'Credentials in JSON files',
    generateDork: (domain) => `site:${domain} ext:json (credentials OR password OR secret OR token OR api_key)`
  },
  {
    id: 'sensitive-info-credentials-xml',
    category: '🔑 Sensitive Information',
    title: 'Credentials XML',
    description: 'Credentials in XML files',
    generateDork: (domain) => `site:${domain} ext:xml (credentials OR password OR secret)`
  },
  {
    id: 'sensitive-info-credentials-yaml',
    category: '🔑 Sensitive Information',
    title: 'Credentials YAML',
    description: 'Credentials in YAML files',
    generateDork: (domain) => `site:${domain} ext:yaml (credentials OR password OR secret OR token)`
  },
  {
    id: 'sensitive-info-sql-dumps',
    category: '🔑 Sensitive Information',
    title: 'SQL Dumps',
    description: 'Passwords in SQL dumps',
    generateDork: (domain) => `site:${domain} ext:sql (password OR passwd OR pwd)`
  },
  {
    id: 'sensitive-info-backup-with-passwords',
    category: '🔑 Sensitive Information',
    title: 'Backup with Passwords',
    description: 'Credentials in backups',
    generateDork: (domain) => `site:${domain} (ext:bak OR ext:backup OR ext:old) (password OR credentials)`
  },
  {
    id: 'sensitive-info-log-files---passwords',
    category: '🔑 Sensitive Information',
    title: 'Log Files - Passwords',
    description: 'Passwords in log files',
    generateDork: (domain) => `site:${domain} ext:log (password OR passwd OR pwd)`
  },
  {
    id: 'sensitive-info-hardcoded-passwords',
    category: '🔑 Sensitive Information',
    title: 'Hardcoded Passwords',
    description: 'Hardcoded passwords in code',
    generateDork: (domain) => `site:${domain} (ext:php OR ext:js OR ext:py) (password OR passwd) (= OR :)`
  },
  {
    id: 'sensitive-info-basic-auth',
    category: '🔑 Sensitive Information',
    title: 'Basic Auth',
    description: 'Basic authentication',
    generateDork: (domain) => `site:${domain} (intext:"Authorization: Basic" OR inurl:"@")`
  },
  {
    id: 'sensitive-info-digitalocean-tokens',
    category: '🔑 Sensitive Information',
    title: 'DigitalOcean Tokens',
    description: 'DigitalOcean API tokens',
    generateDork: (domain) => `site:${domain} (intext:"DIGITALOCEAN_TOKEN" OR intext:"DO_API_TOKEN")`
  },
  {
    id: 'sensitive-info-cloudflare-keys',
    category: '🔑 Sensitive Information',
    title: 'Cloudflare Keys',
    description: 'Cloudflare API keys',
    generateDork: (domain) => `site:${domain} (intext:"CLOUDFLARE_API_KEY" OR intext:"CF_API_KEY")`
  },
  {
    id: 'sensitive-info-algolia-keys',
    category: '🔑 Sensitive Information',
    title: 'Algolia Keys',
    description: 'Algolia search API keys',
    generateDork: (domain) => `site:${domain} (intext:"ALGOLIA_API_KEY" OR intext:"algolia_admin_key")`
  },
  {
    id: 'sensitive-info-mapbox-tokens',
    category: '🔑 Sensitive Information',
    title: 'Mapbox Tokens',
    description: 'Mapbox API tokens',
    generateDork: (domain) => `site:${domain} (intext:"pk.eyJ" OR intext:"MAPBOX_ACCESS_TOKEN")`
  },
  {
    id: 'sensitive-info-square-keys',
    category: '🔑 Sensitive Information',
    title: 'Square Keys',
    description: 'Square payment keys',
    generateDork: (domain) => `site:${domain} (intext:"sq0atp" OR intext:"sq0csp" OR intext:"SQUARE_ACCESS_TOKEN")`
  },
  {
    id: 'sensitive-info-pagerduty-keys',
    category: '🔑 Sensitive Information',
    title: 'PagerDuty Keys',
    description: 'PagerDuty API keys',
    generateDork: (domain) => `site:${domain} (intext:"PAGERDUTY_API_KEY" OR intext:"pd_api_key")`
  },
  {
    id: 'sensitive-info-datadog-keys',
    category: '🔑 Sensitive Information',
    title: 'Datadog Keys',
    description: 'Datadog monitoring keys',
    generateDork: (domain) => `site:${domain} (intext:"DATADOG_API_KEY" OR intext:"DD_API_KEY")`
  },
  {
    id: 'sensitive-info-new-relic-keys',
    category: '🔑 Sensitive Information',
    title: 'New Relic Keys',
    description: 'New Relic license keys',
    generateDork: (domain) => `site:${domain} (intext:"NEW_RELIC_LICENSE_KEY" OR intext:"NEWRELIC_LICENSE_KEY")`
  },
  {
    id: 'sensitive-info-mongodb-uris',
    category: '🔑 Sensitive Information',
    title: 'MongoDB URIs',
    description: 'MongoDB connection URIs',
    generateDork: (domain) => `site:${domain} (intext:"mongodb://" OR intext:"mongodb+srv://")`
  },
  {
    id: 'sensitive-info-redis-urls',
    category: '🔑 Sensitive Information',
    title: 'Redis URLs',
    description: 'Redis connection URLs',
    generateDork: (domain) => `site:${domain} (intext:"redis://" OR intext:"REDIS_URL")`
  },
  {
    id: 'sensitive-info-elasticsearch-credentials',
    category: '🔑 Sensitive Information',
    title: 'Elasticsearch Credentials',
    description: 'Elasticsearch credentials',
    generateDork: (domain) => `site:${domain} (intext:"ELASTICSEARCH_URL" OR intext:"elastic:" OR intext:"ES_PASSWORD")`
  },
  {
    id: 'social-media-facebook-name-or-username',
    category: '📱 Social Media',
    title: '@Facebook Name Or Username',
    description: 'Facebook mention search',
    generateDork: (domain) => `@facebook ${domain}`
  },
  {
    id: 'social-media-instagram-name-or-username',
    category: '📱 Social Media',
    title: '@Instagram Name Or Username',
    description: 'Instagram mention search',
    generateDork: (domain) => `@instagram ${domain}`
  },
  {
    id: 'social-media-twitter-name-or-username',
    category: '📱 Social Media',
    title: '@Twitter Name Or Username',
    description: 'Twitter mention search',
    generateDork: (domain) => `@twitter ${domain}`
  },
  {
    id: 'social-media-linkedin-name-or-username',
    category: '📱 Social Media',
    title: '@LinkedIn Name Or Username',
    description: 'LinkedIn mention search',
    generateDork: (domain) => `@linkedin ${domain}`
  },
  {
    id: 'social-media-tiktok-name-or-username',
    category: '📱 Social Media',
    title: '@TikTok Name Or Username',
    description: 'TikTok mention search',
    generateDork: (domain) => `@tiktok ${domain}`
  },
  {
    id: 'social-media-snapchat-name-or-username',
    category: '📱 Social Media',
    title: '@Snapchat Name Or Username',
    description: 'Snapchat mention search',
    generateDork: (domain) => `@snapchat ${domain}`
  },
  {
    id: 'social-media-pinterest-name-or-username',
    category: '📱 Social Media',
    title: '@Pinterest Name Or Username',
    description: 'Pinterest mention search',
    generateDork: (domain) => `@pinterest ${domain}`
  },
  {
    id: 'social-media-youtube-name-or-username',
    category: '📱 Social Media',
    title: '@YouTube Name Or Username',
    description: 'YouTube mention search',
    generateDork: (domain) => `@youtube ${domain}`
  },
  {
    id: 'social-media-reddit-name-or-username',
    category: '📱 Social Media',
    title: '@Reddit Name Or Username',
    description: 'Reddit mention search',
    generateDork: (domain) => `@reddit ${domain}`
  },
  {
    id: 'social-media-whatsapp-name-or-username',
    category: '📱 Social Media',
    title: '@WhatsApp Name Or Username',
    description: 'WhatsApp mention search',
    generateDork: (domain) => `@whatsapp ${domain}`
  },
  {
    id: 'social-media-tumblr-name-or-username',
    category: '📱 Social Media',
    title: '@Tumblr Name Or Username',
    description: 'Tumblr mention search',
    generateDork: (domain) => `@tumblr ${domain}`
  },
  {
    id: 'social-media-telegram-name-or-username',
    category: '📱 Social Media',
    title: '@Telegram Name Or Username',
    description: 'Telegram mention search',
    generateDork: (domain) => `@telegram ${domain}`
  },
  {
    id: 'social-media-vimeo-name-or-username',
    category: '📱 Social Media',
    title: '@Vimeo Name Or Username',
    description: 'Vimeo mention search',
    generateDork: (domain) => `@vimeo ${domain}`
  },
  {
    id: 'social-media-medium-name-or-username',
    category: '📱 Social Media',
    title: '@Medium Name Or Username',
    description: 'Medium mention search',
    generateDork: (domain) => `@medium ${domain}`
  },
  {
    id: 'social-media-quora-name-or-username',
    category: '📱 Social Media',
    title: '@Quora Name Or Username',
    description: 'Quora mention search',
    generateDork: (domain) => `@quora ${domain}`
  },
  {
    id: 'social-media-github-name-or-username',
    category: '📱 Social Media',
    title: '@GitHub Name Or Username',
    description: 'GitHub mention search',
    generateDork: (domain) => `@github ${domain}`
  },
  {
    id: 'social-media-discord-name-or-username',
    category: '📱 Social Media',
    title: '@Discord Name Or Username',
    description: 'Discord mention search',
    generateDork: (domain) => `@discord ${domain}`
  },
  {
    id: 'social-media-twitch-name-or-username',
    category: '📱 Social Media',
    title: '@Twitch Name Or Username',
    description: 'Twitch mention search',
    generateDork: (domain) => `@twitch ${domain}`
  },
  {
    id: 'social-media-wechat-name-or-username',
    category: '📱 Social Media',
    title: '@WeChat Name Or Username',
    description: 'WeChat mention search',
    generateDork: (domain) => `@wechat ${domain}`
  },
  {
    id: 'social-media-weibo-name-or-username',
    category: '📱 Social Media',
    title: '@Weibo Name Or Username',
    description: 'Weibo mention search',
    generateDork: (domain) => `@weibo ${domain}`
  },
  {
    id: 'social-media-flickr-name-or-username',
    category: '📱 Social Media',
    title: '@Flickr Name Or Username',
    description: 'Flickr mention search',
    generateDork: (domain) => `@flickr ${domain}`
  },
  {
    id: 'social-media-soundcloud-name-or-username',
    category: '📱 Social Media',
    title: '@SoundCloud Name Or Username',
    description: 'SoundCloud mention search',
    generateDork: (domain) => `@soundcloud ${domain}`
  },
  {
    id: 'social-media-clubhouse-name-or-username',
    category: '📱 Social Media',
    title: '@Clubhouse Name Or Username',
    description: 'Clubhouse mention search',
    generateDork: (domain) => `@clubhouse ${domain}`
  },
  {
    id: 'social-media-blogger-name-or-username',
    category: '📱 Social Media',
    title: '@Blogger Name Or Username',
    description: 'Blogger mention search',
    generateDork: (domain) => `@blogger ${domain}`
  },
  {
    id: 'social-media-vk-name-or-username',
    category: '📱 Social Media',
    title: '@VK Name Or Username',
    description: 'VK mention search',
    generateDork: (domain) => `@vk ${domain}`
  },
  {
    id: 'social-media-behance-name-or-username',
    category: '📱 Social Media',
    title: '@Behance Name Or Username',
    description: 'Behance mention search',
    generateDork: (domain) => `@behance ${domain}`
  },
  {
    id: 'social-media-dribbble-name-or-username',
    category: '📱 Social Media',
    title: '@Dribbble Name Or Username',
    description: 'Dribbble mention search',
    generateDork: (domain) => `@dribbble ${domain}`
  },
  {
    id: 'social-media-linkedin-search',
    category: '📱 Social Media',
    title: 'LinkedIn Search',
    description: 'LinkedIn general search',
    generateDork: (domain) => `site:linkedin.com ${domain}`
  },
  {
    id: 'social-media-linkedin-profile',
    category: '📱 Social Media',
    title: 'LinkedIn Profile',
    description: 'LinkedIn profile page',
    generateDork: (domain) => `site:linkedin.com/in/ "${domain}"`
  },
  {
    id: 'social-media-instagram-profile-clean',
    category: '📱 Social Media',
    title: 'Instagram Profile (Clean)',
    description: 'Instagram account clean',
    generateDork: (domain) => `site:instagram.com "${domain}" -inurl:user`
  },
  {
    id: 'social-media-facebook-profile',
    category: '📱 Social Media',
    title: 'Facebook Profile',
    description: 'Facebook account',
    generateDork: (domain) => `site:facebook.com ${domain}`
  },
  {
    id: 'social-media-instagram-profile',
    category: '📱 Social Media',
    title: 'Instagram Profile',
    description: 'Instagram account',
    generateDork: (domain) => `site:instagram.com "${domain}" -inurl:user`
  },
  {
    id: 'social-media-instagram-search',
    category: '📱 Social Media',
    title: 'Instagram Search',
    description: 'Instagram general',
    generateDork: (domain) => `site:instagram.com ${domain}`
  },
  {
    id: 'social-media-twitter-profile',
    category: '📱 Social Media',
    title: 'Twitter Profile',
    description: 'Twitter account',
    generateDork: (domain) => `site:twitter.com ${domain}`
  },
  {
    id: 'social-media-facebook-photos',
    category: '📱 Social Media',
    title: 'Facebook Photos',
    description: 'Facebook images',
    generateDork: (domain) => `site:facebook.com/photo ${domain}`
  },
  {
    id: 'social-media-facebook-videos',
    category: '📱 Social Media',
    title: 'Facebook Videos',
    description: 'Facebook videos',
    generateDork: (domain) => `site:facebook.com/video ${domain}`
  },
  {
    id: 'social-media-facebook-groups',
    category: '📱 Social Media',
    title: 'Facebook Groups',
    description: 'Facebook groups',
    generateDork: (domain) => `site:facebook.com/groups ${domain}`
  },
  {
    id: 'social-media-instagram-posts',
    category: '📱 Social Media',
    title: 'Instagram Posts',
    description: 'Instagram content',
    generateDork: (domain) => `site:instagram.com/p ${domain}`
  },
  {
    id: 'social-media-instagram-tagged',
    category: '📱 Social Media',
    title: 'Instagram Tagged',
    description: 'Instagram hashtags',
    generateDork: (domain) => `site:instagram.com/explore/tags/${domain}`
  },
  {
    id: 'social-media-twitter-search',
    category: '📱 Social Media',
    title: 'Twitter Search',
    description: 'Twitter search results',
    generateDork: (domain) => `site:twitter.com/search ${domain}`
  },
  {
    id: 'social-media-twitter-lists',
    category: '📱 Social Media',
    title: 'Twitter Lists',
    description: 'Twitter lists',
    generateDork: (domain) => `site:twitter.com/i/lists ${domain}`
  },
  {
    id: 'social-media-twitter-moments',
    category: '📱 Social Media',
    title: 'Twitter Moments',
    description: 'Twitter moments',
    generateDork: (domain) => `site:twitter.com/i/moments ${domain}`
  },
  {
    id: 'social-media-linkedin-company',
    category: '📱 Social Media',
    title: 'LinkedIn Company',
    description: 'LinkedIn companies',
    generateDork: (domain) => `site:linkedin.com/company ${domain}`
  },
  {
    id: 'social-media-linkedin-jobs',
    category: '📱 Social Media',
    title: 'LinkedIn Jobs',
    description: 'LinkedIn job posts',
    generateDork: (domain) => `site:linkedin.com/jobs ${domain}`
  },
  {
    id: 'social-media-linkedin-posts',
    category: '📱 Social Media',
    title: 'LinkedIn Posts',
    description: 'LinkedIn activity',
    generateDork: (domain) => `site:linkedin.com/posts ${domain}`
  },
  {
    id: 'social-media-tiktok-profile',
    category: '📱 Social Media',
    title: 'TikTok Profile',
    description: 'TikTok account',
    generateDork: (domain) => `site:tiktok.com/@${domain}`
  },
  {
    id: 'social-media-tiktok-videos',
    category: '📱 Social Media',
    title: 'TikTok Videos',
    description: 'TikTok content',
    generateDork: (domain) => `site:tiktok.com ${domain}`
  },
  {
    id: 'social-media-tiktok-hashtags',
    category: '📱 Social Media',
    title: 'TikTok Hashtags',
    description: 'TikTok trends',
    generateDork: (domain) => `site:tiktok.com/tag ${domain}`
  },
  {
    id: 'social-media-youtube-channel',
    category: '📱 Social Media',
    title: 'YouTube Channel',
    description: 'YouTube channel',
    generateDork: (domain) => `site:youtube.com/c ${domain}`
  },
  {
    id: 'websites-site-search',
    category: '🌐 Website Discovery',
    title: 'Site Search',
    description: 'All indexed pages',
    generateDork: (domain) => `site:${domain}`
  },
  {
    id: 'websites-subdomains',
    category: '🌐 Website Discovery',
    title: 'Subdomains',
    description: 'Find all subdomains',
    generateDork: (domain) => `site:*.${domain}`
  },
  {
    id: 'websites-login-pages',
    category: '🌐 Website Discovery',
    title: 'Login Pages',
    description: 'Login and auth pages',
    generateDork: (domain) => `site:${domain} (inurl:login OR inurl:signin OR inurl:signup OR inurl:register OR inurl:auth)`
  },
  {
    id: 'websites-sql-errors',
    category: '🌐 Website Discovery',
    title: 'SQL Errors',
    description: 'Find SQL error messages',
    generateDork: (domain) => `site:${domain} (intext:"sql syntax near" OR intext:"syntax error" OR intext:"mysql_" OR intext:"Warning: mysql")`
  },
  {
    id: 'websites-documents',
    category: '🌐 Website Discovery',
    title: 'Documents',
    description: 'Find document files',
    generateDork: (domain) => `site:${domain} (ext:doc OR ext:docx OR ext:pdf OR ext:xls OR ext:xlsx OR ext:txt)`
  },
  {
    id: 'websites-api-keys-exposed',
    category: '🌐 Website Discovery',
    title: 'API Keys Exposed',
    description: 'Search for exposed API keys',
    generateDork: (domain) => `site:${domain} (intext:"api_key" OR intext:"apiToken" OR intext:"access_token" OR intext:"secret_key")`
  },
  {
    id: 'websites-config-files',
    category: '🌐 Website Discovery',
    title: 'Config Files',
    description: 'Configuration files',
    generateDork: (domain) => `site:${domain} (inurl:config OR inurl:configuration OR inurl:settings) (ext:xml OR ext:json OR ext:yaml OR ext:ini)`
  },
  {
    id: 'websites-directory-listings',
    category: '🌐 Website Discovery',
    title: 'Directory Listings',
    description: 'Exposed directories',
    generateDork: (domain) => `site:${domain} (intitle:"index of /" OR intitle:"index of")`
  },
  {
    id: 'websites-backup-files',
    category: '🌐 Website Discovery',
    title: 'Backup Files',
    description: 'Find backup files',
    generateDork: (domain) => `site:${domain} (inurl:backup OR inurl:bak OR inurl:old) (ext:zip OR ext:rar OR ext:tar OR ext:gz OR ext:bak)`
  },
  {
    id: 'websites-git-repositories',
    category: '🌐 Website Discovery',
    title: 'Git Repositories',
    description: 'Exposed source control',
    generateDork: (domain) => `site:${domain} (inurl:.git OR inurl:.svn OR inurl:gitlab OR inurl:github)`
  },
  {
    id: 'websites-error-messages',
    category: '🌐 Website Discovery',
    title: 'Error Messages',
    description: 'Error and debug info',
    generateDork: (domain) => `site:${domain} (intext:"error" OR intext:"warning" OR intext:"exception" OR intext:"fatal error")`
  },
  {
    id: 'websites-database-admin',
    category: '🌐 Website Discovery',
    title: 'Database Admin',
    description: 'Database interfaces',
    generateDork: (domain) => `site:${domain} (inurl:phpmyadmin OR inurl:adminer OR inurl:dbadmin OR inurl:database)`
  },
  {
    id: 'websites-cloud-storage',
    category: '🌐 Website Discovery',
    title: 'Cloud Storage',
    description: 'Cloud storage buckets',
    generateDork: (domain) => `site:${domain} (inurl:s3.amazonaws.com OR inurl:storage.googleapis.com OR inurl:azure OR intext:"bucket")`
  },
  {
    id: 'websites-upload-forms',
    category: '🌐 Website Discovery',
    title: 'Upload Forms',
    description: 'File upload pages',
    generateDork: (domain) => `site:${domain} (inurl:upload OR inurl:filemanager OR inurl:uploads)`
  },
  {
    id: 'websites-olddeprecated',
    category: '🌐 Website Discovery',
    title: 'Old/Deprecated',
    description: 'Old versions and archives',
    generateDork: (domain) => `site:${domain} (inurl:old OR inurl:deprecated OR inurl:v1 OR inurl:legacy OR inurl:archive)`
  },
  {
    id: 'websites-code-comments',
    category: '🌐 Website Discovery',
    title: 'Code Comments',
    description: 'Find TODO and secrets in JS',
    generateDork: (domain) => `site:${domain} (inurl:js OR ext:js) (intext:"TODO" OR intext:"FIXME" OR intext:"password" OR intext:"token")`
  },
  {
    id: 'websites-checkoutpayment',
    category: '🌐 Website Discovery',
    title: 'Checkout/Payment',
    description: 'Payment and order pages',
    generateDork: (domain) => `site:${domain} (inurl:checkout OR inurl:payment OR inurl:cart OR inurl:order)`
  },
  {
    id: 'websites-confidential-docs',
    category: '🌐 Website Discovery',
    title: 'Confidential Docs',
    description: 'Confidential documents',
    generateDork: (domain) => `site:${domain} (intext:"confidential" OR intext:"internal use only" OR intext:"do not share")`
  },
  {
    id: 'websites-password-reset',
    category: '🌐 Website Discovery',
    title: 'Password Reset',
    description: 'Password recovery pages',
    generateDork: (domain) => `site:${domain} (inurl:reset OR inurl:forgotpassword OR inurl:recover OR inurl:passwordreset)`
  },
  {
    id: 'websites-debugdev-tools',
    category: '🌐 Website Discovery',
    title: 'Debug/Dev Tools',
    description: 'Developer tools',
    generateDork: (domain) => `site:${domain} (inurl:devtools OR inurl:debug OR inurl:console OR inurl:monitoring)`
  },
  {
    id: 'websites-testsample-data',
    category: '🌐 Website Discovery',
    title: 'Test/Sample Data',
    description: 'Test and placeholder data',
    generateDork: (domain) => `site:${domain} (intext:"dummy data" OR intext:"sample data" OR intext:"test data" OR intext:"lorem ipsum")`
  },
  {
    id: 'websites-cms-versions',
    category: '🌐 Website Discovery',
    title: 'CMS Versions',
    description: 'CMS platform detection',
    generateDork: (domain) => `site:${domain} (intext:"powered by WordPress" OR intext:"powered by Joomla" OR intext:"powered by Drupal")`
  },
  {
    id: 'websites-shell-upload',
    category: '🌐 Website Discovery',
    title: 'Shell Upload',
    description: 'Potential shell uploads',
    generateDork: (domain) => `site:${domain} (inurl:shell OR inurl:cmd OR inurl:root OR inurl:upload) (ext:php OR ext:asp)`
  },
  {
    id: 'websites-path-traversal',
    category: '🌐 Website Discovery',
    title: 'Path Traversal',
    description: 'Path traversal vulnerabilities',
    generateDork: (domain) => `site:${domain} (inurl:../ OR inurl:%2e%2e%2f OR inurl:/../../)`
  },
  {
    id: 'websites-robots--sitemaps',
    category: '🌐 Website Discovery',
    title: 'Robots & Sitemaps',
    description: 'Robots and sitemap files',
    generateDork: (domain) => `site:${domain} (inurl:robots.txt OR inurl:sitemap.xml)`
  },
  {
    id: 'websites-contact-info',
    category: '🌐 Website Discovery',
    title: 'Contact Info',
    description: 'Contact information',
    generateDork: (domain) => `site:${domain} (intext:"contact us" OR intext:"support" OR intext:"@${domain}")`
  },
  {
    id: 'websites-email-addresses',
    category: '🌐 Website Discovery',
    title: 'Email Addresses',
    description: 'Find email addresses',
    generateDork: (domain) => `site:${domain} intext:@${domain}`
  },
  {
    id: 'websites-wordpress-plugins',
    category: '🌐 Website Discovery',
    title: 'WordPress Plugins',
    description: 'WordPress plugins',
    generateDork: (domain) => `site:${domain} inurl:wp-content/plugins`
  },
  {
    id: 'websites-wordpress-themes',
    category: '🌐 Website Discovery',
    title: 'WordPress Themes',
    description: 'WordPress themes',
    generateDork: (domain) => `site:${domain} inurl:wp-content/themes`
  },
  {
    id: 'websites-wordpress-uploads',
    category: '🌐 Website Discovery',
    title: 'WordPress Uploads',
    description: 'WordPress media uploads',
    generateDork: (domain) => `site:${domain} inurl:wp-content/uploads`
  },
  {
    id: 'websites-php-files',
    category: '🌐 Website Discovery',
    title: 'PHP Files',
    description: 'PHP source files',
    generateDork: (domain) => `site:${domain} ext:php`
  },
  {
    id: 'websites-aspaspx-files',
    category: '🌐 Website Discovery',
    title: 'ASP/ASPX Files',
    description: 'ASP.NET files',
    generateDork: (domain) => `site:${domain} (ext:asp OR ext:aspx)`
  },
  {
    id: 'websites-jsp-files',
    category: '🌐 Website Discovery',
    title: 'JSP Files',
    description: 'Java Server Pages',
    generateDork: (domain) => `site:${domain} ext:jsp`
  },
  {
    id: 'websites-cgi-scripts',
    category: '🌐 Website Discovery',
    title: 'CGI Scripts',
    description: 'CGI scripts',
    generateDork: (domain) => `site:${domain} ext:cgi`
  },
  {
    id: 'websites-perl-scripts',
    category: '🌐 Website Discovery',
    title: 'Perl Scripts',
    description: 'Perl scripts',
    generateDork: (domain) => `site:${domain} ext:pl`
  },
  {
    id: 'websites-python-scripts',
    category: '🌐 Website Discovery',
    title: 'Python Scripts',
    description: 'Python files',
    generateDork: (domain) => `site:${domain} ext:py`
  },
  {
    id: 'websites-ruby-scripts',
    category: '🌐 Website Discovery',
    title: 'Ruby Scripts',
    description: 'Ruby files',
    generateDork: (domain) => `site:${domain} ext:rb`
  },
  {
    id: 'websites-javascript-files',
    category: '🌐 Website Discovery',
    title: 'JavaScript Files',
    description: 'Custom JavaScript',
    generateDork: (domain) => `site:${domain} ext:js -jquery -angular`
  },
  {
    id: 'websites-typescript-files',
    category: '🌐 Website Discovery',
    title: 'TypeScript Files',
    description: 'TypeScript files',
    generateDork: (domain) => `site:${domain} ext:ts`
  },
  {
    id: 'websites-api-documentation',
    category: '🌐 Website Discovery',
    title: 'API Documentation',
    description: 'API docs and specs',
    generateDork: (domain) => `site:${domain} (inurl:api OR inurl:swagger OR inurl:openapi)`
  },
  {
    id: 'websites-graphql-endpoints',
    category: '🌐 Website Discovery',
    title: 'GraphQL Endpoints',
    description: 'GraphQL APIs',
    generateDork: (domain) => `site:${domain} inurl:graphql`
  },
  {
    id: 'websites-rest-apis',
    category: '🌐 Website Discovery',
    title: 'REST APIs',
    description: 'REST API endpoints',
    generateDork: (domain) => `site:${domain} (inurl:/api/v1 OR inurl:/api/v2 OR inurl:/rest)`
  },
  {
    id: 'websites-soap-services',
    category: '🌐 Website Discovery',
    title: 'SOAP Services',
    description: 'SOAP web services',
    generateDork: (domain) => `site:${domain} ext:wsdl`
  },
  {
    id: 'websites-rss-feeds',
    category: '🌐 Website Discovery',
    title: 'RSS Feeds',
    description: 'RSS/Atom feeds',
    generateDork: (domain) => `site:${domain} (ext:rss OR ext:atom OR inurl:feed)`
  },
  {
    id: 'websites-webhook-urls',
    category: '🌐 Website Discovery',
    title: 'Webhook URLs',
    description: 'Webhook endpoints',
    generateDork: (domain) => `site:${domain} inurl:webhook`
  },
  {
    id: 'websites-callback-urls',
    category: '🌐 Website Discovery',
    title: 'Callback URLs',
    description: 'Callback endpoints',
    generateDork: (domain) => `site:${domain} inurl:callback`
  },
  {
    id: 'websites-health-check',
    category: '🌐 Website Discovery',
    title: 'Health Check',
    description: 'Health check endpoints',
    generateDork: (domain) => `site:${domain} (inurl:health OR inurl:status OR inurl:ping)`
  },
  {
    id: 'websites-metricsstats',
    category: '🌐 Website Discovery',
    title: 'Metrics/Stats',
    description: 'Metrics pages',
    generateDork: (domain) => `site:${domain} (inurl:metrics OR inurl:stats OR inurl:statistics)`
  },
  {
    id: 'websites-search-pages',
    category: '🌐 Website Discovery',
    title: 'Search Pages',
    description: 'Search functionality',
    generateDork: (domain) => `site:${domain} (inurl:search OR inurl:find)`
  },
  {
    id: 'websites-download-pages',
    category: '🌐 Website Discovery',
    title: 'Download Pages',
    description: 'Download sections',
    generateDork: (domain) => `site:${domain} inurl:download`
  }
];

const stripCategoryEmoji = (category) =>
  typeof category === 'string' ? category.replace(/^[^\p{L}\p{N}]+/u, '').trim() : category;

export const dorkTemplates = rawTemplates.map((dork) => ({
  ...dork,
  category: stripCategoryEmoji(dork.category),
}));
