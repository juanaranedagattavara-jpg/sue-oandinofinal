<?php get_header(); ?>

<main>
    <header class="page-header">
        <h1 class="page-title">
            <?php
            if (is_category()) {
                single_cat_title();
            } elseif (is_tag()) {
                single_tag_title();
            } elseif (is_author()) {
                printf(esc_html__('Author: %s', 'sueño-andino'), '<span class="vcard">' . get_the_author() . '</span>');
            } elseif (is_date()) {
                if (is_year()) {
                    printf(esc_html__('Year: %s', 'sueño-andino'), get_the_date('Y'));
                } elseif (is_month()) {
                    printf(esc_html__('Month: %s', 'sueño-andino'), get_the_date('F Y'));
                } elseif (is_day()) {
                    printf(esc_html__('Day: %s', 'sueño-andino'), get_the_date());
                }
            } else {
                esc_html_e('Archives', 'sueño-andino');
            }
            ?>
        </h1>
    </header>

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="<?php the_permalink(); ?>" rel="bookmark">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                </header>

                <div class="entry-summary">
                    <?php the_excerpt(); ?>
                </div>
            </article>
        <?php endwhile; ?>

        <?php the_posts_navigation(); ?>

    <?php else : ?>
        <p><?php esc_html_e('Sorry, no posts matched your criteria.', 'sueño-andino'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
