<?php
/**
 * Sueño Andino Theme Functions
 */

// Registrar estilos del tema
function sueno_andino_styles() {
    wp_enqueue_style('sueno-andino-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('inter-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
}
add_action('wp_enqueue_scripts', 'sueno_andino_styles');

// Registrar colores personalizados
function sueno_andino_custom_colors() {
    add_theme_support('editor-color-palette', array(
        array(
            'name' => 'SA Primary',
            'slug' => 'sa-primary',
            'color' => '#0E5E6F',
        ),
        array(
            'name' => 'SA Accent',
            'slug' => 'sa-accent',
            'color' => '#7FB069',
        ),
        array(
            'name' => 'SA Sand',
            'slug' => 'sa-sand',
            'color' => '#D9C8B4',
        ),
        array(
            'name' => 'SA Ink',
            'slug' => 'sa-ink',
            'color' => '#1C1C1E',
        ),
        array(
            'name' => 'SA Cloud',
            'slug' => 'sa-cloud',
            'color' => '#F5F6F7',
        ),
    ));
}
add_action('after_setup_theme', 'sueno_andino_custom_colors');

// Meta tags personalizados
function sueno_andino_meta_tags() {
    echo '<meta name="theme-color" content="#0E5E6F">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">';
}
add_action('wp_head', 'sueno_andino_meta_tags');

// Soporte para características del tema
function sueno_andino_theme_support() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'sueno_andino_theme_support');
?>
