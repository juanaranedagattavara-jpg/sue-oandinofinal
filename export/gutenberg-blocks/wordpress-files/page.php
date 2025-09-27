<?php get_header(); ?>

<main>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article>
            <?php if (!is_front_page()) : ?>
                <header>
                    <h1><?php the_title(); ?></h1>
                </header>
            <?php endif; ?>
            
            <div class="page-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
