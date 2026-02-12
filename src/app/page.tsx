export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramya Gopinathan - Portrait Artist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #f8f4f0 0%, #e8ddd4 100%);
            color: #5a4a3a;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px 0;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        h1 {
            color: #8b7d6b;
            font-size: 2.5em;
            font-weight: 300;
            letter-spacing: 2px;
        }
        
        .subtitle {
            color: #b19cd9;
            font-size: 1.1em;
            margin-top: 5px;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            gap: 30px;
        }
        
        nav a {
            color: #8b7d6b;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            font-size: 1.1em;
        }
        
        nav a:hover {
            color: #b19cd9;
        }
        
        .hero {
            text-align: center;
            padding: 80px 0;
            background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7));
        }
        
        .hero h2 {
            font-size: 3em;
            color: #8b7d6b;
            margin-bottom: 20px;
            font-weight: 300;
        }
        
        .hero p {
            font-size: 1.3em;
            color: #b19cd9;
            max-width: 600px;
            margin: 0 auto 40px;
        }
        
        .cta-button {
            background: linear-gradient(135deg, #b19cd9, #d4c5e8);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1em;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(177, 156, 217, 0.4);
        }
        
        .gallery {
            padding: 80px 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5em;
            color: #8b7d6b;
            margin-bottom: 60px;
            font-weight: 300;
        }
        
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }
        
        .artwork {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 400px;
            position: relative;
        }
        
        .artwork:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .artwork-placeholder {
            width: 100%;
            height: 300px;
            background: linear-gradient(135deg, #f4e4f0, #e8d5f2, #dcc6f4);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8b7d6b;
            font-size: 1.1em;
            border-bottom: 1px solid #eee;
        }
        
        .artwork-info {
            padding: 20px;
        }
        
        .artwork-title {
            font-size: 1.2em;
            color: #8b7d6b;
            margin-bottom: 5px;
        }
        
        .artwork-details {
            color: #b19cd9;
            font-size: 0.9em;
        }
        
        .about {
            background: rgba(255, 255, 255, 0.7);
            padding: 80px 0;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        
        .about-text {
            font-size: 1.2em;
            color: #5a4a3a;
        }
        
        .about-image {
            width: 100%;
            height: 400px;
            background: linear-gradient(135deg, #f4e4f0, #e8d5f2);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8b7d6b;
            font-size: 1.1em;
        }
        
        .contact {
            padding: 80px 0;
            text-align: center;
        }
        
        .contact-info {
            max-width: 600px;
            margin: 0 auto;
            font-size: 1.2em;
            color: #5a4a3a;
        }
        
        .contact-info a {
            color: #b19cd9;
            text-decoration: none;
        }
        
        .contact-info a:hover {
            text-decoration: underline;
        }
        
        footer {
            background: rgba(139, 125, 107, 0.1);
            padding: 40px 0;
            text-align: center;
            color: #8b7d6b;
            border-top: 1px solid rgba(139, 125, 107, 0.2);
        }
        
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 20px;
            }
            
            h1 {
                font-size: 2em;
            }
            
            .hero h2 {
                font-size: 2em;
            }
            
            .about-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            nav ul {
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div>
                    <h1>Ramya Gopinathan</h1>
                    <div class="subtitle">Portrait Artist</div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h2>Capturing Life Through Art</h2>
            <p>Specializing in beautiful portrait paintings with a gentle touch of pastel colors that bring out the soul and character of every subject.</p>
            <a href="#gallery" class="cta-button">View My Work</a>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <h2 class="section-title">Portrait Gallery</h2>
            <div class="gallery-grid">
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 1</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Family Portrait</div>
                        <div class="artwork-details">Pastel on Canvas • 24" x 18"</div>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 2</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Children's Portrait</div>
                        <div class="artwork-details">Soft Pastels • 20" x 16"</div>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 3</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Wedding Portrait</div>
                        <div class="artwork-details">Pastel on Paper • 30" x 24"</div>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 4</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Pet Portrait</div>
                        <div class="artwork-details">Colored Pastels • 16" x 12"</div>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 5</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Senior Portrait</div>
                        <div class="artwork-details">Soft Pastels • 22" x 18"</div>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-placeholder">Portrait Sample 6</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Couple's Portrait</div>
                        <div class="artwork-details">Pastel on Canvas • 28" x 22"</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About the Artist</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Hello, I'm Ramya Gopinathan, a passionate portrait artist who believes in capturing the essence and beauty of every individual through the gentle medium of pastels.</p>
                    
                    <p>My journey with art began with a love for soft, dreamy colors and the way they can bring warmth and life to a portrait. I specialize in creating intimate, heartfelt portraits that families treasure for generations.</p>
                    
                    <p>Each portrait is carefully crafted with attention to detail, using high-quality pastels to achieve that perfect balance of realism and artistic expression. Whether it's a family portrait, wedding memory, or beloved pet, I pour my heart into every piece.</p>
                </div>
                <div class="about-image">
                    Artist Photo Placeholder
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Commission Your Portrait</h2>
            <div class="contact-info">
                <p>I'd love to create a beautiful portrait for you and your loved ones. Each piece is custom-made with care and attention to detail.</p>
                <br>
                <p><strong>Email:</strong> <a href="mailto:ramya.art@email.com">ramya.art@email.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
                <br>
                <p>For commission inquiries, please include reference photos and your preferred size. I typically work in sizes ranging from 12"x16" to 30"x24".</p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Ramya Gopinathan. All rights reserved. | Capturing memories through the art of portraiture.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
            }
        });
    </script>
</body>
</html>` }} />
  );
}