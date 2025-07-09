// Our Team Module JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize the team module
  initTeamModule();
  
  function initTeamModule() {
    const teamModules = document.querySelectorAll('.our-team-module');
    
    teamModules.forEach(module => {
      // Initialize animations
      initScrollAnimations(module);
      
      // Initialize social link analytics
      initSocialLinkTracking(module);
      
      // Initialize image lazy loading
      initImageLazyLoading(module);
      
      // Initialize accessibility features
      initAccessibilityFeatures(module);
    });
  }
  
  function initScrollAnimations(module) {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      return;
    }
    
    const cards = module.querySelectorAll('.team-member-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animationPlayState = 'paused';
      observer.observe(card);
    });
  }
  
  function initSocialLinkTracking(module) {
    const socialLinks = module.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Track social link clicks for analytics
        const platform = getSocialPlatform(this.href);
        const memberName = this.closest('.team-member-card')
          .querySelector('.member-name').textContent.trim();
        
        // HubSpot Analytics tracking
        if (typeof hsq !== 'undefined') {
          hsq.push(['trackEvent', {
            eventAction: 'Social Link Click',
            eventCategory: 'Team Module',
            eventLabel: `${platform} - ${memberName}`
          }]);
        }
        
        // Google Analytics tracking (if available)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'social_link_click', {
            'social_platform': platform,
            'team_member': memberName
          });
        }
      });
    });
  }
  
  function getSocialPlatform(href) {
    if (href.includes('linkedin.com')) return 'LinkedIn';
    if (href.includes('twitter.com') || href.includes('x.com')) return 'Twitter';
    if (href.includes('github.com')) return 'GitHub';
    if (href.startsWith('mailto:')) return 'Email';
    return 'Website';
  }
  
  function initImageLazyLoading(module) {
    // Enhanced lazy loading with placeholder fade-in
    const images = module.querySelectorAll('.member-image');
    
    images.forEach(img => {
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        img.addEventListener('load', function() {
          this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
          // Replace with placeholder if image fails to load
          const placeholder = this.closest('.team-member-card')
            .querySelector('.member-image-placeholder');
          if (placeholder) {
            this.style.display = 'none';
            placeholder.style.display = 'flex';
          }
        });
      }
    });
  }
  
  function initAccessibilityFeatures(module) {
    // Add keyboard navigation support
    const cards = module.querySelectorAll('.team-member-card');
    
    cards.forEach(card => {
      // Make cards focusable
      card.setAttribute('tabindex', '0');
      
      // Add ARIA labels
      const memberName = card.querySelector('.member-name').textContent.trim();
      const memberPosition = card.querySelector('.member-position');
      const ariaLabel = memberPosition ? 
        `${memberName}, ${memberPosition.textContent.trim()}` : 
        memberName;
      
      card.setAttribute('aria-label', ariaLabel);
      
      // Keyboard interaction
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Focus on first social link if available
          const firstSocialLink = this.querySelector('.social-link');
          if (firstSocialLink) {
            firstSocialLink.focus();
          }
        }
      });
    });
    
    // Improve social link accessibility
    const socialLinks = module.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      // Enhance aria-labels with member context
      const memberName = link.closest('.team-member-card')
        .querySelector('.member-name').textContent.trim();
      const platform = getSocialPlatform(link.href);
      
      link.setAttribute('aria-label', `${memberName}'s ${platform} profile`);
      
      // Add role if not present
      if (!link.getAttribute('role')) {
        link.setAttribute('role', 'button');
      }
    });
  }
  
  // Utility functions for responsive behavior
  function handleResponsiveLayout() {
    const teamGrids = document.querySelectorAll('.team-grid');
    
    teamGrids.forEach(grid => {
      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const width = entry.contentRect.width;
          updateGridLayout(grid, width);
        });
      });
      
      resizeObserver.observe(grid);
    });
  }
  
  function updateGridLayout(grid, width) {
    const desktopCols = grid.getAttribute('data-desktop-cols') || '3';
    const tabletCols = grid.getAttribute('data-tablet-cols') || '2';
    const mobileCols = grid.getAttribute('data-mobile-cols') || '1';
    
    let columns;
    
    if (width >= 1024) {
      columns = desktopCols;
    } else if (width >= 768) {
      columns = tabletCols;
    } else {
      columns = mobileCols;
    }
    
    // Apply dynamic column styling if needed
    if (width <= 480 && mobileCols === '2') {
      grid.style.gridTemplateColumns = '1fr';
    }
  }
  
  // Initialize responsive layout handling
  if (typeof ResizeObserver !== 'undefined') {
    handleResponsiveLayout();
  }
  
  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Add smooth scrolling behavior for anchor links
  const moduleAnchors = document.querySelectorAll('a[href^="#team"]');
  moduleAnchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
  
});

// Export functions for potential external use
window.TeamModule = {
  init: initTeamModule,
  trackSocialClick: function(platform, memberName) {
    // External API for tracking social clicks
    if (typeof hsq !== 'undefined') {
      hsq.push(['trackEvent', {
        eventAction: 'Social Link Click',
        eventCategory: 'Team Module',
        eventLabel: `${platform} - ${memberName}`
      }]);
    }
  }
};