<?php get_header(); ?>

<main>
    <!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}},"color":{"background":"#F5F6F7"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group alignfull has-background" style="background-color:#F5F6F7;padding-top:80px;padding-bottom:80px">
        <!-- wp:group {"align":"center","style":{"spacing":{"padding":{"top":"48px","right":"48px","bottom":"48px","left":"48px"}},"color":{"background":"#ffffff"},"border":{"radius":"16px"}},"layout":{"type":"constrained","contentSize":"600px"}} -->
        <div class="wp-block-group aligncenter has-background" style="border-radius:16px;background-color:#ffffff;padding-top:48px;padding-right:48px;padding-bottom:48px;padding-left:48px">
            <!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"6rem","fontWeight":"700"}},"textColor":"sa-primary"} -->
            <h1 class="wp-block-heading has-text-align-center has-sa-primary-color has-text-color" style="font-size:6rem;font-weight:700">404</h1>
            <!-- /wp:heading -->

            <!-- wp:heading {"textAlign":"center","level":2,"style":{"typography":{"fontSize":"2rem","fontWeight":"600"}},"textColor":"sa-ink"} -->
            <h2 class="wp-block-heading has-text-align-center has-sa-ink-color has-text-color" style="font-size:2rem;font-weight:600">Página no encontrada</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.6"}},"textColor":"sa-ink","opacity":80} -->
            <p class="has-text-align-center has-sa-ink-color has-text-color" style="opacity:0.8;font-size:1.125rem;line-height:1.6">Lo sentimos, no pudimos encontrar la página que buscas.</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"32px"}}}} -->
            <div class="wp-block-buttons" style="margin-top:32px">
                <!-- wp:button {"style":{"color":{"background":"#0E5E6F","text":"#ffffff"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"24px","right":"24px"}}}} -->
                <div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="/" style="border-radius:8px;color:#ffffff;background-color:#0E5E6F;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px">Volver al inicio</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</main>

<?php get_footer(); ?>
