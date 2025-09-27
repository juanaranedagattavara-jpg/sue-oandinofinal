/**
 * Sueño Andino Theme JavaScript
 *
 * @package Sueño_Andino
 * @since 1.0.0
 */

(function ($) {
  'use strict';

  // Document ready
  $(document).ready(function () {
    // Mobile menu toggle
    $('.mobile-menu-toggle').on('click', function (e) {
      e.preventDefault();
      $('.mobile-menu').toggleClass('active');
      $(this).toggleClass('active');
    });

    // Smooth scrolling for anchor links
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 80,
            },
            1000
          );
          return false;
        }
      }
    });

    // Form validation
    $('form').on('submit', function (e) {
      var isValid = true;
      var requiredFields = $(this).find('[required]');

      requiredFields.each(function () {
        if ($(this).val() === '') {
          $(this).addClass('error');
          isValid = false;
        } else {
          $(this).removeClass('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Por favor, completa todos los campos requeridos.');
      }
    });

    // Remove error class on input focus
    $('input, textarea').on('focus', function () {
      $(this).removeClass('error');
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Back to top button
    var backToTop = $(
      '<button class="back-to-top" aria-label="Volver arriba">↑</button>'
    );
    $('body').append(backToTop);

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        backToTop.addClass('show');
      } else {
        backToTop.removeClass('show');
      }
    });

    backToTop.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  });

  // Window load
  $(window).on('load', function () {
    // Remove loading class
    $('body').removeClass('loading');

    // Initialize animations
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    }
  });
})(jQuery);
