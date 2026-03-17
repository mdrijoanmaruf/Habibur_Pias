<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quia commodo omnis m - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        secondary: '#F8FAFC'
                    }
                }
            }
        }
    </script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes particle-float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(10px); }
            50% { transform: translateY(-20px) translateX(-10px); }
            75% { transform: translateY(-10px) translateX(-5px); }
        }
        .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -50;
            overflow: hidden;
            background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);
        }
        .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            animation: pulse-glow 4s ease-in-out infinite;
        }
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            animation: particle-float 6s ease-in-out infinite;
        }

        /* Custom Light Scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: linear-gradient(135deg, rgba(241, 245, 249, 0.8), rgba(226, 232, 240, 0.6));
            border-radius: 8px;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg,
                rgba(6, 182, 212, 0.8),
                rgba(20, 184, 166, 0.8),
                rgba(6, 182, 212, 0.6)
            );
            border-radius: 8px;
            border: 2px solid rgba(241, 245, 249, 0.8);
            box-shadow:
                0 2px 4px rgba(6, 182, 212, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg,
                rgba(6, 182, 212, 1),
                rgba(20, 184, 166, 1),
                rgba(6, 182, 212, 0.8)
            );
            box-shadow:
                0 4px 8px rgba(6, 182, 212, 0.4),
                0 0 12px rgba(6, 182, 212, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
        }

        ::-webkit-scrollbar-thumb:active {
            background: linear-gradient(135deg,
                rgba(4, 120, 180, 1),
                rgba(15, 150, 135, 1),
                rgba(4, 120, 180, 0.9)
            );
            box-shadow:
                0 2px 6px rgba(6, 182, 212, 0.6),
                0 0 16px rgba(6, 182, 212, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        ::-webkit-scrollbar-corner {
            background: linear-gradient(135deg, rgba(241, 245, 249, 0.8), rgba(226, 232, 240, 0.6));
            border-radius: 0 0 8px 0;
        }

        /* Firefox scrollbar styling */
        * {
            scrollbar-width: thin;
            scrollbar-color: rgba(6, 182, 212, 0.8) rgba(241, 245, 249, 0.8);
        }

        /* Hide scrollbar buttons for cleaner look */
        ::-webkit-scrollbar-button {
            display: none;
        }
    </style>
