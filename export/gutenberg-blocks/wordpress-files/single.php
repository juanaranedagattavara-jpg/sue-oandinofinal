<?php get_header(); ?>

<main>
    <article>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <header>
                <h1><?php the_title(); ?></h1>
                <div class="post-meta">
                    <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                </div>
            </header>
            
            <div class="post-content">
                <?php the_content(); ?>
            </div>
        <?php endwhile; endif; ?>
    </article>
</main>

<?php get_footer(); ?>
