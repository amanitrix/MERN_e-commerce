  <h1>🚀 How to Run This MERN Stack Project</h1>

  <p>Follow these steps to run the project locally:</p>

  <h2>1️⃣ Install Backend Dependencies</h2>
  <pre><code>cd backend
npm install</code></pre>

  <h2>2️⃣ Seed the Database (in a new terminal)</h2>
  <p>Open a <strong>new terminal window</strong>, navigate to the <code>backend</code> folder, and run:</p>
  <pre><code>npm run seed</code></pre>
  <blockquote>This will populate your MongoDB database with initial data.</blockquote>

  <h2>3️⃣ Install Frontend Dependencies</h2>
  <pre><code>cd ../frontend
npm install</code></pre>

  <h2>4️⃣ Configure Environment Variables</h2>
  <p>In the existing <code>.env</code> file inside the <code>backend</code> folder, add the following:</p>
  <pre><code>MONGO_URI=your_mongodb_connection_url
EMAIL=your_email_here
PASSWORD=your_email_password_here
</code></pre>
  <blockquote>Replace these with your actual email credentials and MongoDB URI.</blockquote>

  <h2>5️⃣ Run the Project</h2>
  <p><strong>Important:</strong> Run the backend and frontend in <strong>separate terminal windows</strong>.</p>

  <h3>Start the Backend Server</h3>
  <pre><code>cd backend
npm run dev</code></pre>

  <h3>Start the Frontend Server (in another terminal)</h3>
  <pre><code>cd frontend
npm start</code></pre>