</head>
<body class="bg-white text-gray-900 relative">
    <!-- Animated Background -->
    <div class="animated-bg">
        <!-- Gradient Orbs -->
        <div class="gradient-orb" style="top: 25%; left: 25%; width: 384px; height: 384px; background: linear-gradient(90deg, rgba(6, 182, 212, 0.15), rgba(20, 184, 166, 0.15)); animation-delay: 0s;"></div>
        <div class="gradient-orb" style="bottom: 25%; right: 25%; width: 320px; height: 320px; background: linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15)); animation-delay: 1s;"></div>
        <div class="gradient-orb" style="top: 50%; left: 50%; width: 288px; height: 288px; background: linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1)); animation-delay: 2s; transform: translate(-50%, -50%);"></div>
        <div class="gradient-orb" style="top: 10%; right: 10%; width: 256px; height: 256px; background: linear-gradient(90deg, rgba(147, 51, 234, 0.12), rgba(6, 182, 212, 0.12)); animation-delay: 3s;"></div>
        <div class="gradient-orb" style="bottom: 10%; left: 10%; width: 224px; height: 224px; background: linear-gradient(90deg, rgba(20, 184, 166, 0.12), rgba(59, 130, 246, 0.12)); animation-delay: 4s;"></div>

        <!-- Floating Particles -->
        <div id="particles-container"></div>
    </div>

    <script>
        // Generate floating particles
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.animationDuration = (3 + Math.random() * 3) + 's';
                container.appendChild(particle);
            }
        }

        // Initialize particles when DOM is loaded
        document.addEventListener('DOMContentLoaded', createParticles);
    </script>
    <!-- Navigation -->
    <nav id="navbar" class="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 z-50">
        <div class="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div class="flex justify-between items-center">
                <div class="font-bold text-lg sm:text-xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Quia commodo omnis m</div>
                <div class="hidden md:flex space-x-2">
                    <a href="#home" class="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5">Home</a>
                    <a href="#about" class="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5">About</a>
                    <a href="#experience" class="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5">Experience</a>
                    <a href="#projects" class="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5">Projects</a>
                    <a href="#contact" class="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5">Contact</a>
                </div>
                <button id="mobile-menu-btn" class="md:hidden p-3 rounded-lg bg-cyan-50 border border-cyan-200 transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-300 hover:scale-105 active:scale-95">
                    <i class="fas fa-bars text-gray-900 text-lg"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-white z-40 transform -translate-x-full transition-transform duration-300 md:hidden">
        <div class="flex flex-col items-center justify-center h-full space-y-6 px-6">
            <button id="mobile-menu-close" class="absolute top-6 right-6 p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-gray-900 hover:bg-cyan-100 transition-all duration-300">
                <i class="fas fa-times text-xl"></i>
            </button>
            <a href="#home" class="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center">Home</a>
            <a href="#about" class="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center">About</a>
            <a href="#experience" class="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center">Experience</a>
            <a href="#projects" class="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center">Projects</a>
            <a href="#contact" class="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center">Contact</a>
        </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center pt-24 sm:pt-20 relative">
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <!-- Left Side - Intro -->
                <div class="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <div class="space-y-3 sm:space-y-4">
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">Quia commodo omnis m</span>
                        </h1>
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
                            Unde nulla incidunt
                        </h2>
                        <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Duis voluptas dolor 
                        </p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
                        <a href="#projects" class="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105">
                            <i class="fas fa-code mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                            <span>View My Work</span>
                            <i class="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                        <a href="#contact" class="group border-2 border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105">
                            <i class="fas fa-envelope mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                            <span>Get In Touch</span>
                            <i class="fas fa-paper-plane ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>
                    
                    <div class="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8">
                        <a href="https://www.taxusykibut.me.uk" target="_blank" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.qimoqevata.tv" target="_blank" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.bucobibokuwosig.biz" target="_blank" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>
                </div>

                <!-- Right Side - Image -->
                
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 sm:py-20 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About Me</h2>
                <div class="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4"></div>
                <p class="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">Get to know me better - my journey, skills, and what drives my passion for technology</p>
            </div>

            <div class="max-w-7xl mx-auto">
                <!-- Main About Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <!-- Profile Card -->
                    <div class="lg:col-span-4">
                        <div class="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/90 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                            <div class="relative mb-4 sm:mb-6">
                                
                                <div class="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl sm:text-6xl text-white font-bold shadow-xl shadow-cyan-500/30">
                                    Q
                                    <div class="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
                                        <i class="fas fa-check text-white text-xs"></i>
                                    </div>
                                </div>
                                
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Quia commodo omnis m</h3>
                            <p class="text-cyan-600 font-semibold mb-4 text-sm sm:text-base">Unde nulla incidunt</p>
                            <div class="flex justify-center space-x-3 sm:space-x-4">
                                <a href="https://www.taxusykibut.me.uk" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                    <i class="fab fa-github text-sm sm:text-base"></i>
                                </a>
                                <a href="https://www.qimoqevata.tv" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                    <i class="fab fa-linkedin text-sm sm:text-base"></i>
                                </a>
                                <a href="https://www.bucobibokuwosig.biz" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                    <i class="fas fa-globe text-sm sm:text-base"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Bio Card -->
                    <div class="lg:col-span-8">
                        <div class="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                            <div class="flex items-center mb-4 sm:mb-6">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                                    <i class="fas fa-user text-white text-lg sm:text-xl"></i>
                                </div>
                                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900">Who I Am</h3>
                            </div>
                            <p class="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                Duis voluptas dolor 
                            </p>

                            <!-- Contact Info Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                
                                <div class="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                            <i class="fas fa-map-marker-alt text-cyan-600 text-sm sm:text-base"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm text-cyan-600 font-semibold">Location</div>
                                            <div class="text-gray-900 font-medium text-sm sm:text-base">Corporis aliqua Vol</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                            <i class="fas fa-envelope text-cyan-600 text-sm sm:text-base"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm text-cyan-600 font-semibold">Email</div>
                                            <div class="text-gray-900 font-medium text-sm sm:text-base">ferewoh@mailinator.com</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                            <i class="fas fa-phone text-cyan-600 text-sm sm:text-base"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm text-cyan-600 font-semibold">Phone</div>
                                            <div class="text-gray-900 font-medium text-sm sm:text-base">+1 (964) 631-7257</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills Section -->
                <div class="bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/70 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div class="flex items-center mb-6 sm:mb-8">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                            <i class="fas fa-code text-white text-lg sm:text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900">Technical Skills</h3>
                            <p class="text-gray-600 mt-1 text-sm sm:text-base">Technologies and tools I work with</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-3 sm:gap-4">
                        
                            <span class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20" style="animation-delay: 0ms">
                                AWS
                            </span>
                        
                            <span class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20" style="animation-delay: 100ms">
                                Python
                            </span>
                        
                            <span class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20" style="animation-delay: 200ms">
                                Node.js
                            </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-16 sm:py-20 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-10 right-20 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Experience</h2>
                <div class="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4"></div>
                <p class="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">My professional journey and the valuable experiences that have shaped my career</p>
            </div>

            <div class="max-w-6xl mx-auto">
                <!-- Timeline Container -->
                <div class="relative">
                    <!-- Timeline Line -->
                    <div class="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-700 opacity-40"></div>

                    <div class="space-y-8 sm:space-y-12">
                        
                            <div class="relative group" style="animation-delay: 0ms">
                                <!-- Timeline Dot -->
                                <div class="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-all duration-500 z-10"></div>

                                <!-- Experience Card -->
                                <div class="ml-8 sm:ml-16 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                                    <!-- Header -->
                                    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                                        <div class="flex-1">
                                            <div class="flex items-start mb-3">
                                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-cyan-500/20 flex-shrink-0">
                                                    <i class="fas fa-briefcase text-white text-sm sm:text-lg"></i>
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 break-words">Sit mollit praesent</h3>
                                                    <h4 class="text-base sm:text-xl text-cyan-600 font-semibold break-words">Possimus omnis vel </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center text-gray-600 bg-gray-100 px-3 sm:px-4 py-2 rounded-xl border border-gray-200 mt-2 lg:mt-0 flex-shrink-0">
                                            <i class="fas fa-calendar-alt mr-2 text-cyan-600 text-sm"></i>
                                            <span class="font-medium text-sm sm:text-base whitespace-nowrap">2026-03 - 2004-08</span>
                                        </div>
                                    </div>

                                    <!-- Description -->
                                    <p class="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                                        Expedita eos tempore
                                    </p>

                                    <!-- Technologies -->
                                    <div>
                                        <h5 class="text-cyan-600 font-semibold mb-3 flex items-center text-sm sm:text-base">
                                            <i class="fas fa-code mr-2"></i>
                                            Technologies Used
                                        </h5>
                                        <div class="flex flex-wrap gap-2 sm:gap-3">
                                            
                                                <span class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20 whitespace-nowrap">
                                                    Quaerat quas officii
                                                </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="relative group" style="animation-delay: 200ms">
                                <!-- Timeline Dot -->
                                <div class="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-all duration-500 z-10"></div>

                                <!-- Experience Card -->
                                <div class="ml-8 sm:ml-16 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                                    <!-- Header -->
                                    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                                        <div class="flex-1">
                                            <div class="flex items-start mb-3">
                                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-cyan-500/20 flex-shrink-0">
                                                    <i class="fas fa-briefcase text-white text-sm sm:text-lg"></i>
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 break-words">Et animi at corrupt</h3>
                                                    <h4 class="text-base sm:text-xl text-cyan-600 font-semibold break-words">Deserunt et officia </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center text-gray-600 bg-gray-100 px-3 sm:px-4 py-2 rounded-xl border border-gray-200 mt-2 lg:mt-0 flex-shrink-0">
                                            <i class="fas fa-calendar-alt mr-2 text-cyan-600 text-sm"></i>
                                            <span class="font-medium text-sm sm:text-base whitespace-nowrap">1977-08 - 1971-02</span>
                                        </div>
                                    </div>

                                    <!-- Description -->
                                    <p class="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                                        Quo id voluptas eos 
                                    </p>

                                    <!-- Technologies -->
                                    <div>
                                        <h5 class="text-cyan-600 font-semibold mb-3 flex items-center text-sm sm:text-base">
                                            <i class="fas fa-code mr-2"></i>
                                            Technologies Used
                                        </h5>
                                        <div class="flex flex-wrap gap-2 sm:gap-3">
                                            
                                                <span class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20 whitespace-nowrap">
                                                    Eu sit do et autem d
                                                </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 sm:py-20 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-20 left-20 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Featured Projects</h2>
                <div class="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4"></div>
                <p class="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">A showcase of my recent work and creative solutions</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-20 bg-gray-50/50 backdrop-blur-[1px] relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
                <div class="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4"></div>
                <p class="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">Ready to start your next project? Let's create something amazing together</p>
            </div>

            <div class="max-w-6xl mx-auto">
                <!-- CTA Message -->
                <div class="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 text-center transition-all duration-500 hover:bg-white/90 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30">
                        <i class="fas fa-envelope text-white text-lg sm:text-2xl"></i>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Let's Work Together</h3>
                    <p class="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6">
                        I'm always excited to take on new challenges and collaborate on innovative projects.
                        Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a href="mailto:ferewoh@mailinator.com" class="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105">
                            <i class="fas fa-paper-plane mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                            <span>Send Message</span>
                            <i class="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                        <a href="#projects" class="group border-2 border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105">
                            <i class="fas fa-code mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                            <span>View My Work</span>
                        </a>
                    </div>
                </div>

                <!-- Contact Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    
                        <div class="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-envelope text-white text-lg sm:text-2xl"></i>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Email Me</h3>
                            <p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Drop me a line anytime</p>
                            <a href="mailto:ferewoh@mailinator.com" class="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105 text-sm sm:text-base break-all">
                                ferewoh@mailinator.com
                            </a>
                        </div>
                    
                    
                        <div class="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-phone text-white text-lg sm:text-2xl"></i>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Call Me</h3>
                            <p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Let's have a quick chat</p>
                            <a href="tel:+1 (964) 631-7257" class="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105 text-sm sm:text-base">
                                +1 (964) 631-7257
                            </a>
                        </div>
                    
                    
                        <div class="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-map-marker-alt text-white text-lg sm:text-2xl"></i>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Location</h3>
                            <p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Find me here</p>
                            <div class="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base break-words max-w-full">
                                Ullam voluptas atque
                            </div>
                        </div>
                    
                </div>

                <!-- Connect With Me Section -->
                <div class="bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center transition-all duration-500 hover:bg-white/70 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div class="mb-6 sm:mb-8">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl shadow-cyan-500/30">
                            <i class="fas fa-handshake text-white text-2xl sm:text-3xl"></i>
                        </div>
                        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Let's Connect</h3>
                        <p class="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                            Feel free to reach out through any of the channels below!
                        </p>
                    </div>

                    <!-- Social Links Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        
                        <a href="https://www.taxusykibut.me.uk" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-200 hover:to-gray-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="relative z-10">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fab fa-github text-lg sm:text-2xl text-gray-700 group-hover:text-cyan-600 transition-colors duration-300"></i>
                                </div>
                                <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">GitHub</h4>
                                <p class="text-gray-600 text-xs sm:text-sm">Check out my code</p>
                            </div>
                        </a>
                        
                        
                        <a href="https://www.qimoqevata.tv" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="relative z-10">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fab fa-linkedin text-lg sm:text-2xl text-blue-700 group-hover:text-cyan-600 transition-colors duration-300"></i>
                                </div>
                                <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">LinkedIn</h4>
                                <p class="text-gray-600 text-xs sm:text-sm">Professional network</p>
                            </div>
                        </a>
                        
                        
                        <a href="https://www.bucobibokuwosig.biz" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-200 hover:to-purple-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="relative z-10">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-globe text-lg sm:text-2xl text-purple-700 group-hover:text-cyan-600 transition-colors duration-300"></i>
                                </div>
                                <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Website</h4>
                                <p class="text-gray-600 text-xs sm:text-sm">Visit my site</p>
                            </div>
                        </a>
                        
                    </div>

                    <!-- Additional Contact Options -->
                    <div class="border-t border-gray-300 pt-6 sm:pt-8">
                        <p class="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-lg">
                            Prefer direct contact?
                        </p>
                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a href="mailto:ferewoh@mailinator.com" class="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base">
                                <i class="fas fa-envelope mr-2 sm:mr-3 text-sm sm:text-lg"></i>
                                <span>Email Me</span>
                                <i class="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                            </a>
                            
                            <a href="tel:+1 (964) 631-7257" class="group inline-flex items-center border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base">
                                <i class="fas fa-phone mr-2 sm:mr-3 text-sm sm:text-lg"></i>
                                <span>Call Me</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="relative bg-white/90 backdrop-blur-xl border-t border-gray-200 mt-16 sm:mt-20 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
        </div>

        <div class="relative z-10 py-12 sm:py-16">
            <div class="container mx-auto px-4 sm:px-6">
                <!-- Main Footer Content -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 mb-8 sm:mb-12">
                    <!-- Brand Section -->
                    <div class="sm:col-span-2 lg:col-span-2">
                        <div class="flex items-center mb-4 sm:mb-6">
                            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-cyan-500/30">
                                <i class="fas fa-code text-white text-lg sm:text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Quia commodo omnis m</h3>
                                <p class="text-cyan-600 font-medium text-sm sm:text-base">Unde nulla incidunt</p>
                            </div>
                        </div>
                        <p class="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-md mb-4 sm:mb-6">
                            Passionate about creating innovative solutions and bringing ideas to life through code.
                            Let's build something amazing together!
                        </p>
                        <div class="flex gap-3 sm:gap-4">
                            
                            <a href="https://www.taxusykibut.me.uk" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                <i class="fab fa-github text-sm sm:text-base"></i>
                            </a>
                            
                            
                            <a href="https://www.qimoqevata.tv" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                <i class="fab fa-linkedin text-sm sm:text-base"></i>
                            </a>
                            
                            
                            <a href="https://www.bucobibokuwosig.biz" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110">
                                <i class="fas fa-globe text-sm sm:text-base"></i>
                            </a>
                            
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
                        <ul class="space-y-2 sm:space-y-3">
                            <li><a href="#home" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"><i class="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>Home</a></li>
                            <li><a href="#about" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"><i class="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>About</a></li>
                            <li><a href="#experience" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"><i class="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>Experience</a></li>
                            <li><a href="#projects" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"><i class="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>Projects</a></li>
                            <li><a href="#contact" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"><i class="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>Contact</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h4>
                        <ul class="space-y-3 sm:space-y-4">
                            
                            <li class="flex items-center">
                                <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                    <i class="fas fa-envelope text-cyan-600 text-xs sm:text-sm"></i>
                                </div>
                                <a href="mailto:ferewoh@mailinator.com" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-xs sm:text-sm break-all">
                                    ferewoh@mailinator.com
                                </a>
                            </li>
                            
                            
                            <li class="flex items-center">
                                <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                    <i class="fas fa-phone text-cyan-600 text-xs sm:text-sm"></i>
                                </div>
                                <a href="tel:+1 (964) 631-7257" class="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-xs sm:text-sm">
                                    +1 (964) 631-7257
                                </a>
                            </li>
                            
                            
                            <li class="flex items-start">
                                <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                                    <i class="fas fa-map-marker-alt text-cyan-600 text-xs sm:text-sm"></i>
                                </div>
                                <span class="text-gray-600 text-xs sm:text-sm break-words">
                                    Ullam voluptas atque
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <!-- Bottom Section -->
                <div class="border-t border-gray-300 pt-6 sm:pt-8">
                    <div class="flex flex-col lg:flex-row justify-between items-center">
                        <div class="text-gray-600 text-xs sm:text-sm mb-4 lg:mb-0 text-center lg:text-left">
                            © 2026 Quia commodo omnis m. All rights reserved.
                            <span class="hidden lg:inline mx-2">|</span>
                            <span class="block lg:inline mt-1 lg:mt-0">Developed by <a href="https://rijoan.com" target="_blank" class="text-cyan-600 hover:text-cyan-700 transition-colors duration-300">Md Rijoan Maruf</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenuLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('-translate-x-full');
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-x-full');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>