$(document).ready(function(){
    // Initialize AOS with enhanced settings
    AOS.init({
        duration: 1000,
        once: true,
        disable: 'mobile',
        offset: 100,
        easing: 'ease-in-out',
        delay: 100
    });

    // Dynamic navbar background with gradient
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar').css('background', 'linear-gradient(135deg, rgba(46, 204, 113, 0.95), rgba(52, 152, 219, 0.95))');
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar').css('background', 'rgba(26, 26, 26, 0.95)');
        }

        // Enhanced scroll-up button with animation
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // Dynamic active menu highlighting with smooth transition
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar .menu li a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
                // Add pulse animation to active link
                link.style.animation = 'pulse 1s infinite';
            } else {
                link.style.animation = 'none';
            }
        });

        // Enhanced skill bars animation with progress tracking
        function animateSkillBars() {
            $('.skills .line').each(function() {
                const percentageText = $(this).prev('.info').find('span:last-child').text();
                const percentage = percentageText;
                
                // Only animate if not already animated
                if (!$(this).data('animated')) {
                    $(this).css({
                        'width': percentage,
                        'transition': 'width 1.5s ease-in-out'
                    });
                    $(this).data('animated', true);
                }
            });
        }

        // Trigger skill bar animation only when skills section is in view
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillsSectionTop = skillsSection.offsetTop;
            const skillsSectionHeight = skillsSection.clientHeight;
            const viewportTop = $(window).scrollTop();
            const viewportHeight = $(window).height();

            // Adjust offset as needed
            const offset = 200;

            if (skillsSectionTop < viewportTop + viewportHeight - offset && skillsSectionTop + skillsSectionHeight > viewportTop + offset) {
                animateSkillBars();
            }
        }
    });

    // Scroll up button click event with faster animation
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // Trigger skill bar animation initially on document ready if in view
    animateSkillBars();

    // Enhanced smooth scroll with dynamic offset and easing
    $('.navbar .menu li a, .scroll-up-btn').click(function(e){
        e.preventDefault();
        const target = $(this).attr('href');
        
        // Close mobile menu with animation
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

        // Dynamic scroll with offset and easing
        const targetPosition = $(target).offset().top - 70;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Update active state with animation
        $('.navbar .menu li a').removeClass('active');
        $(this).addClass('active');
    });

    // Enhanced menu button animation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        
        // Add slide animation to menu items
        $('.navbar .menu li').each(function(index) {
            $(this).css({
                'animation': `slideIn 0.5s ease forwards ${index * 0.1}s`
            });
        });
    });

    // Typewriter animation
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    // Add blinking cursor animation to all lines
    [line1, line2, line3].forEach(line => {
        line.style.animation = `${line.style.animation}, blink 0.7s step-end infinite`;
    });

    // Enhanced project carousel with better animations
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Add hover effects to project cards
    $('.teams .card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-10px)',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.2)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
            });
        }
    );

    // Add hover effects to contact cards
    $('.contact-card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.1)'
            });
            $(this).find('.icon').css({
                'transform': 'scale(1.1)',
                'background': 'linear-gradient(135deg, #2ecc71, #3498db)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.05)'
            });
            $(this).find('.icon').css({
                'transform': 'scale(1)',
                'background': '#2ecc71'
            });
        }
    );
    // Add hover effects to social items
    $('.social-item').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
            });
            $(this).find('i').css({
                'transform': 'scale(1.2)',
                'color': '#2ecc71'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 2px 5px rgba(0,0,0,0.05)'
            });
            $(this).find('i').css({
                'transform': 'scale(1)',
                'color': '#fff'});
        }
    );

    // Add hover effects to social links in footer
    $('.social a').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-3px)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.2)'});
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'});
        }
    );
}); 