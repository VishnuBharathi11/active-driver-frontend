<h1 align="center">🚗 Active Driver – Frontend</h1>

<p align="center">
  <em>A modern React-based web application for hiring professional drivers and managing ride requests.</em>
</p>

<p align="center">
  <strong>Built with React + Vite</strong>
</p>

<hr/>

<h2>📌 Project Overview</h2>
<p>
<strong>Active Driver</strong> is a frontend web application designed to simplify the process of hiring
professional drivers. Users can submit ride requests, while drivers can view and accept them
through dedicated dashboards.
</p>

<p>
The application leverages <strong>React Router</strong> for seamless navigation and
<strong>localStorage</strong> for client-side data persistence.
</p>

<hr/>

<h2>✨ Core Features</h2>

<table width="100%" cellpadding="8">
  <tr>
    <td width="50%" valign="top">
      <h3>👤 User Module</h3>
      <ul>
        <li>User authentication with validation</li>
        <li>Request drivers by entering:
          <ul>
            <li>Name</li>
            <li>Vehicle type (Car / Bike / Truck)</li>
            <li>Trip duration</li>
            <li>Pickup & Drop locations</li>
            <li>Contact number</li>
          </ul>
        </li>
        <li>View submitted requests</li>
        <li>Track request status</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🚘 Driver Module</h3>
      <ul>
        <li>Driver authentication with validation</li>
        <li>View available ride requests</li>
        <li>Accept ride requests</li>
        <li>View ongoing jobs</li>
      </ul>
    </td>
  </tr>
</table>

<h3>🌐 Common Features</h3>
<ul>
  <li>Responsive navigation bar and footer</li>
  <li>Service listing dropdown</li>
  <li>Image and video-rich UI</li>
  <li>Client-side routing</li>
</ul>

<hr/>

<h2>🛠️ Technology Stack</h2>

<table border="1" cellpadding="8">
  <tr>
    <th>Category</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>React (Vite)</td>
  </tr>
  <tr>
    <td>Routing</td>
    <td>React Router DOM</td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>CSS</td>
  </tr>
  <tr>
    <td>Icons</td>
    <td>React Icons</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>Browser localStorage</td>
  </tr>
  <tr>
    <td>Version Control</td>
    <td>Git & GitHub</td>
  </tr>
</table>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
active-driver-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Services.jsx
│   │   ├── UserLogin.jsx
│   │   ├── DriverLogin.jsx
│   │   ├── UserDashboard.jsx
│   │   └── DriverDashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
</pre>

<hr/>

<h2>🧭 Application Routes</h2>

<table border="1" cellpadding="8">
  <tr>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr><td>/</td><td>Homepage</td></tr>
  <tr><td>/about</td><td>About page</td></tr>
  <tr><td>/contact</td><td>Contact page</td></tr>
  <tr><td>/userlogin</td><td>User Login</td></tr>
  <tr><td>/driverlogin</td><td>Driver Login</td></tr>
  <tr><td>/userdashboard</td><td>User Dashboard</td></tr>
  <tr><td>/driverdashboard</td><td>Driver Dashboard</td></tr>
</table>

<hr/>

<h2>🚀 Getting Started</h2>

<ol>
  <li>
    <strong>Clone the repository</strong>
    <pre>git clone https://github.com/VishnuBharathi11/active-driver-frontend.git</pre>
  </li>
  <li>
    <strong>Navigate to the project directory</strong>
    <pre>cd active-driver-frontend</pre>
  </li>
  <li>
    <strong>Install dependencies</strong>
    <pre>npm install</pre>
  </li>
  <li>
    <strong>Run the development server</strong>
    <pre>npm run dev</pre>
  </li>
</ol>

<hr/>

<h2>🔄 Git Workflow</h2>
<ul>
  <li>Feature development in <strong>developer2</strong> branch</li>
  <li>Main branch remains stable</li>
  <li>Pull Request based merging</li>
</ul>

<hr/>

<h2>📈 Future Enhancements</h2>
<ul>
  <li>Backend integration (Node.js / Spring Boot)</li>
  <li>Database support (MySQL / MongoDB)</li>
  <li>JWT-based authentication</li>
  <li>Admin dashboard</li>
  <li>Payment gateway integration</li>
</ul>

<hr/>

<h2>👨‍💻 Author</h2>
<p>
<strong>Vishnu Bharathi S</strong><br/>
Computer Science Student<br/>
</p>

<hr/>

<h2>📄 License</h2>
<p>
This project is licensed under the <strong>MIT License</strong>.
</p>
<p>
You are free to use, modify, distribute, and sublicense this software with proper attribution.
</p>
