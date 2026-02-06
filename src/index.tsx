import { Hono } from 'hono'

const app = new Hono()

// Main landing page - SNS Groups Redesign
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SNS Groups | We Are Design Thinkers!</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            sns: {
              primary: '#1e40af',
              secondary: '#7c3aed',
              accent: '#f59e0b',
              dark: '#0f172a',
              light: '#f8fafc'
            }
          }
        }
      }
    }
  </script>
  <style>
    html { scroll-behavior: smooth; }
    .gradient-text {
      background: linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #f59e0b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-gradient {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e40af 100%);
    }
    .pillar-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .scroll-animate {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }
    .scroll-animate.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .tab-btn.active {
      background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
      color: white;
    }
    .program-card:hover {
      transform: scale(1.02);
    }
    .quick-link:hover {
      transform: translateY(-4px);
    }
  </style>
</head>
<body class="font-sans bg-white text-gray-800">

  <!-- Announcement Banner - Agentic AI Bootcamp -->
  <div id="announcementBanner" class="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
      <div class="flex items-center gap-3 flex-1 justify-center">
        <span class="animate-pulse">🚀</span>
        <span class="text-white text-sm font-medium">
          <span class="hidden sm:inline">Upcoming:</span> <strong>Agentic AI Bootcamp</strong> - Build the Future of AI!
        </span>
        <a href="https://av.snsgroups.com" target="_blank" class="px-3 py-1 bg-white text-purple-700 rounded-full text-xs font-bold hover:bg-gray-100 transition-all">
          Register Now <i class="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
      <button onclick="closeBanner()" class="text-white/80 hover:text-white p-1 ml-2">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>

  <!-- Navigation -->
  <nav id="mainNav" class="fixed top-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span class="text-white font-bold text-lg">S</span>
          </div>
          <span class="font-bold text-xl text-gray-900">SNS Groups</span>
        </div>
        <div class="hidden lg:flex items-center gap-4">
          <!-- Academics Dropdown -->
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-1">
              Academics <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="p-2">
                <a href="#programs" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-graduation-cap mr-2 text-blue-600"></i>Programs Offered</a>
                <a href="#placements" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-briefcase mr-2 text-green-600"></i>Placements</a>
                <a href="#3c-model" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-circle-notch mr-2 text-purple-600"></i>3C Competency</a>
                <a href="#pillars" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-columns mr-2 text-amber-600"></i>Five Pillars</a>
              </div>
            </div>
          </div>

          <!-- Infrastructure Dropdown -->
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-1">
              Infrastructure <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="p-2">
                <a href="#institutions" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-building mr-2 text-blue-600"></i>Our Campuses</a>
                <a href="https://snsspine.in" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-dumbbell mr-2 text-purple-600"></i>SPINE Facilities</a>
                <a href="#ecosystem" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-bus mr-2 text-green-600"></i>Transport & Hostel</a>
              </div>
            </div>
          </div>

          <!-- Beyond Academics Dropdown -->
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-1">
              Beyond Academics <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="p-2">
                <a href="https://snsspine.in" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-futbol mr-2 text-green-600"></i>Sports & Clubs</a>
                <a href="https://snsihub.ai" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-rocket mr-2 text-pink-600"></i>Innovation Hub</a>
                <a href="#ecosystem" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-calendar-star mr-2 text-amber-600"></i>Events & Celebrations</a>
                <a href="https://snsalumni.in" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-trophy mr-2 text-blue-600"></i>Success Stories</a>
              </div>
            </div>
          </div>

          <!-- Meet Us Dropdown -->
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-1">
              Meet Us <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="p-2">
                <a href="#about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-info-circle mr-2 text-blue-600"></i>About Us</a>
                <a href="#leaders" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-users mr-2 text-purple-600"></i>Leadership</a>
                <a href="#contact" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-phone mr-2 text-green-600"></i>Contact Us</a>
                <a href="https://online.flippingbook.com/view/565156017/" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-file-alt mr-2 text-amber-600"></i>Mandatory Disclosure</a>
              </div>
            </div>
          </div>


        </div>
        <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-lg hover:bg-gray-100">
          <i class="fas fa-bars text-gray-600"></i>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden lg:hidden bg-white border-t">
      <div class="px-4 py-3 space-y-3">
        <a href="#about" class="block text-gray-600 hover:text-blue-600 py-2">About</a>
        <a href="#programs" class="block text-gray-600 hover:text-blue-600 py-2">Programs</a>
        <a href="#placements" class="block text-gray-600 hover:text-blue-600 py-2">Placements</a>
        <a href="#pillars" class="block text-gray-600 hover:text-blue-600 py-2">Five Pillars</a>
        <a href="#institutions" class="block text-gray-600 hover:text-blue-600 py-2">Institutions</a>
        <a href="#ecosystem" class="block text-gray-600 hover:text-blue-600 py-2">Ecosystem</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero-gradient min-h-screen flex items-center pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <i class="fas fa-robot text-amber-400"></i>
            <span class="text-sm font-medium">DT & AI-Powered Placement-Driven Campus | K-12 to PhD</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Are<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400">
              Design Thinkers!
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            India's first GenAI-Powered Design Thinking Institution (Patented). Building industry-ready innovators through the 3C Competency Model from Kindergarten to PhD.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#programs" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              <span>Explore Programs</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="#placements" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              <span>View Placements</span>
            </a>
          </div>
          
          <!-- 3P Framework -->
          <div class="mt-12 grid grid-cols-3 gap-4">
            <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <i class="fas fa-bullseye text-2xl text-amber-400 mb-2"></i>
              <div class="font-bold text-white">Purpose</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <i class="fas fa-cogs text-2xl text-purple-400 mb-2"></i>
              <div class="font-bold text-white">Process</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <i class="fas fa-users text-2xl text-blue-400 mb-2"></i>
              <div class="font-bold text-white">People</div>
            </div>
          </div>
        </div>
        
        <div class="relative hidden lg:block">
          <div class="animate-float">
            <div class="relative">
              <div class="w-80 h-80 mx-auto relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                <div class="absolute inset-8 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <i class="fas fa-graduation-cap text-4xl text-white"></i>
                    </div>
                    <div class="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <i class="fas fa-rocket text-4xl text-amber-400"></i>
                    </div>
                    <div class="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <i class="fas fa-brain text-4xl text-purple-400"></i>
                    </div>
                    <div class="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <i class="fas fa-heart text-4xl text-pink-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quick Stats Bar -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-amber-400">14K+</div>
          <div class="text-gray-300 text-sm">Students</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-purple-400">10</div>
          <div class="text-gray-300 text-sm">Institutions</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-blue-400">37K+</div>
          <div class="text-gray-300 text-sm">Alumni</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-green-400">2200+</div>
          <div class="text-gray-300 text-sm">Placements</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-pink-400">300+</div>
          <div class="text-gray-300 text-sm">Recruiters</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-cyan-400">₹19L</div>
          <div class="text-gray-300 text-sm">Max Package</div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">About SNS</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Know About Us</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          We aim to spark the curiosity of students and engage them effectively. This is where students turn path-breaking research into real-world solutions.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="scroll-animate p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <div class="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
            <i class="fas fa-award text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
          <p class="text-gray-600 leading-relaxed">
            Through design thinking, we focus on delivering quality education by providing an effective learning environment, nurturing true innovators.
          </p>
        </div>

        <div class="scroll-animate p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200" style="transition-delay: 0.1s">
          <div class="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
            <i class="fas fa-lightbulb text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
          <p class="text-gray-600 leading-relaxed">
            Not just engineers, we deliver entrepreneurs! Fostering creativity through design thinking to bring ideas into life.
          </p>
        </div>

        <div class="scroll-animate p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200" style="transition-delay: 0.2s">
          <div class="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center mb-6">
            <i class="fas fa-briefcase text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Placement Driven</h3>
          <p class="text-gray-600 leading-relaxed">
            96% placement rate with ₹21 LPA highest package. Industry-ready graduates powered by 3C Competency & Design Thinking from K-12 to PhD.
          </p>
        </div>
      </div>

      <!-- Vision Statement -->
      <div class="scroll-animate bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
        <div class="max-w-4xl mx-auto text-center">
          <blockquote class="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            "Redesigning Common Mind & Business Towards Excellence"
          </blockquote>
          <p class="text-gray-300 text-lg leading-relaxed">
            We started our journey in 1997 through Sri SNS Charitable Trust with a philanthropic outlook of serving society. Ranking among the top colleges in Coimbatore, we aim to become an internationally recognized institution.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3C Competency Circle Section -->
  <section id="3c-model" class="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 scroll-animate">
        <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
          <i class="fas fa-certificate text-amber-400 mr-2"></i>SNS Differentiator
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">The 3C Competency Circle</h2>
        <p class="text-gray-300 max-w-2xl mx-auto text-lg">
          Our proprietary framework for building industry-ready, AI-powered graduates from K-12 to PhD
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- 3C Visual Circle -->
        <div class="scroll-animate">
          <div class="relative w-80 h-80 mx-auto">
            <!-- Outer glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            
            <!-- Center circle -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 z-10">
                <div class="text-center">
                  <div class="text-4xl font-bold">3C</div>
                  <div class="text-xs opacity-80">Model</div>
                </div>
              </div>
            </div>
            
            <!-- Attitude Circle (Top) -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
              <div class="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 transform hover:scale-110 transition-all cursor-pointer group">
                <div class="text-center p-2">
                  <i class="fas fa-lightbulb text-xl mb-1 text-amber-300"></i>
                  <div class="text-xs font-bold leading-tight">ATTITUDE</div>
                  <div class="text-[9px] opacity-70 group-hover:opacity-100">Curiosity • Accountability</div>
                </div>
              </div>
            </div>
            
            <!-- Technical Skill Circle (Bottom Left) -->
            <div class="absolute bottom-4 left-4">
              <div class="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30 transform hover:scale-110 transition-all cursor-pointer group">
                <div class="text-center p-2">
                  <i class="fas fa-cogs text-xl mb-1 text-amber-300"></i>
                  <div class="text-xs font-bold leading-tight">TECHNICAL</div>
                  <div class="text-[9px] opacity-70 group-hover:opacity-100">Domain Expertise</div>
                </div>
              </div>
            </div>
            
            <!-- Logical & Business Skill Circle (Bottom Right) -->
            <div class="absolute bottom-4 right-4">
              <div class="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/30 transform hover:scale-110 transition-all cursor-pointer group">
                <div class="text-center p-2">
                  <i class="fas fa-chart-line text-xl mb-1 text-amber-300"></i>
                  <div class="text-xs font-bold leading-tight">LOGICAL</div>
                  <div class="text-[9px] opacity-70 group-hover:opacity-100">Business Acumen</div>
                </div>
              </div>
            </div>
            
            <!-- Connecting lines (SVG) -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <line x1="160" y1="100" x2="100" y2="220" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="5,5"/>
              <line x1="160" y1="100" x2="220" y2="220" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="5,5"/>
              <line x1="100" y1="220" x2="220" y2="220" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="5,5"/>
            </svg>
          </div>
        </div>

        <!-- 3C Description -->
        <div class="scroll-animate" style="transition-delay: 0.2s">
          <div class="space-y-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-lightbulb text-xl text-blue-400"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-2 text-blue-300">Attitude (Curiosity & Accountability)</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Fostering a growth mindset through design thinking. Students develop curiosity to explore, question, and take ownership of their learning journey.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-cogs text-xl text-purple-400"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-2 text-purple-300">Technical Skill</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Domain expertise powered by AI & emerging technologies. From GenAI to core engineering, students master cutting-edge technical competencies.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-chart-line text-xl text-green-400"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-2 text-green-300">Logical & Business Skill</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Critical thinking and business acumen for real-world success. Problem-solving, analytical reasoning, and entrepreneurial mindset development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <div class="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/10">
              <i class="fas fa-robot text-amber-400 mr-2"></i>AI-Powered Learning
            </div>
            <div class="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/10">
              <i class="fas fa-brain text-purple-400 mr-2"></i>Design Thinking
            </div>
            <div class="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/10">
              <i class="fas fa-graduation-cap text-blue-400 mr-2"></i>K-12 to PhD
            </div>
          </div>
        </div>
      </div>

      <!-- 3C Implementation Areas -->
      <div class="mt-16 grid md:grid-cols-4 gap-6">
        <div class="scroll-animate bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
          <i class="fas fa-chalkboard-teacher text-3xl text-blue-400 mb-3"></i>
          <h4 class="font-bold text-white">Academic Excellence</h4>
          <p class="text-gray-400 text-sm mt-2">3C integrated into curriculum</p>
        </div>
        <div class="scroll-animate bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10" style="transition-delay: 0.1s">
          <i class="fas fa-briefcase text-3xl text-green-400 mb-3"></i>
          <h4 class="font-bold text-white">Industry Readiness</h4>
          <p class="text-gray-400 text-sm mt-2">96% placement rate</p>
        </div>
        <div class="scroll-animate bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10" style="transition-delay: 0.2s">
          <i class="fas fa-rocket text-3xl text-purple-400 mb-3"></i>
          <h4 class="font-bold text-white">Entrepreneurship</h4>
          <p class="text-gray-400 text-sm mt-2">Startup-ready mindset</p>
        </div>
        <div class="scroll-animate bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10" style="transition-delay: 0.3s">
          <i class="fas fa-heart text-3xl text-pink-400 mb-3"></i>
          <h4 class="font-bold text-white">Lifelong Learning</h4>
          <p class="text-gray-400 text-sm mt-2">Continuous growth</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Programs Section -->
  <section id="programs" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 scroll-animate">
        <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">Programs Offered</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Courses & Programs</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Comprehensive programs across Engineering, Arts & Science, Health Sciences, and more.
        </p>
      </div>

      <!-- Program Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button class="tab-btn active px-6 py-3 rounded-full font-medium transition-all" data-tab="engineering">Engineering & Tech</button>
        <button class="tab-btn px-6 py-3 rounded-full font-medium bg-gray-200 hover:bg-gray-300 transition-all" data-tab="arts">Arts & Science</button>
        <button class="tab-btn px-6 py-3 rounded-full font-medium bg-gray-200 hover:bg-gray-300 transition-all" data-tab="health">Health Sciences</button>
        <button class="tab-btn px-6 py-3 rounded-full font-medium bg-gray-200 hover:bg-gray-300 transition-all" data-tab="education">Education</button>
      </div>

      <!-- Engineering Tab -->
      <div id="engineering-tab" class="tab-content">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <i class="fas fa-robot text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">AI & Data Science</h3>
                <span class="text-xs text-gray-500">B.E./B.Tech</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Artificial Intelligence & Data Science</li>
              <li>• Artificial Intelligence & Machine Learning</li>
              <li>• GenAI/Agentic AI Specialization *</li>
              <li>• Data & Cloud Engineering *</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.1s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <i class="fas fa-laptop-code text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Computer Science</h3>
                <span class="text-xs text-gray-500">B.E./B.Tech</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Computer Science and Engineering</li>
              <li>• Computer Science and Design</li>
              <li>• CSE (IOT & Cyber Security)</li>
              <li>• Information Technology</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.2s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <i class="fas fa-cogs text-xl text-amber-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Core Engineering</h3>
                <span class="text-xs text-gray-500">B.E./B.Tech</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Mechanical Engineering</li>
              <li>• Civil Engineering</li>
              <li>• Electrical & Electronics</li>
              <li>• Electronics & Communication</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.3s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <i class="fas fa-plane text-xl text-green-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Specialized Engineering</h3>
                <span class="text-xs text-gray-500">B.E./B.Tech</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Aerospace Engineering</li>
              <li>• Automobile Engineering</li>
              <li>• Mechatronics Engineering</li>
              <li>• Bio-Medical Engineering</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.4s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <i class="fas fa-seedling text-xl text-pink-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Agri & Food Tech</h3>
                <span class="text-xs text-gray-500">B.E./B.Tech</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Agricultural Engineering</li>
              <li>• Food Technology</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.5s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <i class="fas fa-user-tie text-xl text-indigo-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">PG Programs</h3>
                <span class="text-xs text-gray-500">M.E./M.Tech/MBA/MCA</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• MBA / MBA in Design Thinking</li>
              <li>• MCA</li>
              <li>• M.E./M.Tech (CSE, VLSI, Power Systems)</li>
              <li>• Ph.D Programs</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Arts & Science Tab -->
      <div id="arts-tab" class="tab-content hidden">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <i class="fas fa-code text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">B.Sc. Computer Science</h3>
                <span class="text-xs text-gray-500">UG Programs</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Full Stack Web Development</li>
              <li>• AI and Data Science</li>
              <li>• Data Analytics & Visualization</li>
              <li>• DevOps & Cloud</li>
              <li>• Cyber Security</li>
              <li>• Agentic AI / Generative AI *</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.1s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <i class="fas fa-calculator text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Commerce Programs</h3>
                <span class="text-xs text-gray-500">UG Programs</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• B.Com</li>
              <li>• B.Com Professional Accounting</li>
              <li>• B.Com Computer Applications</li>
              <li>• B.Com Digital Marketing</li>
              <li>• BBA / BBA (Computer Applications)</li>
              <li>• BCA</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.2s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <i class="fas fa-palette text-xl text-amber-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Specialized B.Sc.</h3>
                <span class="text-xs text-gray-500">UG Programs</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• B.Sc. Information Technology</li>
              <li>• B.Sc. Costume Design & Fashion</li>
              <li>• B.Sc. Psychology</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.3s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <i class="fas fa-graduation-cap text-xl text-green-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">PG Programs</h3>
                <span class="text-xs text-gray-500">Masters & Research</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• MBA / MCA</li>
              <li>• M.Sc. Computer Science</li>
              <li>• M.Sc. Mathematics</li>
              <li>• M.Com / M.Com (CA)</li>
              <li>• M.A. English Literature</li>
              <li>• Ph.D/M.Phil Programs</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Health Sciences Tab -->
      <div id="health-tab" class="tab-content hidden">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <i class="fas fa-pills text-xl text-red-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Pharmacy</h3>
                <span class="text-xs text-gray-500">Code: 794</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Bachelor of Pharmacy (B.Pharm)</li>
              <li>• Diploma in Pharmacy</li>
              <li>• M.Pharmacy (Pharmaceutics)</li>
              <li>• Doctor of Pharmacy (Pharm.D)</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.1s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <i class="fas fa-user-nurse text-xl text-pink-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Nursing</h3>
                <span class="text-xs text-gray-500">Code: 879</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• B.Sc. Nursing</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.2s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <i class="fas fa-walking text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Physiotherapy</h3>
                <span class="text-xs text-gray-500">Code: 864</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Bachelor of Physiotherapy (BPT)</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.3s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <i class="fas fa-heartbeat text-xl text-green-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Allied Health Sciences</h3>
                <span class="text-xs text-gray-500">B.Sc. Programs</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Operation Theatre & Anesthesia Tech</li>
              <li>• Cardio Pulmonary Perfusion Care</li>
              <li>• Cardiac Technology</li>
              <li>• Physician Assistant</li>
              <li>• Radiography & Imaging Tech</li>
              <li>• Optometry / Dialysis / Respiratory *</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Tab -->
      <div id="education-tab" class="tab-content hidden">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <i class="fas fa-child text-xl text-amber-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">SNS Academy (CBSE)</h3>
                <span class="text-xs text-gray-500">International School</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Kindergarten: Pre-KG, LKG, UKG</li>
              <li>• Primary Classes: Grade I - V</li>
              <li>• Middle Classes: Grade VI - VIII</li>
              <li>• Secondary: Grade IX - X</li>
              <li>• Higher Secondary: Grade XI - XII</li>
            </ul>
          </div>

          <div class="scroll-animate program-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all" style="transition-delay: 0.1s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <i class="fas fa-chalkboard-teacher text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">B.Ed Programs</h3>
                <span class="text-xs text-gray-500">College of Education</span>
              </div>
            </div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Tamil / English</li>
              <li>• Mathematics / History</li>
              <li>• Economics / Commerce</li>
              <li>• Biological Sciences</li>
              <li>• Computer Science</li>
              <li>• Social Science / Physical Science</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="text-center text-gray-500 text-sm mt-8">* Subject to approval</p>
    </div>
  </section>

  <!-- Placements Section -->
  <section id="placements" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">Career Success</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Placement Statistics</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Consistently delivering excellent placement records with top recruiters from across industries.
        </p>
      </div>

      <!-- Placement Stats Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div class="scroll-animate bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
          <i class="fas fa-trophy text-4xl text-amber-400 mb-4"></i>
          <div class="text-4xl font-bold mb-2">₹21 LPA</div>
          <div class="text-blue-100">Highest Package</div>
          <div class="text-xs text-blue-200 mt-2">SNSCT 2024</div>
        </div>

        <div class="scroll-animate bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center" style="transition-delay: 0.1s">
          <i class="fas fa-chart-line text-4xl text-amber-400 mb-4"></i>
          <div class="text-4xl font-bold mb-2">96%</div>
          <div class="text-purple-100">Placement Rate</div>
          <div class="text-xs text-purple-200 mt-2">SNSCT Record</div>
        </div>

        <div class="scroll-animate bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white text-center" style="transition-delay: 0.2s">
          <i class="fas fa-building text-4xl text-amber-400 mb-4"></i>
          <div class="text-4xl font-bold mb-2">454+</div>
          <div class="text-green-100">Recruiters</div>
          <div class="text-xs text-green-200 mt-2">Companies Visited</div>
        </div>

        <div class="scroll-animate bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white text-center" style="transition-delay: 0.3s">
          <i class="fas fa-rupee-sign text-4xl text-white mb-4"></i>
          <div class="text-4xl font-bold mb-2">₹7.8 LPA</div>
          <div class="text-amber-100">Median Package</div>
          <div class="text-xs text-amber-200 mt-2">SNSCE 2024</div>
        </div>
      </div>

      <!-- Top Recruiters -->
      <div class="scroll-animate bg-gray-50 rounded-2xl p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6 text-center">Top Recruiters</h3>
        <div class="flex flex-wrap justify-center gap-6 items-center">
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">TCS</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Infosys</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Wipro</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Cognizant</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Accenture</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Deloitte</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">EY</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Capgemini</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">HCL</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Tech Mahindra</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">L&T</div>
          <div class="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700">Zoho</div>
        </div>
        <div class="text-center mt-6">
          <a href="https://iipc.snsgroups.com" target="_blank" class="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            View Complete Placement Details <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>

      <!-- Career Tracks -->
      <div class="mt-12 grid md:grid-cols-4 gap-6">
        <div class="scroll-animate text-center p-6 bg-blue-50 rounded-2xl">
          <i class="fas fa-laptop-code text-3xl text-blue-600 mb-3"></i>
          <h4 class="font-bold text-gray-900">IT & Software</h4>
          <p class="text-sm text-gray-600 mt-2">Top MNCs & Product Companies</p>
        </div>
        <div class="scroll-animate text-center p-6 bg-purple-50 rounded-2xl" style="transition-delay: 0.1s">
          <i class="fas fa-briefcase text-3xl text-purple-600 mb-3"></i>
          <h4 class="font-bold text-gray-900">Core Engineering</h4>
          <p class="text-sm text-gray-600 mt-2">Manufacturing & Design</p>
        </div>
        <div class="scroll-animate text-center p-6 bg-green-50 rounded-2xl" style="transition-delay: 0.2s">
          <i class="fas fa-rocket text-3xl text-green-600 mb-3"></i>
          <h4 class="font-bold text-gray-900">Startups</h4>
          <p class="text-sm text-gray-600 mt-2">Entrepreneurship Track</p>
        </div>
        <div class="scroll-animate text-center p-6 bg-amber-50 rounded-2xl" style="transition-delay: 0.3s">
          <i class="fas fa-graduation-cap text-3xl text-amber-600 mb-3"></i>
          <h4 class="font-bold text-gray-900">Higher Studies</h4>
          <p class="text-sm text-gray-600 mt-2">MS/MBA Abroad</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Five Pillars Section -->
  <section id="pillars" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">Our Framework</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Five Pillars of Excellence</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Educational space that provides a unique lifestyle through our integrated learning framework.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="scroll-animate pillar-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
            <i class="fas fa-chalkboard-teacher text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Center for Learning & Teaching</h3>
          <p class="text-gray-600 text-sm">Design Thinking based Academic Learning with faculty development and technology-enhanced education.</p>
        </div>

        <div class="scroll-animate pillar-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300" style="transition-delay: 0.1s">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
            <i class="fas fa-paint-brush text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Center for Creativity</h3>
          <p class="text-gray-600 text-sm">Hands-on experience solving key industrial problems through latest technologies and innovation frameworks.</p>
        </div>

        <div class="scroll-animate pillar-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300" style="transition-delay: 0.2s">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
            <i class="fas fa-user-graduate text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Skill & Career Development</h3>
          <p class="text-gray-600 text-sm">Building life skills (Social, Emotional, Cognitive) through various clubs and employability programs.</p>
        </div>

        <div class="scroll-animate pillar-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300" style="transition-delay: 0.3s">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
            <i class="fas fa-handshake text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Industry Institute Partnership</h3>
          <p class="text-gray-600 text-sm">Connecting with top industries for sponsored R&D, training programs, and business development.</p>
        </div>

        <div class="scroll-animate pillar-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300" style="transition-delay: 0.4s">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
            <i class="fas fa-heart text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Social Responsibility Initiatives</h3>
          <p class="text-gray-600 text-sm">Giving back to society through SANTA 365, Neighborhood School Program, and Talent Hunt initiatives.</p>
        </div>

        <div class="scroll-animate bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white" style="transition-delay: 0.5s">
          <h3 class="text-xl font-bold mb-4">Youth Leadership Program</h3>
          <p class="text-gray-300 text-sm mb-4">A special path for students to build a platform based on their talents and become qualified leaders.</p>
          <a href="https://snsspine.in" target="_blank" class="inline-flex items-center text-amber-400 text-sm font-medium">
            Explore SPINE <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Institutions Section -->
  <section id="institutions" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">Our Institutions</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Excellence Across Streams</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          10 institutions offering comprehensive programs from pre-school to advanced research.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-300 transition-all">
          <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <i class="fas fa-microchip text-xl text-blue-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS College of Technology</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 2726 | Autonomous</p>
          <p class="text-gray-600 text-sm">NAAC A++ | Engineering Excellence</p>
          <a href="https://snsct.org" target="_blank" class="mt-3 inline-flex items-center text-blue-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-300 transition-all" style="transition-delay: 0.1s">
          <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <i class="fas fa-cogs text-xl text-purple-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS College of Engineering</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 2734</p>
          <p class="text-gray-600 text-sm">NBA Accredited Programs</p>
          <a href="https://snsce.ac.in" target="_blank" class="mt-3 inline-flex items-center text-purple-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-amber-300 transition-all" style="transition-delay: 0.2s">
          <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
            <i class="fas fa-book-open text-xl text-amber-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">Dr.SNS Rajalakshmi College</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 326 | Autonomous</p>
          <p class="text-gray-600 text-sm">Arts, Science & Management</p>
          <a href="http://drsnsrcas.ac.in" target="_blank" class="mt-3 inline-flex items-center text-amber-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-green-300 transition-all" style="transition-delay: 0.3s">
          <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <i class="fas fa-pills text-xl text-green-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS College of Pharmacy</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 794</p>
          <p class="text-gray-600 text-sm">Pharmacy & Health Sciences</p>
          <a href="https://snscphs.org" target="_blank" class="mt-3 inline-flex items-center text-green-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-pink-300 transition-all" style="transition-delay: 0.4s">
          <div class="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
            <i class="fas fa-user-nurse text-xl text-pink-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS College of Nursing</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 879</p>
          <p class="text-gray-600 text-sm">B.Sc. Nursing Programs</p>
          <a href="https://snscnursing.org" target="_blank" class="mt-3 inline-flex items-center text-pink-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-cyan-300 transition-all" style="transition-delay: 0.5s">
          <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
            <i class="fas fa-walking text-xl text-cyan-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS College of Physiotherapy</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 864</p>
          <p class="text-gray-600 text-sm">BPT Programs</p>
          <a href="https://snscphysio.org" target="_blank" class="mt-3 inline-flex items-center text-cyan-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-indigo-300 transition-all" style="transition-delay: 0.6s">
          <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
            <i class="fas fa-heartbeat text-xl text-indigo-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS Allied Health Sciences</h3>
          <p class="text-gray-600 text-sm">Allied Health Programs</p>
          <a href="https://snscahs.org" target="_blank" class="mt-3 inline-flex items-center text-indigo-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>

        <div class="scroll-animate bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-red-300 transition-all" style="transition-delay: 0.7s">
          <div class="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
            <i class="fas fa-user-tie text-xl text-red-600"></i>
          </div>
          <h3 class="font-bold text-gray-900 mb-1">SNS B-SPINE</h3>
          <p class="text-xs text-gray-500 mb-2">Code: 2726</p>
          <p class="text-gray-600 text-sm">Experiential B-School</p>
          <a href="https://snsbschool.in" target="_blank" class="mt-3 inline-flex items-center text-red-600 text-sm font-medium">
            Visit <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SNS Ecosystem Section -->
  <section id="ecosystem" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mb-4">SNS Ecosystem</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Links & Portals</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Access our various platforms for alumni, internships, learning resources, and innovation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Alumni -->
        <a href="https://snsalumni.in" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <i class="fas fa-user-friends text-2xl text-blue-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">Alumni Network</h3>
              <p class="text-gray-500 text-sm">snsalumni.in</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Connect with 37K+ alumni worldwide. Networking, mentorship, and career opportunities.</p>
          <div class="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            Visit Portal <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>

        <!-- Internships -->
        <a href="https://main.snsgroups.com/internship-jobs/" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group" style="transition-delay: 0.1s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              <i class="fas fa-briefcase text-2xl text-purple-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">Internships & Jobs</h3>
              <p class="text-gray-500 text-sm">Career Opportunities</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Find internships and job opportunities with top companies. Work-while-learn programs available.</p>
          <div class="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-700">
            Explore Opportunities <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>

        <!-- Learning Community -->
        <a href="https://snscourseware.org" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all group" style="transition-delay: 0.2s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <i class="fas fa-book-reader text-2xl text-emerald-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">Learning Community</h3>
              <p class="text-gray-500 text-sm">snscourseware.org</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Access course materials, resources, and online learning content. Continuous learning platform.</p>
          <div class="mt-4 flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
            Start Learning <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>

        <!-- SPINE -->
        <a href="https://snsspine.in" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group" style="transition-delay: 0.3s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <i class="fas fa-star text-2xl text-amber-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">SPINE</h3>
              <p class="text-gray-500 text-sm">snsspine.in</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Student Activity Center. Youth leadership, clubs, events, and extracurricular activities hub.</p>
          <div class="mt-4 flex items-center text-amber-600 font-medium group-hover:text-amber-700">
            Join Activities <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>

        <!-- Innovation Hub -->
        <a href="https://snsihub.ai" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group" style="transition-delay: 0.4s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
              <i class="fas fa-rocket text-2xl text-rose-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">SNS iHub</h3>
              <p class="text-gray-500 text-sm">snsihub.ai</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Innovation & Incubation Hub. Startup support, AI/GenAI initiatives, and entrepreneurship ecosystem.</p>
          <div class="mt-4 flex items-center text-rose-600 font-medium group-hover:text-rose-700">
            Innovate Now <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>

        <!-- IIPC Placements -->
        <a href="https://iipc.snsgroups.com" target="_blank" class="scroll-animate quick-link bg-white rounded-2xl p-6 border border-gray-200 hover:border-slate-400 hover:shadow-lg transition-all group" style="transition-delay: 0.5s">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <i class="fas fa-handshake text-2xl text-slate-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">IIPC Portal</h3>
              <p class="text-gray-500 text-sm">iipc.snsgroups.com</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Industry partnerships, placement records, and corporate connections. Training & development programs.</p>
          <div class="mt-4 flex items-center text-slate-600 font-medium group-hover:text-slate-700">
            View Placements <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </a>
      </div>

      <!-- Featured: Agentic AI Bootcamp -->
      <div class="mt-12 scroll-animate">
        <a href="https://av.snsgroups.com" target="_blank" class="block bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 rounded-2xl p-8 text-white relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24"></div>
          <div class="relative flex flex-col md:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <i class="fas fa-robot text-4xl"></i>
              </div>
            </div>
            <div class="flex-1 text-center md:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                <span class="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                UPCOMING EVENT
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-2">Agentic AI Bootcamp</h3>
              <p class="text-white/80 text-lg mb-4">Master the future of AI - Build autonomous agents, GenAI applications & more!</p>
              <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm"><i class="fas fa-calendar mr-2"></i>Register Now</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm"><i class="fas fa-certificate mr-2"></i>Certification</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm"><i class="fas fa-laptop-code mr-2"></i>Hands-on Projects</span>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="px-6 py-3 bg-white text-purple-700 rounded-xl font-bold group-hover:scale-105 transition-transform shadow-lg">
                Register <i class="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Leaders Section -->
  <section id="leaders" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 scroll-animate">
        <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">Leadership</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Supporters of Future Gen!</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="scroll-animate group">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 aspect-[3/4]">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <i class="fas fa-user text-5xl text-white"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div class="text-amber-400 text-sm font-medium mb-1">Design Thinker</div>
              <h3 class="text-xl font-bold text-white">Deiva Thiru Dr. S.N. Subbramanian</h3>
              <p class="text-gray-300 text-sm">Founder Chairman, SNS Group</p>
            </div>
          </div>
        </div>

        <div class="scroll-animate group" style="transition-delay: 0.1s">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 aspect-[3/4]">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <i class="fas fa-user text-5xl text-white"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div class="text-amber-400 text-sm font-medium mb-1">Design Thinker</div>
              <h3 class="text-xl font-bold text-white">Dr. S. Rajalakshmi</h3>
              <p class="text-gray-300 text-sm">Chairman / Correspondent, SNS Group</p>
            </div>
          </div>
        </div>

        <div class="scroll-animate group" style="transition-delay: 0.2s">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-blue-100 aspect-[3/4]">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full bg-gradient-to-br from-amber-600 to-blue-600 flex items-center justify-center">
                <i class="fas fa-user text-5xl text-white"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div class="text-amber-400 text-sm font-medium mb-1">Design Thinker</div>
              <h3 class="text-xl font-bold text-white">Nalin SNS</h3>
              <p class="text-gray-300 text-sm">Technical Director, SNS Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="scroll-animate">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Build an Entrepreneurial Mindset through<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">Design Thinking Framework</span>
        </h2>
        <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join SNS Institutions and be part of a community that transforms ideas into reality.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#programs" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
            <i class="fas fa-graduation-cap"></i>
            <span>Explore Programs</span>
          </a>
          <a href="tel:9003655855" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
            <i class="fas fa-phone"></i>
            <span>Call: 90036 55855</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating Action Buttons -->
  <div class="fixed right-4 bottom-24 z-50 flex flex-col gap-3">
    <!-- WhatsApp -->
    <a href="https://wa.me/919566423456" target="_blank" 
       class="group relative w-12 h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:bg-green-600 transition-all"
       title="Chat on WhatsApp">
      <i class="fab fa-whatsapp text-white text-xl"></i>
      <span class="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp
      </span>
    </a>
    <!-- Brochure -->
    <a href="https://online.flippingbook.com/view/565156017/" target="_blank" 
       class="group relative w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
       title="SNS Brochure">
      <i class="fas fa-book-open text-blue-600"></i>
      <span class="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Brochure
      </span>
    </a>
    <!-- Newsletter -->
    <a href="https://online.flippingbook.com/view/565061853/" target="_blank" 
       class="group relative w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
       title="SNS Newsletter">
      <i class="fas fa-newspaper text-purple-600"></i>
      <span class="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Newsletter
      </span>
    </a>
  </div>

  <!-- Footer -->
  <footer class="bg-slate-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span class="text-white font-bold text-lg">S</span>
            </div>
            <span class="font-bold text-xl">SNS Groups</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Sri SNS Charitable Trust - Serving society since 1997 in Education, Technology, and Social Welfare.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#programs" class="hover:text-white transition-colors">Programs</a></li>
            <li><a href="#placements" class="hover:text-white transition-colors">Placements</a></li>
            <li><a href="https://online.flippingbook.com/view/565156017/" target="_blank" class="hover:text-white transition-colors"><i class="fas fa-book mr-1"></i>Brochure</a></li>
            <li><a href="https://online.flippingbook.com/view/565061853/" target="_blank" class="hover:text-white transition-colors"><i class="fas fa-newspaper mr-1"></i>Newsletter</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-4">Ecosystem</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="https://av.snsgroups.com" target="_blank" class="hover:text-white transition-colors text-amber-400"><i class="fas fa-robot mr-1"></i>Agentic AI Bootcamp</a></li>
            <li><a href="https://snsihub.ai" target="_blank" class="hover:text-white transition-colors">SNS iHub</a></li>
            <li><a href="https://snsspine.in" target="_blank" class="hover:text-white transition-colors">SPINE</a></li>
            <li><a href="https://snscourseware.org" target="_blank" class="hover:text-white transition-colors">Learning Community</a></li>
            <li><a href="https://snsalumni.in" target="_blank" class="hover:text-white transition-colors">Alumni Network</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-4">Contact</h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt mt-1 text-blue-400"></i>
              <span>536, Thudiyalur - Saravanampatti Road,<br>Coimbatore - 641 029, Tamil Nadu</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-phone text-green-400"></i>
              <span>95664 23456</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-headset text-amber-400"></i>
              <span>Admissions: 90036 55855</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-envelope text-pink-400"></i>
              <span>director.iipc.sns@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">© 2024 SNS Groups. All rights reserved.</p>
        <p class="text-gray-500 text-sm mt-2 md:mt-0">
          <i class="fas fa-heart text-red-500"></i> Built with Design Thinking
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Announcement Banner
    function closeBanner() {
      const banner = document.getElementById('announcementBanner');
      const nav = document.getElementById('mainNav');
      banner.style.transform = 'translateY(-100%)';
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.style.display = 'none';
        nav.style.top = '0';
      }, 300);
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Scroll Animation
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    scrollAnimateElements.forEach(el => observer.observe(el));

    // Program Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // Update button styles
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.classList.add('bg-gray-200', 'hover:bg-gray-300');
        });
        btn.classList.add('active');
        btn.classList.remove('bg-gray-200', 'hover:bg-gray-300');
        
        // Show/hide content
        tabContents.forEach(content => {
          content.classList.add('hidden');
        });
        document.getElementById(tab + '-tab').classList.remove('hidden');
        
        // Re-trigger animations
        document.getElementById(tab + '-tab').querySelectorAll('.scroll-animate').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
      } else {
        nav.classList.remove('shadow-md');
      }
    });
  </script>
</body>
</html>
  `)
})

// API endpoint for site info
app.get('/api/info', (c) => {
  return c.json({
    name: 'SNS Groups',
    tagline: 'We Are Design Thinkers!',
    framework: '3P Culture - Purpose, Process, People',
    established: 1997,
    location: 'Coimbatore, Tamil Nadu, India',
    stats: {
      students: '14K+',
      institutions: 10,
      alumni: '37K+',
      placements: '2200+',
      recruiters: '300+',
      maxPackage: '₹19L'
    },
    ecosystem: {
      alumni: 'https://snsalumni.in',
      internships: 'https://main.snsgroups.com/internship-jobs/',
      learning: 'https://snscourseware.org',
      spine: 'https://snsspine.in',
      ihub: 'https://snsihub.ai',
      iipc: 'https://iipc.snsgroups.com'
    }
  })
})

export default app
