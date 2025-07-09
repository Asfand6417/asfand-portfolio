# Our Team Module

A comprehensive HubSpot module for displaying team members with professional styling, responsive design, and interactive features.

## Features

### Core Functionality
- **Team Member Profiles**: Display name, position, profile image, and bio
- **Social Media Integration**: LinkedIn, Twitter, GitHub, Email, and Website links
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Hover Effects**: Smooth animations and transitions for better user interaction
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### Customization Options
- **Layout Control**: Configurable columns for different screen sizes (1-4 columns)
- **Color Theming**: Customizable background, text, and accent colors
- **Animation**: Smooth scroll-triggered animations with reduced motion support
- **Image Handling**: Automatic fallback for missing profile images

### Technical Features
- **Performance Optimized**: Lazy loading images and debounced scroll events
- **Analytics Integration**: Built-in tracking for HubSpot and Google Analytics
- **Cross-browser Compatible**: Works across all modern browsers
- **Print Friendly**: Optimized styles for print media

## File Structure

```
hubspot-modules/our-team/
├── fields.json          # HubSpot module field definitions
├── module.html          # HTML template with HubL markup
├── module.css           # Comprehensive styling with responsive design
├── module.js            # Interactive functionality and analytics
└── README.md            # This documentation
```

## Installation

### For HubSpot CMS
1. Copy the `our-team` folder to your HubSpot Design Manager
2. Upload each file to the appropriate module directory
3. The module will be available in the content editor

### For Next.js/React (as implemented)
The React/Next.js components are available in:
- `components/team/TeamCard.tsx` - Individual team member card component
- `components/team/Team.tsx` - Main team section component
- `data/content/team.ts` - Team member data structure
- `pages/team.tsx` - Dedicated team page

## Usage

### HubSpot Module Fields

#### Basic Settings
- **Section Title**: Main heading for the team section (default: "Meet Our Team")
- **Team Members**: Repeating group for team member information

#### Team Member Fields
- **Name**: Full name (required)
- **Position/Role**: Job title or role (required)
- **Profile Image**: Team member photo (recommended: 400x400px)
- **Bio/Description**: Rich text description of background and expertise
- **Social Links**: Optional LinkedIn, Twitter, GitHub, Email, and Website URLs

#### Layout Options
- **Desktop Columns**: 2, 3, or 4 columns (default: 3)
- **Tablet Columns**: 1, 2, or 3 columns (default: 2)
- **Mobile Columns**: 1 or 2 columns (default: 1)

#### Styling Options
- **Background Color**: Section background (default: white)
- **Card Background**: Individual card background (default: light gray)
- **Text Color**: Primary text color (default: dark gray)
- **Accent Color**: Links and highlights (default: blue)

### Example HubL Usage

```html
<!-- Basic implementation -->
{% module "team_module" path="/our-team" %}

<!-- With custom settings -->
{% module "team_module" 
   path="/our-team"
   title="Our Amazing Team"
   layout_options.columns_desktop="4"
   styling_options.accent_color="#ff6b6b" %}
```

### CSS Customization

The module includes CSS custom properties for easy theming:

```css
.our-team-module {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333333;
  --card-background: #ffffff;
  --border-radius: 16px;
  --transition-speed: 0.3s;
}
```

### JavaScript Integration

Access module functionality programmatically:

```javascript
// Initialize module
TeamModule.init();

// Track social media clicks
TeamModule.trackSocialClick('LinkedIn', 'John Doe');
```

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Android Chrome 60+
- **Graceful Degradation**: Basic functionality on older browsers

## Performance

- **Lazy Loading**: Images load only when visible
- **Optimized Animations**: CSS transforms for smooth performance
- **Minimal JavaScript**: ~7KB compressed
- **CSS Size**: ~6KB compressed

## Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic markup
- **Reduced Motion**: Respects user motion preferences
- **Color Contrast**: High contrast text and backgrounds
- **Focus Indicators**: Clear focus states for interactive elements

## Customization Examples

### Corporate Theme
```css
.our-team-module {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --border-radius: 8px;
}
```

### Creative Agency Theme
```css
.our-team-module {
  --primary-color: #e74c3c;
  --secondary-color: #c0392b;
  --accent-color: #f39c12;
  --border-radius: 20px;
}
```

### Tech Startup Theme
```css
.our-team-module {
  --primary-color: #9b59b6;
  --secondary-color: #8e44ad;
  --accent-color: #1abc9c;
  --border-radius: 12px;
}
```

## Integration Notes

### HubSpot CMS
- Module ID: 12345 (update in fields.json)
- Compatible with Landing Pages, Website Pages, and Blog Posts
- Requires HubSpot Professional or Enterprise

### Analytics Integration
- Automatic event tracking for social link clicks
- Compatible with HubSpot Analytics and Google Analytics
- Custom event names for easy reporting

### SEO Considerations
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Schema.org markup ready

## Troubleshooting

### Common Issues
1. **Images not loading**: Check image URLs and permissions
2. **Layout breaks**: Verify CSS grid support in target browsers
3. **Animations not working**: Check for reduced motion preferences

### Debug Mode
Enable debug mode by adding `?debug=true` to the page URL for detailed console logging.

## Contributing

When making modifications:
1. Test across all supported browsers
2. Verify accessibility with screen readers
3. Check responsive design on multiple devices
4. Validate HTML and CSS
5. Test with real content and edge cases

## License

This module is provided as-is for use in HubSpot CMS and compatible platforms. Modify as needed for your specific requirements.

## Support

For technical support or feature requests, please contact the development team or create an issue in the project repository.