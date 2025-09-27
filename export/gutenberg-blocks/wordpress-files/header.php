<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#0E5E6F">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                <div class="logo-icon">SA</div>
                <span class="site-title">Sueño Andino</span>
            </a>
            
            <nav class="main-navigation">
                <ul class="nav-menu">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#servicios">Servicios</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#equipo">Nosotros</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>#contacto">Contacto</a></li>
                    <li><a href="<?php echo esc_url(home_url('/blog')); ?>">Blog</a></li>
                </ul>
                <a href="<?php echo esc_url(home_url('/')); ?>#guia" class="btn btn-secondary">Descarga Guía Gratuita</a>
            </nav>
            
            <button class="mobile-menu-toggle" aria-label="Abrir menú">☰</button>
        </div>
    </div>
</header>