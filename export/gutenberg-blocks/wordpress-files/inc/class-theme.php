<?php
/**
 * Sueño Andino Theme Class
 *
 * @package Sueño_Andino
 * @since 1.0.0
 */

class Sueño_Andino_Theme {
    
    /**
     * Theme version
     */
    const VERSION = '1.0.0';
    
    /**
     * Theme instance
     */
    private static $instance = null;
    
    /**
     * Get theme instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        add_action('after_setup_theme', array($this, 'setup'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('init', array($this, 'init'));
    }
    
    /**
     * Theme setup
     */
    public function setup() {
        // Add theme support
        add_theme_support('post-thumbnails');
        add_theme_support('title-tag');
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));
        add_theme_support('custom-logo');
        add_theme_support('wp-block-styles');
        add_theme_support('align-wide');
        
        // Register navigation menus
        register_nav_menus(array(
            'primary' => __('Menú Principal', 'sueño-andino'),
            'footer' => __('Menú Footer', 'sueño-andino'),
        ));
    }
    
    /**
     * Enqueue scripts and styles
     */
    public function enqueue_scripts() {
        // Theme stylesheet
        wp_enqueue_style(
            'sueño-andino-style',
            get_stylesheet_uri(),
            array(),
            self::VERSION
        );
        
        // Google Fonts
        wp_enqueue_style(
            'sueño-andino-fonts',
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
            array(),
            null
        );
        
        // Theme JavaScript
        wp_enqueue_script(
            'sueño-andino-script',
            get_template_directory_uri() . '/js/theme.js',
            array(),
            self::VERSION,
            true
        );
    }
    
    /**
     * Initialize theme
     */
    public function init() {
        // Register custom post types
        $this->register_post_types();
        
        // Register widget areas
        $this->register_widget_areas();
    }
    
    /**
     * Register custom post types
     */
    private function register_post_types() {
        // Register team members post type
        register_post_type('team_member', array(
            'labels' => array(
                'name' => __('Miembros del Equipo', 'sueño-andino'),
                'singular_name' => __('Miembro del Equipo', 'sueño-andino'),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-groups',
        ));
        
        // Register projects post type
        register_post_type('project', array(
            'labels' => array(
                'name' => __('Proyectos', 'sueño-andino'),
                'singular_name' => __('Proyecto', 'sueño-andino'),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-portfolio',
        ));
    }
    
    /**
     * Register widget areas
     */
    private function register_widget_areas() {
        register_sidebar(array(
            'name' => __('Sidebar Principal', 'sueño-andino'),
            'id' => 'sidebar-1',
            'description' => __('Widgets para la sidebar principal', 'sueño-andino'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
    }
}

// Initialize theme
Sueño_Andino_Theme::get_instance();
