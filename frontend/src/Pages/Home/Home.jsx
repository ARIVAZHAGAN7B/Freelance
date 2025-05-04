import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const HomePage = () => {
  const sqlCode = `
  CREATE TABLE departments (department_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL);
  CREATE TABLE roles (role_id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, salary DECIMAL(10,2));
  CREATE TABLE employees (employee_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE, phone VARCHAR(20), hire_date DATE, department_id INT, role_id INT, FOREIGN KEY (department_id) REFERENCES departments(department_id), FOREIGN KEY (role_id) REFERENCES roles(role_id));
  
  INSERT INTO departments (name) VALUES ('Human Resources'), ('Engineering');
  INSERT INTO roles (title, salary) VALUES ('Software Engineer', 80000), ('HR Manager', 60000);
  INSERT INTO employees (first_name, last_name, email, phone, hire_date, department_id, role_id) VALUES ('John', 'Doe', 'john.doe@example.com', '1234567890', '2025-04-27', 2, 1);
  
  SELECT * FROM employees;
  SELECT e.first_name, e.last_name, d.name AS department, r.title AS role FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN roles r ON e.role_id = r.role_id;
  
  UPDATE employees SET phone = '0987654321' WHERE employee_id = 1;
  DELETE FROM employees WHERE employee_id = 1;
    `;
    const queries = `
    CREATE TABLE Customers (CustomerID INT PRIMARY KEY, Name VARCHAR(100) NOT NULL, Email VARCHAR(100) UNIQUE NOT NULL, Phone VARCHAR(15), Address TEXT);
    CREATE TABLE Products (ProductID INT PRIMARY KEY, Name VARCHAR(100) NOT NULL, Price DECIMAL(10,2) NOT NULL CHECK (Price > 0), Stock INT NOT NULL CHECK (Stock >= 0));
    CREATE TABLE Orders (OrderID INT PRIMARY KEY, CustomerID INT, OrderDate DATE NOT NULL, Status VARCHAR(20) DEFAULT 'Pending' CHECK (Status IN ('Pending', 'Shipped', 'Delivered', 'Cancelled')), FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));
    CREATE TABLE OrderDetails (OrderDetailID INT PRIMARY KEY, OrderID INT, ProductID INT, Quantity INT NOT NULL CHECK (Quantity > 0), FOREIGN KEY (OrderID) REFERENCES Orders(OrderID), FOREIGN KEY (ProductID) REFERENCES Products(ProductID));
    CREATE TABLE Payments (PaymentID INT PRIMARY KEY, OrderID INT, Amount DECIMAL(10,2) NOT NULL CHECK (Amount > 0), PaymentDate DATE NOT NULL, PaymentMethod VARCHAR(50) CHECK (PaymentMethod IN ('Credit Card', 'Debit Card', 'PayPal', 'Cash')), FOREIGN KEY (OrderID) REFERENCES Orders(OrderID));
    
    CREATE TRIGGER ReduceStockAfterOrder AFTER INSERT ON OrderDetails FOR EACH ROW BEGIN UPDATE Products SET Stock = Stock - NEW.Quantity WHERE ProductID = NEW.ProductID; END;
    CREATE TRIGGER CheckStockBeforeOrder BEFORE INSERT ON OrderDetails FOR EACH ROW BEGIN DECLARE available_stock INT; SELECT Stock INTO available_stock FROM Products WHERE ProductID = NEW.ProductID; IF available_stock < NEW.Quantity THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Not enough stock available'; END IF; END;
    CREATE TRIGGER UpdateOrderStatusAfterPayment AFTER INSERT ON Payments FOR EACH ROW BEGIN UPDATE Orders SET Status = 'Delivered' WHERE OrderID = NEW.OrderID; END;
      `;
      const exp4 = `db.events.insertOne({"title":"Music Festival 2025","description":"A 3-day festival featuring top artists.","location":{"venue":"City Park","address":"123 Main St","city":"Springfield","coordinates":{"lat":40.7128,"lng":-74.0060}},"startDate":ISODate("2025-08-15T10:00:00Z"),"endDate":ISODate("2025-08-17T23:00:00Z"),"categories":["Music","Festival"],"organizerId":null,"tickets":[{"type":"VIP","price":250,"quantity":100},{"type":"General Admission","price":100,"quantity":1000}],"status":"active"}); const eventId = db.events.findOne({"title":"Music Festival 2025"})._id; db.users.insertOne({"name":"John Doe","email":"john@example.com","role":"organizer","phone":"+1234567890","eventsOrganized":[eventId],"eventsAttended":[]}); const userId = db.users.findOne({"email":"john@example.com"})._id; db.feedback.insertOne({"eventId":eventId,"userId":userId,"rating":5,"comment":"Amazing event! Very well organized.","createdAt":ISODate("2025-08-18T10:00:00Z")}); db.tickets.insertOne({"eventId":eventId,"userId":userId,"ticketType":"VIP","purchaseDate":ISODate("2025-07-01T12:00:00Z"),"status":"confirmed"}); db.events.find().pretty(); db.users.find().pretty(); db.feedback.find().pretty(); db.tickets.find().pretty();`
      const exp51 = `db.users.insertMany([{_id: ObjectId("65a1d1f6b3c4d5e123456789"), name: "John Doe", email: "john.doe@example.com", password_hash: "hashed_password", address: "123 Street, NY"},{_id: ObjectId("65a1d1f6b3c4d5e123456790"), name: "Jane Smith", email: "jane.smith@example.com", password_hash: "hashed_password", address: "456 Avenue, LA"}]); db.products.insertMany([{_id: "P1234", name: "Smartphone", category: "Electronics", price: 599.99, stock: 50},{_id: "P5678", name: "Laptop", category: "Electronics", price: 999.99, stock: 20}]); db.orders.insertOne({_id: ObjectId("65a2d2e6b3c4d5e223456789"), user_id: ObjectId("65a1d1f6b3c4d5e123456789"), total_amount: 599.99, order_status: "Processing", created_at: new Date(), items: [{product_id: "P1234", quantity: 1, price: 599.99}]}); db.payments.insertOne({_id: ObjectId("65a3d3f6b3c4d5e323456789"), order_id: ObjectId("65a2d2e6b3c4d5e223456789"), amount: 599.99, status: "Completed", payment_method: "Credit Card", transaction_timestamp: new Date()});`
      const exp52 =`sh.enableSharding("ecommerce"); db.users.createIndex({email: 1}); sh.shardCollection("ecommerce.users", {email: 1}); db.orders.createIndex({user_id: 1}); sh.shardCollection("ecommerce.orders", {user_id: 1});
`
      const exp53 = `const changeStream = db.orders.watch(); changeStream.on("change", (change) => {if (change.operationType === "insert") {change.fullDocument.items.forEach((item) => {db.products.updateOne({_id: item.product_id}, {$inc: {stock: -item.quantity}});});}});
`
const exp6=`from flask import Flask, jsonify
import redis
import time

app = Flask(__name__)

# Redis configuration
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)

def get_blog_post_from_db(post_id):
    time.sleep(2)  # Simulate database delay
    return {"post_id": post_id, "title": f"Post {post_id}", "content": "Sample blog content."}

@app.route('/post/<post_id>')
def get_post(post_id):
    cached_post = redis_client.get(post_id)
    if cached_post:
        return jsonify({"source": "cache", "data": eval(cached_post)})

    post = get_blog_post_from_db(post_id)
    redis_client.setex(post_id, 10, str(post))
    return jsonify({"source": "database", "data": post})

@app.route('/clear-cache/<post_id>')
def clear_cache(post_id):
    redis_client.delete(post_id)
    return jsonify({"message": f"Cache for post {post_id} cleared."})

if __name__ == '__main__':
    app.run(debug=True)
`
const exp7 = `CREATE DATABASE IF NOT EXISTS BankingDB; USE BankingDB; CREATE TABLE IF NOT EXISTS Users (UserID INT PRIMARY KEY AUTO_INCREMENT, Username VARCHAR(50) UNIQUE NOT NULL, PasswordHash VARCHAR(255) NOT NULL, FullName VARCHAR(100) NOT NULL, Email VARCHAR(100) UNIQUE NOT NULL, Phone VARCHAR(15), CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP); CREATE TABLE IF NOT EXISTS Accounts (AccountID INT PRIMARY KEY AUTO_INCREMENT, UserID INT NOT NULL, AccountNumber VARCHAR(20) UNIQUE NOT NULL, AccountType ENUM('Savings', 'Checking') NOT NULL, Balance DECIMAL(15,2) NOT NULL DEFAULT 0.00, CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE); CREATE TABLE IF NOT EXISTS Transactions (TransactionID INT PRIMARY KEY AUTO_INCREMENT, AccountID INT NOT NULL, Amount DECIMAL(15,2) NOT NULL, TransactionType ENUM('Deposit', 'Withdrawal', 'Transfer') NOT NULL, TransactionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID) ON DELETE CASCADE); CREATE USER IF NOT EXISTS 'bankAdmin'@'localhost' IDENTIFIED BY 'SecureP@ssw0rd!'; GRANT SELECT, INSERT, UPDATE, DELETE ON BankingDB.* TO 'bankAdmin'@'localhost'; FLUSH PRIVILEGES; DELIMITER $$ CREATE PROCEDURE TransferFunds(IN senderAccountID INT, IN receiverAccountID INT, IN transferAmount DECIMAL(15,2)) BEGIN DECLARE senderBalance DECIMAL(15,2); SELECT Balance INTO senderBalance FROM Accounts WHERE AccountID = senderAccountID FOR UPDATE; IF senderBalance IS NULL THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Sender Account Not Found'; ELSEIF senderBalance < transferAmount THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient Funds'; ELSE START TRANSACTION; UPDATE Accounts SET Balance = Balance - transferAmount WHERE AccountID = senderAccountID; UPDATE Accounts SET Balance = Balance + transferAmount WHERE AccountID = receiverAccountID; INSERT INTO Transactions (AccountID, Amount, TransactionType) VALUES (senderAccountID, -transferAmount, 'Transfer'), (receiverAccountID, transferAmount, 'Transfer'); COMMIT; END IF; END$$ DELIMITER ; INSERT INTO Users (Username, PasswordHash, FullName, Email, Phone) VALUES ('john_doe', 'hashedpassword123', 'John Doe', 'john@example.com', '1234567890'), ('jane_smith', 'hashedpassword456', 'Jane Smith', 'jane@example.com', '0987654321'); INSERT INTO Accounts (UserID, AccountNumber, AccountType, Balance) VALUES (1, 'ACC1001', 'Savings', 5000.00), (2, 'ACC1002', 'Checking', 3000.00); INSERT INTO Transactions (AccountID, Amount, TransactionType) VALUES (1, 1000.00, 'Deposit'), (2, 500.00, 'Withdrawal'); SELECT * FROM Users; SELECT * FROM Accounts; SELECT * FROM Transactions;
`
  const [user, setUser] = useState({
    username: "",
    email: "",
    projectdetails: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.projectdetails) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", user);

    // Reset form
    setUser({
      username: "",
      email: "",
      projectdetails: ""
    });
  };

  return (
    <div className="homepage">
      <div className="container">
        {/* 1. Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Transform Your Ideas into Stunning Websites</h1>
          <p className="hero-description">We create user-friendly, performance-driven websites tailored to your needs.</p>
          <Link to="/build" className="btn-primary">Let’s Build Yours</Link>
        </section>

        {/* 2. Showcase Section */}
        <section className="showcase">
          <h2 className="section-title">Our Work</h2>
          <div className="showcase-grid">
            {["Farmer", "Medical", "AgriCenter", "Hotel", "Shop", "Tution", "Buildnew", "Agri Trader"].map((i) => (
              <div key={i} className="showcase-card">
                <div className="showcase-image"></div>
                <div className="showcase-info">{i}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section className="why-choose">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="feature-grid">
            {[{ icon: "🎨", title: "Custom Design" }, { icon: "⚡", title: "Fast & Responsive" }, { icon: "🔒", title: "Secure Solutions" }, { icon: "📈", title: "SEO Ready" }].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Lead Form */}
        <section className="lead-form">
          <h2 className="section-title">Let’s Talk</h2>
          <p>Tell us about your project and let's build something amazing together.</p>
          <form className="form">
            <input
              className="input-field"
              type="text"
              placeholder="Your Name"
              value={user.username}
              onChange={handleChange}
              name="username"
            />
            <input
              className="input-field"
              type="email"
              placeholder="Your Email"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
            <textarea
              className="input-field"
              rows="4"
              placeholder="Short Description of Your Project Details"
              value={user.projectdetails}
              onChange={handleChange}
              name="projectdetails"
            ></textarea>
            <button className="btn-primary" onClick={handleClick}>Submit</button>
          </form>
        </section>

        {/* 5. Client Logos */}
        <section className="client-logos">
          <h2 className="section-title">Trusted By</h2>
          <div className="client-logos-list">
            {['Client A', 'Client B', 'Client C'].map((client, i) => (
              <div key={i} className="client-logo">{client}</div>
            ))}
          </div>
        </section>

        {/* 6. Stats Section */}
        <section className="stats">
          <div className="stats-grid">
            <div className="stat-card">10+ <div>Websites Delivered</div></div>
            <div className="stat-card">15+ <div>Happy Clients</div></div>
            <div className="stat-card">1+ <div>Years of Experience</div></div>
          </div>
        </section>

        {/* 7. Video Section */}
        <section className="video-section">
          <h2 className="section-title">How We Work</h2>
          <div className="video-wrapper">
            <video className="video-player" width="640" controls>
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="testimonials">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials-list">
            {[
              "Best experience!",
              "Truly professional team.",
              "Delivered beyond expectations!",
              "Excellent communication throughout the project.",
              "Fantastic work, highly recommend them.",
              "A team that truly understands the client's needs.",
              "The best decision we made was to work with them.",
              "Efficient, creative, and results-driven!",
              "Their attention to detail was exceptional.",
              "Extremely satisfied with the outcome!"
            ].map((quote, i) => (
              <blockquote key={i} className="testimonial-card">{quote}</blockquote>
            ))}
          </div>
        </section>

        {/* 9. Services Marquee */}
        <section className="services">
          <h2 className="section-title">What We Offer</h2>
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[
                'Custom Websites',
                'E-commerce',
                'UI/UX Design',
                'Web Apps',
                'Dashboards',
                'Booking Systems',
                'CMS',
                'Real-Time Apps',
                'Social Media Platforms',
                'Membership Systems'
              ].map((service, i) => (
                <div key={i} className="service-card">
                  <h3 className="service-title">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Social Proof */}
        <section className="social-proof">
          <h2 className="section-title">Follow Us</h2>
          <div className="social-links">
            {[
              { platform: "Instagram", url: "https://www.instagram.com/codexcoders/" },
              { platform: "LinkedIn", url: "https://www.linkedin.com/in/codexcoders-b2276a35b/" },
              { platform: "X", url: "https://x.com/codeXcoders1" }
            ].map((social, i) => (
              <a key={i} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                {social.platform}
              </a>
            ))}
          </div>
        </section>

        {/* 11. Footer */}
        <footer className="footer">
          <p>&copy; 2025 CodeXCoders. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </footer>
      </div>

      {/* 12. Sticky CTA */}
      <div className="sticky-cta">
        <Link to="/build" className="btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default HomePage;
